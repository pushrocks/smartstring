// node native
import * as smartenv from '@pushrocks/smartenv';
const smartenvInstance = new smartenv.Smartenv();
const crypto = smartenvInstance.getSafeNodeModule('crypto');

import * as url from 'url';

export { crypto, url };

// third party
export let jsBase64 = require('js-base64').Base64;

export let stripIndent = require('strip-indent');
export let normalizeNewline = require('normalize-newline');
export let randomatic = require('randomatic');
export let cryptoRandomString = require('crypto-random-string');
