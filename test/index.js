var expect = require('chai').expect;
var index = require('..');

describe('index', function() {
  it('#func()', function() {
    expect(index.func(1)).to.equals(2);
  });
});
