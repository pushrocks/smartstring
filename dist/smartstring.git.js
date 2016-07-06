"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdHJpbmcuZ2l0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRzdHJpbmcuZ2l0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSx1QkFBdUIsQ0FBQyxDQUFBO0FBRWpEOztvREFFb0Q7QUFDcEQ7SUFPSSxpQkFBWSxTQUFnQixFQUFDLFFBQWdCO1FBQ3pDLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckYsQ0FBQzs7SUFDTCxjQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCWSxlQUFPLFVBZ0JuQixDQUFBO0FBRUQ7O29EQUVvRDtBQUNwRCxJQUFJLFFBQVEsR0FBRyxVQUFTLFNBQWdCO0lBQ3BDLElBQUksV0FBVyxHQUFHLDRFQUE0RSxDQUFDO0lBQy9GLElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0MsTUFBTSxDQUFDLFlBQVksQ0FBQztBQUN4QixDQUFDLENBQUM7QUFFRixJQUFJLE9BQU8sR0FBRyxVQUFTLE9BQWMsRUFBRSxPQUFjLEVBQUUsT0FBYyxFQUFFLFFBQW9CLEVBQUUsV0FBVztJQUFqQyx3QkFBb0IsR0FBcEIsYUFBb0I7SUFDdkYsSUFBSSxZQUFZLENBQUM7SUFDakIsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxDQUFBLENBQUM7UUFDakIsUUFBUSxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUE7SUFDN0IsQ0FBQztJQUNELE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbEIsS0FBSyxPQUFPO1lBQ1IsWUFBWSxHQUFJLFVBQVU7Z0JBQ3RCLFFBQVEsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUNoRSxLQUFLLENBQUM7UUFDVixLQUFLLEtBQUs7WUFDTixZQUFZLEdBQUcsTUFBTTtnQkFDakIsT0FBTyxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDckQsS0FBSyxDQUFDO1FBQ1Y7WUFDSSxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsV0FBVyxHQUFHLFlBQVksQ0FBQyxDQUFDO1lBQ25FLEtBQUssQ0FBQztJQUNkLENBQUM7SUFDRCxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3hCLENBQUMsQ0FBQyJ9