const myButton1 = document.getElementById("myButton1");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 1000;
let randomNum1;
let randomNum2;
let randomNum3;

myButton1.onclick = function () {
    const randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomNum3 = Math.floor(Math.random() * (max - min + 1)) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
};