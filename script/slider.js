let i = 0; // current slide
let j = 3; // total slides

function hideOrShowPrevBtn(index) {
    const el = document.getElementById('prev');
    if(index !== 1) {
        el.classList.add('active')
    } else {
        el.classList.toggle('active')
    }
}
function next(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = ( j + i + 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator( i+ 1 );
}

function prev(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator(i+1);
}

function indicator(num){
    const dots = document.querySelectorAll(".dot-container button");
    dots.forEach(function(dot){
        dot.style.backgroundColor = "#d9d9d9";
    });
    document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "#076bb8";
    hideOrShowPrevBtn(num)
}

function dot(index){
    const images = document.querySelectorAll(".slider-container .slide");
    images.forEach(function(image){
        image.classList.remove("active");
    });
    document.getElementById("content" + index).classList.add("active");
    i = index - 1;
    indicator(index);
}
