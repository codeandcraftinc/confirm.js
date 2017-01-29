var expect = require('chai').expect;
var confirm = require('../lib/confirm');

describe('confirm.js', function () {
  var write, output = '';

  beforeEach(function() {
    write = process.stdout.write;
    process.stdout.write = function(s) {
      output += s;
    };
  });

  afterEach(function () {
    process.stdout.write = write;
  });

  it('...', function () {
    console.log('output', output)
    confirm()
  });
});
