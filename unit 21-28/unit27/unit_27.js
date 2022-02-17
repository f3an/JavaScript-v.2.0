// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/
const requestUrl = "http://getpost.itgid.info/index2.php";
const params = {
  AUTH_TOKEN: "7859d9d42a8834141d529577207c9596",
  NAME: "IHOR",
  BIRTH_YEAR: 2000,
  NUM1: 2,
  NUM2: 4,
  YEAR: 1,
  MOUNTH: 1,
  DAY: 1,
};
function fetchRequest(link, method) {
  return fetch(link, {
    method: method,
  });
}
function createLink(url, params, action) {
  return (
    url +
    `?auth=${params.AUTH_TOKEN}&` +
    `action=${action}&` +
    `name=${params.NAME}&` +
    `num1=${params.NUM1}&` +
    `num2=${params.NUM2}&` +
    `year=${params.BIRTH_YEAR}` +
    `y=${params.YEAR}&` +
    `m=${params.MOUNTH}&` +
    `d=${params.DAY}&`
  );
}

let createRequests = (out, Action_num1, Action_num2, Method) => {
  let str = "";
  let request_A = new Promise((resolve, reject) => {
    fetchRequest(createLink(requestUrl, params, Action_num1), Method).then(
      (data) => {
        resolve(data.text());
      }
    );
  });
  let request_B = new Promise((resolve, reject) => {
    fetchRequest(createLink(requestUrl, params, Action_num2), Method).then(
      (data) => {
        resolve(data.text());
      }
    );
  });
  Promise.all([request_A, request_B]).then((data) => {
    for (const value of data) {
      str += value + ", ";
    }
    out.textContent = str.slice(0, -2);
  });
};

function t1() {
  const out = document.querySelector(".out-1");
  createRequests(out, 1, 2, "GET");
}
const botton1 = document.querySelector(".b-1");
botton1.addEventListener("click", t1, true);
// ваше событие здесь!!!

// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>

*/

function t2() {
  const out = document.querySelector(".out-2");
  createRequests(out, 3, 4, "GET");
}
const botton2 = document.querySelector(".b-2");
botton2.addEventListener("click", t2, true);
// ваше событие здесь!!!

// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
                 */

function t3() {
  const out = document.querySelector(".out-3");
  createRequests(out, 5, 6, "GET");
}
const botton3 = document.querySelector(".b-3");
botton3.addEventListener("click", t3, true);
// ваше событие здесь!!!

// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/

function t4() {
  const out = document.querySelector(".out-4");
  createRequests(out, 7, 8, "GET");
  const img = document.createElement("img");
  setTimeout(() => {
    img.src = out.textContent.split(",")[0];
    img.style.width = "100px";
    out.innerHTML += "<br>";
    out.appendChild(img);
  }, 100);
}
const botton4 = document.querySelector(".b-4");
botton4.addEventListener("click", t4, true);
// ваше событие здесь!!!

// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

function t5() {
  const out = document.querySelector(".out-5");
  createRequests(out,1,2,"POST");
}
const botton5 = document.querySelector(".b-5");
botton5.addEventListener("click", t5, true);
// ваше событие здесь!!!

// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

function t6() {
  const out = document.querySelector(".out-6");
  createRequests(out,3,4,"POST");
}
const botton6 = document.querySelector(".b-6");
botton6.addEventListener("click", t6, true);
// ваше событие здесь!!!

// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

function t7() {
  const out = document.querySelector(".out-7");
  createRequests(out,5,6,"POST");
}
const botton7 = document.querySelector(".b-7");
botton7.addEventListener("click", t7, true);
// ваше событие здесь!!!

// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

function t8() {
  const out = document.querySelector(".out-8");
  createRequests(out,7,8,"POST");
  const img = document.createElement("img");
  setTimeout(() => {
    img.src = out.textContent.split(",")[0];
    img.style.width = "100px";
    out.innerHTML += "<br>";
    out.appendChild(img);
  }, 100);
}
const botton8 = document.querySelector(".b-8");
botton8.addEventListener("click", t8, true);