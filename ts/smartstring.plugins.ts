// node native
import * as smartenv from '@pushrocks/smartenv';
const smartenvInstance = new smartenv.Smartenv();
const crypto = smartenvInstance.getSafeNodeModule('crypto');

import * as url from 'url';

export { crypto, url };

// third party
const jsBase64 = require('js-base64').Base64;

const stripIndent = require('strip-indent');
const normalizeNewline = require('normalize-newline');
const randomatic = require('randomatic');

import { nanoid } from 'nanoid';

export {
  jsBase64,
  stripIndent,
  normalizeNewline,
  randomatic,
  nanoid
}
