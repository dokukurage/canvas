# 画像一覧表示サンプル

`images/`フォルダの中にある画像ファイルの一覧を`fs.readdir()`で取得し、
それぞれのファイル名および`img`タグによる画像表示をしている。

`fs.readdir()`は*非同期処理*である点に注意。[MDNの解説](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Asynchronous)なども参考にすること。


## 起動方法

```
npm start
```

