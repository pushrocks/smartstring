"use strict";
let splitString = (stringArg) => {
    let resultArray = stringArg.split("\n");
    return cleanStringArray(resultArray);
};
let joinString = (stringArrayArg) => {
    let resultString = "";
    for (let line of stringArrayArg) {
        resultString = resultString + line + "\n";
    }
    ;
    return resultString;
};
let cleanStringArray = (stringArrayArg) => {
    let testRegex = /^[\s]*$/;
    if (testRegex.test(stringArrayArg[0])) {
        stringArrayArg.shift();
    }
    if (testRegex.test(stringArrayArg[stringArrayArg.length - 1])) {
        stringArrayArg.pop();
    }
    ;
    return stringArrayArg;
};
exports.indent = (stringArg, spaceAmount) => {
    let resultString;
    return resultString;
};
exports.indentWithPrefix = (stringArg, prefixArg) => {
    let resultString;
    let stringArray = splitString(stringArg);
    let resultArray = [];
    for (let stringItem of stringArray) {
        resultArray.push(prefixArg + stringItem);
    }
    ;
    resultString = joinString(resultArray);
    return resultString;
};
exports.normalize = (stringArg) => {
    let resultString;
    let splitStringArray = splitString(stringArg);
    let minCommonLeftOffset;
    let deIndentRegex = /^(\s*)/;
    let emptyLineRegex = /^(\s*)$/;
    for (let stringItem of splitStringArray) {
        let offsetString = deIndentRegex.exec(stringItem)[1];
        if ((typeof minCommonLeftOffset == "undefined" || offsetString.length < minCommonLeftOffset)
            && !emptyLineRegex.test(stringItem)) {
            minCommonLeftOffset = offsetString.length;
        }
        ;
    }
    ;
    let resultSplitStringArray = [];
    for (let stringItem of splitStringArray) {
        resultSplitStringArray.push(stringItem.substr(minCommonLeftOffset));
    }
    ;
    resultString = joinString(resultSplitStringArray);
    return resultString;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdHJpbmcuaW5kZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRzdHJpbmcuaW5kZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxJQUFJLFdBQVcsR0FBRyxDQUFDLFNBQWdCO0lBQy9CLElBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQztBQUVGLElBQUksVUFBVSxHQUFHLENBQUMsY0FBdUI7SUFDckMsSUFBSSxZQUFZLEdBQVUsRUFBRSxDQUFDO0lBQzdCLEdBQUcsQ0FBQSxDQUFDLElBQUksSUFBSSxJQUFJLGNBQWMsQ0FBQyxDQUFBLENBQUM7UUFDNUIsWUFBWSxHQUFHLFlBQVksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQzlDLENBQUM7SUFBQSxDQUFDO0lBQ0YsTUFBTSxDQUFDLFlBQVksQ0FBQztBQUN4QixDQUFDLENBQUM7QUFFRixJQUFJLGdCQUFnQixHQUFHLENBQUMsY0FBdUI7SUFDM0MsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzFCLEVBQUUsQ0FBQSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO1FBQ2xDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0QsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztRQUMxRCxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUFBLENBQUM7SUFDRixNQUFNLENBQUMsY0FBYyxDQUFDO0FBQzFCLENBQUMsQ0FBQTtBQUVVLGNBQU0sR0FBRyxDQUFDLFNBQWdCLEVBQUMsV0FBa0I7SUFDcEQsSUFBSSxZQUFtQixDQUFDO0lBQ3hCLE1BQU0sQ0FBQyxZQUFZLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBRVMsd0JBQWdCLEdBQUcsQ0FBQyxTQUFnQixFQUFDLFNBQWdCO0lBQzVELElBQUksWUFBbUIsQ0FBQztJQUN4QixJQUFJLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekMsSUFBSSxXQUFXLEdBQVksRUFBRSxDQUFDO0lBQzlCLEdBQUcsQ0FBQSxDQUFDLElBQUksVUFBVSxJQUFJLFdBQVcsQ0FBQyxDQUFBLENBQUM7UUFDL0IsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUFBLENBQUM7SUFDRixZQUFZLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQyxZQUFZLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBRVMsaUJBQVMsR0FBRyxDQUFDLFNBQWdCO0lBQ3BDLElBQUksWUFBbUIsQ0FBQztJQUN4QixJQUFJLGdCQUFnQixHQUFZLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2RCxJQUFJLG1CQUEwQixDQUFDO0lBQy9CLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQztJQUM3QixJQUFJLGNBQWMsR0FBRyxTQUFTLENBQUE7SUFDOUIsR0FBRyxDQUFBLENBQUMsSUFBSSxVQUFVLElBQUksZ0JBQWdCLENBQUMsQ0FBQSxDQUFDO1FBQ3BDLElBQUksWUFBWSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsRUFBRSxDQUFDLENBQ0MsQ0FBQyxPQUFPLG1CQUFtQixJQUFJLFdBQVcsSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDO2VBQ3JGLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQ3RDLENBQUMsQ0FBQSxDQUFDO1lBQ0UsbUJBQW1CLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxDQUFDO1FBQUEsQ0FBQztJQUNOLENBQUM7SUFBQSxDQUFDO0lBQ0YsSUFBSSxzQkFBc0IsR0FBRyxFQUFFLENBQUM7SUFDaEMsR0FBRyxDQUFBLENBQUMsSUFBSSxVQUFVLElBQUksZ0JBQWdCLENBQUMsQ0FBQSxDQUFDO1FBQ3BDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBQUEsQ0FBQztJQUNGLFlBQVksR0FBRyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNsRCxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3hCLENBQUMsQ0FBQSJ9