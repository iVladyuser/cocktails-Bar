import Choices from 'choices.js';
// import  Choices from 'choices.js/public/assets/scripts/choices.js';
import 'choices.js/public/assets/styles/choices.css';
import '../../css/hero/search-hero.css';


const element = document.querySelector('.hero-mobyle-js');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ""
}
    );


    // const elementChoice = document.querySelector('.choices');
    // elementChoice.addEventListener("change", (e) => {
    //     if(e.target.nodeName  !== "OPTION"){
    //         return;
    //     }
    //   const newClass = document.querySelector (".choices__inner")
    //   newClass.classList.add("actives");
    // }

    // )
    