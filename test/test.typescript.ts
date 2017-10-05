import * as smartstring from '../ts/index'
import { tap, expect } from 'tapbundle'

// typscript
tap.test('expect match reference paths', async () => {
  // tslint:disable-next-line:no-unused-expression
  expect(
    smartstring.typescript.regexReferencePath.test('/// <reference path=\"\" />')
  ).to.be.true
  
  // tslint:disable-next-line:no-unused-expression
  expect(
    smartstring.typescript.regexReferencePath.test("/// <reference path='' />")
  ).to.be.true
  
  // tslint:disable-next-line:no-unused-expression
  expect(
    smartstring.typescript.regexReferencePath.test('/// <referencepath=\"\" />')
  ).to.be.false
})

tap.start()
