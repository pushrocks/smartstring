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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0c3RyaW5nLmdpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNENBQTRDO0FBQzVDLElBQU8sT0FBTyxXQUFXLHVCQUF1QixDQUFDLENBQUM7QUFFbEQ7O29EQUVvRDtBQUNwRDtJQU9JLGlCQUFZLFNBQWdCLEVBQUMsUUFBZ0I7UUFDekMsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRixDQUFDOztJQUNMLGNBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLGVBQU8sVUFnQm5CLENBQUE7QUFFRDs7b0RBRW9EO0FBQ3BELElBQUksUUFBUSxHQUFHLFVBQVMsU0FBZ0I7SUFDcEMsSUFBSSxXQUFXLEdBQUcsMEZBQTBGLENBQUM7SUFDN0csSUFBSSxZQUFZLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQyxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVGLElBQUksT0FBTyxHQUFHLFVBQVMsT0FBYyxFQUFFLE9BQWMsRUFBRSxPQUFjLEVBQUUsUUFBb0IsRUFBRSxXQUFXO0lBQWpDLHdCQUFvQixHQUFwQixhQUFvQjtJQUN2RixJQUFJLFlBQVksQ0FBQztJQUNqQixFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLENBQUEsQ0FBQztRQUNqQixRQUFRLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQTtJQUM3QixDQUFDO0lBQ0QsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNsQixLQUFLLE9BQU87WUFDUixZQUFZLEdBQUksVUFBVTtnQkFDdEIsUUFBUSxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ2hFLEtBQUssQ0FBQztRQUNWLEtBQUssS0FBSztZQUNOLFlBQVksR0FBRyxNQUFNO2dCQUNqQixPQUFPLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUNyRCxLQUFLLENBQUM7UUFDVjtZQUNJLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxXQUFXLEdBQUcsWUFBWSxDQUFDLENBQUM7WUFDbkUsS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUNELE1BQU0sQ0FBQyxZQUFZLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBRUY7O29EQUVvRDtBQUN6QyxXQUFHLEdBQUcsVUFBUyxTQUFnQixFQUFDLFFBQWdCO0lBQ3ZELElBQUksWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBQyxRQUFRLENBQUMsQ0FBQztJQUNuRCxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3hCLENBQUMsQ0FBQyIsImZpbGUiOiJzbWFydHN0cmluZy5naXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG5pbXBvcnQgcGx1Z2lucyA9IHJlcXVpcmUoXCIuL3NtYXJ0c3RyaW5nLnBsdWdpbnNcIik7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tIGNsYXNzZXMgLS0tLS0tLS0tLS0tLS0tLS0tLSAqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5leHBvcnQgY2xhc3MgZ2l0UmVwbyB7XG4gICAgaG9zdDpzdHJpbmc7XG4gICAgdXNlcjpzdHJpbmc7XG4gICAgcmVwbzpzdHJpbmc7XG4gICAgYWNjZXNzVG9rZW46c3RyaW5nO1xuICAgIHNzaFVybDpzdHJpbmc7XG4gICAgaHR0cHNVcmw6c3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHN0cmluZ0FyZzpzdHJpbmcsdG9rZW5Bcmc/OnN0cmluZyl7XG4gICAgICAgIGxldCByZWdleE1hdGNoZXMgPSBnaXRSZWdleChzdHJpbmdBcmcpO1xuICAgICAgICB0aGlzLmhvc3QgPSByZWdleE1hdGNoZXNbMV07XG4gICAgICAgIHRoaXMudXNlciA9IHJlZ2V4TWF0Y2hlc1syXTtcbiAgICAgICAgdGhpcy5yZXBvID0gcmVnZXhNYXRjaGVzWzNdO1xuICAgICAgICB0aGlzLmFjY2Vzc1Rva2VuID0gdG9rZW5Bcmc7XG4gICAgICAgIHRoaXMuc3NoVXJsID0gZ2l0TGluayh0aGlzLmhvc3QsdGhpcy51c2VyLHRoaXMucmVwbyx0aGlzLmFjY2Vzc1Rva2VuLCBcInNzaFwiKTtcbiAgICAgICAgdGhpcy5odHRwc1VybCA9IGdpdExpbmsodGhpcy5ob3N0LHRoaXMudXNlcix0aGlzLnJlcG8sdGhpcy5hY2Nlc3NUb2tlbiwgXCJodHRwc1wiKTtcbiAgICB9O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLSBoZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0gKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xubGV0IGdpdFJlZ2V4ID0gZnVuY3Rpb24oc3RyaW5nQXJnOnN0cmluZyl7XG4gICAgbGV0IHJlZ2V4U3RyaW5nID0gLyg/OmdpdFxcK3xnaXRcXEB8aHR0cHNcXDpcXC9cXC98KSg/Omh0dHBzXFw6XFwvXFwvfCkoW15cXC98XFw6XSopKD86XFwvfDopKFteXFwvXSspKig/OlxcL3w6KShbXlxcLl0rKS87XG4gICAgbGV0IHJlZ2V4TWF0Y2hlcyA9IHJlZ2V4U3RyaW5nLmV4ZWMoc3RyaW5nQXJnKTtcbiAgICByZXR1cm4gcmVnZXhNYXRjaGVzO1xufTtcblxubGV0IGdpdExpbmsgPSBmdW5jdGlvbihob3N0QXJnOnN0cmluZywgdXNlckFyZzpzdHJpbmcsIHJlcG9Bcmc6c3RyaW5nLCB0b2tlbkFyZzpzdHJpbmcgPSBcIlwiLCBsaW5rVHlwZUFyZyk6c3RyaW5ne1xuICAgIGxldCByZXR1cm5TdHJpbmc7XG4gICAgaWYgKHRva2VuQXJnICE9PSBcIlwiKXtcbiAgICAgICAgdG9rZW5BcmcgPSB0b2tlbkFyZyArIFwiQFwiXG4gICAgfVxuICAgIHN3aXRjaCAobGlua1R5cGVBcmcpIHtcbiAgICAgICAgY2FzZSBcImh0dHBzXCI6XG4gICAgICAgICAgICByZXR1cm5TdHJpbmcgPSAgXCJodHRwczovL1wiICtcbiAgICAgICAgICAgICAgICB0b2tlbkFyZyArIGhvc3RBcmcgKyBcIi9cIiArIHVzZXJBcmcgKyBcIi9cIiArIHJlcG9BcmcgKyBcIi5naXRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic3NoXCI6XG4gICAgICAgICAgICByZXR1cm5TdHJpbmcgPSBcImdpdEBcIiArXG4gICAgICAgICAgICAgICAgaG9zdEFyZyArIFwiOlwiICsgdXNlckFyZyArIFwiL1wiICsgcmVwb0FyZyArIFwiLmdpdFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBwbHVnaW5zLmJlYXV0eWxvZy5lcnJvcihcIkxpbmsgVHlwZSBcIiArIGxpbmtUeXBlQXJnICsgXCIgbm90IGtub3duXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5TdHJpbmc7XG59O1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLSBleHBvcnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0gKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuZXhwb3J0IGxldCBnaXQgPSBmdW5jdGlvbihzdHJpbmdBcmc6c3RyaW5nLHRva2VuQXJnPzpzdHJpbmcpe1xuICAgIGxldCBsb2NhbEdpdFJlcG8gPSBuZXcgZ2l0UmVwbyhzdHJpbmdBcmcsdG9rZW5BcmcpO1xuICAgIHJldHVybiBsb2NhbEdpdFJlcG87XG59OyJdfQ==
