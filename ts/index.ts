/// <reference path="./typings/main.d.ts" />
import SmartstringGit = require("./smartstring.git");
import SmartstringDocker = require("./smartstring.docker");
import SmartstringTypescript = require("./smartstring.typescript");

let smartstring = {
    git : SmartstringGit,
    docker: SmartstringDocker,
    typescript: SmartstringTypescript
};

export = smartstring;