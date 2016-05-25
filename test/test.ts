import "typings-test"
import * as smartstring from "../dist/index";
let should = require("should");

describe("smartstring",function(){
    describe(".Domain class",function(){
        let testDomain:smartstring.Domain;
        it("should create a new Domain object",function(){
            testDomain = new smartstring.Domain("level3D.level2D.level1D");
            testDomain.should.be.instanceof(smartstring.Domain);
        });
        it("should have a .topLevel",function(){
            testDomain.topLevel.should.equal("level1D");
        });
        it("should have a .level2",function(){
            testDomain.level2.should.equal("level2D");
        });
        it("should have a .level3",function(){
            testDomain.level3.should.equal("level3D");
        });
    })
    describe(".Git class",function(){
        let testGit:smartstring.GitRepo;
        it("should create a new Git class GitRepo",function(){
            testGit = new smartstring.GitRepo("git+https://github.com/pushrocks/smartstring.git");
            testGit.should.be.instanceof(smartstring.GitRepo);
        })
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