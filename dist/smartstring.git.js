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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0c3RyaW5nLmdpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsUUFBTyxnQkFDUCxDQUFDLENBRHNCO0FBQ3ZCLElBQU8sT0FBTyxXQUFXLHVCQUF1QixDQUFDLENBQUM7QUFFbEQ7O29EQUVvRDtBQUNwRDtJQU9JLGlCQUFZLFNBQWdCLEVBQUMsUUFBZ0I7UUFDekMsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRixDQUFDOztJQUNMLGNBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLGVBQU8sVUFnQm5CLENBQUE7QUFFRDs7b0RBRW9EO0FBQ3BELElBQUksUUFBUSxHQUFHLFVBQVMsU0FBZ0I7SUFDcEMsSUFBSSxXQUFXLEdBQUcsMEZBQTBGLENBQUM7SUFDN0csSUFBSSxZQUFZLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQyxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVGLElBQUksT0FBTyxHQUFHLFVBQVMsT0FBYyxFQUFFLE9BQWMsRUFBRSxPQUFjLEVBQUUsUUFBb0IsRUFBRSxXQUFXO0lBQWpDLHdCQUFvQixHQUFwQixhQUFvQjtJQUN2RixJQUFJLFlBQVksQ0FBQztJQUNqQixFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLENBQUEsQ0FBQztRQUNqQixRQUFRLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQTtJQUM3QixDQUFDO0lBQ0QsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNsQixLQUFLLE9BQU87WUFDUixZQUFZLEdBQUksVUFBVTtnQkFDdEIsUUFBUSxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ2hFLEtBQUssQ0FBQztRQUNWLEtBQUssS0FBSztZQUNOLFlBQVksR0FBRyxNQUFNO2dCQUNqQixPQUFPLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUNyRCxLQUFLLENBQUM7UUFDVjtZQUNJLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxXQUFXLEdBQUcsWUFBWSxDQUFDLENBQUM7WUFDbkUsS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUNELE1BQU0sQ0FBQyxZQUFZLENBQUM7QUFDeEIsQ0FBQyxDQUFDIiwiZmlsZSI6InNtYXJ0c3RyaW5nLmdpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInR5cGluZ3MtZ2xvYmFsXCJcclxuaW1wb3J0IHBsdWdpbnMgPSByZXF1aXJlKFwiLi9zbWFydHN0cmluZy5wbHVnaW5zXCIpO1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLSBjbGFzc2VzIC0tLS0tLS0tLS0tLS0tLS0tLS0gKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbmV4cG9ydCBjbGFzcyBHaXRSZXBvIHtcclxuICAgIGhvc3Q6c3RyaW5nO1xyXG4gICAgdXNlcjpzdHJpbmc7XHJcbiAgICByZXBvOnN0cmluZztcclxuICAgIGFjY2Vzc1Rva2VuOnN0cmluZztcclxuICAgIHNzaFVybDpzdHJpbmc7XHJcbiAgICBodHRwc1VybDpzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihzdHJpbmdBcmc6c3RyaW5nLHRva2VuQXJnPzpzdHJpbmcpe1xyXG4gICAgICAgIGxldCByZWdleE1hdGNoZXMgPSBnaXRSZWdleChzdHJpbmdBcmcpO1xyXG4gICAgICAgIHRoaXMuaG9zdCA9IHJlZ2V4TWF0Y2hlc1sxXTtcclxuICAgICAgICB0aGlzLnVzZXIgPSByZWdleE1hdGNoZXNbMl07XHJcbiAgICAgICAgdGhpcy5yZXBvID0gcmVnZXhNYXRjaGVzWzNdO1xyXG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSB0b2tlbkFyZztcclxuICAgICAgICB0aGlzLnNzaFVybCA9IGdpdExpbmsodGhpcy5ob3N0LHRoaXMudXNlcix0aGlzLnJlcG8sdGhpcy5hY2Nlc3NUb2tlbiwgXCJzc2hcIik7XHJcbiAgICAgICAgdGhpcy5odHRwc1VybCA9IGdpdExpbmsodGhpcy5ob3N0LHRoaXMudXNlcix0aGlzLnJlcG8sdGhpcy5hY2Nlc3NUb2tlbiwgXCJodHRwc1wiKTtcclxuICAgIH07XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0gaGVscGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tICpcclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5sZXQgZ2l0UmVnZXggPSBmdW5jdGlvbihzdHJpbmdBcmc6c3RyaW5nKXtcclxuICAgIGxldCByZWdleFN0cmluZyA9IC8oPzpnaXRcXCt8Z2l0XFxAfGh0dHBzXFw6XFwvXFwvfCkoPzpodHRwc1xcOlxcL1xcL3wpKFteXFwvfFxcOl0qKSg/OlxcL3w6KShbXlxcL10rKSooPzpcXC98OikoW15cXC5dKykvO1xyXG4gICAgbGV0IHJlZ2V4TWF0Y2hlcyA9IHJlZ2V4U3RyaW5nLmV4ZWMoc3RyaW5nQXJnKTtcclxuICAgIHJldHVybiByZWdleE1hdGNoZXM7XHJcbn07XHJcblxyXG5sZXQgZ2l0TGluayA9IGZ1bmN0aW9uKGhvc3RBcmc6c3RyaW5nLCB1c2VyQXJnOnN0cmluZywgcmVwb0FyZzpzdHJpbmcsIHRva2VuQXJnOnN0cmluZyA9IFwiXCIsIGxpbmtUeXBlQXJnKTpzdHJpbmd7XHJcbiAgICBsZXQgcmV0dXJuU3RyaW5nO1xyXG4gICAgaWYgKHRva2VuQXJnICE9PSBcIlwiKXtcclxuICAgICAgICB0b2tlbkFyZyA9IHRva2VuQXJnICsgXCJAXCJcclxuICAgIH1cclxuICAgIHN3aXRjaCAobGlua1R5cGVBcmcpIHtcclxuICAgICAgICBjYXNlIFwiaHR0cHNcIjpcclxuICAgICAgICAgICAgcmV0dXJuU3RyaW5nID0gIFwiaHR0cHM6Ly9cIiArXHJcbiAgICAgICAgICAgICAgICB0b2tlbkFyZyArIGhvc3RBcmcgKyBcIi9cIiArIHVzZXJBcmcgKyBcIi9cIiArIHJlcG9BcmcgKyBcIi5naXRcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInNzaFwiOlxyXG4gICAgICAgICAgICByZXR1cm5TdHJpbmcgPSBcImdpdEBcIiArXHJcbiAgICAgICAgICAgICAgICBob3N0QXJnICsgXCI6XCIgKyB1c2VyQXJnICsgXCIvXCIgKyByZXBvQXJnICsgXCIuZ2l0XCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHBsdWdpbnMuYmVhdXR5bG9nLmVycm9yKFwiTGluayBUeXBlIFwiICsgbGlua1R5cGVBcmcgKyBcIiBub3Qga25vd25cIik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldHVyblN0cmluZztcclxufTsiXX0=
