import { tap, expect } from '@pushrocks/tapbundle';
import * as smartstring from '../ts';

tap.test('should state valuid utf8', async () => {
  expect(smartstring.type.isUtf8('hithere')).to.be.true;
});

tap.start();