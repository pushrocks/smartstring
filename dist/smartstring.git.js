"use strict";
require("typings-global");
var plugins = require("./smartstring.plugins");
/* ---------------------------------------------- *
 * ------------------ classes ------------------- *
 * ---------------------------------------------- */
var GitRepo = (function () {
    function GitRepo(stringArg, tokenArg) {
        var regexMatches = gitRegex(stringArg);
        this.host = regexMatches[1];
        this.user = regexMatches[2];
        this.repo = regexMatches[3];
        this.accessToken = tokenArg;
        this.sshUrl = gitLink(this.host, this.user, this.repo, this.accessToken, "ssh");
        this.httpsUrl = gitLink(this.host, this.user, this.repo, this.accessToken, "https");
    }
    ;
    return GitRepo;
}());
exports.GitRepo = GitRepo;
/* ---------------------------------------------- *
 * ------------------ helpers ------------------- *
 * ---------------------------------------------- */
var gitRegex = function (stringArg) {
    var regexString = /([a-zA-Z0-9\-\.]*)(?:\/|\:)([a-zA-Z0-9\-]*)(?:\/)([a-zA-Z0-9\-]*)(?:\.git)/;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0c3RyaW5nLmdpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsUUFBTyxnQkFDUCxDQUFDLENBRHNCO0FBQ3ZCLElBQU8sT0FBTyxXQUFXLHVCQUF1QixDQUFDLENBQUM7QUFFbEQ7O29EQUVvRDtBQUNwRDtJQU9JLGlCQUFZLFNBQWdCLEVBQUMsUUFBZ0I7UUFDekMsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRixDQUFDOztJQUNMLGNBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLGVBQU8sVUFnQm5CLENBQUE7QUFFRDs7b0RBRW9EO0FBQ3BELElBQUksUUFBUSxHQUFHLFVBQVMsU0FBZ0I7SUFDcEMsSUFBSSxXQUFXLEdBQUcsNEVBQTRFLENBQUM7SUFDL0YsSUFBSSxZQUFZLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQyxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVGLElBQUksT0FBTyxHQUFHLFVBQVMsT0FBYyxFQUFFLE9BQWMsRUFBRSxPQUFjLEVBQUUsUUFBb0IsRUFBRSxXQUFXO0lBQWpDLHdCQUFvQixHQUFwQixhQUFvQjtJQUN2RixJQUFJLFlBQVksQ0FBQztJQUNqQixFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLENBQUEsQ0FBQztRQUNqQixRQUFRLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQTtJQUM3QixDQUFDO0lBQ0QsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNsQixLQUFLLE9BQU87WUFDUixZQUFZLEdBQUksVUFBVTtnQkFDdEIsUUFBUSxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ2hFLEtBQUssQ0FBQztRQUNWLEtBQUssS0FBSztZQUNOLFlBQVksR0FBRyxNQUFNO2dCQUNqQixPQUFPLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUNyRCxLQUFLLENBQUM7UUFDVjtZQUNJLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxXQUFXLEdBQUcsWUFBWSxDQUFDLENBQUM7WUFDbkUsS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUNELE1BQU0sQ0FBQyxZQUFZLENBQUM7QUFDeEIsQ0FBQyxDQUFDIiwiZmlsZSI6InNtYXJ0c3RyaW5nLmdpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInR5cGluZ3MtZ2xvYmFsXCJcbmltcG9ydCBwbHVnaW5zID0gcmVxdWlyZShcIi4vc21hcnRzdHJpbmcucGx1Z2luc1wiKTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0gY2xhc3NlcyAtLS0tLS0tLS0tLS0tLS0tLS0tICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbmV4cG9ydCBjbGFzcyBHaXRSZXBvIHtcbiAgICBob3N0OnN0cmluZztcbiAgICB1c2VyOnN0cmluZztcbiAgICByZXBvOnN0cmluZztcbiAgICBhY2Nlc3NUb2tlbjpzdHJpbmc7XG4gICAgc3NoVXJsOnN0cmluZztcbiAgICBodHRwc1VybDpzdHJpbmc7XG4gICAgY29uc3RydWN0b3Ioc3RyaW5nQXJnOnN0cmluZyx0b2tlbkFyZz86c3RyaW5nKXtcbiAgICAgICAgbGV0IHJlZ2V4TWF0Y2hlcyA9IGdpdFJlZ2V4KHN0cmluZ0FyZyk7XG4gICAgICAgIHRoaXMuaG9zdCA9IHJlZ2V4TWF0Y2hlc1sxXTtcbiAgICAgICAgdGhpcy51c2VyID0gcmVnZXhNYXRjaGVzWzJdO1xuICAgICAgICB0aGlzLnJlcG8gPSByZWdleE1hdGNoZXNbM107XG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSB0b2tlbkFyZztcbiAgICAgICAgdGhpcy5zc2hVcmwgPSBnaXRMaW5rKHRoaXMuaG9zdCx0aGlzLnVzZXIsdGhpcy5yZXBvLHRoaXMuYWNjZXNzVG9rZW4sIFwic3NoXCIpO1xuICAgICAgICB0aGlzLmh0dHBzVXJsID0gZ2l0TGluayh0aGlzLmhvc3QsdGhpcy51c2VyLHRoaXMucmVwbyx0aGlzLmFjY2Vzc1Rva2VuLCBcImh0dHBzXCIpO1xuICAgIH07XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tIGhlbHBlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLSAqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5sZXQgZ2l0UmVnZXggPSBmdW5jdGlvbihzdHJpbmdBcmc6c3RyaW5nKXtcbiAgICBsZXQgcmVnZXhTdHJpbmcgPSAvKFthLXpBLVowLTlcXC1cXC5dKikoPzpcXC98XFw6KShbYS16QS1aMC05XFwtXSopKD86XFwvKShbYS16QS1aMC05XFwtXSopKD86XFwuZ2l0KS87XG4gICAgbGV0IHJlZ2V4TWF0Y2hlcyA9IHJlZ2V4U3RyaW5nLmV4ZWMoc3RyaW5nQXJnKTtcbiAgICByZXR1cm4gcmVnZXhNYXRjaGVzO1xufTtcblxubGV0IGdpdExpbmsgPSBmdW5jdGlvbihob3N0QXJnOnN0cmluZywgdXNlckFyZzpzdHJpbmcsIHJlcG9Bcmc6c3RyaW5nLCB0b2tlbkFyZzpzdHJpbmcgPSBcIlwiLCBsaW5rVHlwZUFyZyk6c3RyaW5ne1xuICAgIGxldCByZXR1cm5TdHJpbmc7XG4gICAgaWYgKHRva2VuQXJnICE9PSBcIlwiKXtcbiAgICAgICAgdG9rZW5BcmcgPSB0b2tlbkFyZyArIFwiQFwiXG4gICAgfVxuICAgIHN3aXRjaCAobGlua1R5cGVBcmcpIHtcbiAgICAgICAgY2FzZSBcImh0dHBzXCI6XG4gICAgICAgICAgICByZXR1cm5TdHJpbmcgPSAgXCJodHRwczovL1wiICtcbiAgICAgICAgICAgICAgICB0b2tlbkFyZyArIGhvc3RBcmcgKyBcIi9cIiArIHVzZXJBcmcgKyBcIi9cIiArIHJlcG9BcmcgKyBcIi5naXRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic3NoXCI6XG4gICAgICAgICAgICByZXR1cm5TdHJpbmcgPSBcImdpdEBcIiArXG4gICAgICAgICAgICAgICAgaG9zdEFyZyArIFwiOlwiICsgdXNlckFyZyArIFwiL1wiICsgcmVwb0FyZyArIFwiLmdpdFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBwbHVnaW5zLmJlYXV0eWxvZy5lcnJvcihcIkxpbmsgVHlwZSBcIiArIGxpbmtUeXBlQXJnICsgXCIgbm90IGtub3duXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5TdHJpbmc7XG59OyJdfQ==
