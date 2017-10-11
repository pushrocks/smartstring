"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartstring.plugins");
exports.createRandomString = (patternArg, lengthArg, optionsArg) => {
    return plugins.randomatic(patternArg, lengthArg, optionsArg);
};
exports.createCryptoRandomString = (lengthArg) => {
    return plugins.cryptoRandomString(lengthArg);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdHJpbmcuY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRzdHJpbmcuY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQWdEO0FBRXJDLFFBQUEsa0JBQWtCLEdBQUcsQ0FDOUIsVUFBa0IsRUFDbEIsU0FBaUIsRUFDakIsVUFBZSxFQUNQLEVBQUU7SUFDVixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFBO0FBQzlELENBQUMsQ0FBQTtBQUVVLFFBQUEsd0JBQXdCLEdBQUcsQ0FBQyxTQUFTLEVBQVUsRUFBRTtJQUMxRCxNQUFNLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQzlDLENBQUMsQ0FBQSJ9