'use strict';

require('dotenv').config();

var hooks = require('hooks');
var md5 = require('md5');

hooks.beforeEach(function (transaction) {
  var publicKey = process.env.MARVEL_PUBLIC_KEY;
  var privateKey = process.env.MARVEL_PRIVATE_KEY;
  var ts = String(new Date().getTime());
  var hash = md5(ts+privateKey+publicKey);

  transaction.fullPath = transaction.fullPath + '?ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash ;
});
