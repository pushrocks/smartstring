# smartstring
handle strings in smart ways. TypeScript ready.

## Availabililty
[![npm](https://push.rocks/assets/repo-button-npm.svg)](https://www.npmjs.com/package/smartstring)
[![git](https://push.rocks/assets/repo-button-git.svg)](https://gitlab.com/pushrocks/smartstring)
[![git](https://push.rocks/assets/repo-button-mirror.svg)](https://github.com/pushrocks/smartstring)
[![docs](https://push.rocks/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/smartstring/)

## Status for master
[![build status](https://gitlab.com/pushrocks/smartstring/badges/master/build.svg)](https://gitlab.com/pushrocks/smartstring/commits/master)
[![coverage report](https://gitlab.com/pushrocks/smartstring/badges/master/coverage.svg)](https://gitlab.com/pushrocks/smartstring/commits/master)
[![Dependency Status](https://david-dm.org/pushrocks/smartstring.svg)](https://david-dm.org/pushrocks/smartstring)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/smartstring/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/smartstring/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/smartstring/badges/code.svg)](https://www.bithound.io/github/pushrocks/smartstring)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage
Use TypeScript for intellisense.

```javascript
import * as smartstring from "smartstring";

// classes

// smartstring.Domain class
let myDomain = new smartstring.Domain("https://sub.main.tld");
myDomain.level1 // "tld"
myDomain.level2 // "main"
// level3 , level 4 and so on...
myDomain.zoneName // "main.tld"
myDOmain.protocol // "https"

// smartstring.GitRepo class
let myGitRepo = new smartstring.GitRepo("git@github.com:someorg/somerepo.git"); // takes https and git and npm repo URL versions
myGitRepo.host // "github.com"
myGitRepo.user // "someorg"
myGitRepo.repo // "somerepo"
myGitRepo.accessToken // accessToken if specified with https
myGitRepo.sshUrl // "git@github.com:someorg/somerepo.git" (computed also from https)
myGitRepo.httpsUrl // "https://github.com/someorg/somerepo.git" (computed also from ssh)

//smartstring.Base64
let myBase64 = new smartstring.Base64('somestring','string') // first arg is the string, second is string type (can be string, base64, base64uri)
myBase64.simpleString // 'somestring'
myBase64.base64String // base64 representation of 'somestring'
myBase64.base64UriString // base64uri representation of 'sometring'

// methods
smartstring.base64.encode('somestring') // encodes 'somestring' to base64
smartstring.base64.encodeUri('sometring') // encodes 'somestring' to base64uri
smartstring.base64.decode() // decodes base64 and base64uri to simple string respresentation

smartstring.indent.indent('somestring\anotherstring', 4) // indents a string by 4
smartstring.indent.indent('somestring\anotherstring', '>>>> ') // indents a string with a prefix
smartstring.indent.normalize('    somestring\        anotherstring', '>>>> ') // looks for the least amount of indention and removes superflouous space
```

[![npm](https://push.rocks/assets/repo-header.svg)](https://push.rocks)
