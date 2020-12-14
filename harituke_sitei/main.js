//haritukeのほうにあるindex.jsの内容に近い
//書き換え禁止変数（定数）宣言（const）
// ファイル読み込み（require）
const electron = require('electron');

//定数を宣言(const)
const { app, BrowserWindow } = electron;
//変数winを新規作成(let)
let win;
// 新しいウィンドウ(Webページ)を生成
function createWindow() {
  // BrowserWindowインスタンスを生成
  win = new BrowserWindow({
    webPreferences: {
      //アプリの画面の枠＝メインプロセスでウィンドウを生成する
      //require関数が使えるようになる？（true）
      nodeIntegration: true,
      enableRemoteModule: true
    }
  });
  //※index.htmlをロード
  //パスからディレクトリ部分を取り出す(dirname)
  win.loadURL(`file://${__dirname}/index.html`);

  //※ウィンドウが閉じられると発生(終了イベント?)
  win.on('closed', () => {
    win = null
  });
}
//※Electronが初期化&ブラウザウィンドウを作成する関数を呼ぶ
app.on('ready', createWindow);

//※ウィンドウが閉じられるとアプリ終了
app.on('window-all-closed', () => {
  //プラットフォーム(土台となる環境)に「darwin」を使っている
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});