/*
 * demi-logger
 * https://github.com/chrisenytc/demi-logger
 *
 * Copyright (c) 2014 Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
chai.expect();
chai.should();

var logger = require('../lib/logger.js');

describe('logger module', function () {
  describe('#logger()', function () {
    it('should be an function', function () {
      logger.should.be.an('function');
    });
  });
});
