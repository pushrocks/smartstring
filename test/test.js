"use strict";
require("typings-test");
var smartstring = require("../dist/index");
var should = require("should");
describe("smartstring", function () {
    describe(".Domain class", function () {
        var testDomain;
        var testDomain2;
        it("should create a new Domain object", function () {
            testDomain = new smartstring.Domain("https://level3D.level2D.level1D");
            testDomain.should.be.instanceof(smartstring.Domain);
            console.log(testDomain);
        });
        it("should have a .topLevel", function () {
            testDomain.topLevel.should.equal("level1D");
        });
        it("should have a .level2", function () {
            testDomain.level2.should.equal("level2D");
        });
        it("should have a .level3", function () {
            testDomain.level3.should.equal("level3D");
        });
        it("should have the correct dns zone name", function () {
            testDomain.zoneName.should.equal("level2D.level1D");
        });
        it("should have the correct protocol", function () {
            testDomain.protocol.should.equal("https");
        });
        it("testDomain2 should be a basic domain", function () {
            testDomain2 = new smartstring.Domain("bleu.de");
            console.log(testDomain2);
        });
    });
    describe(".Git class", function () {
        var testGit;
        it("should create a new Git class GitRepo", function () {
            testGit = new smartstring.GitRepo("git+https://github.com/pushrocks/smartstring.git");
            testGit.should.be.instanceof(smartstring.GitRepo);
        });
        it("should return a .host", function () {
            testGit.host
                .should.equal("github.com");
        });
        it("should return a .user", function () {
            testGit.user
                .should.equal("pushrocks");
        });
        it("should return a .repo", function () {
            testGit.repo
                .should.equal("smartstring");
        });
        it("should return a .httpsUrl", function () {
            testGit.httpsUrl
                .should.equal("https://github.com/pushrocks/smartstring.git");
        });
        it("should return a .sshUrl", function () {
            testGit.sshUrl
                .should.equal("git@github.com:pushrocks/smartstring.git");
        });
    });
    describe(".docker", function () {
        describe(".makeEnvObject", function () {
            it("should create a Env Object", function () {
                var envStringArray = ["VIRTUAL_HOST=sub.domain.tld", "DEFAULT_HOST=some.domain.com"];
                var envObject = smartstring.docker.makeEnvObject(envStringArray);
                envObject.VIRTUAL_HOST.should.equal("sub.domain.tld");
                envObject.DEFAULT_HOST.should.equal("some.domain.com");
            });
        });
    });
    describe(".typescript", function () {
        describe(".referenceRegex", function () {
            it("should match reference paths", function () {
                smartstring.typescript.regexReferencePath.test("/// <reference path=\"\" />")
                    .should.be.true();
                smartstring.typescript.regexReferencePath.test("/// <reference path='' />")
                    .should.be.true();
                smartstring.typescript.regexReferencePath.test("/// <referencepath=\"\" />")
                    .should.be.false();
            });
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QkFBa0IsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUM7cUJBQ3ZFLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInR5cGluZ3MtdGVzdFwiXG5pbXBvcnQgKiBhcyBzbWFydHN0cmluZyBmcm9tIFwiLi4vZGlzdC9pbmRleFwiO1xubGV0IHNob3VsZCA9IHJlcXVpcmUoXCJzaG91bGRcIik7XG5cbmRlc2NyaWJlKFwic21hcnRzdHJpbmdcIixmdW5jdGlvbigpe1xuICAgIGRlc2NyaWJlKFwiLkRvbWFpbiBjbGFzc1wiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCB0ZXN0RG9tYWluOnNtYXJ0c3RyaW5nLkRvbWFpbjtcbiAgICAgICAgbGV0IHRlc3REb21haW4yOnNtYXJ0c3RyaW5nLkRvbWFpbjtcbiAgICAgICAgaXQoXCJzaG91bGQgY3JlYXRlIGEgbmV3IERvbWFpbiBvYmplY3RcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGVzdERvbWFpbiA9IG5ldyBzbWFydHN0cmluZy5Eb21haW4oXCJodHRwczovL2xldmVsM0QubGV2ZWwyRC5sZXZlbDFEXCIpO1xuICAgICAgICAgICAgdGVzdERvbWFpbi5zaG91bGQuYmUuaW5zdGFuY2VvZihzbWFydHN0cmluZy5Eb21haW4pO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGVzdERvbWFpbik7XG4gICAgICAgIH0pO1xuICAgICAgICBpdChcInNob3VsZCBoYXZlIGEgLnRvcExldmVsXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRlc3REb21haW4udG9wTGV2ZWwuc2hvdWxkLmVxdWFsKFwibGV2ZWwxRFwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGl0KFwic2hvdWxkIGhhdmUgYSAubGV2ZWwyXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRlc3REb21haW4ubGV2ZWwyLnNob3VsZC5lcXVhbChcImxldmVsMkRcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBpdChcInNob3VsZCBoYXZlIGEgLmxldmVsM1wiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0ZXN0RG9tYWluLmxldmVsMy5zaG91bGQuZXF1YWwoXCJsZXZlbDNEXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgaXQoXCJzaG91bGQgaGF2ZSB0aGUgY29ycmVjdCBkbnMgem9uZSBuYW1lXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRlc3REb21haW4uem9uZU5hbWUuc2hvdWxkLmVxdWFsKFwibGV2ZWwyRC5sZXZlbDFEXCIpO1xuICAgICAgICB9KVxuICAgICAgICBpdCAoXCJzaG91bGQgaGF2ZSB0aGUgY29ycmVjdCBwcm90b2NvbFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0ZXN0RG9tYWluLnByb3RvY29sLnNob3VsZC5lcXVhbChcImh0dHBzXCIpO1xuICAgICAgICB9KVxuICAgICAgICBpdChcInRlc3REb21haW4yIHNob3VsZCBiZSBhIGJhc2ljIGRvbWFpblwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0ZXN0RG9tYWluMiA9IG5ldyBzbWFydHN0cmluZy5Eb21haW4oXCJibGV1LmRlXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGVzdERvbWFpbjIpO1xuICAgICAgICB9KTtcbiAgICB9KVxuICAgIGRlc2NyaWJlKFwiLkdpdCBjbGFzc1wiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCB0ZXN0R2l0OnNtYXJ0c3RyaW5nLkdpdFJlcG87XG4gICAgICAgIGl0KFwic2hvdWxkIGNyZWF0ZSBhIG5ldyBHaXQgY2xhc3MgR2l0UmVwb1wiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0ZXN0R2l0ID0gbmV3IHNtYXJ0c3RyaW5nLkdpdFJlcG8oXCJnaXQraHR0cHM6Ly9naXRodWIuY29tL3B1c2hyb2Nrcy9zbWFydHN0cmluZy5naXRcIik7XG4gICAgICAgICAgICB0ZXN0R2l0LnNob3VsZC5iZS5pbnN0YW5jZW9mKHNtYXJ0c3RyaW5nLkdpdFJlcG8pO1xuICAgICAgICB9KVxuICAgICAgICBpdChcInNob3VsZCByZXR1cm4gYSAuaG9zdFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0ZXN0R2l0Lmhvc3RcbiAgICAgICAgICAgICAgICAuc2hvdWxkLmVxdWFsKFwiZ2l0aHViLmNvbVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGl0KFwic2hvdWxkIHJldHVybiBhIC51c2VyXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRlc3RHaXQudXNlclxuICAgICAgICAgICAgICAgIC5zaG91bGQuZXF1YWwoXCJwdXNocm9ja3NcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBpdChcInNob3VsZCByZXR1cm4gYSAucmVwb1wiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0ZXN0R2l0LnJlcG9cbiAgICAgICAgICAgICAgICAuc2hvdWxkLmVxdWFsKFwic21hcnRzdHJpbmdcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBpdChcInNob3VsZCByZXR1cm4gYSAuaHR0cHNVcmxcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGVzdEdpdC5odHRwc1VybFxuICAgICAgICAgICAgICAgIC5zaG91bGQuZXF1YWwoXCJodHRwczovL2dpdGh1Yi5jb20vcHVzaHJvY2tzL3NtYXJ0c3RyaW5nLmdpdFwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGl0KFwic2hvdWxkIHJldHVybiBhIC5zc2hVcmxcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGVzdEdpdC5zc2hVcmxcbiAgICAgICAgICAgICAgICAuc2hvdWxkLmVxdWFsKFwiZ2l0QGdpdGh1Yi5jb206cHVzaHJvY2tzL3NtYXJ0c3RyaW5nLmdpdFwiKTtcbiAgICAgICAgfSk7XG4gICAgfSlcbiAgICBkZXNjcmliZShcIi5kb2NrZXJcIixmdW5jdGlvbigpe1xuICAgICAgICBkZXNjcmliZShcIi5tYWtlRW52T2JqZWN0XCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGl0KFwic2hvdWxkIGNyZWF0ZSBhIEVudiBPYmplY3RcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCBlbnZTdHJpbmdBcnJheSA9IFtcIlZJUlRVQUxfSE9TVD1zdWIuZG9tYWluLnRsZFwiLFwiREVGQVVMVF9IT1NUPXNvbWUuZG9tYWluLmNvbVwiXTtcbiAgICAgICAgICAgICAgICBsZXQgZW52T2JqZWN0OmFueSA9IHNtYXJ0c3RyaW5nLmRvY2tlci5tYWtlRW52T2JqZWN0KGVudlN0cmluZ0FycmF5KTtcbiAgICAgICAgICAgICAgICBlbnZPYmplY3QuVklSVFVBTF9IT1NULnNob3VsZC5lcXVhbChcInN1Yi5kb21haW4udGxkXCIpO1xuICAgICAgICAgICAgICAgIGVudk9iamVjdC5ERUZBVUxUX0hPU1Quc2hvdWxkLmVxdWFsKFwic29tZS5kb21haW4uY29tXCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIGRlc2NyaWJlKFwiLnR5cGVzY3JpcHRcIixmdW5jdGlvbigpe1xuICAgICAgICBkZXNjcmliZShcIi5yZWZlcmVuY2VSZWdleFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpdChcInNob3VsZCBtYXRjaCByZWZlcmVuY2UgcGF0aHNcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHNtYXJ0c3RyaW5nLnR5cGVzY3JpcHQucmVnZXhSZWZlcmVuY2VQYXRoLnRlc3QoXCIvLy8gPHJlZmVyZW5jZSBwYXRoPVxcXCJcXFwiIC8+XCIpXG4gICAgICAgICAgICAgICAgICAgIC5zaG91bGQuYmUudHJ1ZSgpO1xuICAgICAgICAgICAgICAgIHNtYXJ0c3RyaW5nLnR5cGVzY3JpcHQucmVnZXhSZWZlcmVuY2VQYXRoLnRlc3QoXCIvLy8gPHJlZmVyZW5jZSBwYXRoPScnIC8+XCIpXG4gICAgICAgICAgICAgICAgICAgIC5zaG91bGQuYmUudHJ1ZSgpO1xuICAgICAgICAgICAgICAgIHNtYXJ0c3RyaW5nLnR5cGVzY3JpcHQucmVnZXhSZWZlcmVuY2VQYXRoLnRlc3QoXCIvLy8gPHJlZmVyZW5jZXBhdGg9XFxcIlxcXCIgLz5cIilcbiAgICAgICAgICAgICAgICAgICAgLnNob3VsZC5iZS5mYWxzZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9KVxufSk7Il19
