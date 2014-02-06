[![Demi.js](https://raw2.github.com/enytc/demi/master/logo.png)](http://demijs.enytc.com)

# Demi.js Logger [![Build Status](https://secure.travis-ci.org/chrisenytc/demi-logger.png?branch=master)](http://travis-ci.org/chrisenytc/demi-logger) [![NPM version](https://badge-me.herokuapp.com/api/npm/demi-logger.png)](http://badges.enytc.com/for/npm/demi-logger) [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/chrisenytc/demi-logger/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

Demi.js middleware for advanced logging

## Getting Started
Install the module with: `npm install demi-logger`

```javascript
var logger = require('demi-logger');

//Express example.js
app.configure(function() {
  app.use(express.logger(logger));
});
```

## Screenshort

[![Demi.js](screenshort.png)](http://demijs.enytc.com)

## Contributing

Please submit all issues and pull requests to the [chrisenytc/demi-logger](http://github.com/chrisenytc/demi-logger) repository!

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/chrisenytc/demi-logger/issues).

## License

The MIT License

Copyright (c) 2014 Christopher EnyTC

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

