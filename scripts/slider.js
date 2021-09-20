var slideq = document.querySelectorAll(".discount .wrapper .slides-container .slide-image");
var slidescontainerq = document.querySelector(".discount .wrapper .slides-container")
var nextbtnq = document.querySelector(".discount .wrapper .next-btn")
var prevbtnq = document.querySelector(".discount .wrapper .prev-btn")
var navigationdotsq = document.querySelector(".discount .wrapper .navigation-dots")

var numberofimagesq = slideq.length;
var slidewidthq = 600;
var currentslideeq = 0;

setInterval(() => {
    nextbtnq.click();
}, 3000);

slidescontainerq.style.height = `${slideq[0].childNodes[1].height}px`;
//window.onresize = () =>{
    //slidewidthq = slideq[0].clientWidth;
    //slidescontainerq.style.height = `${slideq[0].childNodes[1].height}px`;
//}

function initq(){
    slideq.forEach((element,i) => {
        element.style.left = i *600 +"px";
    });
    slideq[0].classList.add("active");
    createnewnavdotsq();
}
initq();

function createnewnavdotsq(){
    for(let i = 0; i < numberofimagesq; i++)
    {
        var dot = document.createElement("div");
        dot.classList.add("singel-dot");
        navigationdotsq.appendChild(dot);
        dot.addEventListener("click",()=>{
            currentslideeq = i;
            gotoslideq(i);
        })
    }
    navigationdotsq.children[0].classList.add("active");
}

nextbtnq.addEventListener("click", ()=>{
    if (currentslideeq >= numberofimagesq-1) {
        currentslideeq=0;
        gotoslideq(0);
    }
    else{
        currentslideeq++;
        gotoslideq(currentslideeq);
    }
})


prevbtnq.addEventListener("click", ()=>{
    if (currentslideeq <= 0) {
        currentslideeq=numberofimagesq-1;
        gotoslideq(numberofimagesq-1);
    }
    else{
        currentslideeq--;
        gotoslideq(currentslideeq);
    }
})

function gotoslideq(n){
    slidescontainerq.style.transform = "translateX(-" + slidewidthq*n +"px)";
    setactiveclassq();
}

function setactiveclassq(){
    var ac = document.querySelector(".discount .wrapper .slide-image.active");
    ac.classList.remove("active");
    slideq[currentslideeq].classList.add("active");

    var acd = document.querySelector(".discount .wrapper .singel-dot.active");
    var acds = document.querySelectorAll(".discount .wrapper .singel-dot");
    acd.classList.remove("active");
    acds[currentslideeq].classList.add("active");
}