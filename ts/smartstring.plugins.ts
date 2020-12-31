import * as smartenv from '@pushrocks/smartenv';
const smartenvInstance = new smartenv.Smartenv();

// node native
const crypto = smartenvInstance.getSafeNodeModule('crypto');
import * as url from 'url';

export { crypto, url };

// pushrocks scope
import * as isounique from '@pushrocks/isounique';

export {
  isounique
};

// third party
const jsBase64 = require('js-base64').Base64;

const stripIndent = require('strip-indent');
const normalizeNewline = require('normalize-newline');
const randomatic = require('randomatic');



export {
  jsBase64,
  stripIndent,
  normalizeNewline,
  randomatic,
}
