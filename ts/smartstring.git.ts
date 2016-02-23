/// <reference path="./typings/main.d.ts" />
import plugins = require("./smartstring.plugins");

/* ---------------------------------------------- *
 * ------------------ classes ------------------- *
 * ---------------------------------------------- */
class gitRepo {
    host:string;
    user:string;
    repo:string;
    accessToken:string;
    sshUrl:string;
    httpsUrl:string;
    constructor(stringArg:string,tokenArg?:string){
        let regexMatches = gitRegex(stringArg);
        this.host = regexMatches[1];
        this.user = regexMatches[2];
        this.repo = regexMatches[3];
        this.accessToken = tokenArg;
        this.sshUrl = gitLink(this.host,this.user,this.repo,this.accessToken, "ssh");
        this.httpsUrl = gitLink(this.host,this.user,this.repo,this.accessToken, "https");
    };
}

/* ---------------------------------------------- *
 * ------------------ helpers ------------------- *
 * ---------------------------------------------- */
let gitRegex = function(stringArg:string){
    let regexString = /(?:git\+|git\@|https\:\/\/|)(?:https\:\/\/|)([^\/|\:]*)(?:\/|:)([^\/]+)*(?:\/|:)([^\.]+)/;
    let regexMatches = regexString.exec(stringArg);
    return regexMatches;
};

let gitLink = function(hostArg:string, userArg:string, repoArg:string, tokenArg:string = "", linkTypeArg):string{
    let returnString;
    if (tokenArg !== ""){
        tokenArg = tokenArg + "@"
    }
    switch (linkTypeArg) {
        case "https":
            returnString =  "https://" +
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
let git = function(stringArg:string,tokenArg?:string){
    let localGitRepo = new gitRepo(stringArg,tokenArg);
    return localGitRepo;
};

export = git;