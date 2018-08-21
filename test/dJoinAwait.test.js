const fs = require('fs');
const path = require('path')
const expect = require('chai').expect;
const joiner = require('../src/dJoinAsync');

xdescribe('joiner', () => {
    it('should Promise to join files', async () => {
        const expected = JSON.parse(fs.readFileSync(path.join(__dirname, '../files/expected.json')));
        const actual = await joiner();
        expect(expected).to.deep.equal(actual);
    })
})