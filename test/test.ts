import 'typings-test'
import * as smartstring from '../dist/index'
import * as should from 'should'

describe('smartstring',function(){
    describe('.Base64 class', function(){
        let testBase64: smartstring.Base64
        it('should create a valid instance of Base64', function(){
            testBase64 = new smartstring.Base64('somestring', 'string')
            should(testBase64).be.instanceOf(smartstring.Base64)
        })
        it('should read output a file as base64 and base64uri', function(){
            should(testBase64.base64String).not.equal(testBase64.base64StringUri)
            let testBase64_2 = new smartstring.Base64(testBase64.base64StringUri, 'base64uri')
            should(testBase64_2.simpleString).equal(testBase64.simpleString)
        })
    })
    describe('.Domain class',function(){
        let testDomain:smartstring.Domain
        let testDomain2:smartstring.Domain
        it('should create a new Domain object',function(){
            testDomain = new smartstring.Domain('https://level3D.level2D.level1D')
            should(testDomain).be.instanceof(smartstring.Domain)
            console.log(testDomain)
        })
        it('should have a .topLevel',function(){
            should(testDomain.topLevel).equal('level1D')
        })
        it('should have a .level2',function(){
            should(testDomain.level2).equal('level2D')
        })
        it('should have a .level3',function(){
            should(testDomain.level3).equal('level3D')
        })
        it('should have the correct dns zone name',function(){
            should(testDomain.zoneName).equal('level2D.level1D')
        })
        it ('should have the correct protocol',function(){
            should(testDomain.protocol).equal('https')
        })
        it('testDomain2 should be a basic domain',function(){
            testDomain2 = new smartstring.Domain('bleu.de')
            console.log(testDomain2)
        })
    })
    describe('.Git class',function(){
        let testGit:smartstring.GitRepo
        it('should create a new Git class GitRepo',function(){
            testGit = new smartstring.GitRepo('git+https://github.com/pushrocks/smartstring.git')
            should(testGit).be.instanceof(smartstring.GitRepo)
        })
        it('should return a .host',function(){
                should(testGit.host).equal('github.com')
        })
        it('should return a .user',function(){
                should(testGit.user).equal('pushrocks')
        })
        it('should return a .repo',function(){
                should(testGit.repo).equal('smartstring')
        })
        it('should return a .httpsUrl',function(){
                should(testGit.httpsUrl).equal('https://github.com/pushrocks/smartstring.git')
        })
        it('should return a .sshUrl',function(){
                should(testGit.sshUrl).equal('git@github.com:pushrocks/smartstring.git')
        })
    })
    describe('.docker',function(){
        describe('.makeEnvObject',function(){
            it('should create a Env Object',function(){
                let envStringArray = ['VIRTUAL_HOST=sub.domain.tld','DEFAULT_HOST=some.domain.com']
                let envObject:any = smartstring.docker.makeEnvObject(envStringArray)
                envObject.VIRTUAL_HOST.should.equal('sub.domain.tld')
                envObject.DEFAULT_HOST.should.equal('some.domain.com')
            })
        })
    })
    describe('.indent',function(){
        let testString = `
                    base
                        should be indented
                            some more

                    base
                        indented
                `
        describe('.normalize()',function(){
            it('should normalize a string',function(){
                testString = smartstring.indent.normalize(testString)
                console.log(testString)
                let zoneNameArg = 'test1'
                let destinationIpArg = '111'
            })
        })

        describe('.indentWithPrefix',function(){
            it('should indent',function(){
                testString = smartstring.indent.indentWithPrefix(testString,'>> ')
                console.log(testString)
            })
        })
    })
    describe('.typescript',function(){
        describe('.referenceRegex',function(){
            it('should match reference paths',function(){
                smartstring.typescript.regexReferencePath.test('/// <reference path=\"\" />')
                    .should.be.true()
                smartstring.typescript.regexReferencePath.test("/// <reference path='' />")
                    .should.be.true()
                smartstring.typescript.regexReferencePath.test('/// <referencepath=\"\" />')
                    .should.be.false()
            })
        })
    })
})
