// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function createCard (obj){
    let cardContainer = document.createElement ('div');
    let headlineData = document.createElement ('div');
    let authorData = document.createElement ('div');
    let imgData = document.createElement ('div');
    let image = document.createElement ('img');
    let info = document.createElement ('span');

    cardContainer.classList.add ('card');
    headlineData.classList.add ('headline');
    authorData.classList.add ('author');
    imgData.classList.add ('img-container');

    headlineData.textContent = obj.headline;
    imgData.src = obj.authorPhoto;
    info.textContent = `By ${obj.authorName}`;

    cardContainer.appendChild(headlineData);
    cardContainer.appendChild(authorData);
    authorData.appendChild(imgData)
    imgData.appendChild(image);
    authorData.appendChild (info);

    return cardContainer;
}

let card = document.querySelector ('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then ((res) => {res.data.articles.javascript.forEach((item) => {card.appendChild(createCard(item))}
)
})
.catch (err=>{console.log ('error')});