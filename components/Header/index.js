// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(titles, dates, temperature) {

const header = document.createElement('div');
const date = document.createElement('span');
const temp = document.createElement('span');
const h1 = document.createElement('div');

header.classList.add('header');
date.classList.add('date');
temp.classList.add('temp');

header.append(date, h1, temp);

date.textContent = dates;
temp.textContent = temperature;
h1.textContent = titles;


return header;


}


const headerContainer = document.querySelector('.header-container')

headerContainer.appendChild(Header("Ayyyyyyyyyyy", "Lambda", "65"))

