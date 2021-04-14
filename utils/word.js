const fs = require('fs')
const filename = `./resources/noun.txt`;


function getWordArray() {

    const data = fs.readFileSync(filename, 'utf8');
    return data.split(`\n`);
}

module.exports = getWordArray;
