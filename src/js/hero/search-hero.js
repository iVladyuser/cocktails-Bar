import axios from 'axios';
import { BASE_URL } from '../api/api';
import { getCocktailsByLetter, searchCocktailsByName } from '../api/api';
import { KEY_CODES } from 'choices.js';

const keyboard = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  ];
  
  // function initKeyboard() {
  //   let optionsHTML = '';
  //   keyboard.forEach(element => {
  //     optionsHTML += <option class="hero-mobyle-min">${element}</option>;
  //   });
  //   document.getElementById('keyboardmin').innerHTML = optionsHTML;
  // }
  
  // initKeyboard();
  
  // document.querySelector('#keyboardmin').addEventListener('change', event => {
  //   const letterOrNumber = event.target.options[event.target.selectedIndex].textContent;
  //   console.log(letterOrNumber);
  // });
  
  // function initKeyboardButtons() {
  //   let buttonsHTML = '';
  //   keyboard.forEach(element => {
  //     buttonsHTML += <button type="button" class="keyboard-letter">${element}</button>;
  //   });
  //   document.getElementById('keyboard').innerHTML = buttonsHTML;
  
  //   document.querySelectorAll('#keyboard .keyboard-letter').forEach(function (element) {
  //     element.onclick = function (event) {
  //       document.querySelectorAll('#keyboard .keyboard-letter').forEach(function (element) {
  //         element.classList.remove('active');
  //       });
  //       this.classList.add('active');
  //       const code = this.textContent;
  //       // console.log(code);
  //     };
  //   });
  // }
  
  // initKeyboardButtons();
  
  // const keyBoard = document.querySelector('.js-keyboard');
  // let letterOrNumberInput = null;
  
  // keyBoard.addEventListener('click', event => {
  //   if (!event.target.classList.contains('keyboard-letter')) {
  //     return;
  //   }
  //   letterOrNumberInput = event.target.textContent;
  //   console.log(letterOrNumberInput);
  // });