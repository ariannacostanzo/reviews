const logSomething = (something) => console.log(something);

const randomButton = document.querySelector('button');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const reviewContainerElement = document.querySelector('.review-container');
let template = '';

const users = [
    {
        name : 'Martha Watson',
        role: 'Web developer',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nisi rerum iusto quasi nobis ipsam, eveniet architecto sapiente asperiores, explicabo dolorem, repudiandae porro! Sit, deleniti reprehenderit rerum et ipsam praesentium!',
        image: 'persona1.jpg'
    },
    {
        name : 'Gerard White',
        role: 'IA developer',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nisi rerum iusto quasi nobis ipsam, eveniet architecto sapiente asperiores, explicabo dolorem, repudiandae porro! Sit, deleniti reprehenderit rerum et ipsam praesentium!',
        image: 'persona2.avif'
    },
    {
        name : 'Anthony West',
        role: 'Teacher',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nisi rerum iusto quasi nobis ipsam, eveniet architecto sapiente asperiores, explicabo dolorem, repudiandae porro! Sit, deleniti reprehenderit rerum et ipsam praesentium!',
        image: 'persona3.jpg'
    },
    {
        name : 'Annalise Pratt',
        role: 'Web designer',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nisi rerum iusto quasi nobis ipsam, eveniet architecto sapiente asperiores, explicabo dolorem, repudiandae porro! Sit, deleniti reprehenderit rerum et ipsam praesentium!',
        image: 'persona4.jpg'
    },
    {
        name : 'Nell Junior',
        role: 'Game designer',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nisi rerum iusto quasi nobis ipsam, eveniet architecto sapiente asperiores, explicabo dolorem, repudiandae porro! Sit, deleniti reprehenderit rerum et ipsam praesentium!',
        image: 'persona5.jpg'
    },
]

//Preparing the first user to display

const firstUserName = users[0].name;
const firstUserRole = users[0].role;
const firstUserReview = users[0].review;
const firstUserimage = users[0].image;


template = `
<div class="img-container">
    <img src="images/${firstUserimage}" alt="" class="user-image">
    <span>
        <i class="fa-solid fa-quote-right"></i>
    </span>
    </div>
    <h3 class="user-name">${firstUserName}</h3>
    <p class="user-role">${firstUserRole}</p>
    <p class="user-review">${firstUserReview}</p>      
`



reviewContainerElement.innerHTML = template;
