import { assert } from 'chai';
import RIPEMD160 from '../src/index';
// @ts-ignore
import vectors = require('hash-test-vectors');

vectors.forEach(function (vector: any, i: number) {
  var input = new Buffer(vector.input, 'base64')
  it('vector #' + (i + 1) + ' with .update', function () {
    const hashResult = new RIPEMD160().update(input).digest();
    const hex = Buffer.from(hashResult.buffer).toString('hex');
    assert.equal(hex, vector.ripemd160);
  })
})