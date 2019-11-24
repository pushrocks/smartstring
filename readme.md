# @pushrocks/smartstring
handle strings in smart ways. TypeScript ready.

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/smartstring)
* [gitlab.com (source)](https://gitlab.com/pushrocks/smartstring)
* [github.com (source mirror)](https://github.com/pushrocks/smartstring)
* [docs (typedoc)](https://pushrocks.gitlab.io/smartstring/)

## Status for master
[![build status](https://gitlab.com/pushrocks/smartstring/badges/master/build.svg)](https://gitlab.com/pushrocks/smartstring/commits/master)
[![coverage report](https://gitlab.com/pushrocks/smartstring/badges/master/coverage.svg)](https://gitlab.com/pushrocks/smartstring/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/@pushrocks/smartstring.svg)](https://www.npmjs.com/package/@pushrocks/smartstring)
[![Known Vulnerabilities](https://snyk.io/test/npm/@pushrocks/smartstring/badge.svg)](https://snyk.io/test/npm/@pushrocks/smartstring)
[![TypeScript](https://img.shields.io/badge/TypeScript->=%203.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

## Usage

Use TypeScript for best in class instellisense.

```javascript
import * as smartstring from 'smartstring';

// classes

// smartstring.Domain class
let myDomain = new smartstring.Domain('https://sub.main.tld');
myDomain.level1; // "tld"
myDomain.level2; // "main"
// level3 , level 4 and so on...
myDomain.zoneName; // "main.tld"
myDOmain.protocol; // "https"

// smartstring.GitRepo class
let myGitRepo = new smartstring.GitRepo('git@github.com:someorg/somerepo.git'); // takes https and git and npm repo URL versions
myGitRepo.host; // "github.com"
myGitRepo.user; // "someorg"
myGitRepo.repo; // "somerepo"
myGitRepo.accessToken; // accessToken if specified with https
myGitRepo.sshUrl; // "git@github.com:someorg/somerepo.git" (computed also from https)
myGitRepo.httpsUrl; // "https://github.com/someorg/somerepo.git" (computed also from ssh)

//smartstring.Base64
let myBase64 = new smartstring.Base64('somestring', 'string'); // first arg is the string, second is string type (can be string, base64, base64uri)
myBase64.simpleString; // 'somestring'
myBase64.base64String; // base64 representation of 'somestring'
myBase64.base64UriString; // base64uri representation of 'sometring'

// methods
smartstring.base64.encode('somestring'); // encodes 'somestring' to base64
smartstring.base64.encodeUri('sometring'); // encodes 'somestring' to base64uri
smartstring.base64.decode(); // decodes base64 and base64uri to simple string respresentation

smartstring.indent.indent('somestringanotherstring', 4); // indents a string by 4
smartstring.indent.indent('somestringanotherstring', '>>>> '); // indents a string with a prefix
smartstring.indent.normalize('    somestring        anotherstring', '>>>> '); // looks for the least amount of indention and removes superflouous space
```


## Contribution

We are always happy for code contributions. If you are not the code contributing type that is ok. Still, maintaining Open Source repositories takes considerable time and thought. If you like the quality of what we do and our modules are useful to you we would appreciate a little monthly contribution: You can [contribute one time](https://lossless.link/contribute-onetime) or [contribute monthly](https://lossless.link/contribute). :)

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)
