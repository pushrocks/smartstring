"use strict";
const plugins = require("./smartstring.plugins");
/**
 * handle base64 strings
 */
class Base64 {
    constructor(inputStringArg, typeArg) {
        switch (typeArg) {
            case 'string':
                this.refString = inputStringArg;
                break;
            case 'base64':
                this.refString = exports.base64.decode(inputStringArg);
                break;
            case 'base64uri':
                this.refString = exports.base64.decode(inputStringArg);
        }
    }
    /**
     * the simple string (unencoded)
     */
    get simpleString() {
        return this.refString;
    }
    /**
     * the base64 encoded version of the original string
     */
    get base64String() {
        return exports.base64.encode(this.refString);
    }
    /**
     * the base64uri encoded version of the original string
     */
    get base64UriString() {
        return exports.base64.encodeUri(this.refString);
    }
}
exports.Base64 = Base64;
exports.base64 = {
    /**
     * encodes the string
     */
    encode: (stringArg) => {
        return plugins.jsBase64.encode(stringArg);
    },
    /**
     * encodes a stringArg to base64 uri style
     */
    encodeUri: (stringArg) => {
        return plugins.jsBase64.encodeURI(stringArg);
    },
    /**
     * decodes a base64 encoded string
     */
    decode: (stringArg) => {
        return plugins.jsBase64.decode(stringArg);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdHJpbmcuYmFzZTY0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRzdHJpbmcuYmFzZTY0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpREFBZ0Q7QUFPaEQ7O0dBRUc7QUFDSDtJQUVJLFlBQVksY0FBYyxFQUFFLE9BQXFCO1FBQzdDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDZCxLQUFLLFFBQVE7Z0JBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUE7Z0JBQy9CLEtBQUssQ0FBQTtZQUNULEtBQUssUUFBUTtnQkFDVCxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUE7Z0JBQzlDLEtBQUssQ0FBQTtZQUNULEtBQUssV0FBVztnQkFDWixJQUFJLENBQUMsU0FBUyxHQUFHLGNBQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDdEQsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksWUFBWTtRQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFBO0lBQ3pCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksWUFBWTtRQUNaLE1BQU0sQ0FBQyxjQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLGVBQWU7UUFDZixNQUFNLENBQUMsY0FBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDM0MsQ0FBQztDQUNKO0FBbkNELHdCQW1DQztBQUVVLFFBQUEsTUFBTSxHQUFHO0lBQ2hCOztPQUVHO0lBQ0gsTUFBTSxFQUFFLENBQUMsU0FBaUI7UUFDdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFFRDs7T0FFRztJQUNILFNBQVMsRUFBRSxDQUFDLFNBQWlCO1FBQ3pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNLEVBQUUsQ0FBQyxTQUFpQjtRQUN0QixNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDN0MsQ0FBQztDQUNKLENBQUEifQ==