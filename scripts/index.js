let icons = document.querySelectorAll('.icon');

for(let i = 0; i < 4; i++){
    icons[i].onclick = function(){
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
}

let pictures = document.querySelectorAll('.my-slides');

let currentIndex = 0;
pictures[currentIndex].style.display = "block";

function showSlide(currentIndex, nextIndex){
    pictures[nextIndex].style.display = "block";
    pictures[currentIndex].style.display = "none";
}

function prevSlide(){
    if(currentIndex != 0){
        showSlide(currentIndex, --currentIndex);
        return; 
    }
    showSlide(currentIndex, 2);
    currentIndex = 2;
}

function nextSlide(){
    if(currentIndex != 2){
        showSlide(currentIndex, ++currentIndex);
        return;
    }
    showSlide(currentIndex, 0);
    currentIndex = 0;
}
let slides = document.querySelectorAll('.slides');
let slider = document.querySelector('.slider')
let left= 0;
let middle = 1;
let right = 2;

let removedNode = slides[3];
slider.removeChild(removedNode);

function slideLeft(){
    let firstChild = document.querySelector('.slider img:first-child');
    firstChild.parentElement.removeChild(firstChild);
    slider.appendChild(removedNode);
    removedNode = firstChild;
    slides.forEach(slide => {
        slide.classList.remove('fade');
    });

    setTimeout(function() {
        slides.forEach(slide => {
            slide.classList.add('fade');
        });
    }, 0);


    // slides[left].className = 'slide4';
    // if(left === 3)
    //     left = -1;
    // left++;
    // slides[middle].className = 'slide1';
    // if(middle === 3)
    //     middle = -1;
    // middle++;
    // slides[right].className = 'slide2';
    // if(right === 3)
    //     right = -1;
    // right++;
    // slides[right].className = 'slide3';
}

function slideRight(){

    let lastChild = document.querySelector('.slider img:last-child');
    lastChild.parentElement.removeChild(lastChild);
    slider.insertBefore(removedNode, document.querySelector('.slider img:first-child'));
    removedNode = lastChild;
    

    // slides[left].className = 'slide2';
    // if(left === 0)
    //     left = 4;
    // left--;
    // slides[middle].className = 'slide3';
    // if(middle === 0)
    //     middle = 4;
    // middle--;
    // slides[right].className = 'slide4';
    // if(right === 0)
    //     right = 4;
    // right--;
    // slides[left].className = 'slide1 ';
}
let menu = document.querySelector('.dropdown-content');
let burgerClick = 0;
function showMenu(){
    if(burgerClick % 2 == 0){
        menu.style.display = 'block';
        menu.className = 'fade dropdown-content';
        burgerClick++;
        return;
    }
    menu.style.display = 'none';
    burgerClick = 0;
}