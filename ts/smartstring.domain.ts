import * as plugins from "./smartstring.plugins";

export class Domain {
    fullName:string;
    level1:string;
    level2:string;
    level3:string;
    level4:string;
    level5:string;
    protocol:string;
    zoneName:string;
    //aliases
    topLevel:string;
    domainName;
    subDomain;
    constructor(domainStringArg:string){
        this.fullName = domainStringArg;
        let regexMatches = domainRegex(domainStringArg);
        this.level1 = regexMatches[0];
        this.level2 = regexMatches[1];
        this.level3 = regexMatches[2];
        this.level4 = regexMatches[3];
        this.level5 = regexMatches[4];
        this.protocol = protocolRegex(domainStringArg)[1];
        this.zoneName = this.level2 + "." + this.level1; 
        
        // aliases
        this.topLevel = this.level1;
        this.domainName = this.level2;
        this.subDomain = this.level3;
    }
}


let domainRegex = function(stringArg:string){
    let regexString = /([a-zA-Z0-9]*)\.{0,1}([a-zA-Z0-9]*)\.{0,1}([a-zA-Z0-9]*)\.{0,1}([a-zA-Z0-9]*)\.{0,1}([a-zA-Z0-9]*)\.{0,1}$/;
    let regexMatches = regexString.exec(stringArg);
    regexMatches.reverse();
    let regexMatchesFiltered = regexMatches.filter(function(stringArg:string){
        return(stringArg != "");
    });
    return regexMatchesFiltered;
};

let protocolRegex = function(stringArg:string){
    let regexString = /^([a-zA-Z0-9]*):\/\//;
    let regexMatches = regexString.exec(stringArg);
    console.log(regexMatches);
    return regexMatches;
}