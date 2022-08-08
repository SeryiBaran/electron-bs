window.addEventListener("DOMContentLoaded", () => {
  const { ipcRenderer } = require("electron");

  document.getElementById("closeApp").addEventListener("click", () => {
    ipcRenderer.invoke("quit-app");
  });
});
