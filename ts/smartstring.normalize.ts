import * as plugins from './smartstring.plugins';

/**
 * replaces all occurences of something in a string
 * @param stringArg
 * @param searchPattern
 * @param replacementString
 */
export const replaceAll = (stringArg: string, searchPattern: string, replacementString: string) => {
  return stringArg.replace(new RegExp(searchPattern, 'g'), replacementString);
};

/**
 * normalizes a string
 * @param stringArg
 */
export const standard = (stringArg: string): string => {
  let fix1 = plugins.stripIndent(stringArg); // fix indention
  let fix2 = plugins.normalizeNewline(fix1); // fix newlines
  let fix3 = replaceAll(fix2, '\t/', ' '); // fix tabs
  return fix3;
};
