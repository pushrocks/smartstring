import { tap, expect } from '@pushrocks/tapbundle';
import * as smartstring from '../ts';

tap.test('should state valuid utf8', async () => {
  expect(smartstring.type.isUtf8('hithere')).to.be.true;
});

tap.test('should state wether base64 string is valid', async () => {
  const base64String = smartstring.base64.encode('hi there');
  expect(smartstring.type.isBase64(base64String)).to.be.true;
  expect(smartstring.type.isBase64('hi there')).to.be.false;
});

tap.start();
