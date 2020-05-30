const { app, BrowserWindow } = require('electron')

const path = require("path");
const isDev = require("electron-is-dev");

function createWindow () {
    const win = new BrowserWindow({
        width: 1150,
        height: 800,
        devTools: isDev,
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
