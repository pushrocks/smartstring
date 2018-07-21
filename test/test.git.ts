import * as smartstring from '../ts/index';
import { tap, expect } from '@pushrocks/tapbundle';

// git
let testGit: smartstring.GitRepo;
tap.test('expect create a new Git class GitRepo', async () => {
  testGit = new smartstring.GitRepo('git+https://github.com/pushrocks/smartstring.git');
  expect(testGit).be.instanceof(smartstring.GitRepo);
});
tap.test('expect return a .host', async () => {
  expect(testGit.host).equal('github.com');
});
tap.test('expect return a .user', async () => {
  expect(testGit.user).equal('pushrocks');
});
tap.test('expect return a .repo', async () => {
  expect(testGit.repo).equal('smartstring');
});
tap.test('expect return a .httpsUrl', async () => {
  expect(testGit.httpsUrl).equal('https://github.com/pushrocks/smartstring.git');
});
tap.test('expect return a .sshUrl', async () => {
  expect(testGit.sshUrl).equal('git@github.com:pushrocks/smartstring.git');
});

tap.start();
