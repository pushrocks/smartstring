import * as smartstring from '../ts/index';
import { tap, expect } from '@pushrocks/tapbundle';

// Docker
tap.test('expect create a Env Object', async () => {
  let envStringArray = ['VIRTUAL_HOST=sub.domain.tld', 'DEFAULT_HOST=some.domain.com'];
  let envObject: any = smartstring.docker.makeEnvObject(envStringArray);
  expect(envObject.VIRTUAL_HOST).to.equal('sub.domain.tld');
  expect(envObject.DEFAULT_HOST).to.equal('some.domain.com');
});

tap.start();
