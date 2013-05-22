///<reference path="./typings/jquery.d.ts" />
///<reference path="./typings/jquery.blinky.d.ts" />
///<reference path="./typings/knockout.amd.d.ts" />

// Module to access RequireJS per-module config.
declare module 'module' {
    export function config(): any;
}