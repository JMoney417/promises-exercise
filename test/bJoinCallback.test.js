const fs = require('fs');
const path = require('path')
const expect = require('chai').expect;
const joiner = require('../src/bJoinCallback');

describe('joiner', () => {
    it('should join files and callback', (done) => {
        const expected = JSON.parse(fs.readFileSync(path.join(__dirname, '../files/expected.json')));
        joiner((actual) => {
            expect(expected).to.deep.equal(actual);
            done();
        });
    })
})