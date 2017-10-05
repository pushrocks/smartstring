"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * splits a string into an array
 * @param stringArg
 */
let splitStringAtLineBreak = (stringArg) => {
    let resultArray = stringArg.split('\n');
    return cleanStringArray(resultArray);
};
/**
 * joins a string together again
 * @param stringArrayArg
 */
let joinStringWithLineBreaks = (stringArrayArg) => {
    let resultString = '';
    for (let line of stringArrayArg) {
        resultString = resultString + line + '\n'; // add new line at end
    }
    return resultString;
};
/**
 * cleans first and last line in case they are empty
 * @param stringArrayArg
 */
let cleanStringArray = (stringArrayArg) => {
    let testRegex = /^[\s]*$/;
    if (testRegex.test(stringArrayArg[0])) {
        stringArrayArg.shift();
    }
    if (testRegex.test(stringArrayArg[stringArrayArg.length - 1])) {
        stringArrayArg.pop();
    }
    return stringArrayArg;
};
/**
 * indent an array
 * @param stringArg
 * @param spaceAmount
 */
exports.indent = (stringArg, spaceAmount) => {
    let localStringArray = splitStringAtLineBreak(stringArg);
    for (let stringArg of localStringArray) {
        stringArg = ' '.repeat(spaceAmount) + stringArg;
    }
    let resultString = joinStringWithLineBreaks(localStringArray);
    return resultString;
};
/**
 * indents a string with prefix
 * @param stringArg
 * @param prefixArg
 */
exports.indentWithPrefix = (stringArg, prefixArg) => {
    let resultString;
    let stringArray = splitStringAtLineBreak(stringArg);
    let resultArray = [];
    for (let stringItem of stringArray) {
        resultArray.push(prefixArg + stringItem);
    }
    resultString = joinStringWithLineBreaks(resultArray);
    return resultString;
};
exports.normalize = (stringArg) => {
    let resultString;
    let splitStringArray = splitStringAtLineBreak(stringArg);
    let minCommonLeftOffset;
    let deIndentRegex = /^(\s*)/;
    let emptyLineRegex = /^(\s*)$/;
    for (let stringItem of splitStringArray) {
        let offsetString = deIndentRegex.exec(stringItem)[1];
        if ((typeof minCommonLeftOffset === 'undefined' || offsetString.length < minCommonLeftOffset)
            && !emptyLineRegex.test(stringItem)) {
            minCommonLeftOffset = offsetString.length;
        }
    }
    ;
    let resultSplitStringArray = [];
    for (let stringItem of splitStringArray) {
        resultSplitStringArray.push(stringItem.substr(minCommonLeftOffset));
    }
    resultString = joinStringWithLineBreaks(resultSplitStringArray);
    return resultString;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdHJpbmcuaW5kZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRzdHJpbmcuaW5kZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7OztHQUdHO0FBQ0gsSUFBSSxzQkFBc0IsR0FBRyxDQUFDLFNBQWlCO0lBQzdDLElBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDdkMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQ3RDLENBQUMsQ0FBQTtBQUVEOzs7R0FHRztBQUNILElBQUksd0JBQXdCLEdBQUcsQ0FBQyxjQUF3QjtJQUN0RCxJQUFJLFlBQVksR0FBVyxFQUFFLENBQUE7SUFDN0IsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNoQyxZQUFZLEdBQUcsWUFBWSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUEsQ0FBQyxzQkFBc0I7SUFDbEUsQ0FBQztJQUNELE1BQU0sQ0FBQyxZQUFZLENBQUE7QUFDckIsQ0FBQyxDQUFBO0FBRUQ7OztHQUdHO0FBQ0gsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLGNBQXdCO0lBQzlDLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQTtJQUN6QixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDeEIsQ0FBQztJQUNELEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFFLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFBO0lBQ3RCLENBQUM7SUFDRCxNQUFNLENBQUMsY0FBYyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQTtBQUVEOzs7O0dBSUc7QUFDUSxRQUFBLE1BQU0sR0FBRyxDQUFDLFNBQWlCLEVBQUUsV0FBbUI7SUFDekQsSUFBSSxnQkFBZ0IsR0FBRyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN4RCxHQUFHLENBQUMsQ0FBQyxJQUFJLFNBQVMsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDdkMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsU0FBUyxDQUFBO0lBQ2pELENBQUM7SUFDRCxJQUFJLFlBQVksR0FBRyx3QkFBd0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQzdELE1BQU0sQ0FBQyxZQUFZLENBQUE7QUFDckIsQ0FBQyxDQUFBO0FBRUQ7Ozs7R0FJRztBQUNRLFFBQUEsZ0JBQWdCLEdBQUcsQ0FBQyxTQUFpQixFQUFFLFNBQWlCO0lBQ2pFLElBQUksWUFBb0IsQ0FBQTtJQUN4QixJQUFJLFdBQVcsR0FBRyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUNuRCxJQUFJLFdBQVcsR0FBYSxFQUFFLENBQUE7SUFDOUIsR0FBRyxDQUFDLENBQUMsSUFBSSxVQUFVLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNuQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBQ0QsWUFBWSxHQUFHLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ3BELE1BQU0sQ0FBQyxZQUFZLENBQUE7QUFDckIsQ0FBQyxDQUFBO0FBRVUsUUFBQSxTQUFTLEdBQUcsQ0FBQyxTQUFpQjtJQUN2QyxJQUFJLFlBQW9CLENBQUE7SUFDeEIsSUFBSSxnQkFBZ0IsR0FBYSxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUNsRSxJQUFJLG1CQUEyQixDQUFBO0lBQy9CLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQTtJQUM1QixJQUFJLGNBQWMsR0FBRyxTQUFTLENBQUE7SUFDOUIsR0FBRyxDQUFDLENBQUMsSUFBSSxVQUFVLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksWUFBWSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUUsQ0FBQyxDQUFFLENBQUE7UUFDdEQsRUFBRSxDQUFDLENBQ0QsQ0FBQyxPQUFPLG1CQUFtQixLQUFLLFdBQVcsSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDO2VBQ3RGLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQ3BDLENBQUMsQ0FBQyxDQUFDO1lBQ0QsbUJBQW1CLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQTtRQUMzQyxDQUFDO0lBQ0gsQ0FBQztJQUFBLENBQUM7SUFDRixJQUFJLHNCQUFzQixHQUFHLEVBQUUsQ0FBQTtJQUMvQixHQUFHLENBQUMsQ0FBQyxJQUFJLFVBQVUsSUFBSSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDeEMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBO0lBQ3JFLENBQUM7SUFDRCxZQUFZLEdBQUcsd0JBQXdCLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtJQUMvRCxNQUFNLENBQUMsWUFBWSxDQUFBO0FBQ3JCLENBQUMsQ0FBQSJ9