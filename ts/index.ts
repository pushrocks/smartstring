import * as plugins from "./smartstring.plugins";
import * as SmartstringDocker from "./smartstring.docker";
import * as SmartstringTypescript from "./smartstring.typescript";
import * as SmartstringIndent from "./smartstring.indent";

export {Domain} from "./smartstring.domain";
export {GitRepo} from "./smartstring.git";
export let docker = SmartstringDocker;
export let typescript = SmartstringTypescript;
export let indent = SmartstringIndent;