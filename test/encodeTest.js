var expect = require('chai').expect
var hamming = require('../src/encode')

describe('encode hamming', function() {
    it('hamming.encode(1101)', function () {
        expect(hamming.encode('1101')).to.equal('1010101')
    })
})
