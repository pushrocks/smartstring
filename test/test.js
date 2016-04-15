/// <reference path="../ts/typings/main.d.ts" />
var smartstring = require("../dist/index.js");
var should = require("should");
describe("smartstring", function () {
    describe(".git()", function () {
        var testGit = smartstring.git("git+https://github.com/pushrocks/smartstring.git");
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
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBQ2hELElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzlDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUUvQixRQUFRLENBQUMsYUFBYSxFQUFDO0lBQ25CLFFBQVEsQ0FBQyxRQUFRLEVBQUM7UUFDZCxJQUFJLE9BQU8sR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7UUFDbEYsRUFBRSxDQUFDLHVCQUF1QixFQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxJQUFJO2lCQUNQLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsdUJBQXVCLEVBQUM7WUFDdkIsT0FBTyxDQUFDLElBQUk7aUJBQ1AsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyx1QkFBdUIsRUFBQztZQUN2QixPQUFPLENBQUMsSUFBSTtpQkFDUCxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLDJCQUEyQixFQUFDO1lBQzNCLE9BQU8sQ0FBQyxRQUFRO2lCQUNYLE1BQU0sQ0FBQyxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztRQUN0RSxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyx5QkFBeUIsRUFBQztZQUN6QixPQUFPLENBQUMsTUFBTTtpQkFDVCxNQUFNLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxTQUFTLEVBQUM7UUFDZixRQUFRLENBQUMsZ0JBQWdCLEVBQUM7WUFDdEIsRUFBRSxDQUFDLDRCQUE0QixFQUFDO2dCQUM1QixJQUFJLGNBQWMsR0FBRyxDQUFDLDZCQUE2QixFQUFDLDhCQUE4QixDQUFDLENBQUM7Z0JBQ3BGLElBQUksU0FBUyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNqRSxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDdEQsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDM0QsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90cy90eXBpbmdzL21haW4uZC50c1wiIC8+XG5sZXQgc21hcnRzdHJpbmcgPSByZXF1aXJlKFwiLi4vZGlzdC9pbmRleC5qc1wiKTtcbmxldCBzaG91bGQgPSByZXF1aXJlKFwic2hvdWxkXCIpO1xuXG5kZXNjcmliZShcInNtYXJ0c3RyaW5nXCIsZnVuY3Rpb24oKXtcbiAgICBkZXNjcmliZShcIi5naXQoKVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCB0ZXN0R2l0ID0gc21hcnRzdHJpbmcuZ2l0KFwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9wdXNocm9ja3Mvc21hcnRzdHJpbmcuZ2l0XCIpO1xuICAgICAgICBpdChcInNob3VsZCByZXR1cm4gYSAuaG9zdFwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0ZXN0R2l0Lmhvc3RcbiAgICAgICAgICAgICAgICAuc2hvdWxkLmVxdWFsKFwiZ2l0aHViLmNvbVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGl0KFwic2hvdWxkIHJldHVybiBhIC51c2VyXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRlc3RHaXQudXNlclxuICAgICAgICAgICAgICAgIC5zaG91bGQuZXF1YWwoXCJwdXNocm9ja3NcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBpdChcInNob3VsZCByZXR1cm4gYSAucmVwb1wiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0ZXN0R2l0LnJlcG9cbiAgICAgICAgICAgICAgICAuc2hvdWxkLmVxdWFsKFwic21hcnRzdHJpbmdcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBpdChcInNob3VsZCByZXR1cm4gYSAuaHR0cHNVcmxcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGVzdEdpdC5odHRwc1VybFxuICAgICAgICAgICAgICAgIC5zaG91bGQuZXF1YWwoXCJodHRwczovL2dpdGh1Yi5jb20vcHVzaHJvY2tzL3NtYXJ0c3RyaW5nLmdpdFwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGl0KFwic2hvdWxkIHJldHVybiBhIC5zc2hVcmxcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGVzdEdpdC5zc2hVcmxcbiAgICAgICAgICAgICAgICAuc2hvdWxkLmVxdWFsKFwiZ2l0QGdpdGh1Yi5jb206cHVzaHJvY2tzL3NtYXJ0c3RyaW5nLmdpdFwiKTtcbiAgICAgICAgfSk7XG4gICAgfSlcbiAgICBkZXNjcmliZShcIi5kb2NrZXJcIixmdW5jdGlvbigpe1xuICAgICAgICBkZXNjcmliZShcIi5tYWtlRW52T2JqZWN0XCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGl0KFwic2hvdWxkIGNyZWF0ZSBhIEVudiBPYmplY3RcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCBlbnZTdHJpbmdBcnJheSA9IFtcIlZJUlRVQUxfSE9TVD1zdWIuZG9tYWluLnRsZFwiLFwiREVGQVVMVF9IT1NUPXNvbWUuZG9tYWluLmNvbVwiXTtcbiAgICAgICAgICAgICAgICBsZXQgZW52T2JqZWN0ID0gc21hcnRzdHJpbmcuZG9ja2VyLm1ha2VFbnZPYmplY3QoZW52U3RyaW5nQXJyYXkpO1xuICAgICAgICAgICAgICAgIGVudk9iamVjdC5WSVJUVUFMX0hPU1Quc2hvdWxkLmVxdWFsKFwic3ViLmRvbWFpbi50bGRcIik7XG4gICAgICAgICAgICAgICAgZW52T2JqZWN0LkRFRkFVTFRfSE9TVC5zaG91bGQuZXF1YWwoXCJzb21lLmRvbWFpbi5jb21cIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0pXG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
