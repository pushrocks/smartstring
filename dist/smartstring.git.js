"use strict";
/* ---------------------------------------------- *
 * ------------------ classes ------------------- *
 * ---------------------------------------------- */
class GitRepo {
    constructor(stringArg, tokenArg) {
        let regexMatches = gitRegex(stringArg);
        this.host = regexMatches[1];
        this.user = regexMatches[2];
        this.repo = regexMatches[3];
        this.accessToken = tokenArg;
        this.sshUrl = gitLink(this.host, this.user, this.repo, this.accessToken, 'ssh');
        this.httpsUrl = gitLink(this.host, this.user, this.repo, this.accessToken, 'https');
    }
}
exports.GitRepo = GitRepo;
/* ---------------------------------------------- *
 * ------------------ helpers ------------------- *
 * ---------------------------------------------- */
let gitRegex = function (stringArg) {
    let regexString = /([a-zA-Z0-9\-\.]*)(?:\/|\:)([a-zA-Z0-9\-]*)(?:\/)([a-zA-Z0-9\-]*)(?:\.git)/;
    let regexMatches = regexString.exec(stringArg);
    return regexMatches;
};
let gitLink = function (hostArg, userArg, repoArg, tokenArg = '', linkTypeArg) {
    let returnString;
    if (tokenArg !== '') {
        tokenArg = tokenArg + '@';
    }
    switch (linkTypeArg) {
        case 'https':
            returnString = 'https://' +
                tokenArg + hostArg + '/' + userArg + '/' + repoArg + '.git';
            break;
        case 'ssh':
            returnString = 'git@' +
                hostArg + ':' + userArg + '/' + repoArg + '.git';
            break;
        default:
            console.error('Link Type ' + linkTypeArg + ' not known');
            break;
    }
    return returnString;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdHJpbmcuZ2l0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRzdHJpbmcuZ2l0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQTs7b0RBRW9EO0FBQ3BEO0lBT0ksWUFBWSxTQUFpQixFQUFDLFFBQWlCO1FBQzNDLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQTtRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQzVFLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDcEYsQ0FBQztDQUNKO0FBaEJELDBCQWdCQztBQUVEOztvREFFb0Q7QUFDcEQsSUFBSSxRQUFRLEdBQUcsVUFBUyxTQUFnQjtJQUNwQyxJQUFJLFdBQVcsR0FBRyw0RUFBNEUsQ0FBQTtJQUM5RixJQUFJLFlBQVksR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzlDLE1BQU0sQ0FBQyxZQUFZLENBQUE7QUFDdkIsQ0FBQyxDQUFBO0FBRUQsSUFBSSxPQUFPLEdBQUcsVUFBUyxPQUFlLEVBQUUsT0FBZSxFQUFFLE9BQWUsRUFBRSxXQUFtQixFQUFFLEVBQUUsV0FBVztJQUN4RyxJQUFJLFlBQVksQ0FBQTtJQUNoQixFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQixRQUFRLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQTtJQUM3QixDQUFDO0lBQ0QsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNsQixLQUFLLE9BQU87WUFDUixZQUFZLEdBQUcsVUFBVTtnQkFDckIsUUFBUSxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsTUFBTSxDQUFBO1lBQy9ELEtBQUssQ0FBQTtRQUNULEtBQUssS0FBSztZQUNOLFlBQVksR0FBRyxNQUFNO2dCQUNqQixPQUFPLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUNyRCxLQUFLLENBQUE7UUFDVDtZQUNJLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLFdBQVcsR0FBRyxZQUFZLENBQUMsQ0FBQTtZQUN4RCxLQUFLLENBQUE7SUFDYixDQUFDO0lBQ0QsTUFBTSxDQUFDLFlBQVksQ0FBQTtBQUN2QixDQUFDLENBQUEifQ==