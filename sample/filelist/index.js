const fs = require('fs');

function readFileList() {
    let ul = document.querySelector('ul#filelist');
    fs.readdir('./images/', function (err, list) {
        if (err) {
            return;
        }

        for (let i=0; i < list.length; i++) {
            let li = document.createElement('li');
            let img = document.createElement('img');
            img.src = './images/' + list[i];
            li.textContent = list[i];
            ul.appendChild(li);
            ul.appendChild(img);
        }
    });
}

const onload = function () {
    readFileList();
}
window.onload = onload;