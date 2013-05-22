## Overview
This example project demonstrates how to get TypeScript, KnockoutJS, RequireJS and jQuery to play nicely together.

It uses the latest TypeScript source from the _develop_ branch of http://typescript.codeplex.com.

## How to:
* Install node.js
* Download the latest TypeScript source and build it (you will end up with a `tsc.js` compiler for node.js)
* `node "/path/to/tsc.js" --module AMD ./js/app/main.ts`

## Notes:
Compiles with the latest source of TypeScript 0.9.0 BUT WILL NOT RUN WITH THE ALPHA RELEASE.
This is because the alpha release ignored the ///<amd-dependency /> commentag.

## References:
* knockout.amd.d.ts - DefinitelyTyped fork (https://github.com/diachedelic/DefinitelyTyped/blob/a9766db4a20ac65b47374f8aa8df95c7cd672eda/knockout/knockout.amd.d.ts)
* jquery.d.ts - DefinitelyTyped
* jquery.blinky.js - http://aaron-powell.com/doing-it-wrong/blink

