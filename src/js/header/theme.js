// function to set a given theme/color-scheme
        // function setTheme(themeName) {
        //     localStorage.setItem('theme', themeName);
        //     document.documentElement.className = themeName;
        // }

        // function to toggle between light and dark theme
        // function toggleTheme() {
        //     if (localStorage.getItem('theme') === 'theme-dark') {
        //         setTheme('theme-light');
        //     } else {
        //         setTheme('theme-dark');
        //     }
        // }

        // Immediately invoked function to set the theme on initial load
        // (function () {
        //     if (localStorage.getItem('theme') === 'theme-dark') {
        //         setTheme('theme-dark');
        //         document.getElementById('slider').checked = false;
        //     } else {
        //         setTheme('theme-light');
        //       document.getElementById('slider').checked = true;
        //     }
        // })();



// const switchTheme = () => {
//   const rootEl = document.documentElement;
//   let dataTheme = rootEl.getAttribute('data-theme'),
//     newTheme;
//   newTheme = dataTheme === 'light' ? 'dark' : 'light';
// // console.log(newTheme);
//   rootEl.setAttribute('data-theme', newTheme);

//   localStorage.setItem('theme', newTheme);
// };

// document
//   .querySelector('#theme-switcher input[type="checkbox"]')
//   .addEventListener('change', switchTheme);


// const savedTheme = localStorage.getItem('theme');
// if (savedTheme) {
//   document.documentElement.setAttribute('data-theme', savedTheme);
  
//   if (savedTheme === 'dark') {
//     document.querySelector('#theme-switcher input[type="checkbox"]').checked = true;
//   }
// }







// const switchTheme = () => {
//   const rootEl = document.documentElement;
//   let dataTheme = rootEl.getAttribute ('data-theme'),
//     newTheme;
//   newTheme = dataTheme === 'light' ? 'dark' : 'light';
//   console.log(newTheme);
//   rootEl.setAttribute('data-theme', newTheme);

//   localStorage.setItem('theme', newTheme);
// };

// document.getElementById('theme-switcher')
//   .addEventListener('change', switchTheme);


// const savedTheme = localStorage.getItem('theme');
// if (savedTheme) {
//   document.documentElement.setAttribute('data-theme', savedTheme);
  
//   if (savedTheme === 'dark') {
//     document.getElementById('theme-switcher').checked = true;
//   }
// }

const switchTheme = () => {
    const rootEl = document.documentElement;
    let currentTheme = rootEl.getAttribute('data-theme');
    let newTheme;

    if (currentTheme === 'light') {
        newTheme = 'dark';
    } else {
        newTheme = 'light';
    }

    console.log(newTheme);
    rootEl.setAttribute('data-theme', newTheme);

    
    rootEl.classList.remove(currentTheme + '-theme');
    rootEl.classList.add(newTheme + '-theme');

    localStorage.setItem('theme', newTheme);
};

document.getElementById('theme-switcher')
    .addEventListener('change', switchTheme);

    document.getElementById('theme-switcher-mobile')
    .addEventListener('change', switchTheme);
    const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);

    
    document.documentElement.classList.add(savedTheme + '-theme');

    if (savedTheme === 'dark') {
        document.getElementById('theme-switcher').checked = true;
    }
}











// function theme() {
//     const toggleTheme = document.querySelector('.switch');
//     console.log(toggleTheme);

//     toggleTheme.addEventListener('click', () => {
//         // console.log('click');
//         document.documentElement.setAttribute('data-theme', 'dark')
//     })
// }
// theme()