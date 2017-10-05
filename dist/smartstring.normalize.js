"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartstring.plugins");
/**
 * replaces all occurences of something in a string
 * @param stringArg
 * @param searchRegExp
 * @param replacementString
 */
exports.replaceAll = (stringArg, searchRegExp, replacementString) => {
    return stringArg.replace(new RegExp(searchRegExp, 'g'), replacementString);
};
/**
 * normalizes a string
 * @param stringArg
 */
exports.standard = (stringArg) => {
    let fix1 = plugins.stripIndent(stringArg); // fix indention
    let fix2 = plugins.normalizeNewline(fix1); // fix newlines
    let fix3 = exports.replaceAll(fix2, /\t/, ' '); // fix tabs
    return fix3;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdHJpbmcubm9ybWFsaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRzdHJpbmcubm9ybWFsaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQWdEO0FBRWhEOzs7OztHQUtHO0FBQ1EsUUFBQSxVQUFVLEdBQUcsQ0FBQyxTQUFpQixFQUFFLFlBQWlCLEVBQUUsaUJBQXlCO0lBQ3RGLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFBO0FBQzVFLENBQUMsQ0FBQTtBQUVEOzs7R0FHRztBQUNRLFFBQUEsUUFBUSxHQUFHLENBQUMsU0FBaUI7SUFDdEMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUFDLGdCQUFnQjtJQUMxRCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQyxlQUFlO0lBQ3pELElBQUksSUFBSSxHQUFHLGtCQUFVLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQSxDQUFDLFdBQVc7SUFDbEQsTUFBTSxDQUFDLElBQUksQ0FBQTtBQUNiLENBQUMsQ0FBQSJ9