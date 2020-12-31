import * as plugins from './smartstring.plugins';

export class Domain {
  public fullName: string;
  public level1: string;
  public level2: string;
  public level3: string;
  public level4: string;
  public level5: string;
  public protocol: string;
  public zoneName: string;
  // aliases
  public topLevel: string;
  public domainName;
  public subDomain;
  public port;
  public nodeParsedUrl: plugins.url.UrlWithStringQuery;
  constructor(domainStringArg: string) {
    const regexMatches = this._domainRegex(domainStringArg);
    this.fullName = '';
    for (let i = 1; i <= 5; i++) {
      if (regexMatches[i - 1]) {
        const localMatch = regexMatches[i - 1];
        this['level' + i.toString()] = localMatch;
        if (this.fullName === '') {
          this.fullName = localMatch;
        } else {
          this.fullName = localMatch + '.' + this.fullName;
        }
      } else {
        this['level' + i.toString()] = undefined;
      }
    }
    this.protocol = this._protocolRegex(domainStringArg);
    this.zoneName = this.level2 + '.' + this.level1;

    // aliases
    this.topLevel = this.level1;
    this.domainName = this.level2;
    this.subDomain = this.level3;

    this.nodeParsedUrl = plugins.url.parse(domainStringArg);
    this.port = this.nodeParsedUrl.port;
  }

  // helper functions

  /** */
  private _domainRegex(stringArg: string) {
    const regexString = /([a-zA-Z0-9\-\_]*)\.{0,1}([a-zA-Z0-9\-\_]*)\.{0,1}([a-zA-Z0-9\-\_]*)\.{0,1}([a-zA-Z0-9\-\_]*)\.{0,1}([a-zA-Z0-9\-\_]*)\.{0,1}$/;
    const regexMatches = regexString.exec(stringArg);
    regexMatches.reverse(); //make sure we build the domain from toplevel to subdomain (reversed order)
    regexMatches.pop(); // pop the last element, which is, since we reversed the Array, the full String of matched elements
    const regexMatchesFiltered = regexMatches.filter(function (stringArg: string) {
      return stringArg !== '';
    });
    return regexMatchesFiltered;
  }

  private _protocolRegex(stringArg: string) {
    const regexString = /^([a-zA-Z0-9]*):\/\//;
    const regexMatches = regexString.exec(stringArg);
    if (regexMatches) {
      return regexMatches[1];
    } else {
      return undefined;
    }
  }

  private _portRegex(stringArg: string) {
    const regexString = /^([a-zA-Z0-9]*):\/\//;
    const regexMatches = regexString.exec(stringArg);
    if (regexMatches) {
      return regexMatches[1];
    } else {
      return undefined;
    }
  }
}
