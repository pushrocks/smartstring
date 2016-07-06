"use strict";
var Domain = (function () {
    function Domain(domainStringArg) {
        this.fullName = domainStringArg;
        var regexMatches = domainRegex(domainStringArg);
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
    return Domain;
}());
exports.Domain = Domain;
var domainRegex = function (stringArg) {
    var regexString = /([a-zA-Z0-9]*)\.{0,1}([a-zA-Z0-9]*)\.{0,1}([a-zA-Z0-9]*)\.{0,1}([a-zA-Z0-9]*)\.{0,1}([a-zA-Z0-9]*)\.{0,1}$/;
    var regexMatches = regexString.exec(stringArg);
    regexMatches.reverse();
    var regexMatchesFiltered = regexMatches.filter(function (stringArg) {
        return (stringArg != "");
    });
    return regexMatchesFiltered;
};
var protocolRegex = function (stringArg) {
    var regexString = /^([a-zA-Z0-9]*):\/\//;
    var regexMatches = regexString.exec(stringArg);
    console.log(regexMatches);
    return regexMatches;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdHJpbmcuZG9tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRzdHJpbmcuZG9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQTtJQWFJLGdCQUFZLGVBQXNCO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFaEQsVUFBVTtRQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2pDLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyxBQTdCRCxJQTZCQztBQTdCWSxjQUFNLFNBNkJsQixDQUFBO0FBR0QsSUFBSSxXQUFXLEdBQUcsVUFBUyxTQUFnQjtJQUN2QyxJQUFJLFdBQVcsR0FBRyw0R0FBNEcsQ0FBQztJQUMvSCxJQUFJLFlBQVksR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QixJQUFJLG9CQUFvQixHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBUyxTQUFnQjtRQUNwRSxNQUFNLENBQUEsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUM7SUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsb0JBQW9CLENBQUM7QUFDaEMsQ0FBQyxDQUFDO0FBRUYsSUFBSSxhQUFhLEdBQUcsVUFBUyxTQUFnQjtJQUN6QyxJQUFJLFdBQVcsR0FBRyxzQkFBc0IsQ0FBQztJQUN6QyxJQUFJLFlBQVksR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUIsTUFBTSxDQUFDLFlBQVksQ0FBQztBQUN4QixDQUFDLENBQUEifQ==