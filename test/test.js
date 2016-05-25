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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sY0FDUCxDQUFDLENBRG9CO0FBQ3JCLElBQVksV0FBVyxXQUFNLGVBQWUsQ0FBQyxDQUFBO0FBQzdDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUUvQixRQUFRLENBQUMsYUFBYSxFQUFDO0lBQ25CLFFBQVEsQ0FBQyxlQUFlLEVBQUM7UUFDckIsSUFBSSxVQUE2QixDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxtQ0FBbUMsRUFBQztZQUNuQyxVQUFVLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7WUFDdkUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyx5QkFBeUIsRUFBQztZQUN6QixVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsdUJBQXVCLEVBQUM7WUFDdkIsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLHVCQUF1QixFQUFDO1lBQ3ZCLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyx1Q0FBdUMsRUFBQztZQUN2QyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBRSxrQ0FBa0MsRUFBQztZQUNuQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxZQUFZLEVBQUM7UUFDbEIsSUFBSSxPQUEyQixDQUFDO1FBQ2hDLEVBQUUsQ0FBQyx1Q0FBdUMsRUFBQztZQUN2QyxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7WUFDdEYsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyx1QkFBdUIsRUFBQztZQUN2QixPQUFPLENBQUMsSUFBSTtpQkFDUCxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLHVCQUF1QixFQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxJQUFJO2lCQUNQLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsdUJBQXVCLEVBQUM7WUFDdkIsT0FBTyxDQUFDLElBQUk7aUJBQ1AsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQywyQkFBMkIsRUFBQztZQUMzQixPQUFPLENBQUMsUUFBUTtpQkFDWCxNQUFNLENBQUMsS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7UUFDdEUsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMseUJBQXlCLEVBQUM7WUFDekIsT0FBTyxDQUFDLE1BQU07aUJBQ1QsTUFBTSxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO1FBQ2xFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUE7SUFDRixRQUFRLENBQUMsU0FBUyxFQUFDO1FBQ2YsUUFBUSxDQUFDLGdCQUFnQixFQUFDO1lBQ3RCLEVBQUUsQ0FBQyw0QkFBNEIsRUFBQztnQkFDNUIsSUFBSSxjQUFjLEdBQUcsQ0FBQyw2QkFBNkIsRUFBQyw4QkFBOEIsQ0FBQyxDQUFDO2dCQUNwRixJQUFJLFNBQVMsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDakUsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3RELFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzNELENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxhQUFhLEVBQUM7UUFDbkIsUUFBUSxDQUFDLGlCQUFpQixFQUFDO1lBQ3ZCLEVBQUUsQ0FBQyw4QkFBOEIsRUFBQztnQkFDOUIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUM7cUJBQ3hFLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3RCLFdBQVcsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDO3FCQUN0RSxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN0QixXQUFXLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztxQkFDdkUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwidHlwaW5ncy10ZXN0XCJcclxuaW1wb3J0ICogYXMgc21hcnRzdHJpbmcgZnJvbSBcIi4uL2Rpc3QvaW5kZXhcIjtcclxubGV0IHNob3VsZCA9IHJlcXVpcmUoXCJzaG91bGRcIik7XHJcblxyXG5kZXNjcmliZShcInNtYXJ0c3RyaW5nXCIsZnVuY3Rpb24oKXtcclxuICAgIGRlc2NyaWJlKFwiLkRvbWFpbiBjbGFzc1wiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbGV0IHRlc3REb21haW46c21hcnRzdHJpbmcuRG9tYWluO1xyXG4gICAgICAgIGl0KFwic2hvdWxkIGNyZWF0ZSBhIG5ldyBEb21haW4gb2JqZWN0XCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGVzdERvbWFpbiA9IG5ldyBzbWFydHN0cmluZy5Eb21haW4oXCJodHRwczovL2xldmVsM0QubGV2ZWwyRC5sZXZlbDFEXCIpO1xyXG4gICAgICAgICAgICB0ZXN0RG9tYWluLnNob3VsZC5iZS5pbnN0YW5jZW9mKHNtYXJ0c3RyaW5nLkRvbWFpbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgaGF2ZSBhIC50b3BMZXZlbFwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRlc3REb21haW4udG9wTGV2ZWwuc2hvdWxkLmVxdWFsKFwibGV2ZWwxRFwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpdChcInNob3VsZCBoYXZlIGEgLmxldmVsMlwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRlc3REb21haW4ubGV2ZWwyLnNob3VsZC5lcXVhbChcImxldmVsMkRcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgaGF2ZSBhIC5sZXZlbDNcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0ZXN0RG9tYWluLmxldmVsMy5zaG91bGQuZXF1YWwoXCJsZXZlbDNEXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGl0KFwic2hvdWxkIGhhdmUgdGhlIGNvcnJlY3QgZG5zIHpvbmUgbmFtZVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRlc3REb21haW4uem9uZU5hbWUuc2hvdWxkLmVxdWFsKFwibGV2ZWwyRC5sZXZlbDFEXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaXQgKFwic2hvdWxkIGhhdmUgdGhlIGNvcnJlY3QgcHJvdG9jb2xcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0ZXN0RG9tYWluLnByb3RvY29sLnNob3VsZC5lcXVhbChcImh0dHBzXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgZGVzY3JpYmUoXCIuR2l0IGNsYXNzXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgdGVzdEdpdDpzbWFydHN0cmluZy5HaXRSZXBvO1xyXG4gICAgICAgIGl0KFwic2hvdWxkIGNyZWF0ZSBhIG5ldyBHaXQgY2xhc3MgR2l0UmVwb1wiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRlc3RHaXQgPSBuZXcgc21hcnRzdHJpbmcuR2l0UmVwbyhcImdpdCtodHRwczovL2dpdGh1Yi5jb20vcHVzaHJvY2tzL3NtYXJ0c3RyaW5nLmdpdFwiKTtcclxuICAgICAgICAgICAgdGVzdEdpdC5zaG91bGQuYmUuaW5zdGFuY2VvZihzbWFydHN0cmluZy5HaXRSZXBvKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGl0KFwic2hvdWxkIHJldHVybiBhIC5ob3N0XCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGVzdEdpdC5ob3N0XHJcbiAgICAgICAgICAgICAgICAuc2hvdWxkLmVxdWFsKFwiZ2l0aHViLmNvbVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpdChcInNob3VsZCByZXR1cm4gYSAudXNlclwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRlc3RHaXQudXNlclxyXG4gICAgICAgICAgICAgICAgLnNob3VsZC5lcXVhbChcInB1c2hyb2Nrc1wiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpdChcInNob3VsZCByZXR1cm4gYSAucmVwb1wiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRlc3RHaXQucmVwb1xyXG4gICAgICAgICAgICAgICAgLnNob3VsZC5lcXVhbChcInNtYXJ0c3RyaW5nXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGl0KFwic2hvdWxkIHJldHVybiBhIC5odHRwc1VybFwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRlc3RHaXQuaHR0cHNVcmxcclxuICAgICAgICAgICAgICAgIC5zaG91bGQuZXF1YWwoXCJodHRwczovL2dpdGh1Yi5jb20vcHVzaHJvY2tzL3NtYXJ0c3RyaW5nLmdpdFwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpdChcInNob3VsZCByZXR1cm4gYSAuc3NoVXJsXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGVzdEdpdC5zc2hVcmxcclxuICAgICAgICAgICAgICAgIC5zaG91bGQuZXF1YWwoXCJnaXRAZ2l0aHViLmNvbTpwdXNocm9ja3Mvc21hcnRzdHJpbmcuZ2l0XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIGRlc2NyaWJlKFwiLmRvY2tlclwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZGVzY3JpYmUoXCIubWFrZUVudk9iamVjdFwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGl0KFwic2hvdWxkIGNyZWF0ZSBhIEVudiBPYmplY3RcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGVudlN0cmluZ0FycmF5ID0gW1wiVklSVFVBTF9IT1NUPXN1Yi5kb21haW4udGxkXCIsXCJERUZBVUxUX0hPU1Q9c29tZS5kb21haW4uY29tXCJdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVudk9iamVjdCA9IHNtYXJ0c3RyaW5nLmRvY2tlci5tYWtlRW52T2JqZWN0KGVudlN0cmluZ0FycmF5KTtcclxuICAgICAgICAgICAgICAgIGVudk9iamVjdC5WSVJUVUFMX0hPU1Quc2hvdWxkLmVxdWFsKFwic3ViLmRvbWFpbi50bGRcIik7XHJcbiAgICAgICAgICAgICAgICBlbnZPYmplY3QuREVGQVVMVF9IT1NULnNob3VsZC5lcXVhbChcInNvbWUuZG9tYWluLmNvbVwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIGRlc2NyaWJlKFwiLnR5cGVzY3JpcHRcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIGRlc2NyaWJlKFwiLnJlZmVyZW5jZVJlZ2V4XCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaXQoXCJzaG91bGQgbWF0Y2ggcmVmZXJlbmNlIHBhdGhzXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHNtYXJ0c3RyaW5nLnR5cGVzY3JpcHQucmVnZXhSZWZlcmVuY2VQYXRoLnRlc3QoXCIvLy8gPHJlZmVyZW5jZSBwYXRoPVxcXCJcXFwiIC8+XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNob3VsZC5iZS50cnVlKCk7XHJcbiAgICAgICAgICAgICAgICBzbWFydHN0cmluZy50eXBlc2NyaXB0LnJlZ2V4UmVmZXJlbmNlUGF0aC50ZXN0KFwiLy8vIDxyZWZlcmVuY2UgcGF0aD0nJyAvPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zaG91bGQuYmUudHJ1ZSgpO1xyXG4gICAgICAgICAgICAgICAgc21hcnRzdHJpbmcudHlwZXNjcmlwdC5yZWdleFJlZmVyZW5jZVBhdGgudGVzdChcIi8vLyA8cmVmZXJlbmNlcGF0aD1cXFwiXFxcIiAvPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zaG91bGQuYmUuZmFsc2UoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufSk7Il19
