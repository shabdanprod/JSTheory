"use strict";

if (4 == 9) {
    console.log('ok!'); 
} else {
    console.log('Error');
}

if (1) {// result = eto pravda
    console.log('ok!'); 
} else {
    console.log('Error');
}
 
const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Too Much');
} else {
    console.log('OK!');
}