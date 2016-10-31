"use strict";
/**
 * converts an erray of env strings from docker remote api to an usable object.
 * @param envArrayArg
 * @returns {}
 */
exports.makeEnvObject = function (envArrayArg) {
    let returnObject = {};
    let regexString = /(.*)=(.*)/;
    if (typeof envArrayArg !== 'undefined') {
        for (let envKey in envArrayArg) {
            let regexMatches = regexString.exec(envArrayArg[envKey]);
            returnObject[regexMatches[1]] = regexMatches[2];
        }
        ;
    }
    return returnObject;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdHJpbmcuZG9ja2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRzdHJpbmcuZG9ja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQTs7OztHQUlHO0FBQ1EsUUFBQSxhQUFhLEdBQUcsVUFBVSxXQUFxQjtJQUN0RCxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUE7SUFDckIsSUFBSSxXQUFXLEdBQUcsV0FBVyxDQUFBO0lBQzdCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sV0FBVyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLFlBQVksR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1lBQ3hELFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbkQsQ0FBQztRQUFBLENBQUM7SUFDTixDQUFDO0lBQ0QsTUFBTSxDQUFDLFlBQVksQ0FBQTtBQUN2QixDQUFDLENBQUEifQ==