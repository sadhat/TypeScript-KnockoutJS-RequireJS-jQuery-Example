This example project demonstrates how to get TypeScript, KnockoutJS, RequireJS and jQuery to play nicely together.

How to:
1. Install node.js
2. Reopen your command prompt and run "npm install -g typescript@0.8.3"
3. Compile with "tsc --module AMD ./js/app/main.ts"

Notes:
Compiles with the latest source of TypeScript 0.9.0 BUT WILL NOT RUN WITH THE ALPHA RELEASE.
This is because the alpha release ignored the ///<amd-dependency /> commentag.

References:
* knockout.amd.d.ts - DefinitelyTyped fork (https://github.com/diachedelic/DefinitelyTyped/blob/a9766db4a20ac65b47374f8aa8df95c7cd672eda/knockout/knockout.amd.d.ts)
* jquery.d.ts - DefinitelyTyped
* jquery.blinky.js - http://aaron-powell.com/doing-it-wrong/blink

