const utils = require('./utils');

it('Should add two numbers', () => {
    var result = utils.add(33, 11);

    if(result != 44){
        throw new Error(`Expected 44, but got ${result}`);
    }
});

it('Should square a number', () => {
    var result = utils.square(12);

    if(result != 144){
        throw new Error(`Expected 144, but got ${result}`);
    }
});