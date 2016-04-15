/// <reference path="./typings/main.d.ts" />
import SmartstringGit = require("./smartstring.git");
import SmartstringDocker = require("./smartstring.docker");

let smartstring = {
    git : SmartstringGit,
    docker: SmartstringDocker
};

export = smartstring;