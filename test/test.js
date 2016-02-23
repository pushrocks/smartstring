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
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBQ2hELElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzlDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUUvQixRQUFRLENBQUMsYUFBYSxFQUFDO0lBQ25CLFFBQVEsQ0FBQyxRQUFRLEVBQUM7UUFDZCxJQUFJLE9BQU8sR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7UUFDbEYsRUFBRSxDQUFDLHVCQUF1QixFQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxJQUFJO2lCQUNQLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsdUJBQXVCLEVBQUM7WUFDdkIsT0FBTyxDQUFDLElBQUk7aUJBQ1AsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyx1QkFBdUIsRUFBQztZQUN2QixPQUFPLENBQUMsSUFBSTtpQkFDUCxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLDJCQUEyQixFQUFDO1lBQzNCLE9BQU8sQ0FBQyxRQUFRO2lCQUNYLE1BQU0sQ0FBQyxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztRQUN0RSxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyx5QkFBeUIsRUFBQztZQUN6QixPQUFPLENBQUMsTUFBTTtpQkFDVCxNQUFNLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHMvdHlwaW5ncy9tYWluLmQudHNcIiAvPlxubGV0IHNtYXJ0c3RyaW5nID0gcmVxdWlyZShcIi4uL2Rpc3QvaW5kZXguanNcIik7XG5sZXQgc2hvdWxkID0gcmVxdWlyZShcInNob3VsZFwiKTtcblxuZGVzY3JpYmUoXCJzbWFydHN0cmluZ1wiLGZ1bmN0aW9uKCl7XG4gICAgZGVzY3JpYmUoXCIuZ2l0KClcIixmdW5jdGlvbigpe1xuICAgICAgICBsZXQgdGVzdEdpdCA9IHNtYXJ0c3RyaW5nLmdpdChcImdpdCtodHRwczovL2dpdGh1Yi5jb20vcHVzaHJvY2tzL3NtYXJ0c3RyaW5nLmdpdFwiKTtcbiAgICAgICAgaXQoXCJzaG91bGQgcmV0dXJuIGEgLmhvc3RcIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGVzdEdpdC5ob3N0XG4gICAgICAgICAgICAgICAgLnNob3VsZC5lcXVhbChcImdpdGh1Yi5jb21cIik7XG4gICAgICAgIH0pO1xuICAgICAgICBpdChcInNob3VsZCByZXR1cm4gYSAudXNlclwiLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0ZXN0R2l0LnVzZXJcbiAgICAgICAgICAgICAgICAuc2hvdWxkLmVxdWFsKFwicHVzaHJvY2tzXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgaXQoXCJzaG91bGQgcmV0dXJuIGEgLnJlcG9cIixmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGVzdEdpdC5yZXBvXG4gICAgICAgICAgICAgICAgLnNob3VsZC5lcXVhbChcInNtYXJ0c3RyaW5nXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgaXQoXCJzaG91bGQgcmV0dXJuIGEgLmh0dHBzVXJsXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRlc3RHaXQuaHR0cHNVcmxcbiAgICAgICAgICAgICAgICAuc2hvdWxkLmVxdWFsKFwiaHR0cHM6Ly9naXRodWIuY29tL3B1c2hyb2Nrcy9zbWFydHN0cmluZy5naXRcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBpdChcInNob3VsZCByZXR1cm4gYSAuc3NoVXJsXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRlc3RHaXQuc3NoVXJsXG4gICAgICAgICAgICAgICAgLnNob3VsZC5lcXVhbChcImdpdEBnaXRodWIuY29tOnB1c2hyb2Nrcy9zbWFydHN0cmluZy5naXRcIik7XG4gICAgICAgIH0pO1xuICAgIH0pXG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
