/// <reference path="typings/main.d.ts" />
import SmartstringGit = require("./smartstring.git");
import SmartstringDocker = require("./smartstring.docker");
import SmartstringTypescript = require("./smartstring.typescript");
declare let smartstring: {
    git: (stringArg: string, tokenArg?: string) => SmartstringGit.gitRepo;
    docker: typeof SmartstringDocker;
    typescript: typeof SmartstringTypescript;
};
export = smartstring;
