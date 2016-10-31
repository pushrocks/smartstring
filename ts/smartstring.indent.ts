import * as plugins from './smartstring.plugins'

let splitString = (stringArg: string): string[] => {
    let resultArray = stringArg.split('\n')
    return cleanStringArray(resultArray)
};

let joinString = (stringArrayArg: string[]): string => {
    let resultString: string = ''
    for (let line of stringArrayArg){
        resultString = resultString + line + '\n'
    }
    return resultString
}

let cleanStringArray = (stringArrayArg: string[]): string[] => {
    let testRegex = /^[\s]*$/
    if (testRegex.test(stringArrayArg[0])) {
        stringArrayArg.shift()
    }
    if (testRegex.test(stringArrayArg[stringArrayArg.length - 1])) {
        stringArrayArg.pop()
    };
    return stringArrayArg
}

export let indent = (stringArg: string, spaceAmount: number): string => {
    let resultString: string
    return resultString
}

export let indentWithPrefix = (stringArg: string,prefixArg: string): string => {
    let resultString: string
    let stringArray = splitString(stringArg)
    let resultArray: string[] = []
    for (let stringItem of stringArray){
        resultArray.push(prefixArg + stringItem)
    };
    resultString = joinString(resultArray)
    return resultString
}

export let normalize = (stringArg: string): string => {
    let resultString: string
    let splitStringArray: string[] = splitString(stringArg)
    let minCommonLeftOffset: number
    let deIndentRegex = /^(\s*)/
    let emptyLineRegex = /^(\s*)$/
    for (let stringItem of splitStringArray){
        let offsetString = deIndentRegex.exec(stringItem)[1]
        if (
            (typeof minCommonLeftOffset === 'undefined' || offsetString.length < minCommonLeftOffset)
            && !emptyLineRegex.test(stringItem)
        ) {
            minCommonLeftOffset = offsetString.length
        }
    };
    let resultSplitStringArray = []
    for (let stringItem of splitStringArray) {
        resultSplitStringArray.push(stringItem.substr(minCommonLeftOffset))
    };
    resultString = joinString(resultSplitStringArray)
    return resultString
}
