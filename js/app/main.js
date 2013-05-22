define(['jquery', 'knockout', 'module', 'text!partial.html', 'jquery.blinky'], function ($, ko, r, template) {
    $(function () {
        ko.applyBindings({
            time: "Party time",
            action: r.config()['action']
        });

        setTimeout(function () {
            $('h1 > a').blinky({
                frequency: 1e2,
                count: 50
            });
        }, 2000);

        $('body').append(template);
    });
});
