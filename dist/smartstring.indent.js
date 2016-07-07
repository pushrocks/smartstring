"use strict";
var splitString = function (stringArg) {
    var resultArray = stringArg.split("\n");
    return cleanStringArray(resultArray);
};
var joinString = function (stringArrayArg) {
    var resultString = "";
    for (var _i = 0, stringArrayArg_1 = stringArrayArg; _i < stringArrayArg_1.length; _i++) {
        var line = stringArrayArg_1[_i];
        resultString = resultString + line + "\n";
    }
    ;
    return resultString;
};
var cleanStringArray = function (stringArrayArg) {
    var testRegex = /^[\s]*$/;
    if (testRegex.test(stringArrayArg[0])) {
        stringArrayArg.shift();
    }
    if (testRegex.test(stringArrayArg[stringArrayArg.length - 1])) {
        stringArrayArg.pop();
    }
    ;
    return stringArrayArg;
};
exports.indent = function (stringArg, spaceAmount) {
    var resultString;
    return resultString;
};
exports.indentWithPrefix = function (stringArg, prefixArg) {
    var resultString;
    var stringArray = splitString(stringArg);
    var resultArray = [];
    for (var _i = 0, stringArray_1 = stringArray; _i < stringArray_1.length; _i++) {
        var stringItem = stringArray_1[_i];
        resultArray.push(prefixArg + stringItem);
    }
    ;
    resultString = joinString(resultArray);
    return resultString;
};
exports.normalize = function (stringArg) {
    var resultString;
    var splitStringArray = splitString(stringArg);
    var minCommonLeftOffset;
    var deIndentRegex = /^(\s*)/;
    var emptyLineRegex = /^(\s*)$/;
    for (var _i = 0, splitStringArray_1 = splitStringArray; _i < splitStringArray_1.length; _i++) {
        var stringItem = splitStringArray_1[_i];
        var offsetString = deIndentRegex.exec(stringItem)[1];
        if ((typeof minCommonLeftOffset == "undefined" || offsetString.length < minCommonLeftOffset)
            && !emptyLineRegex.test(stringItem)) {
            minCommonLeftOffset = offsetString.length;
        }
        ;
    }
    ;
    var resultSplitStringArray = [];
    for (var _a = 0, splitStringArray_2 = splitStringArray; _a < splitStringArray_2.length; _a++) {
        var stringItem = splitStringArray_2[_a];
        resultSplitStringArray.push(stringItem.substr(minCommonLeftOffset));
    }
    ;
    resultString = joinString(resultSplitStringArray);
    return resultString;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdHJpbmcuaW5kZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRzdHJpbmcuaW5kZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxJQUFJLFdBQVcsR0FBRyxVQUFDLFNBQWdCO0lBQy9CLElBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQztBQUVGLElBQUksVUFBVSxHQUFHLFVBQUMsY0FBdUI7SUFDckMsSUFBSSxZQUFZLEdBQVUsRUFBRSxDQUFDO0lBQzdCLEdBQUcsQ0FBQSxDQUFhLFVBQWMsRUFBZCxpQ0FBYyxFQUFkLDRCQUFjLEVBQWQsSUFBYyxDQUFDO1FBQTNCLElBQUksSUFBSSx1QkFBQTtRQUNSLFlBQVksR0FBRyxZQUFZLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztLQUM3QztJQUFBLENBQUM7SUFDRixNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVGLElBQUksZ0JBQWdCLEdBQUcsVUFBQyxjQUF1QjtJQUMzQyxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDMUIsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7UUFDbEMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDRCxFQUFFLENBQUEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO1FBQzFELGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQUEsQ0FBQztJQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUM7QUFDMUIsQ0FBQyxDQUFBO0FBRVUsY0FBTSxHQUFHLFVBQUMsU0FBZ0IsRUFBQyxXQUFrQjtJQUNwRCxJQUFJLFlBQW1CLENBQUM7SUFDeEIsTUFBTSxDQUFDLFlBQVksQ0FBQztBQUN4QixDQUFDLENBQUM7QUFFUyx3QkFBZ0IsR0FBRyxVQUFDLFNBQWdCLEVBQUMsU0FBZ0I7SUFDNUQsSUFBSSxZQUFtQixDQUFDO0lBQ3hCLElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QyxJQUFJLFdBQVcsR0FBWSxFQUFFLENBQUM7SUFDOUIsR0FBRyxDQUFBLENBQW1CLFVBQVcsRUFBWCwyQkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVyxDQUFDO1FBQTlCLElBQUksVUFBVSxvQkFBQTtRQUNkLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDO0tBQzVDO0lBQUEsQ0FBQztJQUNGLFlBQVksR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkMsTUFBTSxDQUFDLFlBQVksQ0FBQztBQUN4QixDQUFDLENBQUM7QUFFUyxpQkFBUyxHQUFHLFVBQUMsU0FBZ0I7SUFDcEMsSUFBSSxZQUFtQixDQUFDO0lBQ3hCLElBQUksZ0JBQWdCLEdBQVksV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZELElBQUksbUJBQTBCLENBQUM7SUFDL0IsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDO0lBQzdCLElBQUksY0FBYyxHQUFHLFNBQVMsQ0FBQTtJQUM5QixHQUFHLENBQUEsQ0FBbUIsVUFBZ0IsRUFBaEIscUNBQWdCLEVBQWhCLDhCQUFnQixFQUFoQixJQUFnQixDQUFDO1FBQW5DLElBQUksVUFBVSx5QkFBQTtRQUNkLElBQUksWUFBWSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsRUFBRSxDQUFDLENBQ0MsQ0FBQyxPQUFPLG1CQUFtQixJQUFJLFdBQVcsSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDO2VBQ3JGLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQ3RDLENBQUMsQ0FBQSxDQUFDO1lBQ0UsbUJBQW1CLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxDQUFDO1FBQUEsQ0FBQztLQUNMO0lBQUEsQ0FBQztJQUNGLElBQUksc0JBQXNCLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLEdBQUcsQ0FBQSxDQUFtQixVQUFnQixFQUFoQixxQ0FBZ0IsRUFBaEIsOEJBQWdCLEVBQWhCLElBQWdCLENBQUM7UUFBbkMsSUFBSSxVQUFVLHlCQUFBO1FBQ2Qsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0tBQ3ZFO0lBQUEsQ0FBQztJQUNGLFlBQVksR0FBRyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNsRCxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3hCLENBQUMsQ0FBQSJ9