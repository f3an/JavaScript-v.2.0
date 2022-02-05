// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
  const out = document.querySelector(".out-1");
  out.textContent = "touch";
}

const div1 = document.querySelector(".div-1");
div1.addEventListener("touchstart", t1, true);
// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */
let counter = 0;

function t2() {
  counter++;
  const out = document.querySelector(".out-2");
  out.textContent = counter;
}

const div2 = document.querySelector(".div-2");
div2.addEventListener("touchstart", t2, true);
// ваше событие здесь!!!

// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3() {
  const out = document.querySelector(".out-3");
  this.classList[0] == "div-3_1"
    ? (out.textContent = 1)
    : (out.textContent = 2);
}
const div3_1 = document.querySelector(".div-3_1");
const div3_2 = document.querySelector(".div-3_2");
div3_1.addEventListener("touchstart", t3);
div3_2.addEventListener("touchstart", t3);
// ваше событие здесь!!!

// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function t4() {
  const out = document.querySelector(".out-4");
  out.textContent = "touch";
}
const b4 = document.querySelector(".b-4");
const div4 = document.querySelector(".div-4");

b4.addEventListener("click", () => {
  div4.addEventListener("touchstart", t4);
});
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
  div4.removeEventListener("touchstart", t4);
  const out = document.querySelector(".out-4");
  out.textContent = "";
}
const b5 = document.querySelector(".b-5");
b5.addEventListener("click", t5);
// ваше событие здесь!!!

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
  const out = document.querySelector(".out-6");
  out.textContent = "touchend";
}
div4.addEventListener("touchend", t6);
// ваше событие здесь!!!

// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
  div7.style.backgroundColor = "red";
}
const div7 = document.querySelector(".div-7");
div7.addEventListener("touchstart", t7);
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */
const a8 = ["red", "green", "blue", "orange", "pink", "yellow"];
function t8() {
  const random = Math.floor(Math.random() * a8.length);
  div8.style.backgroundColor = a8[random];
}
const div8 = document.querySelector(".div-8");
div8.addEventListener("touchstart", t8);
// ваше событие здесь!!!

// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9(e) {
  const out = document.querySelector(".out-9");
  out.textContent = e.touches.length;
}
const div9 = document.querySelector(".div-9");
div9.addEventListener("touchstart", t9);
// ваше событие здесь!!!

// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

function t10() {
  w++;
  div10.style.width = `${w}px`;
}
const div10 = document.querySelector(".div-10");
div10.addEventListener("touchmove", t10);
let w = 75;
// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11(e) {
  const out = document.querySelector(".out-11");
  const touch = e.touches[0];
  out.textContent = `RadiusX = ${touch.radiusX} RadiusY = ${touch.radiusY}`;
}
const div11 = document.querySelector(".div-11");
div11.addEventListener("touchstart", t11);
// ваше событие здесь!!!

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll(".img-12-min");
const imgs = document.querySelectorAll(".img-12-min");
const max = document.querySelector(".img-12-max");
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelector(".next");
next.onclick = nextFunction;

const prev = document.querySelector(".prev");
prev.onclick = prevFunction;

function nextFunction() {
  count++;
  for (const item of imgs) {
    item.classList.remove("active-img");
  }
  count < imgs.length
    ? imgs[count].classList.add("active-img")
    : imgs[(count = 0)].classList.add("active-img");
  max.src = `./img/${count + 1}.png`;
}

function prevFunction() {
  count--;
  for (const item of imgs) {
    item.classList.remove("active-img");
  }
  count > -1
    ? imgs[count].classList.add("active-img")
    : imgs[(count = imgs.length - 1)].classList.add("active-img");
  max.src = `./img/${count + 1}.png`;
}
function resetFunc() {
  count = 0;
  for (const item of imgs) {
    item.classList.remove("active-img");
  }
  imgs[count].classList.add("active-img");
  max.src = `./img/${count + 1}.png`;
}
// ваше событие здесь!!!
const reset = document.querySelector(".reset");
reset.addEventListener("click", resetFunc);
