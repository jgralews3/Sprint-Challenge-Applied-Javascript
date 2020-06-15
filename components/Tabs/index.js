// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>



function tabMaker (data){
    let topic = document.createElement ('div');
    topic.classList.add ('tab');
    topic.textContent = data;
    return topic;
}

let topics1 = document.querySelector ('.topics');

axios.get ('https://lambda-times-backend.herokuapp.com/topics')
.then ((res) => {res.data.topics.forEach((item) => {topics1.appendChild(tabMaker(item))})
    })
.catch (err => {console.log("error")});

