
// z = (x + y / o) * r + ((a * b + k) / (c + d));
let x = 1, y = 6, o = 2, r = 3, a = 2, b = 3, k = 2, c = 1, d = 3;
let t1 = y / o;
let t2 = x + t1;
let t3 = t2 * r;
let t4 = a * b;
let t5 = t4 + k;
let t6 = c + d;
let t7 = t5 / t6;
let t8 = t3 + t7;
let z = t8;
console.log("z =", z); 14