## Overview
This example project demonstrates how to get TypeScript, KnockoutJS, RequireJS and jQuery to play nicely together.

It uses the latest TypeScript source from the _develop_ branch of http://typescript.codeplex.com.

## How to
* Download TypeScript v0.8.3 or newer
* Build `tsc ./js/app/main.ts` (without the --module AMD argument).

## Note
I was using `--module AMD` for a while but it's just too hard to use RequireJS plugins (like `require.text`)
and the per-module config (see `index.html`).  You have to use the `///<amd-dependency />`
undocumented feature and it just barely works.

## References:
* jquery.d.ts, knockout.d.ts & require.d.ts - DefinitelyTyped
* jquery.blinky.js - http://aaron-powell.com/doing-it-wrong/blink

