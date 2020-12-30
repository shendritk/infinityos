import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addFolder,
  addFolderPartTwo,
  removeFolder,
  removeFolderPartTwo,
} from "../actions/foldersActions";
import { addFile, removeFile } from "../actions/filesActions";
import { addUser, addUserPassword } from "../actions/usersActions";
import CancelIcon from "@material-ui/icons/Close";
import Draggable from "react-draggable";
import commandsHelp, { commandsInfo } from "../utils/commandsHelp";
import useStyles from "../styles/TerminalStyles";

function Terminal(props) {
  const inputRef = useRef();
  const { closeTerminal, currentUser = "Guest" } = props;
  const classes = useStyles(props);
  const [content, setContent] = useState([]);
  const [command, setCommand] = useState("");
  const [stack, setStack] = useState(["Home"]);

  const folders = useSelector((state) => state.folders);
  const allUsers = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const str = content.join("\n");
    inputRef.current.value = `${str}\n${defaultContent}`;
    setCommand("");

    // Auto scroll to bottom
    inputRef.current.scrollTop = inputRef.current.scrollHeight;
  }, [content]);

  useEffect(() => {
    inputRef.current.scrollTop = inputRef.current.scrollHeight;
  }, [command]);

  useEffect(() => {
    setContent([...content, defaultContent, ""]);
  }, [stack]);

  let defaultContent = `${currentUser.toLowerCase()}@infinityOS:~/${stack.join(
    "/"
  )}$  `;

  const lastStackItem = folders[stack[stack.length - 1]];

  const checkFolder = (name) => {
    for (const folder in folders) {
      if (folder === name) return true;
    }
    return false;
  };

  const handleLsCommand = (lastStackItem) => {
    let s = "";
    for (const key of lastStackItem.folders) {
      s = `${s}\n${key}`;
    }
    for (const key of lastStackItem.files) {
      s = `${s}\n${key}`;
    }

    const newCommand = getNewContent(`${s.trim()}\n`);
    return newCommand;
  };

  const handleMkdirCommand = (command) => {
    const splitCommand = command.trim().split("mkdir");
    const folderName = splitCommand[1].trim();

    dispatch(addFolder(folderName, stack[stack.length - 1]));
    dispatch(addFolderPartTwo(folderName));

    const newContent = getNewContent(" ");
    return newContent;
  };

  const handleRmdirCommand = (command, folders) => {
    const s = command.trim().split(" ");
    const directory = s[1];

    if (s.length === 2) {
      if (!folders[stack[stack.length - 1]].folders.includes(directory)) {
        return getNewContent(
          `Failed to remove '${directory}'. No such file or directory\n`
        );
      } else if (
        folders[directory.trim()].folders.length !== 0 ||
        folders[directory.trim()].files.length !== 0
      ) {
        return getNewContent(`'${directory}' is not an empty folder.\n`);
      } else {
        dispatch(removeFolder(directory));
        return getNewContent("");
      }
    } else {
      return getNewContent(`'${command}' is not a recognizable command.\n`);
    }
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      e.preventDefault();
      parseCommand();
    } else {
      setCommand(`${command}${e.key}`);
    }
  };

  const getNewContent = (message) => {
    return [...content, `${defaultContent}${command}`, message];
  };

  const handleBackSpace = (e) => {
    if (e.keyCode === 8 || e.which === 8) {
      setCommand(command.slice(0, command.length - 1));
    }
  };

  const handleCdCommand = () => {
    const splitCommand = command.trim().split("cd");
    let path = splitCommand[1].trim();

    if (path.startsWith("/")) {
      path = path.slice(1);
    }

    const paths = path.split("/");
    let tempStack = [...stack];
    let shouldContinue = true;

    for (const p of paths) {
      if (folders[tempStack[tempStack.length - 1]].folders.includes(p)) {
        tempStack.push(p);
      } else {
        shouldContinue = false;
      }
    }

    if (!shouldContinue) {
      setContent([
        ...content,
        `${defaultContent}${command}`,
        "The system cannot find the specified path.\n",
      ]);
      return;
    }
    setStack(tempStack);
  };

  const handleRmCommand = () => {
    const s = command.split(" ");

    if (s.length === 3) {
      const option = s[1].trim();
      const directory = s[2].trim();
      if (option === "-r" || option === "-rf") {
        if (
          !folders[stack[stack.length - 1]].folders.includes(directory) &&
          !folders[stack[stack.length - 1]].files.includes(directory)
        ) {
          setContent([
            ...content,
            `${defaultContent}${command}`,
            `Failed to remove '${directory}'. No such file or directory\n`,
          ]);
        } else {
          dispatch(removeFolder(directory));
          dispatch(removeFile(directory, stack[stack.length - 1]));
          setContent([...content, `${defaultContent}${command}`, ""]);
        }
      }
    } else {
      setContent([
        ...content,
        defaultContent,
        `'${command}': is not a recognizable command.\n`,
      ]);
    }
  };

  const handleTouchCommand = () => {
    const s = command.trim().split(" ");
    if (s.length === 2 && s[0] === "touch") {
      const name = s[1];
      dispatch(addFile(name, stack[stack.length - 1]));
      setContent([...content, `${defaultContent}${command}`, ""]);
    } else {
      setContent([
        ...content,
        `${defaultContent}${command}`,
        `'${command}': is not a recognizable command.\n`,
      ]);
    }
  };

  const handleMvCommand = () => {
    const s = command.trim().split(" ");

    if (s[0] !== "mv") {
      setContent([
        ...content,
        `${defaultContent}${command}`,
        `'${command}' is not a recognizable command.\n`,
      ]);
      return;
    }

    if (s.length < 3) {
      setContent([
        ...content,
        `${defaultContent}${command}`,
        `'${command}' is not a recognizable command.\n`,
      ]);
      return;
    }

    const files = s.slice(1, s.length - 1);
    const destination = s[s.length - 1].trim();

    if (destination.startsWith("/")) {
      // not a subdirectory
    } else {
      // a subdirectory - check if it exists
      if (!folders[stack[stack.length - 1]].folders.includes(destination)) {
        setContent([
          ...content,
          `${defaultContent}${command}`,
          `'${destination}'. No such file or directory\n`,
        ]);
        return;
      }
    }

    let shouldContinue = true;
    for (const file of files) {
      const conditionOne = folders[stack[stack.length - 1]].folders.includes(
        file
      );
      const conditionTwo = folders[stack[stack.length - 1]].files.includes(
        file
      );
      if (!(conditionOne || conditionTwo)) {
        shouldContinue = false;
      }
    }

    if (!shouldContinue) {
      setContent([
        ...content,
        `${defaultContent}${command}`,
        `No such file or directory exists\n`,
      ]);
      return;
    }

    for (const file of files) {
      if (checkFolder(file)) {
        dispatch(removeFolderPartTwo(file));
        dispatch(addFolder(file, destination));
      } else {
        dispatch(removeFile(file.trim(), stack[stack.length - 1]));
        dispatch(addFile(file.trim(), destination));
      }
    }

    setContent([...content, `${defaultContent}${command}`, ""]);
  };

  const handleCpCommand = () => {
    const s = command.trim().split(" ");

    if (s[0] !== "cp") {
      setContent([
        ...content,
        `${defaultContent}${command}`,
        `'${command}' is not a recognizable command.\n`,
      ]);
      return;
    }

    if (s.length < 3) {
      setContent([
        ...content,
        `${defaultContent}${command}`,
        `'${command}' is not a recognizable command.\n`,
      ]);
      return;
    }

    const files = s.slice(1, s.length - 1);
    const destination = s[s.length - 1].trim();

    if (destination.startsWith("/")) {
      // not a subdirectory
    } else {
      // a subdirectory - check if it exists
      if (!folders[stack[stack.length - 1]].folders.includes(destination)) {
        setContent([
          ...content,
          `${defaultContent}${command}`,
          `'${destination}'. No such file or directory\n`,
        ]);
        return;
      }
    }

    let shouldContinue = true;
    for (const file of files) {
      const conditionOne = folders[stack[stack.length - 1]].folders.includes(
        file
      );
      const conditionTwo = folders[stack[stack.length - 1]].files.includes(
        file
      );
      if (!(conditionOne || conditionTwo)) {
        shouldContinue = false;
      }
    }

    if (!shouldContinue) {
      setContent([
        ...content,
        `${defaultContent}${command}`,
        `No such file or directory exists\n`,
      ]);
      return;
    }

    for (const file of files) {
      if (checkFolder(file)) {
        dispatch(addFolder(file, destination));
      } else {
        dispatch(addFile(file.trim(), destination));
      }
    }
  };

  const handleUserAddCommand = () => {
    const s = command.trim().split(" ");
    if (s[0].trim() !== "useradd") {
      setContent([
        ...content,
        `${defaultContent}${command}`,
        `'${command}' command is not recognized.\n`,
      ]);
      return;
    }
    if (s.length !== 2) {
      setContent([
        ...content,
        `${defaultContent}${command}`,
        `'${command}' command is not recognized.\n`,
      ]);
      return;
    }

    const username = s[1];
    if (username.trim().length === 0) {
      setContent([
        ...content,
        `${defaultContent}${command}`,
        "Username can not be empty.\n",
      ]);
      return;
    }

    for (const user of allUsers) {
      if (user.name === s[1]) {
        setContent([
          ...content,
          `${defaultContent}${command}`,
          `'${s[1]}' - user already exists\n`,
        ]);
        return;
      }
    }

    dispatch(addUser(s[1]));
    setContent([...content, `${defaultContent}${command}`, ""]);
  };

  const handlePasswdCommand = () => {
    const s = command.trim().split(" ");
    if (s.length !== 3) {
      setContent([
        ...content,
        `${defaultContent}${command}`,
        `'${command}' command is not recognized.\n`,
      ]);
      return;
    }

    if (s[0].trim() !== "passwd") {
      setContent([
        ...content,
        `${defaultContent}${command}`,
        `'${command}' command is not recognized.\n`,
      ]);
      return;
    }

    const username = s[1];
    const password = s[2];

    let shouldContinue = false;
    for (const user of allUsers) {
      if (user.name === username) {
        shouldContinue = true;
      }
    }

    if (!shouldContinue) {
      //error - user doesnt exist
      setContent([
        ...content,
        `${defaultContent}${command}`,
        `${username} - user doest not exist.\n`,
      ]);
      return;
    }

    setContent([
      ...content,
      `${defaultContent}${command}`,
      "passwd: all authentication tokens updated successfully.\n",
    ]);

    dispatch(addUserPassword(username, password));
  };

  const handleManCommand = (command) => {
    setContent(getNewContent(`${commandsInfo[command]}\n`));
  };

  const parseCommand = () => {
    if (command.length === 0) {
      setContent([
        ...content,
        `${defaultContent}`,
        "Not a recognizable command.",
      ]);

      return;
    }

    if (command.trim() === "pwd") {
      const message = `${stack.join("/")}/\n`;
      setContent(getNewContent(message));

      return;
    }

    if (command.trim() === "ls") {
      const newContent = handleLsCommand(lastStackItem);
      setContent(newContent);

      return;
    }

    if (command.trim() === "clear") {
      setContent([]);
      return;
    }

    if (command.trim().startsWith("mkdir")) {
      const newContent = handleMkdirCommand(command);
      setContent(newContent);
      return;
    }

    if (command.trim() === "cd..") {
      if (stack[stack.length - 1] == "Home") {
        setContent(getNewContent(""));
        return;
      }

      setStack(stack.slice(0, stack.length - 1));
      return;
    } else if (command.trim().startsWith("cd")) {
      handleCdCommand();
      return;
    }

    if (command.trim().startsWith("rmdir")) {
      const newContent = handleRmdirCommand(command, folders);
      setContent(newContent);
      return;
    } else if (command.trim().startsWith("rm")) {
      handleRmCommand();
      return;
    }

    if (command.trim().startsWith("touch")) {
      handleTouchCommand();
      return;
    }

    if (command.trim().startsWith("mv")) {
      handleMvCommand();
      return;
    }

    if (command.trim().startsWith("cp")) {
      handleCpCommand();
      setContent(getNewContent(""));
      return;
    }

    if (command.trim() == "help") {
      setContent([...content, `${defaultContent}${command}`, commandsHelp]);
      return;
    }

    if (command.trim().startsWith("useradd")) {
      handleUserAddCommand();
      setContent(
        getNewContent(
          "User created with empty password. Change its password with 'passwd' \n"
        )
      );
      return;
    }

    if (command.trim().startsWith("passwd")) {
      handlePasswdCommand();
      return;
    }

    if (command.trim().startsWith("man")) {
      const helpCommand = command.split(" ")[1];
      handleManCommand(helpCommand);
      return;
    }

    const errorMessage = `'${command}' is not a recognizable command.`;
    setContent(getNewContent(errorMessage));
  };

  return (
    <Draggable>
      <div className={classes.root}>
        <div className={classes.header}>
          <span>{currentUser.toLowerCase()}@infinityOS: ~</span>
          <CancelIcon onClick={closeTerminal} />
        </div>
        <div className={classes.content}>
          <textarea
            ref={inputRef}
            className={classes.input}
            spellCheck={false}
            onKeyPress={handleEnter}
            onKeyDown={handleBackSpace}
            autoFocus={true}
          ></textarea>
        </div>
      </div>
    </Draggable>
  );
}

export default Terminal;
