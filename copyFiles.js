const fs = require('fs');

const FILES = ['index.js', 'v3.js', 'fslightbox.umd.js', 'fslightbox.v3.umd.js', 'LICENSE', 'package.json', 'README.md'];

for (let i = 0; i < FILES.length; i++) {
    fs.copyFile(`../${FILES[i]}`, `../dist/${FILES[i]}`, (err) => {
        if (err) throw err;
        console.log(`${FILES[i]} was copied to ./dist/${FILES[i]}`);
    });
}