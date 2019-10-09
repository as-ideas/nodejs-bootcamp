const fileHelper = require('../src/nodejs-files');

var assert = require('assert');

describe('files', function () {
    it('should read the file', function () {
        var content = fileHelper.readFromFile('.gitignore');
        
        var found = content.indexOf('node_modules');
        
        assert.notEqual(found, -1);
    });

    it('should write the file', function () {
        // TODO
    });
});