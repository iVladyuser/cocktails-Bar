import axios from 'axios';

import { BASE_URL } from '../api/api';

import { getCocktailsByLetter } from '../api/api'
import { searchCocktailsByName } from '../api/api'
import { head } from 'lodash';
import { KEY_CODES } from 'choices.js';
// import { renderList } from '../cocktailsMarkUp/cocktailsMarkUp'




// ПО МАСИВУ ШУКАВ КОДИ КЛАВІАТУРИ

// document.onkeypress = function(event){
//     console.log(event);
//     keyboard.push(event.charCode);
//     console.log(keyboard);
// }

//-------------------------------max 768


const select = document.querySelector(".hero-mobyle-js");
const textOutput = document.querySelector(".text-output");

select.addEventListener("change", setOutput);

function setOutput(event) {
  
  const selectedOptionIndex = event.currentTarget.selectedIndex;
  const selectedOptionText =
    event.currentTarget.options[selectedOptionIndex].text;

  textOutput.textContent = selectedOptionText;
 
const letterOrNumber = selectedOptionText;
}










//-------------------------------min 768




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



// БУКВА В ПОШУК

const keyBoard = document.querySelector(".js-keyboard");

keyBoard.addEventListener("click", (e) => {
    let button = e.target;
    // console.log(e.target);
    if(e.target.nodeName  !== "BUTTON"){
        return;
    }
 e.tarqet = button.textContent;
    const letterOrNumber =  button.textContent;
   
    
    getCocktailsByLetter(letterOrNumber);
});




// INPUT

const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
 
  const name = output.textContent;
console.log(name);
});