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
