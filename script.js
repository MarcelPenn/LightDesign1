let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

const btns = document.querySelectorAll('.buttons button');
const imgs = document.querySelectorAll('.images img');

/* main functions */
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

/* portfolio functions */

//add a click event to all buttons 
for(let i = 1; i < btns.length; i++) {
    btns[i].addEventListener('click', filterImg);
}

//set active button on click 
function setActiveBtn(e) {
    btns.forEach(btn => {
        btn.classList.remove('btn-clicked');
    })
    e.target.classList.add('btn-clicked');
}

//filter images
function filterImg(e) {
    //run the active button function
    setActiveBtn(e);
    //loop through all images
    imgs.forEach(img => {
        //expand all images
        img.classList.remove('img-shrink');
        img.classList.add('img-expand');
        //get data from data attributes
        //get image type data
        const imgType = parseInt(img.dataset.img);
        //get button type data
        const btnType = parseInt(e.target.dataset.btn);
        /* if the image type and the type of the 
        clicked button are NOT the same*/
        if(imgType !== btnType) {
            img.classList.remove('img-expand');
            img.classList.add('img-shrink');
        }
    });
}

        //set click event for the "All" button
        btns[0].addEventListener('click', (e) => {
            //Run the active button function
            setActiveBtn(e);
            //loop through all images
            imgs.forEach(img =>{
                img.classList.remove('img-shrink');
                img.classList.add('img-expanded');
            });
    });
