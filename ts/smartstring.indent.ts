import * as plugins from "./smartstring.plugins";

let splitString = (stringArg:string):string[] => {
    let stringArray:string[] = [];

    return stringArray;

};

let joinString = (stringArrayArg:string[]):string => {
    let localString:string = "";
    for(let line of stringArrayArg){
        localString = localString + line + "\n";
    };
    return localString;
}

export let indent = (stringArg:string,spaceAmount:number):string => {

    return;
};

export let indentWithPrefix = (stringArg:string,prefixArg:string):string => {
    return;
};

export let deIndent = (stringArg:string):string => {
    return
}
