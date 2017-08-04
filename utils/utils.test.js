const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
  
  describe('#add', () => {
    
    it('Should add two numbers', () => {
      var result = utils.add(33, 11);

      expect(result).toBe(44, `Expected 44, but got ${result}`).toBeA('number');

      // if(result !== 44){
      //     throw new Error(`Expected 44, but got ${result}`);
      // }
    });  

    it('Should async add two numbers', (done) => {
      utils.asyncAdd(4,3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
    
  });

  describe('#square', () => {
    
    it('Should square a number', () => {
      var result = utils.square(12);

      expect(result).toBe(144, `Expected 144, but got ${result}`).toBeA('number');

    // if(result !== 144){
    //     throw new Error(`Expected 144, but got ${result}`);
    // }
    });

    it('Should async square a number', (done) => {
      utils.asyncSquare(9, (sum) => {
        expect(sum).toBe(81).toBeA('number');
        done();
      });
    });
  });

});

