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
})();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0c3RyaW5nLmdpdC50cyJdLCJuYW1lcyI6WyJnaXRSZXBvIiwiZ2l0UmVwby5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsNENBQTRDO0FBQzVDLElBQU8sT0FBTyxXQUFXLHVCQUF1QixDQUFDLENBQUM7QUFFbEQ7O29EQUVvRDtBQUNwRDtJQU9JQSxpQkFBWUEsU0FBZ0JBLEVBQUNBLFFBQWdCQTtRQUN6Q0MsSUFBSUEsWUFBWUEsR0FBR0EsUUFBUUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7UUFDdkNBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLFlBQVlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQzVCQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUM1QkEsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsWUFBWUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDNUJBLElBQUlBLENBQUNBLFdBQVdBLEdBQUdBLFFBQVFBLENBQUNBO1FBQzVCQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFDQSxJQUFJQSxDQUFDQSxXQUFXQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUM3RUEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7SUFDckZBLENBQUNBOztJQUNMRCxjQUFDQTtBQUFEQSxDQWhCQSxBQWdCQ0EsSUFBQTtBQUVEOztvREFFb0Q7QUFDcEQsSUFBSSxRQUFRLEdBQUcsVUFBUyxTQUFnQjtJQUNwQyxJQUFJLFdBQVcsR0FBRywwRkFBMEYsQ0FBQztJQUM3RyxJQUFJLFlBQVksR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLE1BQU0sQ0FBQyxZQUFZLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBRUYsSUFBSSxPQUFPLEdBQUcsVUFBUyxPQUFjLEVBQUUsT0FBYyxFQUFFLE9BQWMsRUFBRSxRQUFvQixFQUFFLFdBQVc7SUFBakMsd0JBQW9CLEdBQXBCLGFBQW9CO0lBQ3ZGLElBQUksWUFBWSxDQUFDO0lBQ2pCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsQ0FBQSxDQUFDO1FBQ2pCLFFBQVEsR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFBO0lBQzdCLENBQUM7SUFDRCxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLEtBQUssT0FBTztZQUNSLFlBQVksR0FBSSxVQUFVO2dCQUN0QixRQUFRLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDaEUsS0FBSyxDQUFDO1FBQ1YsS0FBSyxLQUFLO1lBQ04sWUFBWSxHQUFHLE1BQU07Z0JBQ2pCLE9BQU8sR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ3JELEtBQUssQ0FBQztRQUNWO1lBQ0ksT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLFdBQVcsR0FBRyxZQUFZLENBQUMsQ0FBQztZQUNuRSxLQUFLLENBQUM7SUFDZCxDQUFDO0lBQ0QsTUFBTSxDQUFDLFlBQVksQ0FBQztBQUN4QixDQUFDLENBQUM7QUFFRjs7b0RBRW9EO0FBQ3BELElBQUksR0FBRyxHQUFHLFVBQVMsU0FBZ0IsRUFBQyxRQUFnQjtJQUNoRCxJQUFJLFlBQVksR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkQsTUFBTSxDQUFDLFlBQVksQ0FBQztBQUN4QixDQUFDLENBQUM7QUFFRixpQkFBUyxHQUFHLENBQUMiLCJmaWxlIjoic21hcnRzdHJpbmcuZ2l0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxuaW1wb3J0IHBsdWdpbnMgPSByZXF1aXJlKFwiLi9zbWFydHN0cmluZy5wbHVnaW5zXCIpO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLSBjbGFzc2VzIC0tLS0tLS0tLS0tLS0tLS0tLS0gKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuY2xhc3MgZ2l0UmVwbyB7XG4gICAgaG9zdDpzdHJpbmc7XG4gICAgdXNlcjpzdHJpbmc7XG4gICAgcmVwbzpzdHJpbmc7XG4gICAgYWNjZXNzVG9rZW46c3RyaW5nO1xuICAgIHNzaFVybDpzdHJpbmc7XG4gICAgaHR0cHNVcmw6c3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHN0cmluZ0FyZzpzdHJpbmcsdG9rZW5Bcmc/OnN0cmluZyl7XG4gICAgICAgIGxldCByZWdleE1hdGNoZXMgPSBnaXRSZWdleChzdHJpbmdBcmcpO1xuICAgICAgICB0aGlzLmhvc3QgPSByZWdleE1hdGNoZXNbMV07XG4gICAgICAgIHRoaXMudXNlciA9IHJlZ2V4TWF0Y2hlc1syXTtcbiAgICAgICAgdGhpcy5yZXBvID0gcmVnZXhNYXRjaGVzWzNdO1xuICAgICAgICB0aGlzLmFjY2Vzc1Rva2VuID0gdG9rZW5Bcmc7XG4gICAgICAgIHRoaXMuc3NoVXJsID0gZ2l0TGluayh0aGlzLmhvc3QsdGhpcy51c2VyLHRoaXMucmVwbyx0aGlzLmFjY2Vzc1Rva2VuLCBcInNzaFwiKTtcbiAgICAgICAgdGhpcy5odHRwc1VybCA9IGdpdExpbmsodGhpcy5ob3N0LHRoaXMudXNlcix0aGlzLnJlcG8sdGhpcy5hY2Nlc3NUb2tlbiwgXCJodHRwc1wiKTtcbiAgICB9O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLSBoZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0gKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xubGV0IGdpdFJlZ2V4ID0gZnVuY3Rpb24oc3RyaW5nQXJnOnN0cmluZyl7XG4gICAgbGV0IHJlZ2V4U3RyaW5nID0gLyg/OmdpdFxcK3xnaXRcXEB8aHR0cHNcXDpcXC9cXC98KSg/Omh0dHBzXFw6XFwvXFwvfCkoW15cXC98XFw6XSopKD86XFwvfDopKFteXFwvXSspKig/OlxcL3w6KShbXlxcLl0rKS87XG4gICAgbGV0IHJlZ2V4TWF0Y2hlcyA9IHJlZ2V4U3RyaW5nLmV4ZWMoc3RyaW5nQXJnKTtcbiAgICByZXR1cm4gcmVnZXhNYXRjaGVzO1xufTtcblxubGV0IGdpdExpbmsgPSBmdW5jdGlvbihob3N0QXJnOnN0cmluZywgdXNlckFyZzpzdHJpbmcsIHJlcG9Bcmc6c3RyaW5nLCB0b2tlbkFyZzpzdHJpbmcgPSBcIlwiLCBsaW5rVHlwZUFyZyk6c3RyaW5ne1xuICAgIGxldCByZXR1cm5TdHJpbmc7XG4gICAgaWYgKHRva2VuQXJnICE9PSBcIlwiKXtcbiAgICAgICAgdG9rZW5BcmcgPSB0b2tlbkFyZyArIFwiQFwiXG4gICAgfVxuICAgIHN3aXRjaCAobGlua1R5cGVBcmcpIHtcbiAgICAgICAgY2FzZSBcImh0dHBzXCI6XG4gICAgICAgICAgICByZXR1cm5TdHJpbmcgPSAgXCJodHRwczovL1wiICtcbiAgICAgICAgICAgICAgICB0b2tlbkFyZyArIGhvc3RBcmcgKyBcIi9cIiArIHVzZXJBcmcgKyBcIi9cIiArIHJlcG9BcmcgKyBcIi5naXRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic3NoXCI6XG4gICAgICAgICAgICByZXR1cm5TdHJpbmcgPSBcImdpdEBcIiArXG4gICAgICAgICAgICAgICAgaG9zdEFyZyArIFwiOlwiICsgdXNlckFyZyArIFwiL1wiICsgcmVwb0FyZyArIFwiLmdpdFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBwbHVnaW5zLmJlYXV0eWxvZy5lcnJvcihcIkxpbmsgVHlwZSBcIiArIGxpbmtUeXBlQXJnICsgXCIgbm90IGtub3duXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5TdHJpbmc7XG59O1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLSBleHBvcnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0gKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xubGV0IGdpdCA9IGZ1bmN0aW9uKHN0cmluZ0FyZzpzdHJpbmcsdG9rZW5Bcmc/OnN0cmluZyl7XG4gICAgbGV0IGxvY2FsR2l0UmVwbyA9IG5ldyBnaXRSZXBvKHN0cmluZ0FyZyx0b2tlbkFyZyk7XG4gICAgcmV0dXJuIGxvY2FsR2l0UmVwbztcbn07XG5cbmV4cG9ydCA9IGdpdDsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=