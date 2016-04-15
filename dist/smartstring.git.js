"use strict";
/// <reference path="./typings/main.d.ts" />
var plugins = require("./smartstring.plugins");
/* ---------------------------------------------- *
 * ------------------ classes ------------------- *
 * ---------------------------------------------- */
var gitRepo = (function () {
    function gitRepo(stringArg, tokenArg) {
        var regexMatches = gitRegex(stringArg);
        this.host = regexMatches[1];
        this.user = regexMatches[2];
        this.repo = regexMatches[3];
        this.accessToken = tokenArg;
        this.sshUrl = gitLink(this.host, this.user, this.repo, this.accessToken, "ssh");
        this.httpsUrl = gitLink(this.host, this.user, this.repo, this.accessToken, "https");
    }
    ;
    return gitRepo;
}());
/* ---------------------------------------------- *
 * ------------------ helpers ------------------- *
 * ---------------------------------------------- */
var gitRegex = function (stringArg) {
    var regexString = /(?:git\+|git\@|https\:\/\/|)(?:https\:\/\/|)([^\/|\:]*)(?:\/|:)([^\/]+)*(?:\/|:)([^\.]+)/;
    var regexMatches = regexString.exec(stringArg);
    return regexMatches;
};
var gitLink = function (hostArg, userArg, repoArg, tokenArg, linkTypeArg) {
    if (tokenArg === void 0) { tokenArg = ""; }
    var returnString;
    if (tokenArg !== "") {
        tokenArg = tokenArg + "@";
    }
    switch (linkTypeArg) {
        case "https":
            returnString = "https://" +
                tokenArg + hostArg + "/" + userArg + "/" + repoArg + ".git";
            break;
        case "ssh":
            returnString = "git@" +
                hostArg + ":" + userArg + "/" + repoArg + ".git";
            break;
        default:
            plugins.beautylog.error("Link Type " + linkTypeArg + " not known");
            break;
    }
    return returnString;
};
/* ---------------------------------------------- *
 * ------------------ exports ------------------- *
 * ---------------------------------------------- */
var git = function (stringArg, tokenArg) {
    var localGitRepo = new gitRepo(stringArg, tokenArg);
    return localGitRepo;
};
module.exports = git;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0c3RyaW5nLmdpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNENBQTRDO0FBQzVDLElBQU8sT0FBTyxXQUFXLHVCQUF1QixDQUFDLENBQUM7QUFFbEQ7O29EQUVvRDtBQUNwRDtJQU9JLGlCQUFZLFNBQWdCLEVBQUMsUUFBZ0I7UUFDekMsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRixDQUFDOztJQUNMLGNBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBRUQ7O29EQUVvRDtBQUNwRCxJQUFJLFFBQVEsR0FBRyxVQUFTLFNBQWdCO0lBQ3BDLElBQUksV0FBVyxHQUFHLDBGQUEwRixDQUFDO0lBQzdHLElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0MsTUFBTSxDQUFDLFlBQVksQ0FBQztBQUN4QixDQUFDLENBQUM7QUFFRixJQUFJLE9BQU8sR0FBRyxVQUFTLE9BQWMsRUFBRSxPQUFjLEVBQUUsT0FBYyxFQUFFLFFBQW9CLEVBQUUsV0FBVztJQUFqQyx3QkFBb0IsR0FBcEIsYUFBb0I7SUFDdkYsSUFBSSxZQUFZLENBQUM7SUFDakIsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxDQUFBLENBQUM7UUFDakIsUUFBUSxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUE7SUFDN0IsQ0FBQztJQUNELE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbEIsS0FBSyxPQUFPO1lBQ1IsWUFBWSxHQUFJLFVBQVU7Z0JBQ3RCLFFBQVEsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUNoRSxLQUFLLENBQUM7UUFDVixLQUFLLEtBQUs7WUFDTixZQUFZLEdBQUcsTUFBTTtnQkFDakIsT0FBTyxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDckQsS0FBSyxDQUFDO1FBQ1Y7WUFDSSxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsV0FBVyxHQUFHLFlBQVksQ0FBQyxDQUFDO1lBQ25FLEtBQUssQ0FBQztJQUNkLENBQUM7SUFDRCxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVGOztvREFFb0Q7QUFDcEQsSUFBSSxHQUFHLEdBQUcsVUFBUyxTQUFnQixFQUFDLFFBQWdCO0lBQ2hELElBQUksWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBQyxRQUFRLENBQUMsQ0FBQztJQUNuRCxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVGLGlCQUFTLEdBQUcsQ0FBQyIsImZpbGUiOiJzbWFydHN0cmluZy5naXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG5pbXBvcnQgcGx1Z2lucyA9IHJlcXVpcmUoXCIuL3NtYXJ0c3RyaW5nLnBsdWdpbnNcIik7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tIGNsYXNzZXMgLS0tLS0tLS0tLS0tLS0tLS0tLSAqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5jbGFzcyBnaXRSZXBvIHtcbiAgICBob3N0OnN0cmluZztcbiAgICB1c2VyOnN0cmluZztcbiAgICByZXBvOnN0cmluZztcbiAgICBhY2Nlc3NUb2tlbjpzdHJpbmc7XG4gICAgc3NoVXJsOnN0cmluZztcbiAgICBodHRwc1VybDpzdHJpbmc7XG4gICAgY29uc3RydWN0b3Ioc3RyaW5nQXJnOnN0cmluZyx0b2tlbkFyZz86c3RyaW5nKXtcbiAgICAgICAgbGV0IHJlZ2V4TWF0Y2hlcyA9IGdpdFJlZ2V4KHN0cmluZ0FyZyk7XG4gICAgICAgIHRoaXMuaG9zdCA9IHJlZ2V4TWF0Y2hlc1sxXTtcbiAgICAgICAgdGhpcy51c2VyID0gcmVnZXhNYXRjaGVzWzJdO1xuICAgICAgICB0aGlzLnJlcG8gPSByZWdleE1hdGNoZXNbM107XG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSB0b2tlbkFyZztcbiAgICAgICAgdGhpcy5zc2hVcmwgPSBnaXRMaW5rKHRoaXMuaG9zdCx0aGlzLnVzZXIsdGhpcy5yZXBvLHRoaXMuYWNjZXNzVG9rZW4sIFwic3NoXCIpO1xuICAgICAgICB0aGlzLmh0dHBzVXJsID0gZ2l0TGluayh0aGlzLmhvc3QsdGhpcy51c2VyLHRoaXMucmVwbyx0aGlzLmFjY2Vzc1Rva2VuLCBcImh0dHBzXCIpO1xuICAgIH07XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tIGhlbHBlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLSAqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5sZXQgZ2l0UmVnZXggPSBmdW5jdGlvbihzdHJpbmdBcmc6c3RyaW5nKXtcbiAgICBsZXQgcmVnZXhTdHJpbmcgPSAvKD86Z2l0XFwrfGdpdFxcQHxodHRwc1xcOlxcL1xcL3wpKD86aHR0cHNcXDpcXC9cXC98KShbXlxcL3xcXDpdKikoPzpcXC98OikoW15cXC9dKykqKD86XFwvfDopKFteXFwuXSspLztcbiAgICBsZXQgcmVnZXhNYXRjaGVzID0gcmVnZXhTdHJpbmcuZXhlYyhzdHJpbmdBcmcpO1xuICAgIHJldHVybiByZWdleE1hdGNoZXM7XG59O1xuXG5sZXQgZ2l0TGluayA9IGZ1bmN0aW9uKGhvc3RBcmc6c3RyaW5nLCB1c2VyQXJnOnN0cmluZywgcmVwb0FyZzpzdHJpbmcsIHRva2VuQXJnOnN0cmluZyA9IFwiXCIsIGxpbmtUeXBlQXJnKTpzdHJpbmd7XG4gICAgbGV0IHJldHVyblN0cmluZztcbiAgICBpZiAodG9rZW5BcmcgIT09IFwiXCIpe1xuICAgICAgICB0b2tlbkFyZyA9IHRva2VuQXJnICsgXCJAXCJcbiAgICB9XG4gICAgc3dpdGNoIChsaW5rVHlwZUFyZykge1xuICAgICAgICBjYXNlIFwiaHR0cHNcIjpcbiAgICAgICAgICAgIHJldHVyblN0cmluZyA9ICBcImh0dHBzOi8vXCIgK1xuICAgICAgICAgICAgICAgIHRva2VuQXJnICsgaG9zdEFyZyArIFwiL1wiICsgdXNlckFyZyArIFwiL1wiICsgcmVwb0FyZyArIFwiLmdpdFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzc2hcIjpcbiAgICAgICAgICAgIHJldHVyblN0cmluZyA9IFwiZ2l0QFwiICtcbiAgICAgICAgICAgICAgICBob3N0QXJnICsgXCI6XCIgKyB1c2VyQXJnICsgXCIvXCIgKyByZXBvQXJnICsgXCIuZ2l0XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHBsdWdpbnMuYmVhdXR5bG9nLmVycm9yKFwiTGluayBUeXBlIFwiICsgbGlua1R5cGVBcmcgKyBcIiBub3Qga25vd25cIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHJldHVyblN0cmluZztcbn07XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tIGV4cG9ydHMgLS0tLS0tLS0tLS0tLS0tLS0tLSAqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5sZXQgZ2l0ID0gZnVuY3Rpb24oc3RyaW5nQXJnOnN0cmluZyx0b2tlbkFyZz86c3RyaW5nKXtcbiAgICBsZXQgbG9jYWxHaXRSZXBvID0gbmV3IGdpdFJlcG8oc3RyaW5nQXJnLHRva2VuQXJnKTtcbiAgICByZXR1cm4gbG9jYWxHaXRSZXBvO1xufTtcblxuZXhwb3J0ID0gZ2l0OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
