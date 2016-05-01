/// <reference path="../ts/typings/main.d.ts" />
let smartstring = require("../dist/index.js");
let should = require("should");

describe("smartstring",function(){
    describe(".git()",function(){
        let testGit = smartstring.git("git+https://github.com/pushrocks/smartstring.git");
        it("should return a .host",function(){
            testGit.host
                .should.equal("github.com");
        });
        it("should return a .user",function(){
            testGit.user
                .should.equal("pushrocks");
        });
        it("should return a .repo",function(){
            testGit.repo
                .should.equal("smartstring");
        });
        it("should return a .httpsUrl",function(){
            testGit.httpsUrl
                .should.equal("https://github.com/pushrocks/smartstring.git");
        });
        it("should return a .sshUrl",function(){
            testGit.sshUrl
                .should.equal("git@github.com:pushrocks/smartstring.git");
        });
    })
    describe(".docker",function(){
        describe(".makeEnvObject",function(){
            it("should create a Env Object",function(){
                let envStringArray = ["VIRTUAL_HOST=sub.domain.tld","DEFAULT_HOST=some.domain.com"];
                let envObject = smartstring.docker.makeEnvObject(envStringArray);
                envObject.VIRTUAL_HOST.should.equal("sub.domain.tld");
                envObject.DEFAULT_HOST.should.equal("some.domain.com");
            })
        })
    })
    describe(".typescript",function(){
        describe(".referenceRegex",function(){
            it("should match reference paths",function(){
                smartstring.typescript.regexReferencePath.test("/// <reference path=\"\" />")
                    .should.be.true();
                smartstring.typescript.regexReferencePath.test("/// <reference path='' />")
                    .should.be.true();
                smartstring.typescript.regexReferencePath.test("/// <referencepath=\"\" />")
                    .should.be.false();
            })
        })
    })
});