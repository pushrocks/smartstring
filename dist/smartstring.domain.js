"use strict";
class Domain {
    constructor(domainStringArg) {
        let regexMatches = domainRegex(domainStringArg);
        this.fullName = "";
        for (let i = 1; i <= 5; i++) {
            if (regexMatches[i - 1]) {
                let localMatch = regexMatches[i - 1];
                this["level" + i.toString()] = localMatch;
                if (this.fullName == "") {
                    this.fullName = localMatch;
                }
                else {
                    this.fullName = localMatch + "." + this.fullName;
                }
            }
            else {
                this["level" + i.toString()] = undefined;
            }
            ;
        }
        ;
        this.protocol = protocolRegex(domainStringArg);
        this.zoneName = this.level2 + "." + this.level1;
        // aliases
        this.topLevel = this.level1;
        this.domainName = this.level2;
        this.subDomain = this.level3;
    }
}
exports.Domain = Domain;
let domainRegex = function (stringArg) {
    let regexString = /([a-zA-Z0-9\-\_]*)\.{0,1}([a-zA-Z0-9\-\_]*)\.{0,1}([a-zA-Z0-9\-\_]*)\.{0,1}([a-zA-Z0-9\-\_]*)\.{0,1}([a-zA-Z0-9\-\_]*)\.{0,1}$/;
    let regexMatches = regexString.exec(stringArg);
    regexMatches.reverse(); //make sure we build the domain from toplevel to subdomain (reversed order)
    regexMatches.pop(); // pop the last element, which is, since we reversed the Array, the full String of matched elements
    let regexMatchesFiltered = regexMatches.filter(function (stringArg) {
        return (stringArg != "");
    });
    return regexMatchesFiltered;
};
let protocolRegex = function (stringArg) {
    let regexString = /^([a-zA-Z0-9]*):\/\//;
    let regexMatches = regexString.exec(stringArg);
    if (regexMatches) {
        return regexMatches[1];
    }
    else {
        return undefined;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdHJpbmcuZG9tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRzdHJpbmcuZG9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQTtJQWFJLFlBQVksZUFBc0I7UUFDOUIsSUFBSSxZQUFZLEdBQUcsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDeEIsRUFBRSxDQUFBLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksVUFBVSxHQUFHLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7Z0JBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2dCQUMxQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO2dCQUMvQixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNyRCxDQUFDO1lBQ0wsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQzdDLENBQUM7WUFBQSxDQUFDO1FBQ04sQ0FBQztRQUFBLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFaEQsVUFBVTtRQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2pDLENBQUM7QUFDTCxDQUFDO0FBckNZLGNBQU0sU0FxQ2xCLENBQUE7QUFHRCxJQUFJLFdBQVcsR0FBRyxVQUFTLFNBQWdCO0lBQ3ZDLElBQUksV0FBVyxHQUFHLGdJQUFnSSxDQUFDO0lBQ25KLElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0MsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsMkVBQTJFO0lBQ25HLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLG1HQUFtRztJQUN2SCxJQUFJLG9CQUFvQixHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBUyxTQUFnQjtRQUNwRSxNQUFNLENBQUEsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsb0JBQW9CLENBQUM7QUFDaEMsQ0FBQyxDQUFDO0FBRUYsSUFBSSxhQUFhLEdBQUcsVUFBUyxTQUFnQjtJQUN6QyxJQUFJLFdBQVcsR0FBRyxzQkFBc0IsQ0FBQztJQUN6QyxJQUFJLFlBQVksR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLEVBQUUsQ0FBQSxDQUFDLFlBQVksQ0FBQyxDQUFBLENBQUM7UUFDYixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDckIsQ0FBQztBQUNMLENBQUMsQ0FBQSJ9