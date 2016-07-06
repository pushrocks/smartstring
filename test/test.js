"use strict";
require("typings-test");
var smartstring = require("../dist/index");
var should = require("should");
describe("smartstring", function () {
    describe(".Domain class", function () {
        var testDomain;
        it("should create a new Domain object", function () {
            testDomain = new smartstring.Domain("https://level3D.level2D.level1D");
            testDomain.should.be.instanceof(smartstring.Domain);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sY0FDUCxDQUFDLENBRG9CO0FBQ3JCLElBQVksV0FBVyxXQUFNLGVBQWUsQ0FBQyxDQUFBO0FBQzdDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUUvQixRQUFRLENBQUMsYUFBYSxFQUFDO0lBQ25CLFFBQVEsQ0FBQyxlQUFlLEVBQUM7UUFDckIsSUFBSSxVQUE2QixDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxtQ0FBbUMsRUFBQztZQUNuQyxVQUFVLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7WUFDdkUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyx5QkFBeUIsRUFBQztZQUN6QixVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsdUJBQXVCLEVBQUM7WUFDdkIsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLHVCQUF1QixFQUFDO1lBQ3ZCLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyx1Q0FBdUMsRUFBQztZQUN2QyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBRSxrQ0FBa0MsRUFBQztZQUNuQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxZQUFZLEVBQUM7UUFDbEIsSUFBSSxPQUEyQixDQUFDO1FBQ2hDLEVBQUUsQ0FBQyx1Q0FBdUMsRUFBQztZQUN2QyxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7WUFDdEYsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyx1QkFBdUIsRUFBQztZQUN2QixPQUFPLENBQUMsSUFBSTtpQkFDUCxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLHVCQUF1QixFQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxJQUFJO2lCQUNQLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsdUJBQXVCLEVBQUM7WUFDdkIsT0FBTyxDQUFDLElBQUk7aUJBQ1AsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQywyQkFBMkIsRUFBQztZQUMzQixPQUFPLENBQUMsUUFBUTtpQkFDWCxNQUFNLENBQUMsS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7UUFDdEUsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMseUJBQXlCLEVBQUM7WUFDekIsT0FBTyxDQUFDLE1BQU07aUJBQ1QsTUFBTSxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO1FBQ2xFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUE7SUFDRixRQUFRLENBQUMsU0FBUyxFQUFDO1FBQ2YsUUFBUSxDQUFDLGdCQUFnQixFQUFDO1lBQ3RCLEVBQUUsQ0FBQyw0QkFBNEIsRUFBQztnQkFDNUIsSUFBSSxjQUFjLEdBQUcsQ0FBQyw2QkFBNkIsRUFBQyw4QkFBOEIsQ0FBQyxDQUFDO2dCQUNwRixJQUFJLFNBQVMsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDakUsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3RELFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzNELENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxhQUFhLEVBQUM7UUFDbkIsUUFBUSxDQUFDLGlCQUFpQixFQUFDO1lBQ3ZCLEVBQUUsQ0FBQyw4QkFBOEIsRUFBQztnQkFDOUIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUM7cUJBQ3hFLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3RCLFdBQVcsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDO3FCQUN0RSxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN0QixXQUFXLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztxQkFDdkUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQyJ9