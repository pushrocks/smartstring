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
                this.refString = plugins.jsBase64.decode(inputStringArg);
                break;
            case 'base64uri':
                this.refString = plugins.jsBase64.decode(inputStringArg);
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
        return plugins.jsBase64.encode(this.refString);
    }
    /**
     * the base64uri encoded version of the original string
     */
    get base64StringUri() {
        return plugins.jsBase64.encodeURI(this.refString);
    }
}
exports.Base64 = Base64;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdHJpbmcuYmFzZTY0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRzdHJpbmcuYmFzZTY0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpREFBZ0Q7QUFPaEQ7O0dBRUc7QUFDSDtJQUVJLFlBQVksY0FBYyxFQUFFLE9BQXFCO1FBQzdDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDZCxLQUFLLFFBQVE7Z0JBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUE7Z0JBQy9CLEtBQUssQ0FBQTtZQUNULEtBQUssUUFBUTtnQkFDVCxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFBO2dCQUN4RCxLQUFLLENBQUE7WUFDVCxLQUFLLFdBQVc7Z0JBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUNoRSxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxZQUFZO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUE7SUFDekIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxZQUFZO1FBQ1osTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLGVBQWU7UUFDZixNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3JELENBQUM7Q0FDSjtBQW5DRCx3QkFtQ0MifQ==