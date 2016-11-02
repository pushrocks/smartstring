"use strict";
require("typings-test");
const smartstring = require("../dist/index");
const should = require("should");
describe('smartstring', function () {
    describe('.Base64 class', function () {
        let testBase64;
        it('should create a valid instance of Base64', function () {
            testBase64 = new smartstring.Base64('somestring', 'string');
            should(testBase64).be.instanceOf(smartstring.Base64);
        });
        it('should read output a file as base64 and base64uri', function () {
            should(testBase64.base64String).not.equal(testBase64.base64UriString);
            let testBase64_2 = new smartstring.Base64(testBase64.base64UriString, 'base64uri');
            should(testBase64_2.simpleString).equal(testBase64.simpleString);
        });
    });
    describe('.Domain class', function () {
        let testDomain;
        let testDomain2;
        it('should create a new Domain object', function () {
            testDomain = new smartstring.Domain('https://level3D.level2D.level1D');
            should(testDomain).be.instanceof(smartstring.Domain);
            console.log(testDomain);
        });
        it('should have a .topLevel', function () {
            should(testDomain.topLevel).equal('level1D');
        });
        it('should have a .level2', function () {
            should(testDomain.level2).equal('level2D');
        });
        it('should have a .level3', function () {
            should(testDomain.level3).equal('level3D');
        });
        it('should have the correct dns zone name', function () {
            should(testDomain.zoneName).equal('level2D.level1D');
        });
        it('should have the correct protocol', function () {
            should(testDomain.protocol).equal('https');
        });
        it('testDomain2 should be a basic domain', function () {
            testDomain2 = new smartstring.Domain('bleu.de');
            console.log(testDomain2);
        });
    });
    describe('.Git class', function () {
        let testGit;
        it('should create a new Git class GitRepo', function () {
            testGit = new smartstring.GitRepo('git+https://github.com/pushrocks/smartstring.git');
            should(testGit).be.instanceof(smartstring.GitRepo);
        });
        it('should return a .host', function () {
            should(testGit.host).equal('github.com');
        });
        it('should return a .user', function () {
            should(testGit.user).equal('pushrocks');
        });
        it('should return a .repo', function () {
            should(testGit.repo).equal('smartstring');
        });
        it('should return a .httpsUrl', function () {
            should(testGit.httpsUrl).equal('https://github.com/pushrocks/smartstring.git');
        });
        it('should return a .sshUrl', function () {
            should(testGit.sshUrl).equal('git@github.com:pushrocks/smartstring.git');
        });
    });
    describe('.docker', function () {
        describe('.makeEnvObject', function () {
            it('should create a Env Object', function () {
                let envStringArray = ['VIRTUAL_HOST=sub.domain.tld', 'DEFAULT_HOST=some.domain.com'];
                let envObject = smartstring.docker.makeEnvObject(envStringArray);
                envObject.VIRTUAL_HOST.should.equal('sub.domain.tld');
                envObject.DEFAULT_HOST.should.equal('some.domain.com');
            });
        });
    });
    describe('.indent', function () {
        let testString = `
                    base
                        should be indented
                            some more

                    base
                        indented
                `;
        describe('.normalize()', function () {
            it('should normalize a string', function () {
                testString = smartstring.indent.normalize(testString);
                console.log(testString);
                let zoneNameArg = 'test1';
                let destinationIpArg = '111';
            });
        });
        describe('.indentWithPrefix', function () {
            it('should indent', function () {
                testString = smartstring.indent.indentWithPrefix(testString, '>> ');
                console.log(testString);
            });
        });
    });
    describe('.typescript', function () {
        describe('.referenceRegex', function () {
            it('should match reference paths', function () {
                smartstring.typescript.regexReferencePath.test('/// <reference path=\"\" />')
                    .should.be.true();
                smartstring.typescript.regexReferencePath.test("/// <reference path='' />")
                    .should.be.true();
                smartstring.typescript.regexReferencePath.test('/// <referencepath=\"\" />')
                    .should.be.false();
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUNyQiw2Q0FBNEM7QUFDNUMsaUNBQWdDO0FBRWhDLFFBQVEsQ0FBQyxhQUFhLEVBQUM7SUFDbkIsUUFBUSxDQUFDLGVBQWUsRUFBRTtRQUN0QixJQUFJLFVBQThCLENBQUE7UUFDbEMsRUFBRSxDQUFDLDBDQUEwQyxFQUFFO1lBQzNDLFVBQVUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1lBQzNELE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN4RCxDQUFDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxtREFBbUQsRUFBRTtZQUNwRCxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFBO1lBQ3JFLElBQUksWUFBWSxHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFBO1lBQ2xGLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUNwRSxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ0YsUUFBUSxDQUFDLGVBQWUsRUFBQztRQUNyQixJQUFJLFVBQTZCLENBQUE7UUFDakMsSUFBSSxXQUE4QixDQUFBO1FBQ2xDLEVBQUUsQ0FBQyxtQ0FBbUMsRUFBQztZQUNuQyxVQUFVLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLGlDQUFpQyxDQUFDLENBQUE7WUFDdEUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FB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