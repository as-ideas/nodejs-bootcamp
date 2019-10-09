const fs = require('fs');
var assert = require('assert');

const fileHelper = require('../src/nodejs-files');
const tempFileName = 'test.tmp'

describe('files', function () {

    before(function(done) {
        fs.unlink(tempFileName, (err) => {
            done();
        })  
    });

    it('should read a file', function () {
        var content = fileHelper.readFromFile('.gitignore');
        
        var found = content.indexOf('node_modules');
        
        assert.notEqual(found, -1);
    });

    it('should write a file', function () {

        // given file does not contain data

        // when - write data to a file

        // then - the file contains the data
    });

    it('should delete a file', function () {
        // given file exists

        // when - delete file is called

        // then - the file does not exist
    });
});