const utils = require('./utils');
const expect = require('expect');

it('Should add two numbers', () => {
    var result = utils.add(33, 11);

    expect(result).toBe(44, `Expected 44, but got ${result}`).toBeA('number');

    // if(result !== 44){
    //     throw new Error(`Expected 44, but got ${result}`);
    // }
});

it('Should square a number', () => {
    var result = utils.square(12);

    expect(result).toBe(144, `Expected 144, but got ${result}`).toBeA('number');

    // if(result !== 144){
    //     throw new Error(`Expected 144, but got ${result}`);
    // }
});