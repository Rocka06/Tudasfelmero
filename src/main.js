import { osszead, kivon, szoroz, eloszt } from "./szamologep.js";
import isEven from "is-even";

const a = 18;
const b = 2;

console.log(osszead(a, b));
console.log(isEven(osszead(a, b)));

console.log(kivon(a, b));
console.log(isEven(kivon(a, b)));

console.log(szoroz(a, b));
console.log(isEven(szoroz(a, b)));

console.log(eloszt(a, b));
console.log(isEven(eloszt(a, b)));