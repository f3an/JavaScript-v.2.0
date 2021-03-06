// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.

const a = 7;
const b = 9;
console.log(`${a} + ${b} = ` + (a + b));

// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.

const c = 7;
const d = 9;
const out = document.querySelector(".out-2");
out.textContent = `${c} + ${d} = ` + (c + d);

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.

const e = 3;
const f = 5;
const out2 = document.querySelector(".out-3");

out2.textContent = `${e} + ${f} = ` + (e + f);

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.

const e1 = "3";
const f1 = 5;
const out3 = document.querySelector(".out-4");
out3.textContent = `${e1} + ${f1} = ` + (e1 + f1); // <-- Конкатинация

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.

const e2 = 3;
const f2 = 0;
const out4 = document.querySelector(".out-5");
out4.textContent = `${e2} / ${f2} = ` + e2 / f2; //<--- result is infinity

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.

const e3 = 3;
const f3 = "Hello";
const out5 = document.querySelector(".out-6");
out5.textContent = `${e3} + ${f3} = ` + (e3 + f3); // <-- Конкатинация

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.

const e4 = 3;
const f4 = "Hello";
const out6 = document.querySelector(".out-7");
out6.textContent = `${e4} + ${f4} = ` + e4 * f4; // <-- Конкатинация

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.
const Input8 = document.querySelector("#input-8");
const out8 = document.querySelector(".out-8");

function t8(value) {
  value = Input8.value;
  console.log(value);
  out8.textContent = value;
}

document.querySelector(".b-8").onclick = t8;

// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.
const Input9 = document.querySelector(".i-9");
const out9 = document.querySelector(".out-9");
function t9(value) {
  value = +Input9.value;
  console.log(value);
  out9.textContent = value;
  Input9.value = "";
}

document.querySelector(".b-9").onclick = t9;

// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.
const Input10 = document.querySelector(".i-10");
const out10 = document.querySelector(".out-10");

function t10(value) {
  value = +Input10.value;
  console.log(value * 10);
  out10.textContent = value * 10;
  Input10.value = "";
}

document.querySelector(".b-10").onclick = t10;

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.
const Input11 = document.querySelector(".i-11");
const out11 = document.querySelector(".out-11");

function t11(value) {
  value = +Input11.value;
  console.log(value + 10);
  out11.textContent = value + 10;
  Input11.value = "";
}

document.querySelector(".b-11").onclick = t11;

// Task 12.
// Создайте два input (i-12_1 и i-12-2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.
const Input121 = document.querySelector(".i-12_1");
const Input122 = document.querySelector(".i-12_2");
const out12 = document.querySelector(".out-12");

function t12(firstname, lastname) {
  firstname = Input121.value;
  lastname = Input122.value;
  console.log(`${firstname} ${lastname}`);
  out12.textContent = `${firstname} ${lastname}`;
  Input121.value = "";
  Input122.value = "";
}

document.querySelector(".b-12").onclick = t12;

// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.

const Input131 = document.querySelector(".i-13_1");
const Input132 = document.querySelector(".i-13_2");
const out13 = document.querySelector(".out-13");

function t13(firstNum, secondNum) {
  firstNum = +Input131.value;
  secondNum = +Input132.value;
  console.log(`${firstNum} + ${secondNum} = ` + (firstNum + secondNum));
  out13.textContent = `${firstNum} + ${secondNum} = ` + (firstNum + secondNum);
  Input131.value = "";
  Input132.value = "";
}

document.querySelector(".b-13").onclick = t13;

// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

const Input14 = document.querySelector(".i-14");
const btn14 = document.querySelector(".b-14");

btn14.addEventListener("click", function changeValue() {
  Input14.value = "Hello";
});

// Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

const y = document.querySelector(".i-15");
y.style.border = "2px solid red"; // <-- Позволяет менять параметры css

// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16
const Input161 = document.querySelector(".i-16-1");
const Input162 = document.querySelector(".i-16-2");
const out16 = document.querySelector(".out-16");

function t16(fisrstNum, secondNum) {
  fisrstNum = +Input161.value;
  secondNum = +Input162.value;
  console.log(`${fisrstNum} + ${secondNum} = ` + (fisrstNum + secondNum));
  out16.textContent =
    `${fisrstNum} + ${secondNum} = ` + (fisrstNum + secondNum);
  Input161.value = "";
  Input162.value = "";
}

document.querySelector(".b-16").onclick = t16;

// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
const t = document.querySelector(".i-17");
const out17 = document.querySelector(".out-17");

function t17(parsei) {
  parsei = parseInt(t.value);
  console.log(parsei);
  out17.textContent = parsei;
  t.value = "";
} // 44 число, 44ааа - число, 44.3 = 44, а45 - не число;

document.querySelector(".b-17").onclick = t17;

// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

const t2 = document.querySelector(".i-18");
const out18 = document.querySelector(".out-18");

function t18(parsef) {
  parsef = parseFloat(t2.value);
  console.log(parsef);
  out18.textContent = parsef;
  t2.value = "";
} // 44 число, 44ааа - число, 44.3 = 43.3 , а45 - не число;

document.querySelector(".b-18").onclick = t18;

// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!
const Input191 = document.querySelector(".i-19-1");
const Input192 = document.querySelector(".i-19-2");
const out19 = document.querySelector(".out-19");

function t19(fisrstNum, secondNum) {
  fisrstNum = parseInt(Input191.value);
  secondNum = parseInt(Input192.value);
  console.log(`${fisrstNum} + ${secondNum} = ` + (fisrstNum + secondNum));
  out19.textContent =
    `${fisrstNum} + ${secondNum} = ` + (fisrstNum + secondNum);
  Input191.value = "";
  Input192.value = "";
}

document.querySelector(".b-19").onclick = t19;

// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.

const out20 = document.querySelector(".out-20");

function t20(firstname, lastname, age, job) {
  firstname = document.querySelector(".i-20-1").value;
  lastname = document.querySelector(".i-20-2").value;
  age = parseInt(document.querySelector(".i-20-3").value);
  job = document.querySelector(".i-20-4").value;
  out20.textContent = `Dear ${firstname} ${lastname}, your age is ${age}, your job is ${job} `
}

document.querySelector(".b-20").onclick = t20;
