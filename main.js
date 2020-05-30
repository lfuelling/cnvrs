const { app, BrowserWindow } = require('electron')

const path = require("path");
const isDev = require("electron-is-dev");

function createWindow () {
    const win = new BrowserWindow({
        minWidth: 1150,
        minHeight: 800,
        width: 1150,
        height: 850,
        devTools: isDev,
        icon: 'assets/logo.ico',
        partition: 'cnvrs',
        webPreferences: {
            nodeIntegration: false
        }
    })

    win.loadFile('index.html');

    if(isDev) {
        win.webContents.openDevTools({mode: "detach"});
    }
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
