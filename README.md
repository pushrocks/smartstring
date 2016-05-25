# smartstring
handle strings in smart ways. TypeScript ready.

## Status
[![Build Status](https://travis-ci.org/pushrocks/smartstring.svg?branch=master)](https://travis-ci.org/pushrocks/smartstring)
[![Build status](https://ci.appveyor.com/api/projects/status/x4oe2xxwwcbxmk1h/branch/master?svg=true)](https://ci.appveyor.com/project/philkunz/smartstring/branch/master)
[![Dependency Status](https://david-dm.org/pushrocks/smartstring.svg)](https://david-dm.org/pushrocks/smartstring)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/smartstring/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/smartstring/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/smartstring/badges/code.svg)](https://www.bithound.io/github/pushrocks/smartstring)

## Usage
Use TypeScript for intellisense.

```typescript
import * as smartstring from "smartstring";

// smartstring.GitRepo class
let myGitRepo = new smartstring.GitRepo("git@github.com:someorg/somerepo.git"); // takes https and git and npm repo URL versions
myGitRepo.host // "github.com"
myGitRepo.user // "someorg"
myGitRepo.repo // "somerepo"
myGitRepo.accessToken // accessToken if specified with https
myGitRepo.sshUrl // ssh URL (computed also from https)
myGitRepo.httpsUrl // https URL (computed also from ssh)

// smartstring.Domain class
let myDomain = new smartstring.Domain("https://sub.main.tld");
myDomain.level1 // "tld"
myDomain.level2 // "main"
// level3 , level 4 and so on...
myDomain.zoneName // "main.tld"
myDOmain.protocol // "https"

```

## About the authors:
[![Project Phase](https://mediaserve.lossless.digital/lossless.com/img/createdby_github.svg)](https://lossless.com/)

[![PayPal](https://img.shields.io/badge/Support%20us-PayPal-blue.svg)](https://paypal.me/lossless)
