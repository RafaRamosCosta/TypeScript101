"use strict";
// const anchor = document.querySelector("a")!; // the ! tells typescript that it should return some value
// console.log(anchor.href);
// // console.log(anchor?.href);
// const form = document.querySelector("form");
const form = document.querySelector(".new-item-form"); // uses the form type instead of the element type
//console.log(form.children);
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // method to return value as a number
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
