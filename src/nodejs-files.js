var fs = require('fs');
 

function writeToFile(str, filePath) {
    try {
        fs.writeFileSync(filePath, str);
      } catch(err) {
        console.error(err);
      }
}
function readFromFile(filePath) {
    try {
        return fs.readFileSync(filePath, 'utf8');
    } catch(err) {
        console.error(err);
      }
    
}

exports.writeToFile = writeToFile;
exports.readFromFile = readFromFile;