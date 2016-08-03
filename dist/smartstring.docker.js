"use strict";
/**
 * converts an erray of env strings from docker remote api to an usable object.
 * @param envArrayArg
 * @returns {}
 */
exports.makeEnvObject = function (envArrayArg) {
    let returnObject = {};
    let regexString = /(.*)=(.*)/;
    if (typeof envArrayArg !== "undefined") {
        for (let envKey in envArrayArg) {
            let regexMatches = regexString.exec(envArrayArg[envKey]);
            returnObject[regexMatches[1]] = regexMatches[2];
        }
        ;
    }
    return returnObject;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdHJpbmcuZG9ja2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRzdHJpbmcuZG9ja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQTs7OztHQUlHO0FBQ1EscUJBQWEsR0FBRyxVQUFVLFdBQXFCO0lBQ3RELElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUN0QixJQUFJLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDOUIsRUFBRSxDQUFDLENBQUMsT0FBTyxXQUFXLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNyQyxHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDekQsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBQUEsQ0FBQztJQUNOLENBQUM7SUFDRCxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3hCLENBQUMsQ0FBQyJ9