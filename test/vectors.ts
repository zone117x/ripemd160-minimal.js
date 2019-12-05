import { assert } from 'chai';
// @ts-ignore
import vectors = require('hash-test-vectors');


describe('Test hash results', () => {

  let createRipemd160: () => import('../src/index').RIPEMD160;

  describe('Test with typed array support', () => {

    before(async () => {
      const ripemd160 = (await import('../src/index')).RIPEMD160
      createRipemd160 = () => new ripemd160()
    })

    runTestVectors()

  })

  describe('Test without typed array support', () => {

    let origUint8Array: any
    let origUint32Array: any
    
    before(async () => {
      origUint8Array = global.Uint8Array
      origUint32Array = global.Uint32Array
      global.Uint8Array = undefined!
      global.Uint32Array = undefined!
      
      delete require.cache[require.resolve('../src/index')]
      const ripemd160 = (await import('../src/index')).RIPEMD160
      createRipemd160 = () => new ripemd160()
    })

    runTestVectors()

    after(() => {
      global.Uint8Array = origUint8Array
      global.Uint32Array = origUint32Array
    })
  })

  function runTestVectors() {
    vectors.forEach(function (vector: any, i: number) {
      var input = Buffer.from(vector.input, 'base64').toJSON().data
      it('vector #' + (i + 1) + ' with .update', function () {
        const hashResult = createRipemd160().update(input).digest();
        const hex = Buffer.from(hashResult as Uint8Array).toString('hex');
        assert.equal(hex, vector.ripemd160);
      })
    })
  }

})