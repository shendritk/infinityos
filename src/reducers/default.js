import { v4 as uuid } from "uuid";

export const defaultFolders = {
  Home: {
    folders: [
      "Recent",
      "Documents",
      "Music",
      "Pictures",
      "Videos",
      "Downloads",
      "Trash",
      "Guest",
    ],
    files: [],
  },
  Recent: {
    folders: [],
    files: ["README.md", "package.json"],
  },
  Documents: {
    folders: ["Bills"],
    files: ["paper.docx", "ai-essay.docx", "mlpresentation.pptx"],
  },
  Music: {
    folders: ["Pop"],
    files: [
      "Drake-Popstar",
      "Polo G-DND",
      "Dj Khaled - Greece",
      "Yo Gotti - Recension Proof",
    ],
  },
  Pictures: {
    folders: [],
    files: ["nature.png", "NewYork.png", "smiling.gif"],
  },
  Videos: {
    folders: [],
    files: ["Avengers-Endgame.mp4"],
  },
  Downloads: {
    folders: [],
    files: ["chrome.exe", "VSCodeUserSetup-x64.exe", "android-kotlin.zip"],
  },
  Trash: {
    folders: [],
    files: [],
  },
  Bills: {
    folders: ["Paid", "Pending"],
    files: ["Electric08.pdf", "University07.pdf", "Food08.pdf"],
  },
  Pop: {
    folders: [],
    files: [
      "Ann Marie - Stress Relief",
      "Jhene Aiko - On the way",
      "Moon - amaria",
    ],
  },
  Guest: {
    folders: [],
    files: [],
  },
  Paid: {
    folders: [],
    files: [],
  },
  Pending: {
    folders: [],
    files: [],
  },
  Guest: {
    folders: [],
    files: [],
  },
};
