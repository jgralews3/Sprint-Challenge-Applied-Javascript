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

function Header() {
    let container = document.createElement('div');
    let date = document.createElement('span');
    let title = document.createElement('h1');
    let temper = document.createElement('span');

    container.classList.add ('header');
    temper.classList.add ('temp');

    date.textContent = 'SMARCH 28, 2019';
    title.textContent = 'Lambda Times';
    temper.textContent = '98°';

    container.appendChild(date);
    container.appendChild(title);
    container.appendChild(temper);

    return container;
}

let headerContainer = document.querySelector ('.header-container')
headerContainer.appendChild(Header());