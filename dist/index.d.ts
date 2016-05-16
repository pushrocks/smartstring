import SmartstringGit = require("./smartstring.git");
import SmartstringDocker = require("./smartstring.docker");
import SmartstringTypescript = require("./smartstring.typescript");
export declare let git: (stringArg: string, tokenArg?: string) => SmartstringGit.gitRepo;
export declare let docker: typeof SmartstringDocker;
export declare let typescript: typeof SmartstringTypescript;
