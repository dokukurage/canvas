const electron = require('electron');

const { app, BrowserWindow } = electron;
let win;

function createWindow() {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  });
  //index.htmlをロード
  win.loadURL(`file://${__dirname}/index.html`);

  //ウィンドウが閉じられると発生
  win.on('closed', () => {
    win = null
  });
}
//Electronが初期化&ブラウザウィンドウを作成する関数を呼ぶ
app.on('ready', createWindow);

//ウィンドウが閉じられると終了
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});