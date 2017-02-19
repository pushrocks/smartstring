import 'typings-test'
import * as smartstring from '../dist/index'
import { expect } from 'smartchai'

describe('smartstring', function () {
  describe('.Base64 class', function () {
    let testBase64: smartstring.Base64
    it('expect create a valid instance of Base64', function () {
      testBase64 = new smartstring.Base64('somestring', 'string')
      expect(testBase64).be.instanceOf(smartstring.Base64)
    })
    it('expect read output a file as base64 and base64uri', function () {
      expect(testBase64.base64String).not.equal(testBase64.base64UriString)
      let testBase64_2 = new smartstring.Base64(testBase64.base64UriString, 'base64uri')
      expect(testBase64_2.simpleString).equal(testBase64.simpleString)
    })
  })
  describe('.Domain class', function () {
    let testDomain: smartstring.Domain
    let testDomain2: smartstring.Domain
    it('expect create a new Domain object', function () {
      testDomain = new smartstring.Domain('https://level3D.level2D.level1D')
      expect(testDomain).be.instanceof(smartstring.Domain)
      console.log(testDomain)
    })
    it('expect have a .topLevel', function () {
      expect(testDomain.topLevel).equal('level1D')
    })
    it('expect have a .level2', function () {
      expect(testDomain.level2).equal('level2D')
    })
    it('expect have a .level3', function () {
      expect(testDomain.level3).equal('level3D')
    })
    it('expect have the correct dns zone name', function () {
      expect(testDomain.zoneName).equal('level2D.level1D')
    })
    it('expect have the correct protocol', function () {
      expect(testDomain.protocol).equal('https')
    })
    it('testDomain2 expect be a basic domain', function () {
      testDomain2 = new smartstring.Domain('bleu.de')
      console.log(testDomain2)
    })
  })
  describe('.Git class', function () {
    let testGit: smartstring.GitRepo
    it('expect create a new Git class GitRepo', function () {
      testGit = new smartstring.GitRepo('git+https://github.com/pushrocks/smartstring.git')
      expect(testGit).be.instanceof(smartstring.GitRepo)
    })
    it('expect return a .host', function () {
      expect(testGit.host).equal('github.com')
    })
    it('expect return a .user', function () {
      expect(testGit.user).equal('pushrocks')
    })
    it('expect return a .repo', function () {
      expect(testGit.repo).equal('smartstring')
    })
    it('expect return a .httpsUrl', function () {
      expect(testGit.httpsUrl).equal('https://github.com/pushrocks/smartstring.git')
    })
    it('expect return a .sshUrl', function () {
      expect(testGit.sshUrl).equal('git@github.com:pushrocks/smartstring.git')
    })
  })
  describe('.docker', function () {
    describe('.makeEnvObject', function () {
      it('expect create a Env Object', function () {
        let envStringArray = [ 'VIRTUAL_HOST=sub.domain.tld', 'DEFAULT_HOST=some.domain.com' ]
        let envObject: any = smartstring.docker.makeEnvObject(envStringArray)
        expect(envObject.VIRTUAL_HOST).to.equal('sub.domain.tld')
        expect(envObject.DEFAULT_HOST).to.equal('some.domain.com')
      })
    })
  })
  describe('.indent', function () {
    let testString = `
                    base
                        expect be indented
                            some more

                    base
                        indented
                `
    describe('.normalize()', function () {
      it('expect normalize a string', function () {
        testString = smartstring.indent.normalize(testString)
        console.log(testString)
        let zoneNameArg = 'test1'
        let destinationIpArg = '111'
      })
    })

    describe('.indentWithPrefix', function () {
      it('expect indent', function () {
        testString = smartstring.indent.indentWithPrefix(testString, '>> ')
        console.log(testString)
      })
    })
  })
  describe('.typescript', function () {
    describe('.referenceRegex', function () {
      it('expect match reference paths', function () {
        expect(
          smartstring.typescript.regexReferencePath.test('/// <reference path=\"\" />')
        ).to.be.true
        expect(
          smartstring.typescript.regexReferencePath.test("/// <reference path='' />")
        ).to.be.true
        expect(
          smartstring.typescript.regexReferencePath.test('/// <referencepath=\"\" />')
        ).to.be.false
      })
    })
  })
})
