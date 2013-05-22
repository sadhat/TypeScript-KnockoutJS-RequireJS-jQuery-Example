// Interfaces are merged together! Perfect for jQuery plugins.
interface JQuery {
    blinky(opt: {
        frequency: number;
        count: number;
    }): JQuery;
}