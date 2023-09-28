
const keyboard = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48];

// ПО МАСИВУ ШУКАВ КОДИ КЛАВІАТУРИ

// document.onkeypress = function(event){
//     console.log(event);
//     keyboard.push(event.charCode);
//     console.log(keyboard);
// }

function init() {
    let out = '';
    for (let i = 0; i < keyboard.length; i++) {
        out += '<button type="button"  class="keyboard-letter" data="' + keyboard[i] + '" >' + String.fromCharCode(keyboard[i]) + '</button>';
    }
    document.querySelector('#keyboard').innerHTML = out;
   
}
init();



document.querySelectorAll('#keyboard .keyboard-letter').forEach(function (element) {
    element.onclick = function(event){
        document.querySelectorAll('#keyboard .keyboard-letter').forEach(function (element) {
element.classList.remove('active');
        });
        let code = this.getAttribute('data');
        this.classList.add('active');
        
    }
    
});

const textInput = document.querySelector(".search");
const setFocusBtn = document.querySelector('[data="' +keyboard[i]+ '"]');


setFocusBtn.addEventListener("click", () => {
  textInput.focus();
});



   
 
