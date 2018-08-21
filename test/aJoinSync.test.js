const fs = require('fs');
const path = require('path')
const expect = require('chai').expect;
const joiner = require('../src/aJoinSync');

describe('joiner', () => {
    it('should join files', () => {
        const expected = JSON.parse(fs.readFileSync(path.join(__dirname, '../files/expected.json')));
        const actual = joiner();
        expect(expected).to.deep.equal(actual);
    })
})