fs = require('fs')

let readfile = (file) => {
    let read = () => fs.readFile(file, 'utf8', (error, data) => {
            if (error) return console.log(error);
            console.log(data);
    });

    setInterval(read, 1000);
}

module.exports = readfile;