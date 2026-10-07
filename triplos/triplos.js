// r = a + (b - c) * d + (e / f * g);
let a = 2, b = 5, c = 3, d = 4, e = 12, f = 3, g = 2;
let t1 = b - c;
let t2 = t1 * d;
let t3 = a + t2;
let t4 = e / f;
let t5 = t4 * g;
let t6 = t3 + t5;
let r = t6;
console.log("r =", r); // 18

