const loops = require('../src/js-loops');

var assert = require('assert');

describe('loops', function() {
    describe('regular for loop', function() {
        it('sums up the numbers', function() {
        
            var numbers = [1,2,3,4];
    
            var sum = loops.forLoop(numbers);
    
            assert.equal(sum, 10);
        });
    });

        describe('regular for in loop', function() {

          it('sums up the numbers', function() {
        
            var numbers = [1,2,3,4];
    
            var sum = loops.forInLoop(numbers);
    
            assert.equal(sum, 10);
          });
        });

  });