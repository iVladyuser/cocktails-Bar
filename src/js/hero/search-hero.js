import axios from 'axios';

export { letterOrNumber };

import { getCocktailsByLetter } from '../api/api'
import { searchCocktailsByName } from '../api/api'
import { head } from 'lodash';
import { KEY_CODES } from 'choices.js';
// import { renderList } from '../cocktailsMarkUp/cocktailsMarkUp'


const keyboard = [
  65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
  84, 85, 86, 87, 88, 89, 90, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48,
];

// ПО МАСИВУ ШУКАВ КОДИ КЛАВІАТУРИ

// document.onkeypress = function(event){
//     console.log(event);
//     keyboard.push(event.charCode);
//     console.log(keyboard);
// }

// -------------------------------max 768
function inity() {
  let out = '';
  for (let i = 0; i < keyboard.length; i++) {
    out +=
      '<option  data="' +
      keyboard[i] +
      '"value="'+ String.fromCharCode(keyboard[i]) +'" class="hero-mobyle-min">' +
      String.fromCharCode(keyboard[i]) +
      '</option>';
  }
  document.querySelector('#keyboardmin').innerHTML = out;
}
inity();

// МОБІЛЬНА ВЕРСІЯ КНОПОК ПОШУКУ

const select = document.querySelector(".hero-mobyle-js");
const textOutput = document.querySelector(".text-output");


function setOutput(event) {
    const selectedOptionIndex = event.currentTarget.selectedIndex;
    const selectedOptionText = event.currentTarget.options[selectedOptionIndex].text;
    textOutput.textContent = selectedOptionText;
  };

  select.addEventListener("change", setOutput);

  const letterOrNumber = textOutput;

 

 
 








//-------------------------------min 768

function init() {
  let out = '';
  for (let i = 0; i < keyboard.length; i++) {
    out +=
      '<button type="button" value="'+ String.fromCharCode(keyboard[i]) +'"  class="keyboard-letter" data="' +
      keyboard[i] +
      '" >' +
      String.fromCharCode(keyboard[i]) +
      '</button>';
  }
  document.querySelector('#keyboard').innerHTML = out;
}
init();

// Перевірка чи  є ще  десь натиснута кнопка

document.querySelectorAll('#keyboard .keyboard-letter')
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



// БУКВА В ПОШУКУ БІЛЬШЕ 768


export const BASE_URL = 'https://drinkify.b.goit.study/api/v1';

export async function getCocktailsByLetters(letterOrNumbers) {
  const url = `${BASE_URL}/cocktails?f=${letterOrNumbers}`;
  const data = await axios.get(url);
  console.log(data);
  return data.cocktails;
};

// const textsInput = document.querySelector(".text-input");
// const keyBoard = document.querySelector(".keyboard-letter");
// const keyboard = document.getElementsByClassName('keyboard-letter');
//   for (const button of buttons) {
//     button.addEventListener('click', () => console.log('Clicked!'));
//   }
// const letterOrNumbers = keyBoard.value;
// console.log(letterOrNumbers);
// keyBoard.addEventListener("click", getCocktailsByLetters(letterOrNumbers));




// INPUT


const textInput = document.querySelector(".search-js");
const output = document.querySelector(".output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});
const name = output;
console.log(name);
textInput.addEventListener("input", searchCocktailsByName(name));   
