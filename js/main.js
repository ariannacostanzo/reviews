const logSomething = (something) => console.log(something);

// ! Elementi da raccogliere
const randomButton = document.querySelector('button');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const reviewContainerElement = document.querySelector('.review-container');
let template = '';
let currentIndexDisplayed;

const users = [
    {
        name : 'Bryan Black',
        role: 'Game developer',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut voluptates quas placeat perspiciatis aperiam provident eaque natus officiis assumenda at. Aspernatur illo voluptatibus exercitationem sed? Odio, quod? Fugit, iure. Fugit.',
        image: 'persona6.jpg'
    },
    {
        name : 'Martha Watson',
        role: 'Web developer',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nisi rerum iusto quasi nobis ipsam, eveniet architecto sapiente asperiores, explicabo dolorem, repudiandae porro! Sit, deleniti reprehenderit rerum et ipsam praesentium!',
        image: 'persona1.jpg'
    },
    {
        name : 'Gerard White',
        role: 'IA developer',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id labore quos ipsa, magni consectetur tempora corrupti ad mollitia numquam ipsum velit expedita dolorum eaque. Repudiandae rem suscipit ut enim nesciunt!',
        image: 'persona2.avif'
    },
    {
        name : 'Anthony West',
        role: 'Teacher',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, sed eveniet quae eius facilis nemo culpa nesciunt quam fuga et voluptas laboriosam asperiores similique quis amet impedit quo? Vel, eveniet.',
        image: 'persona3.jpg'
    },
    {
        name : 'Annalise Pratt',
        role: 'Web designer',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt dignissimos veritatis ex iure? Minus, cumque necessitatibus provident architecto doloremque cum sint commodi dolor. Saepe, cum autem aperiam sed quos non.',
        image: 'persona4.jpg'
    },
    {
        name : 'Nell Junior',
        role: 'Game designer',
        review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat sunt quo esse ullam suscipit? Exercitationem officiis, consequatur beatae quis dolorem tempora. Magnam voluptatibus reprehenderit minima dignissimos.',
        image: 'persona5.jpg'
    }
    
]

//! funzioni


/** Gets a randomNumber from 0 to users.length -1
 * 
 * @returns {number} a random number 
 */
const getRandomReview = () => {

    let randomReviewIndex;
    for (let user of users) {
        randomReviewIndex = Math.floor(Math.random() * users.length - 1) +1;
     
    }
    return randomReviewIndex;

};


/** Gets the template changing it dynamically 
 * 
 * @param {string} image current user image
 * @param {string} name current user name
 * @param {string} role current user role
 * @param {string} review current user review
 */
const getTemplate = (image, name, role, review) => {
    template = `
    <div class="img-container">
        <img src="images/${image}" alt="" class="user-image">
        <span>
            <i class="fa-solid fa-quote-right"></i>
        </span>
        </div>
        <h3 class="user-name">${name}</h3>
        <p class="user-role">${role}</p>
        <p class="user-review">${review}</p>      
    `
    reviewContainerElement.innerHTML = template;
}


/** Validation to hide the left arrow when the first review is displayed and hide the right arrow when the last review is displayed
 * 
 * @param {number} index index of the array users
 */
const checkCurrentReview = (index) => {
    //se la review attuale è la prima non avrò la freccietta sinistra
    if (index === 0) {
        leftArrow.classList.add('hidden')
    
    } else {
        leftArrow.classList.remove('hidden')
        
    }

    //se la review attuale è l'ultima' non avrò la freccietta destra
    if (index === users.length-1) {
        rightArrow.classList.add('hidden')
    
    } else {
        rightArrow.classList.remove('hidden')
    }
      
}


/**ottengo le proprietà degli oggetti, scegliendo dinamicamente quello che mi serve con l'index e li inserisco in un array
 * 
 * @param {number} index 
 * @returns {Array} array of strings, rapresenting the user properties
 */
const getProperties = (index) => {
    let properties = [];

    const UserImage = users[index].image;
    const UserName = users[index].name;
    const UserRole = users[index].role;
    const UserReview = users[index].review;
    
    properties.push(UserImage, UserName, UserRole, UserReview);

    return properties;

}

//! inizio pagina

//*Preparing the first review to display

//?--------------------METODO 1-------------------------------------------------
// const firstUserName = users[0].name;
// const firstUserRole = users[0].role;
// const firstUserReview = users[0].review;
// const firstUserimage = users[0].image;

// getTemplate(firstUserimage, firstUserName, firstUserRole, firstUserimage )
//?------------------------------------------------------------------------------

currentIndexDisplayed = 0;


//?--------------------METODO 2-------------------------------------------------
//invece di ripetere ogni volta i valori da recuperare ho creato la funzione che li mette in un array, però così snaturo l'object, inoltre è poco dinamico
//Questo però occupa solo due righe, e anche l'altro in realtà non era molto dinamico
const firstUser = getProperties(currentIndexDisplayed);
getTemplate(firstUser[0], firstUser[1], firstUser[2], firstUser[3])
//?------------------------------------------------------------------------------

checkCurrentReview(currentIndexDisplayed);




//! event listener

//Quando premo il button, farò vedere una review a caso tra il mio array di reviews

randomButton.addEventListener('click', ()=> {

    //ottengo un numero casuale da 0 a users.length - 1
    const randomReviewIndex = getRandomReview();
    currentIndexDisplayed = randomReviewIndex;

    const randomUser = getProperties(currentIndexDisplayed);
    getTemplate(randomUser[0], randomUser[1], randomUser[2], randomUser[3])
   
    checkCurrentReview(currentIndexDisplayed);

});



//passare da una review all'altra in modo ordinato con le frecciette

rightArrow.addEventListener('click', ()=> {
    
    currentIndexDisplayed++;

    const currentUser = getProperties(currentIndexDisplayed);
    getTemplate(currentUser[0], currentUser[1], currentUser[2], currentUser[3])

    checkCurrentReview(currentIndexDisplayed);


});


leftArrow.addEventListener('click', ()=> {
    
    currentIndexDisplayed--;

    const currentUser = getProperties(currentIndexDisplayed);
    getTemplate(currentUser[0], currentUser[1], currentUser[2], currentUser[3])

    checkCurrentReview(currentIndexDisplayed);


});

