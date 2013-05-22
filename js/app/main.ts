///<reference path="../_references.d.ts" />

define(['jquery', 'knockout', 'module', 'text!partial.html', 'jquery.blinky'],
       ($ : JQueryStatic, ko : KnockoutStatic, r : RequireModule, template : string) => {
	$(() => {
		// Test KnockoutJS
		ko.applyBindings({
			time: "Party time",
			action: r.config()['action']
		});

		// Test jQuery
		setTimeout(() => {
			$('h1 > a').blinky({
				frequency: 1e2,
				count: 50
			})
		}, 2000);

		// Test template
		$('body').append(template);
	} );
});