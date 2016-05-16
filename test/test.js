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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBQ2hELElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzlDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUUvQixRQUFRLENBQUMsYUFBYSxFQUFDO0lBQ25CLFFBQVEsQ0FBQyxRQUFRLEVBQUM7UUFDZCxJQUFJLE9BQU8sR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7UUFDbEYsRUFBRSxDQUFDLHVCQUF1QixFQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxJQUFJO2lCQUNQLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsdUJBQXVCLEVBQUM7WUFDdkIsT0FBTyxDQUFDLElBQUk7aUJBQ1AsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyx1QkFBdUIsRUFBQztZQUN2QixPQUFPLENBQUMsSUFBSTtpQkFDUCxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLDJCQUEyQixFQUFDO1lBQzNCLE9BQU8sQ0FBQyxRQUFRO2lCQUNYLE1BQU0sQ0FBQyxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztRQUN0RSxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyx5QkFBeUIsRUFBQztZQUN6QixPQUFPLENBQUMsTUFBTTtpQkFDVCxNQUFNLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxTQUFTLEVBQUM7UUFDZixRQUFRLENBQUMsZ0JBQWdCLEVBQUM7WUFDdEIsRUFBRSxDQUFDLDRCQUE0QixFQUFDO2dCQUM1QixJQUFJLGNBQWMsR0FBRyxDQUFDLDZCQUE2QixFQUFDLDhCQUE4QixDQUFDLENBQUM7Z0JBQ3BGLElBQUksU0FBUyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNqRSxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDdEQsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDM0QsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ0YsUUFBUSxDQUFDLGFBQWEsRUFBQztRQUNuQixRQUFRLENBQUMsaUJBQWlCLEVBQUM7WUFDdkIsRUFBRSxDQUFDLDhCQUE4QixFQUFDO2dCQUM5QixXQUFXLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQztxQkFDeEUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdEIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUM7cUJBQ3RFLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3RCLFdBQVcsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDO3FCQUN2RSxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHMvdHlwaW5ncy9tYWluLmQudHNcIiAvPlxyXG5sZXQgc21hcnRzdHJpbmcgPSByZXF1aXJlKFwiLi4vZGlzdC9pbmRleC5qc1wiKTtcclxubGV0IHNob3VsZCA9IHJlcXVpcmUoXCJzaG91bGRcIik7XHJcblxyXG5kZXNjcmliZShcInNtYXJ0c3RyaW5nXCIsZnVuY3Rpb24oKXtcclxuICAgIGRlc2NyaWJlKFwiLmdpdCgpXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgdGVzdEdpdCA9IHNtYXJ0c3RyaW5nLmdpdChcImdpdCtodHRwczovL2dpdGh1Yi5jb20vcHVzaHJvY2tzL3NtYXJ0c3RyaW5nLmdpdFwiKTtcclxuICAgICAgICBpdChcInNob3VsZCByZXR1cm4gYSAuaG9zdFwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRlc3RHaXQuaG9zdFxyXG4gICAgICAgICAgICAgICAgLnNob3VsZC5lcXVhbChcImdpdGh1Yi5jb21cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgcmV0dXJuIGEgLnVzZXJcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0ZXN0R2l0LnVzZXJcclxuICAgICAgICAgICAgICAgIC5zaG91bGQuZXF1YWwoXCJwdXNocm9ja3NcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgcmV0dXJuIGEgLnJlcG9cIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0ZXN0R2l0LnJlcG9cclxuICAgICAgICAgICAgICAgIC5zaG91bGQuZXF1YWwoXCJzbWFydHN0cmluZ1wiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpdChcInNob3VsZCByZXR1cm4gYSAuaHR0cHNVcmxcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0ZXN0R2l0Lmh0dHBzVXJsXHJcbiAgICAgICAgICAgICAgICAuc2hvdWxkLmVxdWFsKFwiaHR0cHM6Ly9naXRodWIuY29tL3B1c2hyb2Nrcy9zbWFydHN0cmluZy5naXRcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgcmV0dXJuIGEgLnNzaFVybFwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRlc3RHaXQuc3NoVXJsXHJcbiAgICAgICAgICAgICAgICAuc2hvdWxkLmVxdWFsKFwiZ2l0QGdpdGh1Yi5jb206cHVzaHJvY2tzL3NtYXJ0c3RyaW5nLmdpdFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbiAgICBkZXNjcmliZShcIi5kb2NrZXJcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIGRlc2NyaWJlKFwiLm1ha2VFbnZPYmplY3RcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpdChcInNob3VsZCBjcmVhdGUgYSBFbnYgT2JqZWN0XCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGxldCBlbnZTdHJpbmdBcnJheSA9IFtcIlZJUlRVQUxfSE9TVD1zdWIuZG9tYWluLnRsZFwiLFwiREVGQVVMVF9IT1NUPXNvbWUuZG9tYWluLmNvbVwiXTtcclxuICAgICAgICAgICAgICAgIGxldCBlbnZPYmplY3QgPSBzbWFydHN0cmluZy5kb2NrZXIubWFrZUVudk9iamVjdChlbnZTdHJpbmdBcnJheSk7XHJcbiAgICAgICAgICAgICAgICBlbnZPYmplY3QuVklSVFVBTF9IT1NULnNob3VsZC5lcXVhbChcInN1Yi5kb21haW4udGxkXCIpO1xyXG4gICAgICAgICAgICAgICAgZW52T2JqZWN0LkRFRkFVTFRfSE9TVC5zaG91bGQuZXF1YWwoXCJzb21lLmRvbWFpbi5jb21cIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBkZXNjcmliZShcIi50eXBlc2NyaXB0XCIsZnVuY3Rpb24oKXtcclxuICAgICAgICBkZXNjcmliZShcIi5yZWZlcmVuY2VSZWdleFwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGl0KFwic2hvdWxkIG1hdGNoIHJlZmVyZW5jZSBwYXRoc1wiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBzbWFydHN0cmluZy50eXBlc2NyaXB0LnJlZ2V4UmVmZXJlbmNlUGF0aC50ZXN0KFwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cXFwiXFxcIiAvPlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zaG91bGQuYmUudHJ1ZSgpO1xyXG4gICAgICAgICAgICAgICAgc21hcnRzdHJpbmcudHlwZXNjcmlwdC5yZWdleFJlZmVyZW5jZVBhdGgudGVzdChcIi8vLyA8cmVmZXJlbmNlIHBhdGg9JycgLz5cIilcclxuICAgICAgICAgICAgICAgICAgICAuc2hvdWxkLmJlLnRydWUoKTtcclxuICAgICAgICAgICAgICAgIHNtYXJ0c3RyaW5nLnR5cGVzY3JpcHQucmVnZXhSZWZlcmVuY2VQYXRoLnRlc3QoXCIvLy8gPHJlZmVyZW5jZXBhdGg9XFxcIlxcXCIgLz5cIilcclxuICAgICAgICAgICAgICAgICAgICAuc2hvdWxkLmJlLmZhbHNlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn0pOyJdfQ==
