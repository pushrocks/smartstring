"use strict";
var Domain = (function () {
    function Domain(domainStringArg) {
        var regexMatches = domainRegex(domainStringArg);
        this.fullName = "";
        for (var i = 1; i <= 5; i++) {
            if (regexMatches[i - 1]) {
                var localMatch = regexMatches[i - 1];
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
    return Domain;
}());
exports.Domain = Domain;
var domainRegex = function (stringArg) {
    var regexString = /([a-zA-Z0-9\-\_]*)\.{0,1}([a-zA-Z0-9\-\_]*)\.{0,1}([a-zA-Z0-9\-\_]*)\.{0,1}([a-zA-Z0-9\-\_]*)\.{0,1}([a-zA-Z0-9\-\_]*)\.{0,1}$/;
    var regexMatches = regexString.exec(stringArg);
    regexMatches.reverse(); //make sure we build the domain from toplevel to subdomain (reversed order)
    regexMatches.pop(); // pop the last element, which is, since we reversed the Array, the full String of matched elements
    var regexMatchesFiltered = regexMatches.filter(function (stringArg) {
        return (stringArg != "");
    });
    return regexMatchesFiltered;
};
var protocolRegex = function (stringArg) {
    var regexString = /^([a-zA-Z0-9]*):\/\//;
    var regexMatches = regexString.exec(stringArg);
    if (regexMatches) {
        return regexMatches[1];
    }
    else {
        return undefined;
    }
};

