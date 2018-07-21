import * as smartstring from '../ts/index';
import { tap, expect } from '@pushrocks/tapbundle';

// indent
let testString = `
base
    expect be indented
        some more

base
    indented
`;

// normalize
tap.test('expect normalize a string', async () => {
  testString = smartstring.indent.normalize(testString);
  console.log(testString);
  let zoneNameArg = 'test1';
  let destinationIpArg = '111';
});

// indent with prefix
tap.test('expect indent', async () => {
  testString = smartstring.indent.indentWithPrefix(testString, '>> ');
  console.log(testString);
});

tap.start();
