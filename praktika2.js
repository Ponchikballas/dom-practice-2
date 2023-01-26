// // практика задание 11
// let button = document.querySelector("#button");
// let peshki = document.querySelectorAll('p');
// button.addEventListener('click',function(){
//     for(let i = 0; i < peshki.length;){
//         let elem = peshki[i++]
//         elem.textContent = elem.textContent+ '' +i
//     }
// })

//  // практика задание 12
//  let button = document.querySelector('#button');
//  let ashki = document.querySelectorAll('a');
//  button.addEventListener('click', function(){
//     for (let elem of ashki){
//         elem.textContent = elem.textContent + '(' + elem.href + ')'
//     }
//  })

//  // практика задание 13 не работает
// let ashki = document.querySelectorAll('a');
// function func(){
//     for(let i = 0; i < ashki.length; i++){
//         if (ashki[i].startsWith('https//') == true)
//         ashki[i].textContent += '!!!';
//     }
// }

// // практика задание 14
// let abz = document.querySelectorAll('p')
//  for(let elem of abz){
//      elem.addEventListener('click', function(){
//          elem.textContent = elem.textContent * elem.textContent
//      })
//  }

// // практика задание 15
// let inp = document.querySelector("input");
// inp.addEventListener("blur", func);
// function func() {
//   let week = [
//     "понедельник",
//     "вторник",
//     "среда",
//     "четверг",
//     "пятница",
//     "суббота",
//     "воскресенье",
//   ];
//   let str = inp.value;
//   let arr = str.split(".");
//   let arr2 = arr.reverse();
//   let str1 = arr2.join(",");
//   let date = new Date(str1);
//   let day = date.getDay();
//   let p = document.getElementById("text");
//   inp.value = week[day];
// }

// // практика задание 16
//  let elem = document.querySelector('#elem')
//  let button1 = document.querySelector('#button1')
//  let button2 = document.querySelector('#button2')
//  button1.addEventListener('click', function(){
//      if(elem.value >= 0){
//          elem.value =  +elem.value + 1
//      }
//  })
//  button2.addEventListener('click', function(){
//          elem.value =  +elem.value - 1;
//          if(elem.value < 0 ){
//             elem.value = undefined
//          }
//  })

// // практика задание 17
// let peshki = document.querySelectorAll('p')
//  let inp = document.querySelector('input')
//  for(let part of peshki){
//     part.addEventListener('click', function(){
//         inp.value = +inp.value + 1
//     })
//  }

// // практика задание 18
// let abz = document.querySelectorAll("div");
// for (let elem of abz) {
//   elem.textContent = elem.textContent.slice(0, 10) + "............";
// }

// // практика задание 19
// let inp = document.querySelector("input");
// inp.addEventListener("blur", func);
// function func() {
//   if ((inp.value >= 0) & (inp.value <= 100)) {
//     inp.style.color = "green";
//   } else {
//     inp.style.color = "red";
//   }
// }

// // практика задание 20
// let button = document.querySelector("#button");
// let elem = document.querySelector("#elem");
// button.addEventListener("click", func);
// function func() {
//   let t = '/';
//   let letters = "1234567890qwertyuiopasdfghjklzxcvbnm";
//   for (let i = 0; i < 8; i++) {
//     t += letters.charAt(Math.floor(Math.random() * letters.length));
//     elem.value = t;
//   }
// }

// // практика задание 20
// let button = document.querySelector("#button");
// let elem = document.querySelector("#elem");
// button.addEventListener("click", func);
// function func() {
//   let t = '';
//   let randomtext = elem.value;
//   for (i = 0; i < randomtext.length; i++) {
//     t += randomtext.charAt(Math.floor(Math.random() * randomtext.length));
//     elem.value = t;
//   }
// }


// // практика задание 22
// let button = document.querySelector("#button");
// let elem = document.querySelector("#elem");
// let abz = document.querySelector('p');
// button.addEventListener("click", func);
// function func(){
//     abz.textContent = (+elem.value - 32) *  5/9;
// }


// практика задание 23


