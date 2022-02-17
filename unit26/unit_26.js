// Task 1 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */

const requestUrl = "http://getpost.itgid.info/index2.php";
const params = {
  AUTH_TOKEN: "7859d9d42a8834141d529577207c9596",
  ACTION: 1,
  NAME: "IHOR",
  BIRTHYEAR: 2000,
  NUM1: 2,
  NUM2: 4,
  YEAR: 1,
  MOUNTH: 1,
  DAY: 1,
};

function fetchRequest(link, method, out) {
  fetch(link, {
    method: method,
  })
    .then((data) => {
      if (data.status === 200) {
        return data.text();
      }
    })
    .then((data) => {
      out.textContent = data;
    });
}

function createLink(url, params) {
  return (
    url +
    `?auth=${params.AUTH_TOKEN}&` +
    `action=${params.ACTION}&` +
    `name=${params.NAME}&` +
    `num1=${params.NUM1}&` +
    `num2=${params.NUM2}&` +
    `y=${params.YEAR}&` +
    `m=${params.MOUNTH}&` +
    `d=${params.DAY}&`
  );
}

function t1() {
  const out = document.querySelector(".out-1");
  fetchRequest(createLink(requestUrl, params), "GET", out);
}
const b1 = document.querySelector(".b-1");
b1.addEventListener("click", t1, true);
// ваше событие здесь!!!

// Task 2 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

function t2() {
  const out = document.querySelector(".out-2");
  params.ACTION = 2;
  fetchRequest(createLink(requestUrl, params), "GET", out);
}
const b2 = document.querySelector(".b-2");
b2.addEventListener("click", t2, true);
// ваше событие здесь!!!

// Task 3 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */

function t3() {
  const out = document.querySelector(".out-3");
  params.ACTION = 3;
  fetchRequest(createLink(requestUrl, params), "GET", out);
}
const b3 = document.querySelector(".b-3");
b3.addEventListener("click", t3, true);
// ваше событие здесь!!!

// Task 4 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

function t4() {
  const out = document.querySelector(".out-4");
  params.ACTION = 4;
  fetchRequest(createLink(requestUrl, params), "GET", out);
}
const b4 = document.querySelector(".b-4");
b4.addEventListener("click", t4, true);
// ваше событие здесь!!!

// Task 5 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

function t5() {
  const out = document.querySelector(".out-5");
  params.ACTION = 5;
  fetchRequest(createLink(requestUrl, params), "GET", out);
}
const b5 = document.querySelector(".b-5");
b5.addEventListener("click", t5, true);
// ваше событие здесь!!!

// Task 6 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

function t6() {
  const out = document.querySelector(".out-6");
  params.ACTION = 6;
  fetchRequest(createLink(requestUrl, params), "GET", out);
}
const b6 = document.querySelector(".b-6");
b6.addEventListener("click", t6, true);
// ваше событие здесь!!!

// Task 7 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

function t7() {
  const out = document.querySelector(".out-7");
  params.ACTION = 7;
  fetchRequest(createLink(requestUrl, params), "GET", out);
  const img = document.createElement("img");
  setTimeout(() => {
    out.innerHTML += "<br>";
    img.src = out.textContent;
    img.style.width = "100px";
    out.appendChild(img);
  }, 100);
}
const b7 = document.querySelector(".b-7");
b7.addEventListener("click", t7, true);
// ваше событие здесь!!!

// Task 8 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

function t8() {
  const out = document.querySelector(".out-8");
  params.ACTION = 8;
  fetchRequest(createLink(requestUrl, params), "GET", out);
}
const b8 = document.querySelector(".b-8");
b8.addEventListener("click", t8, true);
// ваше событие здесь!!!

// Task 9 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

function t9() {
  const out = document.querySelector(".out-9");
  params.ACTION = 9;
  fetchRequest(createLink(requestUrl, params), "GET", out);
}
const b9 = document.querySelector(".b-9");
b9.addEventListener("click", t9, true);
// ваше событие здесь!!!

// Task 10 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.

*/

function t10() {
  const out = document.querySelector(".out-10");
  params.ACTION = 1;
  fetchRequest(createLink(requestUrl, params), "POST", out);
}
const b10 = document.querySelector(".b-10");
b10.addEventListener("click", t10, true);
// Task 11 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

function t11() {
  const out = document.querySelector(".out-11");
  params.ACTION = 2;
  fetchRequest(createLink(requestUrl, params), "POST", out);
}
const b11 = document.querySelector(".b-11");
b11.addEventListener("click", t11, true);
// ваше событие здесь!!!

// Task 12 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

function t12() {
  const out = document.querySelector(".out-12");
  params.ACTION = 3;
  fetchRequest(createLink(requestUrl, params), "POST", out);
}
const b12 = document.querySelector(".b-12");
b12.addEventListener("click", t12, true);
// ваше событие здесь!!!

// Task 13 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

function t13() {
  const out = document.querySelector(".out-13");
  params.ACTION = 4;
  fetchRequest(createLink(requestUrl, params), "POST", out);
}
const b13 = document.querySelector(".b-13");
b13.addEventListener("click", t13, true);
// ваше событие здесь!!!

// Task 14 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

function t14() {
  const out = document.querySelector(".out-14");
  params.ACTION = 5;
  fetchRequest(createLink(requestUrl, params), "POST", out);
}
const b14 = document.querySelector(".b-14");
b14.addEventListener("click", t14, true);
// ваше событие здесь!!!

// Task 15============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

function t15() {
  const out = document.querySelector(".out-15");
  params.ACTION = 6;
  fetchRequest(createLink(requestUrl, params), "POST", out);
}

const b15 = document.querySelector(".b-15");
b15.addEventListener("click", t15, true);
// ваше событие здесь!!!

// Task 16 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

function t16() {
  const out = document.querySelector(".out-16");
  params.ACTION = 7;
  fetchRequest(createLink(requestUrl, params), "POST", out);
  const img = document.createElement("img");
  setTimeout(() => {
    out.innerHTML += "<br>";
    img.src = out.textContent;
    img.style.width = "100px";
    out.appendChild(img);
  }, 100);
}

// ваше событие здесь!!!
const b16 = document.querySelector(".b-16");
b16.addEventListener("click", t16, true);
// Task 17 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

function t17() {
  const out = document.querySelector(".out-17");
  params.ACTION = 8;
  fetchRequest(createLink(requestUrl,params), "POST", out)
}
const b17 = document.querySelector(".b-17");
b17.addEventListener("click", t17, true);
// ваше событие здесь!!!

// Task 18 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

function t18() {
  const out = document.querySelector(".out-18");
  params.ACTION = 9;
  fetchRequest(createLink(requestUrl,params), "POST", out);
}

// ваше событие здесь!!!
const b18 = document.querySelector(".b-18");
b18.addEventListener("click", t18, true);