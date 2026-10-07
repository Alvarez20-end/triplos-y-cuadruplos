// val = a * (b + (c / d)) - e * (f + g);
let a = 3, b = 2, c = 8, d = 4, e = 2, f = 1, g = 4;
let t1 = c / d;
let t2 = b + t1;
let t3 = a * t2;
let t4 = f + g;
let t5 = e * t4;
let t6 = t3 - t5;
let val = t6;
console.log("val =", val); //  2

