var mathext = require('../index.js')
  , assert = require('assert');

describe('Mathext', function () {
    describe('#toRadians', function () {
        it('should return degrees to Radians', function () {
            var rads = mathext.toRadians(30);
            assert.equal(0.524, rads);
        });
    });

    describe('#toDegrees', function () {
        it('should return radians to degrees', function () {
            var degrees = mathext.toDegrees(0.52359);
            assert.equal(30, degrees);
        })
    })
});