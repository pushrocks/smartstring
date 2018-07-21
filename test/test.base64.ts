import * as smartstring from '../ts/index';
import { tap, expect } from '@pushrocks/tapbundle';

// Base64
let testBase64: smartstring.Base64;
tap.test('expect create a valid instance of Base64', async () => {
  testBase64 = new smartstring.Base64('somestring', 'string');
  expect(testBase64).be.instanceOf(smartstring.Base64);
});
tap.test('expect read output a file as base64 and base64uri', async () => {
  expect(testBase64.base64String).not.equal(testBase64.base64UriString);
  let testBase64_2 = new smartstring.Base64(testBase64.base64UriString, 'base64uri');
  expect(testBase64_2.simpleString).equal(testBase64.simpleString);
});

tap.start();
