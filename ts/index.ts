/// <reference path="./typings/main.d.ts" />
import SmartstringGit = require("./smartstring.git");
import SmartstringDocker = require("./smartstring.docker");
import SmartstringTypescript = require("./smartstring.typescript");

export let git = SmartstringGit.git;
export let docker = SmartstringDocker;
export let typescript = SmartstringTypescript;