var Slide = document.getElementById("Slide");
var Backbtn = document.getElementById("Backbtn");
var Nextbtn = document.getElementById("Nextbnt");

var slideimages = new Array (
    "/img/nature-2568316_1920.jpg",
    "/img/rain-6243559_1920.jpg",
    "/img/space.jpg",
);

let i = 0;

Nextbnt.onclick = function(){
    if (i < 2){
        Slide.src = slideimages[i + 1];
    i ++;
}
    }

    Backbtn.onclick = function(){
    if (i > 0){
        Slide.src = slideimages[i - 1];
    i --;
}
    }
    
