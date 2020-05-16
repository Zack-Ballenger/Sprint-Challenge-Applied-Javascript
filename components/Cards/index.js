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
// const cardEntry = document.querySelector(".cards-container");

// axios.get("https://lambda-times-backend.herokuapp.com/articles")
//     .then(res => {
//         console.log(res);
//         const articleValues = Object.values(response.data.articles);
//         console.log(articleValues);
//         articleValues.forEach(item => {
//             item.forEach(i => {
//                 const newArticle = CardMaker(i);
//                 cardEntry.appendChild(newArticle);
//             });
//         });
//     });

function Card(headline, url, name) {
    const img = document.createElement('img')
    const headLine = document.createElement('div')
    const imgContainer = document.createElement('div')
    const author = document.createElement('span')
    const card = document.createElement('div')
    const authorContainer = document.createElement('div')




    card.classList.add('card')
    headLine.classList.add('headline')
    authorContainer.classList.add('author')
    imgContainer.classList.add('img-container')
  
    headLine.textContent = headline
    img.src = url
    author.innerHTML = `By ${name}`
  
    imgContainer.appendChild(img)
    authorContainer.append(imgContainer, author)
    card.append(headLine, authorContainer)
  
    return card
  }
  
  axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
      console.log(res);
      const data = res.data.articles
      articleTypes = [
        data.javascript,
        data.bootstrap,
        data.technology,
        data.jquery,
        data.nod
      ]
      console.log(articleTypes);
    })
    .then(() => {
      const cardContainer = document.querySelector('.cards-container')
      articleTypes.forEach(articles => {
        articles.forEach(article => {
          cardContainer.append(
            Card(article.headline, article.authorPhoto, article.authorName)
          )
        }
        )
      })
    })
    .catch(err => console.log(err))