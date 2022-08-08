import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./style.css";

import { ipcRenderer } from "electron";
const closeApp = document.getElementById("closeApp");
closeApp.addEventListener("click", () => {
  ipcRenderer.send("close-me");
});
