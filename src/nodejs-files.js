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

function deleteFile(filePath) {
    try {
        fs.unlinkSync(filePath)
        //file removed
      } catch(err) {
        console.error(err)
      }
}

exports.writeToFile = writeToFile;
exports.readFromFile = readFromFile;
exports.deleteFile = deleteFile;