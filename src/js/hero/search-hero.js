import axios from 'axios';

import { BASE_URL } from '../api/api';

import { getCocktailsByLetter } from '../api/api';
import { searchCocktailsByName } from '../api/api';
import { head } from 'lodash';
import { KEY_CODES } from 'choices.js';
// import { renderList } from '../cocktailsMarkUp/cocktailsMarkUp'

// const keyboard = [
//   65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
//   84, 85, 86, 87, 88, 89, 90, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48,
// ];

const keyboard = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];


// ПО МАСИВУ ШУКАВ КОДИ КЛАВІАТУРИ

// document.onkeypress = function(event){
//     console.log(event);
//     keyboard.push(event.charCode);
//     console.log(keyboard);
// }

//-------------------------------max 768
function inity() {
  let out = '';
  keyboard.forEach(element => {
    out += `<option class ="hero-mobyle-min">${element}</option>`;
  });
  // for (let i = 0; i < keyboard.length; i++) {
  //   out +=
  //     '<option  data="' +
  //     keyboard[i] +
  //     '" class="hero-mobyle-min">' +
  //     String.fromCharCode(keyboard[i]) +
  //     '</option>';
  // }
  document.getElementById('keyboardmin').innerHTML = out;
}
inity();

const setOption = document.querySelector('#keyboardmin');

setOption.addEventListener('change', event => {
  
  letterOrNumber = event.target.options[event.target.selectedIndex].textContent;
  console.log(letterOrNumber);
});

//-------------------------------min 768

function init() {
  let out = '';
  keyboard.forEach(
    element => {
      out +=
        `<button type="button" class="keyboard-letter">${element}</button>`
    });
  // for (let i = 0; i < keyboard.length; i++) {
  //   let key = keyboard[i];
  //   console.log(key);
  //   out +=
  //     '<button type="button" class="keyboard-letter" <button> `${key}`</button>';
  // }
  document.getElementById('keyboard').innerHTML = out;
}
init();

document
  .querySelectorAll('#keyboard .keyboard-letter')
  .forEach(function (element) {
    element.onclick = function (event) {
      document
        .querySelectorAll('#keyboard .keyboard-letter')
        .forEach(function (element) {
          element.classList.remove('active');
        });
      let code = this.getAttribute('data');
      this.classList.add('active');
    };
  });

// БУКВА В ПОШУК

const keyBoard = document.querySelector('.js-keyboard');
let letterOrNumber = keyBoard.querySelectorAll('button[dataset]');


keyBoard.addEventListener('click', event => {
  if (!event.target.classList.contains('keyboard-letter')) {
    return;
  }
  letterOrNumber = event.target;
  console.log(letterOrNumber.textContent);
});

// INPUT
// const textInput = document.querySelector(".search-js");
// let input = document.querySelector('input');
// const name = input.value;
// input.addEventListener("input", searchCocktailsByName(name));
