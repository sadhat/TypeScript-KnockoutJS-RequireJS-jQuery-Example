define(["require", "exports", 'knockout', 'module', "jquery", "blinky"], function(require, exports, __ko__, __r__) {
    var ko = __ko__;

    var r = __r__;

    $(function () {
        ko.applyBindings({
            time: "Party time",
            action: r.config().action
        });
        setTimeout(function () {
            $('h1 > a').blinky({
                frequency: 1e2,
                count: 50
            });
        }, 2000);
    });
})
