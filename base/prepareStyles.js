const fs = require('fs');

let styles = fs.readFileSync('./src/css/index.css').toString();
styles = styles.trim();
fs.writeFileSync('./src/js/core/styles/styles.js', `export const styles="${styles}";`);