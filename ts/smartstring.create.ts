import * as plugins from './smartstring.plugins';

/**
 * creates a random string
 *
 * ```ts
 * createRandomString('AAAA')
 * //=> 'AGHR'
 * ```
 *
 * @param patternArg the pattern argument to use, Aa0!* are viable pattern descritors
 * @param lengthArg  the length of the random string
 * @param optionsArg options
 */
export const createRandomString = (
  patternArg: string,
  lengthArg?: number,
  optionsArg?: any
): string => {
  return plugins.randomatic(patternArg, lengthArg, optionsArg);
};

/**
 * creates a crytic string in the speicifed length
 * @param lengthArg the length of the crypto string
 */
export const createCryptoRandomString = (lengthArg: number): string => {
  return plugins.cryptoRandomString(lengthArg);
};
