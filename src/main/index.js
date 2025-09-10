import { app, shell, BrowserWindow, ipcMain, dialog } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/images.jpg?asset'
import { spawn , exec} from 'child_process'
import path from 'path'


function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    show: false,
    fullscreen: true,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })




  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

   ipcMain.handle('close-app', async () => {
  // You can add confirmation logic here if needed
  let command;
  if (process.platform === 'win32') {
    // Windows
    command = 'shutdown /s /t 0';
  } else if (process.platform === 'darwin') {
    // macOS
    command = 'osascript -e \'tell app "System Events" to shut down\'';
  } else {
    // Linux (most common for sudo poweroff)
    command = 'systemctl poweroff -i'; // Try this first
    // Alternative: command = 'sudo poweroff';
  }

  // Execute the shutdown command
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error('Shutdown error:', error);
      console.log('You may need to configure passwordless sudo for poweroff');
      
      // Provide instructions for Linux users
      if (process.platform === 'linux') {
        console.log('\nTo fix this on Linux, run:');
        console.log('sudo visudo');
        console.log('Then add this line (replace YOUR_USERNAME):');
        console.log('YOUR_USERNAME ALL=(ALL) NOPASSWD: /usr/bin/systemctl poweroff');
      }
      return;
    }
    console.log('Shutdown command sent successfully:', stdout);
  });
});
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})



// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
