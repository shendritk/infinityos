export default `
man - Displays how to use the specified command.  
help - Shows all commands and their purposes. 
pwd - Shows the current path 
cd - Navigate through directories. 
ls - List all files and directories in the current directory. 
mkdir - Create a new directory with the specified name. 
clear - Clears the terminal screen. 
touch - Create a new file with the specified name. 
rmdir - Remove an empty directory. 
rm -r - Remove a directory with all its subdirectories and files. Can be also used to remove files. 
mv - Moves the specified files and/or folders to the specified directory. 
cp - Copies the specified files and/or folders to the specified directory.
useradd - Add a user with the specified name and an empty default password.
passwd - Change a user's password.
`;

export const commandsInfo = {
  man: "Displays how to use the specified command.",
  help: "Shows all commands and their purposes.",
  pwd: "Shows the current path.",
  cd: "Navigate through directories.",
  ls: "List all files and directories in the current directory.",
  mkdir: "Create a new directory with the specified name.",
  clear: "Clears the terminal screen.",
  touch: "Create a new file with the specified name.",
  rmdir: "Remove an empty directory.",
  rm:
    "Remove a directory with all its subdirectories and files. Can be also used to remove files.",
  mv: "Moves the specified files and/or folders to the specified directory.",
  cp: "Copies the specified files and/or folders to the specified directory.",
  useradd: "Add a user with the specified name and an empty default password.",
  passwd: "Change a user's password.",
};

export const manCommandInfo = {
  help: {
    name: "help",
    synopsis: "help",
    description: "Shows all commands and their purposes.",
  },
  pwd: { name: "pwd", synopsis: "pwd", description: "Shows the current path." },
  cd: {
    name: "cd",
    synopsis: "cd [FORMAT]",
    description:
      "Navigate through directories. FORMAT controls are: \n.. - Move up a directory \n ",
  },
};
