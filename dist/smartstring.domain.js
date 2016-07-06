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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdHJpbmcuZG9tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRzdHJpbmcuZG9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQTtJQWFJLGdCQUFZLGVBQXNCO1FBQzlCLElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQ3hCLEVBQUUsQ0FBQSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixJQUFJLFVBQVUsR0FBRyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO2dCQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztnQkFDMUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO29CQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztnQkFDL0IsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDckQsQ0FBQztZQUNMLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQztZQUM3QyxDQUFDO1lBQUEsQ0FBQztRQUNOLENBQUM7UUFBQSxDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRWhELFVBQVU7UUFDVixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNqQyxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7QUFyQ1ksY0FBTSxTQXFDbEIsQ0FBQTtBQUdELElBQUksV0FBVyxHQUFHLFVBQVMsU0FBZ0I7SUFDdkMsSUFBSSxXQUFXLEdBQUcsZ0lBQWdJLENBQUM7SUFDbkosSUFBSSxZQUFZLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQywyRUFBMkU7SUFDbkcsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsbUdBQW1HO0lBQ3ZILElBQUksb0JBQW9CLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFTLFNBQWdCO1FBQ3BFLE1BQU0sQ0FBQSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztBQUNoQyxDQUFDLENBQUM7QUFFRixJQUFJLGFBQWEsR0FBRyxVQUFTLFNBQWdCO0lBQ3pDLElBQUksV0FBVyxHQUFHLHNCQUFzQixDQUFDO0lBQ3pDLElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0MsRUFBRSxDQUFBLENBQUMsWUFBWSxDQUFDLENBQUEsQ0FBQztRQUNiLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNyQixDQUFDO0FBQ0wsQ0FBQyxDQUFBIn0=