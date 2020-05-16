// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>


// function Tabs() {
//     let tab = document.querySelectorAll
// }


//
//   })
//   .then((topics) => {
//     const container = document.querySelector('.topics')
//     topics.forEach(topics => {
//       container.appendChild(Tab(topiccs))
//     })
//   })

function Tab(topic) {
    const tab = document.createElement('div')
    tab.classList.add('tab')
    tab.textContent = topic
    return tab;
  }
  
  axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(res => {
      console.log(res);
      return topics = res.data.topics
    })
    .then((topics) => {
      const container = document.querySelector('.topics')
      topics.forEach(topic => {
        container.appendChild(Tab(topic))
      })
    })