import * as plugins from './smartstring.plugins'

export let createRandomString = (
  patternArg: string,
  lengthArg: number,
  optionsArg: any
): string => {
  return plugins.randomatic(patternArg, lengthArg, optionsArg)
}

export let createCryptoRandomString = (lengthArg): string => {
  return plugins.cryptoRandomString(lengthArg)
}
