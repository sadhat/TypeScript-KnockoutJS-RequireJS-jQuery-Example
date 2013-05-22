///<reference path="../_references.d.ts" />

// The below manually inserts arguments into "define()".
// This is necessary for dependencies which are not AMD modules,
// or do not have TypeScript definitions as a module.
//
// Note that they don't work in TypeScript 0.9.0 alpha, but they have
// fixed it since then (get the latest TypeScript source).
///<amd-dependency path="jquery.blinky" />

import ko = module('knockout')
import r = module('module')
import $ = module('jquery')

$(() => {
	// Test KnockoutJS
    ko.applyBindings({
        time: "Party time",
        action: r.config().action
    });

	// Test jQuery
	setTimeout(() => {
		$('h1 > a').blinky({
			frequency: 1e2,
			count: 50
		})
    }, 2000);
} );