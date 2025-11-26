const { app, BrowserWindow } = require("electron/main");
const { consola } = require("consola");
const path = require("node:path");

const { splash, default_window } = require("../../electron.conf.json");

let mainWindow;
let splashWindow;

function defaultWindow() {
  if (splash.active) {
    splashWindow = new BrowserWindow({
      width: splash.width,
      height: splash.height,
      frame: false,
      alwaysOnTop: true,
      transparent: true,
      center: true,
      icon: path.join(__dirname, "..", "..", "icon.ico"),
    });

    splashWindow.loadFile("./public/splash/index.html");
  }

  mainWindow = new BrowserWindow({
    width: default_window.width,
    height: default_window.height,
    minWidth: default_window.minWidth,
    minHeight: default_window.minHeight,
    show: false, // só mostra quando estiver pronta
    autoHideMenuBar: true,
    icon: path.join(__dirname, "..", "..", "icon.ico"),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (default_window.URL.active) {
    mainWindow.loadURL(default_window.URL.url); // redirecionar para um site url
  } else {
    mainWindow.loadFile("./public/default/index.html");
  }

  mainWindow.once("ready-to-show", () => {
    // Aguarda 5 segundos antes de trocar as janelas
    if (splash.active) {
      setTimeout(() => {
        splashWindow.destroy();
        mainWindow.show();
      }, 5000); // 5000 ms = 5 segundos
    } else {
      mainWindow.show();
    }
  });
}

app.whenReady().then(() => {
  consola.warn("App Base iniciado com sucesso!")
  defaultWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      defaultWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
