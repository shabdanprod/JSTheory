"use strict";

let num = 50;

while (num <= 55) { //Cycle While
    console.log(num);
    num++;
}


let num = 50;
do { ////Cycle Do While
    console.log(num);
    num++;
}
while(num < 55);

let num = 50;

for (let i = 1; i < 8; i++) { // //Cycle for
    console.log(i);
}

let num = 50;

for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break;
        continue;
    }
    console.log(i);
}
