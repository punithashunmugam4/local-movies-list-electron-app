const { contextBridge, ipcRenderer } = require("electron");

document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector("body");
  page.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    ipcRenderer.send("context-menu");
  });
});

contextBridge.exposeInMainWorld("api", {
  showContextMenu: (params) => ipcRenderer.send("show-context-menu", params),
  getAllMovies: () => ipcRenderer.invoke("get-all-movies"),
  getAllFolders: () => ipcRenderer.invoke("get-all-folders"),
  chooseFolder: () => ipcRenderer.invoke("choose-folder"),
  getMovies: (folder) => ipcRenderer.invoke("get-movies", folder),
  openPath: (filePath) => ipcRenderer.invoke("open-path", filePath),
  revealInFolder: (p) => ipcRenderer.invoke("reveal-in-folder", p),
  deletePath: (p) => ipcRenderer.invoke("delete-path", p),
  send: (channel, data) => {
    ipcRenderer.send(channel, data);
  },
  receive: (channel, func) => {
    ipcRenderer.on(channel, (event, ...args) => func(...args));
  },
  invoke: (channel, ...args) => ipcRenderer.invoke(channel, ...args),
  sleep: (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },
});
