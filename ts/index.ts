import "typings-global"
import SmartstringDocker = require("./smartstring.docker");
import SmartstringTypescript = require("./smartstring.typescript");

export {Domain} from "./smartstring.domain";
export {GitRepo} from "./smartstring.git";
export let docker = SmartstringDocker;
export let typescript = SmartstringTypescript;