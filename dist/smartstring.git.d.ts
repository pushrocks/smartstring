/// <reference path="typings/main.d.ts" />
export declare class gitRepo {
    host: string;
    user: string;
    repo: string;
    accessToken: string;
    sshUrl: string;
    httpsUrl: string;
    constructor(stringArg: string, tokenArg?: string);
}
export declare let git: (stringArg: string, tokenArg?: string) => gitRepo;
