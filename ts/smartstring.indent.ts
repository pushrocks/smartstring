import * as plugins from "./smartstring.plugins";

let splitString = (stringArg:string):string[] => {
    return stringArg.split("\n");
};

let joinString = (stringArrayArg:string[]):string => {
    let resultString:string = "";
    for(let line of stringArrayArg){
        resultString = resultString + line + "\n";
    };
    return resultString;
};

let cleanStringArray = (stringArrayArg:string[]):string[] => {
    let testRegex = /^[\s]*$/;
    if(testRegex.test(stringArrayArg[0])){
        stringArrayArg.shift();
    }
    if(testRegex.test(stringArrayArg[stringArrayArg.length - 1])){
        stringArrayArg.pop();
    };
    return stringArrayArg;
}

export let indent = (stringArg:string,spaceAmount:number):string => {
    let resultString:string;
    return resultString;
};

export let indentWithPrefix = (stringArg:string,prefixArg:string):string => {
    let resultString:string;
    return resultString;
};

export let deIndent = (stringArg:string):string => {
    let resultString:string;
    let splitStringArray:string[] = splitString(stringArg);
    splitStringArray = cleanStringArray(splitStringArray);
    let minCommonLeftOffset:number;
    let deIndentRegex = /^(\s*)/;
    for(let stringItem of splitStringArray){
        let offsetString = deIndentRegex.exec(stringItem)[1];
        if (typeof minCommonLeftOffset == "undefined" || offsetString.length < minCommonLeftOffset){
            minCommonLeftOffset = offsetString.length;
        };
    };
    let resultSplitStringArray = [];
    for(let stringItem of splitStringArray){
        resultSplitStringArray.push(stringItem.substr(minCommonLeftOffset));
    };
    resultString = joinString(resultSplitStringArray);
    return resultString;
}
