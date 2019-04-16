import { tap, expect } from '@pushrocks/tapbundle';

import * as smartstring from '../ts/index';

tap.test('should normalize a string', async () => {
  const testString = `
    myawesome string;
      is indented with two spaces
  `;
  const normalizedString = smartstring.normalize.standard(testString);
  expect(normalizedString).to.equal(
    `
myawesome string;
  is indented with two spaces
  `
  );
});

tap.start();
