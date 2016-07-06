"use strict";
/**
 * converts an erray of env strings from docker remote api to an usable object.
 * @param envArrayArg
 * @returns {}
 */
exports.makeEnvObject = function (envArrayArg) {
    var returnObject = {};
    var regexString = /(.*)=(.*)/;
    for (var envKey in envArrayArg) {
        var regexMatches = regexString.exec(envArrayArg[envKey]);
        returnObject[regexMatches[1]] = regexMatches[2];
    }
    ;
    return returnObject;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdHJpbmcuZG9ja2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRzdHJpbmcuZG9ja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQTs7OztHQUlHO0FBQ1EscUJBQWEsR0FBRyxVQUFTLFdBQW9CO0lBQ3BELElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUN0QixJQUFJLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDOUIsR0FBRyxDQUFBLENBQUMsSUFBSSxNQUFNLElBQUksV0FBVyxDQUFDLENBQUEsQ0FBQztRQUMzQixJQUFJLFlBQVksR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3pELFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUFBLENBQUM7SUFDRixNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3hCLENBQUMsQ0FBQyJ9