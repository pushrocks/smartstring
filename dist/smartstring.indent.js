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
exports.normalizeIndent = function (stringArg) {
    var resultString;
    var splitStringArray = splitString(stringArg);
    var minCommonLeftOffset;
    var deIndentRegex = /^(\s*)/;
    for (var _i = 0, splitStringArray_1 = splitStringArray; _i < splitStringArray_1.length; _i++) {
        var stringItem = splitStringArray_1[_i];
        var offsetString = deIndentRegex.exec(stringItem)[1];
        if (typeof minCommonLeftOffset == "undefined" || offsetString.length < minCommonLeftOffset) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdHJpbmcuaW5kZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRzdHJpbmcuaW5kZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxJQUFJLFdBQVcsR0FBRyxVQUFDLFNBQWdCO0lBQy9CLElBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQztBQUVGLElBQUksVUFBVSxHQUFHLFVBQUMsY0FBdUI7SUFDckMsSUFBSSxZQUFZLEdBQVUsRUFBRSxDQUFDO0lBQzdCLEdBQUcsQ0FBQSxDQUFhLFVBQWMsRUFBZCxpQ0FBYyxFQUFkLDRCQUFjLEVBQWQsSUFBYyxDQUFDO1FBQTNCLElBQUksSUFBSSx1QkFBQTtRQUNSLFlBQVksR0FBRyxZQUFZLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztLQUM3QztJQUFBLENBQUM7SUFDRixNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVGLElBQUksZ0JBQWdCLEdBQUcsVUFBQyxjQUF1QjtJQUMzQyxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDMUIsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7UUFDbEMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDRCxFQUFFLENBQUEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO1FBQzFELGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQUEsQ0FBQztJQUNGLE1BQU0sQ0FBQyxjQUFjLENBQUM7QUFDMUIsQ0FBQyxDQUFBO0FBRVUsY0FBTSxHQUFHLFVBQUMsU0FBZ0IsRUFBQyxXQUFrQjtJQUNwRCxJQUFJLFlBQW1CLENBQUM7SUFDeEIsTUFBTSxDQUFDLFlBQVksQ0FBQztBQUN4QixDQUFDLENBQUM7QUFFUyx3QkFBZ0IsR0FBRyxVQUFDLFNBQWdCLEVBQUMsU0FBZ0I7SUFDNUQsSUFBSSxZQUFtQixDQUFDO0lBQ3hCLElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QyxJQUFJLFdBQVcsR0FBWSxFQUFFLENBQUM7SUFDOUIsR0FBRyxDQUFBLENBQW1CLFVBQVcsRUFBWCwyQkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVyxDQUFDO1FBQTlCLElBQUksVUFBVSxvQkFBQTtRQUNkLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDO0tBQzVDO0lBQUEsQ0FBQztJQUNGLFlBQVksR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkMsTUFBTSxDQUFDLFlBQVksQ0FBQztBQUN4QixDQUFDLENBQUM7QUFFUyx1QkFBZSxHQUFHLFVBQUMsU0FBZ0I7SUFDMUMsSUFBSSxZQUFtQixDQUFDO0lBQ3hCLElBQUksZ0JBQWdCLEdBQVksV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZELElBQUksbUJBQTBCLENBQUM7SUFDL0IsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDO0lBQzdCLEdBQUcsQ0FBQSxDQUFtQixVQUFnQixFQUFoQixxQ0FBZ0IsRUFBaEIsOEJBQWdCLEVBQWhCLElBQWdCLENBQUM7UUFBbkMsSUFBSSxVQUFVLHlCQUFBO1FBQ2QsSUFBSSxZQUFZLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxFQUFFLENBQUMsQ0FBQyxPQUFPLG1CQUFtQixJQUFJLFdBQVcsSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDLENBQUEsQ0FBQztZQUN4RixtQkFBbUIsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDO1FBQzlDLENBQUM7UUFBQSxDQUFDO0tBQ0w7SUFBQSxDQUFDO0lBQ0YsSUFBSSxzQkFBc0IsR0FBRyxFQUFFLENBQUM7SUFDaEMsR0FBRyxDQUFBLENBQW1CLFVBQWdCLEVBQWhCLHFDQUFnQixFQUFoQiw4QkFBZ0IsRUFBaEIsSUFBZ0IsQ0FBQztRQUFuQyxJQUFJLFVBQVUseUJBQUE7UUFDZCxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7S0FDdkU7SUFBQSxDQUFDO0lBQ0YsWUFBWSxHQUFHLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ2xELE1BQU0sQ0FBQyxZQUFZLENBQUM7QUFDeEIsQ0FBQyxDQUFBIn0=