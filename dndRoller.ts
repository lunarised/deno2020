import { randomInt } from "https://deno.land/x/random_int/mod.ts";
import { min, max } from "https://deno.land/x/math@v1.1.0/mod.ts"

let a = [randomInt(5)+1, randomInt(5)+1, randomInt(5)+1, randomInt(5)+1]
/* To Do - Work out min function */
let minNum:number = 10;
let minInd: number = 0;
let sum: number = 0;
for(let i = 0; i<a.length; i++){
    if (a[i] < minNum ){
        minNum = a[i];
        minInd = i;
    }
    sum += a[i]
}
sum = sum - minNum;
console.log(minNum)
console.log(a)
console.log(sum)