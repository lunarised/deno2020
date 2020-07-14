import { randomInt } from "https://deno.land/x/random_int/mod.ts";


let a = [randomInt(5)+1, randomInt(5)+1, randomInt(5)+1, randomInt(5)+1];
let low :number = Math.min(...a);
console.log(a.reduce((i :number,s :number)=>i+s)-low);
console.log(a);
