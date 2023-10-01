import axios from 'axios';

import { BASE_URL } from '../api/api';

import { getCocktailsByLetter } from '../api/api'
import { searchCocktailsByName } from '../api/api'
import { head } from 'lodash';
import { KEY_CODES } from 'choices.js';

const keyboard = [
  65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
  84, 85, 86, 87, 88, 89, 90, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48,
];


function init() {
  let out = '';
  for (let i = 0; i < keyboard.length; i++) {
    out +=
      '<li><button type="button" valeu="' +
      String.fromCharCode(keyboard[i]) +
      '"  class="keyboard-letter" data="' +
      keyboard[i] +
      '" >' +
      String.fromCharCode(keyboard[i]) +
      '</button></li>';
  }
  document.querySelector('#keyboard').innerHTML = out;
}
init();


const keyBoard = document.querySelector(".js-keyboard");

keyBoard.addEventListener("click", (e) => {
    if(e.target.nodeName  !== "BUTTON"){
        return;
    }
        
  let button = document.querySelector(".keyboard-letter");
  
   console.log(button);
        const name = button.textContent;
        console.log(name);
        searchCocktailsByName(name);
});


// ПО МАСИВУ ШУКАВ КОДИ КЛАВІАТУРИ

// document.onkeypress = function(event){
//     console.log(event);
//     keyboard.push(event.charCode);
//     console.log(keyboard);
// }



//-------------------------------min 768

// function init() {
//   let out = '';
//   for (let i = 0; i < keyboard.length; i++) {
//     out +=
//       '<button type="button"  class="keyboard-letter" data="' +
//       keyboard[i] +
//       '" >' +
//       String.fromCharCode(keyboard[i]) +
//       '</button>';
//   }
//   document.querySelector('#keyboard').innerHTML = out;
// }
// init();

// document
//   .querySelectorAll('#keyboard .keyboard-letter')
//   .forEach(function (element) {
//     element.onclick = function (event) {
//       document
//         .querySelectorAll('#keyboard .keyboard-letter')
//         .forEach(function (element) {
//           element.classList.remove('active');
//         });
//       let code = this.getAttribute('data');
//       this.classList.add('active');
//     };
//   });

// БУКВА В ПОШУК

const textInput = document.querySelector('.search-js');
const Btn = document.querySelectorAll('.keyboard-letter');

