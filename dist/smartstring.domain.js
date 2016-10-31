"use strict";
class Domain {
    constructor(domainStringArg) {
        let regexMatches = domainRegex(domainStringArg);
        this.fullName = '';
        for (let i = 1; i <= 5; i++) {
            if (regexMatches[i - 1]) {
                let localMatch = regexMatches[i - 1];
                this['level' + i.toString()] = localMatch;
                if (this.fullName === '') {
                    this.fullName = localMatch;
                }
                else {
                    this.fullName = localMatch + '.' + this.fullName;
                }
            }
            else {
                this['level' + i.toString()] = undefined;
            }
            ;
        }
        ;
        this.protocol = protocolRegex(domainStringArg);
        this.zoneName = this.level2 + '.' + this.level1;
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
        return (stringArg !== '');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdHJpbmcuZG9tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRzdHJpbmcuZG9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQTtJQWFJLFlBQVksZUFBc0I7UUFDOUIsSUFBSSxZQUFZLEdBQUcsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFBO1FBQ2xCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUIsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksVUFBVSxHQUFHLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7Z0JBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFBO2dCQUN6QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxDQUFBLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFBO2dCQUM5QixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBO2dCQUNwRCxDQUFDO1lBQ0wsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFBO1lBQzVDLENBQUM7WUFBQSxDQUFDO1FBQ04sQ0FBQztRQUFBLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7UUFFL0MsVUFBVTtRQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ2hDLENBQUM7Q0FDSjtBQXJDRCx3QkFxQ0M7QUFHRCxJQUFJLFdBQVcsR0FBRyxVQUFTLFNBQWdCO0lBQ3ZDLElBQUksV0FBVyxHQUFHLGdJQUFnSSxDQUFBO0lBQ2xKLElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDOUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFBLENBQUMsMkVBQTJFO0lBQ2xHLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQSxDQUFDLG1HQUFtRztJQUN0SCxJQUFJLG9CQUFvQixHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBUyxTQUFnQjtRQUNwRSxNQUFNLENBQUEsQ0FBQyxTQUFTLEtBQUssRUFBRSxDQUFDLENBQUE7SUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsb0JBQW9CLENBQUE7QUFDL0IsQ0FBQyxDQUFDO0FBRUYsSUFBSSxhQUFhLEdBQUcsVUFBUyxTQUFnQjtJQUN6QyxJQUFJLFdBQVcsR0FBRyxzQkFBc0IsQ0FBQTtJQUN4QyxJQUFJLFlBQVksR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzlDLEVBQUUsQ0FBQSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDZCxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLE1BQU0sQ0FBQyxTQUFTLENBQUE7SUFDcEIsQ0FBQztBQUNMLENBQUMsQ0FBQSJ9