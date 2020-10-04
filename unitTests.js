const {reverseOrder} = require('./PS1.P1');
const {evaluate, eval} = require('./PS1.P2');
const {func, f1, f2} = require('./PS1.P3');

const {describe, it} = require('mocha');
const {expect} = require('chai');

describe('Reverse Alphabetical Order Tests', () => {
        it('should return xuutsssrrppoollliiiiiiigfeedcccaaa when passed xuutsssrrppoollliiiiiiigfeedcccaaa', () => {
            let output = reverseOrder('supercalifragilisticexpialidocious');
            expect(output).to.be.equal('xuutsssrrppoollliiiiiiigfeedcccaaa');
        });
        it('return ollhe', () => {
            let output1 = reverseOrder('hello');
            expect(output1).to.be.equal('ollhe');
        })
    }
)

describe('Evaluate Tests', () => {
    it('should return 6 when passed 4 added by 2', () => {
        let sum = eval('4+2');
        expect(sum).to.be.equal(6);
    })
    it('should return 6 when passed 5 multiplied by 7', () => {
        let product = eval('5*7');
        expect(product).to.be.equal(35);
    })
    it('should return 6 when passed 6 subtracted by 1', () => {
        let difference = eval('6-1');
        expect(difference).to.be.equal(5);
    })
    it('should return 6 when passed 9 divided by 2', () => {
        let division = eval('9/2');
        expect(division).to.be.equal(4.5);
    })
    it('should return 6 when passed 2 raised by 8', () => {
        let exponent = eval('2^8');
        expect(exponent).to.be.equal(256);
    })
})

describe('String and Decorator Test', () => {
    it('should return [‘super’, ‘califragilisti’, ‘cexpialido’, ‘cious’] when passed supercalifragilisticexpialidocious', () => {
        let outcome1 = f1;
        expect([ 'super', 'califragilisti', 'cexpialido', 'cious' ]).to.be.eql(outcome1);
    })
    it('should return object when passed supercalifragilisticexpialidocious', () => {
        let outcome2 = f2;
        expect({
            originalString: 'supercalifragilisticexpialidocious',
            modifiedString: 'supercAlifrAgilisticexpiAlidocious',
            numberReplaced: 3,
            length: 34
        }).to.be.eql(outcome2);
    })
})
