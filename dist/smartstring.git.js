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
exports.gitRepo = gitRepo;
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
exports.git = function (stringArg, tokenArg) {
    var localGitRepo = new gitRepo(stringArg, tokenArg);
    return localGitRepo;
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0c3RyaW5nLmdpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNENBQTRDO0FBQzVDLElBQU8sT0FBTyxXQUFXLHVCQUF1QixDQUFDLENBQUM7QUFFbEQ7O29EQUVvRDtBQUNwRDtJQU9JLGlCQUFZLFNBQWdCLEVBQUMsUUFBZ0I7UUFDekMsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRixDQUFDOztJQUNMLGNBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLGVBQU8sVUFnQm5CLENBQUE7QUFFRDs7b0RBRW9EO0FBQ3BELElBQUksUUFBUSxHQUFHLFVBQVMsU0FBZ0I7SUFDcEMsSUFBSSxXQUFXLEdBQUcsMEZBQTBGLENBQUM7SUFDN0csSUFBSSxZQUFZLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQyxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVGLElBQUksT0FBTyxHQUFHLFVBQVMsT0FBYyxFQUFFLE9BQWMsRUFBRSxPQUFjLEVBQUUsUUFBb0IsRUFBRSxXQUFXO0lBQWpDLHdCQUFvQixHQUFwQixhQUFvQjtJQUN2RixJQUFJLFlBQVksQ0FBQztJQUNqQixFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLENBQUEsQ0FBQztRQUNqQixRQUFRLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQTtJQUM3QixDQUFDO0lBQ0QsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNsQixLQUFLLE9BQU87WUFDUixZQUFZLEdBQUksVUFBVTtnQkFDdEIsUUFBUSxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ2hFLEtBQUssQ0FBQztRQUNWLEtBQUssS0FBSztZQUNOLFlBQVksR0FBRyxNQUFNO2dCQUNqQixPQUFPLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUNyRCxLQUFLLENBQUM7UUFDVjtZQUNJLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxXQUFXLEdBQUcsWUFBWSxDQUFDLENBQUM7WUFDbkUsS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUNELE1BQU0sQ0FBQyxZQUFZLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBRUY7O29EQUVvRDtBQUN6QyxXQUFHLEdBQUcsVUFBUyxTQUFnQixFQUFDLFFBQWdCO0lBQ3ZELElBQUksWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBQyxRQUFRLENBQUMsQ0FBQztJQUNuRCxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3hCLENBQUMsQ0FBQyIsImZpbGUiOiJzbWFydHN0cmluZy5naXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi90eXBpbmdzL21haW4uZC50c1wiIC8+XHJcbmltcG9ydCBwbHVnaW5zID0gcmVxdWlyZShcIi4vc21hcnRzdHJpbmcucGx1Z2luc1wiKTtcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0gY2xhc3NlcyAtLS0tLS0tLS0tLS0tLS0tLS0tICpcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5leHBvcnQgY2xhc3MgZ2l0UmVwbyB7XHJcbiAgICBob3N0OnN0cmluZztcclxuICAgIHVzZXI6c3RyaW5nO1xyXG4gICAgcmVwbzpzdHJpbmc7XHJcbiAgICBhY2Nlc3NUb2tlbjpzdHJpbmc7XHJcbiAgICBzc2hVcmw6c3RyaW5nO1xyXG4gICAgaHR0cHNVcmw6c3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3Ioc3RyaW5nQXJnOnN0cmluZyx0b2tlbkFyZz86c3RyaW5nKXtcclxuICAgICAgICBsZXQgcmVnZXhNYXRjaGVzID0gZ2l0UmVnZXgoc3RyaW5nQXJnKTtcclxuICAgICAgICB0aGlzLmhvc3QgPSByZWdleE1hdGNoZXNbMV07XHJcbiAgICAgICAgdGhpcy51c2VyID0gcmVnZXhNYXRjaGVzWzJdO1xyXG4gICAgICAgIHRoaXMucmVwbyA9IHJlZ2V4TWF0Y2hlc1szXTtcclxuICAgICAgICB0aGlzLmFjY2Vzc1Rva2VuID0gdG9rZW5Bcmc7XHJcbiAgICAgICAgdGhpcy5zc2hVcmwgPSBnaXRMaW5rKHRoaXMuaG9zdCx0aGlzLnVzZXIsdGhpcy5yZXBvLHRoaXMuYWNjZXNzVG9rZW4sIFwic3NoXCIpO1xyXG4gICAgICAgIHRoaXMuaHR0cHNVcmwgPSBnaXRMaW5rKHRoaXMuaG9zdCx0aGlzLnVzZXIsdGhpcy5yZXBvLHRoaXMuYWNjZXNzVG9rZW4sIFwiaHR0cHNcIik7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tIGhlbHBlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLSAqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxubGV0IGdpdFJlZ2V4ID0gZnVuY3Rpb24oc3RyaW5nQXJnOnN0cmluZyl7XHJcbiAgICBsZXQgcmVnZXhTdHJpbmcgPSAvKD86Z2l0XFwrfGdpdFxcQHxodHRwc1xcOlxcL1xcL3wpKD86aHR0cHNcXDpcXC9cXC98KShbXlxcL3xcXDpdKikoPzpcXC98OikoW15cXC9dKykqKD86XFwvfDopKFteXFwuXSspLztcclxuICAgIGxldCByZWdleE1hdGNoZXMgPSByZWdleFN0cmluZy5leGVjKHN0cmluZ0FyZyk7XHJcbiAgICByZXR1cm4gcmVnZXhNYXRjaGVzO1xyXG59O1xyXG5cclxubGV0IGdpdExpbmsgPSBmdW5jdGlvbihob3N0QXJnOnN0cmluZywgdXNlckFyZzpzdHJpbmcsIHJlcG9Bcmc6c3RyaW5nLCB0b2tlbkFyZzpzdHJpbmcgPSBcIlwiLCBsaW5rVHlwZUFyZyk6c3RyaW5ne1xyXG4gICAgbGV0IHJldHVyblN0cmluZztcclxuICAgIGlmICh0b2tlbkFyZyAhPT0gXCJcIil7XHJcbiAgICAgICAgdG9rZW5BcmcgPSB0b2tlbkFyZyArIFwiQFwiXHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKGxpbmtUeXBlQXJnKSB7XHJcbiAgICAgICAgY2FzZSBcImh0dHBzXCI6XHJcbiAgICAgICAgICAgIHJldHVyblN0cmluZyA9ICBcImh0dHBzOi8vXCIgK1xyXG4gICAgICAgICAgICAgICAgdG9rZW5BcmcgKyBob3N0QXJnICsgXCIvXCIgKyB1c2VyQXJnICsgXCIvXCIgKyByZXBvQXJnICsgXCIuZ2l0XCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzc2hcIjpcclxuICAgICAgICAgICAgcmV0dXJuU3RyaW5nID0gXCJnaXRAXCIgK1xyXG4gICAgICAgICAgICAgICAgaG9zdEFyZyArIFwiOlwiICsgdXNlckFyZyArIFwiL1wiICsgcmVwb0FyZyArIFwiLmdpdFwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBwbHVnaW5zLmJlYXV0eWxvZy5lcnJvcihcIkxpbmsgVHlwZSBcIiArIGxpbmtUeXBlQXJnICsgXCIgbm90IGtub3duXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiByZXR1cm5TdHJpbmc7XHJcbn07XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tIGV4cG9ydHMgLS0tLS0tLS0tLS0tLS0tLS0tLSAqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuZXhwb3J0IGxldCBnaXQgPSBmdW5jdGlvbihzdHJpbmdBcmc6c3RyaW5nLHRva2VuQXJnPzpzdHJpbmcpe1xyXG4gICAgbGV0IGxvY2FsR2l0UmVwbyA9IG5ldyBnaXRSZXBvKHN0cmluZ0FyZyx0b2tlbkFyZyk7XHJcbiAgICByZXR1cm4gbG9jYWxHaXRSZXBvO1xyXG59OyJdfQ==
