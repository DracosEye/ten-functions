"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(dataChunk) {
    return (dataChunk === true);
}

function isFalse(dataChunk) {
    return (dataChunk === false);
}

function not(dataChunk) {
    return !dataChunk;
}

function addOne(num) {
    if (typeof num === "number") {
        return num + 1;
    } else {
        return parseFloat(num) + 1;
    }
}

function isEven(num) {
    if (typeof num === "number") {
        return (num % 2 === 0);
    } else {
        return (parseFloat(num) % 2 === 0);
    }
}

function isIdentical(data1, data2) {
    return (data1 === data2);
}

function isEqual(data1, data2) {
    return (data1 == data2);
}

function or (data1, data2) {
    return (data1 || data2);
}

function and (data1, data2) {
    return (data1 && data2);
}

function concat (data1, data2) {
    return (data1.toString() + data2.toString());
}