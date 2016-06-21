"use strict";
require("typings-global");
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
    var regexString = /([a-zA-Z0-9]*)\.{0,1}([a-zA-Z0-9]*)\.{0,1}([a-zA-Z0-9]*)\.{0,1}([a-zA-Z0-9]*)\.{0,1}([a-zA-Z0-9]*)\.{0,1}$/;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LENBQUM7QUFDTCxDQUFDLENBQUEiLCJmaWxlIjoic21hcnRzdHJpbmcuZG9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwidHlwaW5ncy1nbG9iYWxcIlxuaW1wb3J0IHBsdWdpbnMgPSByZXF1aXJlKFwiLi9zbWFydHN0cmluZy5wbHVnaW5zXCIpO1xuXG5leHBvcnQgY2xhc3MgRG9tYWluIHtcbiAgICBmdWxsTmFtZTpzdHJpbmc7XG4gICAgbGV2ZWwxOnN0cmluZztcbiAgICBsZXZlbDI6c3RyaW5nO1xuICAgIGxldmVsMzpzdHJpbmc7XG4gICAgbGV2ZWw0OnN0cmluZztcbiAgICBsZXZlbDU6c3RyaW5nO1xuICAgIHByb3RvY29sOnN0cmluZztcbiAgICB6b25lTmFtZTpzdHJpbmc7XG4gICAgLy9hbGlhc2VzXG4gICAgdG9wTGV2ZWw6c3RyaW5nO1xuICAgIGRvbWFpbk5hbWU7XG4gICAgc3ViRG9tYWluO1xuICAgIGNvbnN0cnVjdG9yKGRvbWFpblN0cmluZ0FyZzpzdHJpbmcpe1xuICAgICAgICBsZXQgcmVnZXhNYXRjaGVzID0gZG9tYWluUmVnZXgoZG9tYWluU3RyaW5nQXJnKTtcbiAgICAgICAgdGhpcy5mdWxsTmFtZSA9IFwiXCI7XG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gNTsgaSsrKXtcbiAgICAgICAgICAgIGlmKHJlZ2V4TWF0Y2hlc1tpIC0gMV0pIHtcbiAgICAgICAgICAgICAgICBsZXQgbG9jYWxNYXRjaCA9IHJlZ2V4TWF0Y2hlc1tpIC0gMV1cbiAgICAgICAgICAgICAgICB0aGlzW1wibGV2ZWxcIiArIGkudG9TdHJpbmcoKV0gPSBsb2NhbE1hdGNoO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZ1bGxOYW1lID09IFwiXCIpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZ1bGxOYW1lID0gbG9jYWxNYXRjaDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZ1bGxOYW1lID0gbG9jYWxNYXRjaCArIFwiLlwiICsgdGhpcy5mdWxsTmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXNbXCJsZXZlbFwiICsgaS50b1N0cmluZygpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucHJvdG9jb2wgPSBwcm90b2NvbFJlZ2V4KGRvbWFpblN0cmluZ0FyZyk7XG4gICAgICAgIHRoaXMuem9uZU5hbWUgPSB0aGlzLmxldmVsMiArIFwiLlwiICsgdGhpcy5sZXZlbDE7IFxuICAgICAgICBcbiAgICAgICAgLy8gYWxpYXNlc1xuICAgICAgICB0aGlzLnRvcExldmVsID0gdGhpcy5sZXZlbDE7XG4gICAgICAgIHRoaXMuZG9tYWluTmFtZSA9IHRoaXMubGV2ZWwyO1xuICAgICAgICB0aGlzLnN1YkRvbWFpbiA9IHRoaXMubGV2ZWwzO1xuICAgIH1cbn1cblxuXG5sZXQgZG9tYWluUmVnZXggPSBmdW5jdGlvbihzdHJpbmdBcmc6c3RyaW5nKXtcbiAgICBsZXQgcmVnZXhTdHJpbmcgPSAvKFthLXpBLVowLTldKilcXC57MCwxfShbYS16QS1aMC05XSopXFwuezAsMX0oW2EtekEtWjAtOV0qKVxcLnswLDF9KFthLXpBLVowLTldKilcXC57MCwxfShbYS16QS1aMC05XSopXFwuezAsMX0kLztcbiAgICBsZXQgcmVnZXhNYXRjaGVzID0gcmVnZXhTdHJpbmcuZXhlYyhzdHJpbmdBcmcpO1xuICAgIHJlZ2V4TWF0Y2hlcy5yZXZlcnNlKCk7IC8vbWFrZSBzdXJlIHdlIGJ1aWxkIHRoZSBkb21haW4gZnJvbSB0b3BsZXZlbCB0byBzdWJkb21haW4gKHJldmVyc2VkIG9yZGVyKVxuICAgIHJlZ2V4TWF0Y2hlcy5wb3AoKTsgLy8gcG9wIHRoZSBsYXN0IGVsZW1lbnQsIHdoaWNoIGlzLCBzaW5jZSB3ZSByZXZlcnNlZCB0aGUgQXJyYXksIHRoZSBmdWxsIFN0cmluZyBvZiBtYXRjaGVkIGVsZW1lbnRzXG4gICAgbGV0IHJlZ2V4TWF0Y2hlc0ZpbHRlcmVkID0gcmVnZXhNYXRjaGVzLmZpbHRlcihmdW5jdGlvbihzdHJpbmdBcmc6c3RyaW5nKXtcbiAgICAgICAgcmV0dXJuKHN0cmluZ0FyZyAhPSBcIlwiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVnZXhNYXRjaGVzRmlsdGVyZWQ7XG59O1xuXG5sZXQgcHJvdG9jb2xSZWdleCA9IGZ1bmN0aW9uKHN0cmluZ0FyZzpzdHJpbmcpe1xuICAgIGxldCByZWdleFN0cmluZyA9IC9eKFthLXpBLVowLTldKik6XFwvXFwvLztcbiAgICBsZXQgcmVnZXhNYXRjaGVzID0gcmVnZXhTdHJpbmcuZXhlYyhzdHJpbmdBcmcpO1xuICAgIGlmKHJlZ2V4TWF0Y2hlcyl7XG4gICAgICAgIHJldHVybiByZWdleE1hdGNoZXNbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG59Il19
