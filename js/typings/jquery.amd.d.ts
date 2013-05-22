///<reference path="jquery.d.ts" />

declare module "jquery" {
   export function (selector: string, context?: any): JQuery;
   export function (element: Element): JQuery;
   export function (object: { }): JQuery;
   export function (elementArray: Element[]): JQuery;
   export function (object: JQuery): JQuery;
   export function (func: Function): JQuery;
   export function (): JQuery;
}