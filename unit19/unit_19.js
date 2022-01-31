// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

function t1() {
  const out = document.querySelector(".out-1");
  return (out.textContent = div1.textContent);
}
const div1 = document.querySelector(".div-1");
div1.addEventListener("click", t1, true);
// ваше событие здесь!!!

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2(evt) {
  const out = document.querySelector(".out-2");
  return (out.textContent = evt.altKey);
}
const div2 = document.querySelector(".div-2");
div2.addEventListener("click", t2, true);
// ваше событие здесь!!!

// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;

function t3() {
  w3 += 5;
  return (div3.style.width = `${w3}px`);
}

const div3 = document.querySelector(".div-3");
div3.addEventListener("click", t3, true);

// ваше событие здесь!!!

// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

function t4() {
  const out = document.querySelector(".out-4");
  out.textContent = div4.textContent;
}

const div4 = document.querySelector(".div-4");
div4.addEventListener("dblclick", t4, true);
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

function t5() {
  /* div5.className === "block div-5 active" ?
    div5.className = "block div-5" : div5.className = "block div-5 active"; */
  div5.classList.contains("active") === true
    ? div5.classList.remove("active")
    : div5.classList.add("active");
}

const div5 = document.querySelector(".div-5");
div5.addEventListener("dblclick", t5, true);
// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

function t6() {
  const ul = document.querySelector(".ul-6");
  const hide = "hide";
  ul.classList.contains(hide) === true
    ? ul.classList.remove(hide)
    : ul.classList.add(hide);
}
const div6 = document.querySelector(".div-6");
div6.addEventListener("dblclick", t6, true);
// ваше событие здесь!!!

// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

function t7(evt) {
  evt.preventDefault();
  div7.classList.contains("active") === true
    ? div7.classList.remove("active")
    : div7.classList.add("active");
}

const div7 = document.querySelector(".div-7");
div7.addEventListener("contextmenu", t7, true);
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

function t8() {
  ch.checked === true
    ? document.addEventListener("contextmenu", con, true)
    : document.removeEventListener("contextmenu", con, true);
}
function con(e) {
  return e.preventDefault();
}
const ch = document.querySelector(".ch-8");
ch.addEventListener("change", t8);

// ваше событие здесь!!!

// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

function t9(e) {
  e.preventDefault();
  this.src = "./img/2.png";
}
const img9 = document.querySelector(".div-9>img");
img9.addEventListener("contextmenu", t9, true);
// ваше событие здесь!!!

// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

function t10() {
  this.src = "./img/2.png";
}
const img10 = document.querySelector(".div-10>img");
img10.addEventListener("mouseenter", t10, true);
// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

function t11() {
  this.src = "./img/2.png";
}
const img11 = document.querySelector(".div-11>img");
// ваше событие здесь!!!
img11.addEventListener("mouseenter", t11, true);
img11.addEventListener("mouseleave", ()=>{img11.src = "./img/1.png";}, true);
// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

const div12 = document.querySelector(".div-12");
div12.addEventListener("mousedown", ()=>{div12.classList.add("active")},true);

// ваше событие здесь!!!

// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */
const div13 = document.querySelector(".div-13");
div13.addEventListener("mousedown", ()=>{div13.classList.add("active")}, true)
div13.addEventListener("mouseup", ()=>{div13.classList.remove("active")});
// ваше событие здесь!!!

// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

function t14() {
  const div = document.querySelector(".div-14");
  div.addEventListener("click", ()=>{div.classList.add("active")}, true)
}
document.querySelector('.b-14').onclick = t14();

// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */

function t15() {
  div15.textContent = num++;
}
const div15 = document.querySelector(".div-15");
div15.addEventListener("mousemove", t15, true);
let num = parseInt(div15.textContent);
// ваше событие здесь!!!

// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */

function t16() {
  this.style.width = `${w++}px`;
}
const div16 = document.querySelector(".div-16");
div16.addEventListener("mousemove", t16, true);
let w = div16.offsetWidth;
// ваше событие здесь!!!

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {
  div16.addEventListener("mousemove", t16, true);
}
function t17Off() {
  div16.removeEventListener("mousemove", t16,true)
}
// ваше событие здесь!!!
document.querySelector(".b-17_on").addEventListener("click", t17On, true);
// ваше событие здесь!!!
document.querySelector(".b-17_off").addEventListener("click", t17Off, true);
// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

function t18() {
  this.textContent += this.offsetWidth;
}
// ваше событие здесь!!!
const div18 = document.querySelector(".div-18");
div18.addEventListener("mouseenter", t18, true);
// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

function t19() {
  const out = document.querySelector(".out-19");
  out.textContent = this.classList
}
const div19 = document.querySelector(".div-19");
div19.addEventListener("mouseenter", t19, true);
// ваше событие здесь!!!

// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */

function t20() {
  prog.value++;
}
const prog = document.getElementsByTagName("progress")[0];
// ваше событие здесь!!!
prog.addEventListener("mousemove", t20, true);