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
});