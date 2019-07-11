/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/dvcolin')
.then(data => {
  console.log('github api', data);
  const apiData = data.data;
  cards.appendChild(createCard(apiData))
})


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
const cards = document.querySelector('.cards');


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const friendsArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

friendsArray.forEach(friend => {
  axios.get(`https://api.github.com/users/${friend}`)
  .then(data => {
    console.log('github api', data);
    const apiData = data.data;
    cards.appendChild(createCard(apiData))
  })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createCard(user) {
  //Create elements
  const cardContent = document.createElement('div')
  const cardImage = document.createElement('img')
  const cardInfo = document.createElement('div')
  const infoName = document.createElement('h3')
  const infoUsername = document.createElement('p')
  const infoLocation = document.createElement('p')
  const infoProfile = document.createElement('p')
  const infoLink = document.createElement('a')
  const infoFollowers = document.createElement('p')
  const infoFollowing = document.createElement('p')
  const infoBio = document.createElement('p')

  //Element structure
  cardContent.appendChild(cardImage)
  cardContent.appendChild(cardInfo)
  cardInfo.appendChild(infoName)
  cardInfo.appendChild(infoUsername)
  cardInfo.appendChild(infoLocation)
  cardInfo.appendChild(infoProfile)
  infoProfile.appendChild(infoLink)
  cardInfo.appendChild(infoFollowers)
  cardInfo.appendChild(infoFollowing)
  cardInfo.appendChild(infoBio)

  //Add classes
  cardContent.classList.add('card')
  cardInfo.classList.add('card-info')
  infoName.classList.add('name')
  infoUsername.classList.add('username')

  //Set content
  cardImage.src = `${user.avatar_url}`
  infoName.textContent = `${user.name}`
  infoUsername.textContent = `${user.login}`
  infoLocation.textContent = `${user.location}`
  infoLink.textContent = `${user.html_url}`
  infoFollowers.textContent = `${user.followers}`
  infoFollowing.textContent = `${user.following}`

  return cardContent;
}




/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/



