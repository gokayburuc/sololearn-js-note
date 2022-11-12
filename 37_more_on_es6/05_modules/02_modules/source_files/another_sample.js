export const hit = (x, y, z) => {
    return x * y + z / 2;
}
export const degree = 50;


import * as calc from "util/calc";
calc.hit(1, 2, calc.degree);