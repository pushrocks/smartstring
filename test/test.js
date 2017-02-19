"use strict";
require("typings-test");
const smartstring = require("../dist/index");
const smartchai_1 = require("smartchai");
describe('smartstring', function () {
    describe('.Base64 class', function () {
        let testBase64;
        it('expect create a valid instance of Base64', function () {
            testBase64 = new smartstring.Base64('somestring', 'string');
            smartchai_1.expect(testBase64).be.instanceOf(smartstring.Base64);
        });
        it('expect read output a file as base64 and base64uri', function () {
            smartchai_1.expect(testBase64.base64String).not.equal(testBase64.base64UriString);
            let testBase64_2 = new smartstring.Base64(testBase64.base64UriString, 'base64uri');
            smartchai_1.expect(testBase64_2.simpleString).equal(testBase64.simpleString);
        });
    });
    describe('.Domain class', function () {
        let testDomain;
        let testDomain2;
        it('expect create a new Domain object', function () {
            testDomain = new smartstring.Domain('https://level3D.level2D.level1D');
            smartchai_1.expect(testDomain).be.instanceof(smartstring.Domain);
            console.log(testDomain);
        });
        it('expect have a .topLevel', function () {
            smartchai_1.expect(testDomain.topLevel).equal('level1D');
        });
        it('expect have a .level2', function () {
            smartchai_1.expect(testDomain.level2).equal('level2D');
        });
        it('expect have a .level3', function () {
            smartchai_1.expect(testDomain.level3).equal('level3D');
        });
        it('expect have the correct dns zone name', function () {
            smartchai_1.expect(testDomain.zoneName).equal('level2D.level1D');
        });
        it('expect have the correct protocol', function () {
            smartchai_1.expect(testDomain.protocol).equal('https');
        });
        it('testDomain2 expect be a basic domain', function () {
            testDomain2 = new smartstring.Domain('bleu.de');
            console.log(testDomain2);
        });
    });
    describe('.Git class', function () {
        let testGit;
        it('expect create a new Git class GitRepo', function () {
            testGit = new smartstring.GitRepo('git+https://github.com/pushrocks/smartstring.git');
            smartchai_1.expect(testGit).be.instanceof(smartstring.GitRepo);
        });
        it('expect return a .host', function () {
            smartchai_1.expect(testGit.host).equal('github.com');
        });
        it('expect return a .user', function () {
            smartchai_1.expect(testGit.user).equal('pushrocks');
        });
        it('expect return a .repo', function () {
            smartchai_1.expect(testGit.repo).equal('smartstring');
        });
        it('expect return a .httpsUrl', function () {
            smartchai_1.expect(testGit.httpsUrl).equal('https://github.com/pushrocks/smartstring.git');
        });
        it('expect return a .sshUrl', function () {
            smartchai_1.expect(testGit.sshUrl).equal('git@github.com:pushrocks/smartstring.git');
        });
    });
    describe('.docker', function () {
        describe('.makeEnvObject', function () {
            it('expect create a Env Object', function () {
                let envStringArray = ['VIRTUAL_HOST=sub.domain.tld', 'DEFAULT_HOST=some.domain.com'];
                let envObject = smartstring.docker.makeEnvObject(envStringArray);
                smartchai_1.expect(envObject.VIRTUAL_HOST).to.equal('sub.domain.tld');
                smartchai_1.expect(envObject.DEFAULT_HOST).to.equal('some.domain.com');
            });
        });
    });
    describe('.indent', function () {
        let testString = `
                    base
                        expect be indented
                            some more

                    base
                        indented
                `;
        describe('.normalize()', function () {
            it('expect normalize a string', function () {
                testString = smartstring.indent.normalize(testString);
                console.log(testString);
                let zoneNameArg = 'test1';
                let destinationIpArg = '111';
            });
        });
        describe('.indentWithPrefix', function () {
            it('expect indent', function () {
                testString = smartstring.indent.indentWithPrefix(testString, '>> ');
                console.log(testString);
            });
        });
    });
    describe('.typescript', function () {
        describe('.referenceRegex', function () {
            it('expect match reference paths', function () {
                smartchai_1.expect(smartstring.typescript.regexReferencePath.test('/// <reference path=\"\" />')).to.be.true;
                smartchai_1.expect(smartstring.typescript.regexReferencePath.test("/// <reference path='' />")).to.be.true;
                smartchai_1.expect(smartstring.typescript.regexReferencePath.test('/// <referencepath=\"\" />')).to.be.false;
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUNyQiw2Q0FBNEM7QUFDNUMseUNBQWtDO0FBRWxDLFFBQVEsQ0FBQyxhQUFhLEVBQUU7SUFDdEIsUUFBUSxDQUFDLGVBQWUsRUFBRTtRQUN4QixJQUFJLFVBQThCLENBQUE7UUFDbEMsRUFBRSxDQUFDLDBDQUEwQyxFQUFFO1lBQzdDLFVBQVUsR0FBRyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1lBQzNELGtCQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdEQsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsbURBQW1ELEVBQUU7WUFDdEQsa0JBQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUE7WUFDckUsSUFBSSxZQUFZLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUE7WUFDbEYsa0JBQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUNsRSxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0YsUUFBUSxDQUFDLGVBQWUsRUFBRTtRQUN4QixJQUFJLFVBQThCLENBQUE7UUFDbEMsSUFBSSxXQUErQixDQUFBO1FBQ25DLEVBQUUsQ0FBQyxtQ0FBbUMsRUFBRTtZQUN0QyxVQUFVLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLGlDQUFpQyxDQUFDLENBQUE7WUFDdEUsa0JBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFF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