import * as smartstring from '../ts/index';
import { tap, expect } from '@pushrocks/tapbundle';

// Domain
let testDomain: smartstring.Domain;
let testDomain2: smartstring.Domain;
tap.test('expect create a new Domain object', async () => {
  testDomain = new smartstring.Domain('https://level3D.level2D.level1D');
  expect(testDomain).be.instanceof(smartstring.Domain);
  console.log(testDomain);
});
tap.test('expect have a .topLevel', async () => {
  expect(testDomain.topLevel).equal('level1D');
});
tap.test('expect have a .level2', async () => {
  expect(testDomain.level2).equal('level2D');
});
tap.test('expect have a .level3', async () => {
  expect(testDomain.level3).equal('level3D');
});
tap.test('expect have the correct dns zone name', async () => {
  expect(testDomain.zoneName).equal('level2D.level1D');
});
tap.test('expect have the correct protocol', async () => {
  expect(testDomain.protocol).equal('https');
});
tap.test('testDomain2 expect be a basic domain', async () => {
  testDomain2 = new smartstring.Domain('bleu.de');
  console.log(testDomain2);
});

tap.test('should parse complex domains', async () => {
  testDomain2 = new smartstring.Domain('https://sub1.sub2.lossless.com/some/path:5431');
  console.log(testDomain2);
});

tap.start();
