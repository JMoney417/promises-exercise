const fs = require('fs');
const path = require('path')
const expect = require('chai').expect;
const joiner = require('../src/cJoinPromise');

describe('joiner', () => {
    it('should Promise to join files', () => {
        const expected = JSON.parse(fs.readFileSync(path.join(__dirname, '../files/expected.json')));
        return joiner().then((actual) => {
            expect(expected).to.deep.equal(actual);
        })
    })
})