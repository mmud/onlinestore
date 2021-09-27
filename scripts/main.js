// Start Header
let header = document.querySelector("header");
let hold = document.querySelector(".hold");

window.onscroll = ()=>{
    if(window.pageYOffset>60)
    {
        header.className = "fixed";
        hold.style.display = "block";
    }
    else
    {
        header.className = "";
        hold.style.display = "none";
    }
}

let trigger =document.querySelectorAll(".nav > li");
let background =document.querySelector(".dropdownbackground");
let nav =document.querySelector(".nav");


setInterval(() => {
    trigger =document.querySelectorAll(".nav > li");
    background =document.querySelector(".dropdownbackground");
    nav =document.querySelector(".nav");
}, 1000);

function handleEnter(){
    this.classList.add('trigger-enter');
    setTimeout(()=>{ 
        if(this.classList.contains("trigger-enter")){
        this.classList.add("trigger-enter-active")
        }
    },150)
    background.classList.add("open");
    let dropdown = this.querySelector(".drop ul");
    let dropdowncoords = dropdown.getBoundingClientRect();
    let navecoords = nav.getBoundingClientRect();
    let coords = {
        height: dropdowncoords.height,
        width:dropdowncoords.width,
        top:dropdowncoords.top,
        left:dropdowncoords.left
    }
    background.style.setProperty("width",`${coords.width+20}px`);
    background.style.setProperty("height",`${coords.height+20}px`);
    background.style.top = `${coords.top-10}px`;
    background.style.left = `${coords.left-10}px`;
}

function handleLeave(){
    this.classList.remove('trigger-enter',"trigger-enter-active");
    background.classList.remove("open");
}

trigger.forEach(element => element.addEventListener("mouseenter",handleEnter));
trigger.forEach(element => element.addEventListener("mouseleave",handleLeave));

// End Header
// Start slider
var slideimages = document.querySelectorAll(".sec-s .wrapper .slides-container .slide-image");
var slidescontainer = document.querySelector(".sec-s .wrapper .slides-container")
var nextbtn = document.querySelector(".sec-s .wrapper .next-btn")
var prevbtn = document.querySelector(".sec-s .wrapper .prev-btn")
var navigationdots = document.querySelector(".sec-s .navigation-dots")
var slidescontainerq = document.querySelector(".discount .wrapper .slides-container")

var numberofimages = slideimages.length;
if (slideimages[0] != null) {
    var slidewidth = slideimages[0].clientWidth;
}
var currentslidee = 0;

setInterval(() => {
    if (nextbtn != null) {
        nextbtn.click();
    }
}, 3000);

if (slidescontainer != null) {
    slidescontainer.style.height = `${slideimages[0].childNodes[1].height}px`;
}

if (slidescontainerq != null) {
    slidescontainerq.style.height = "248px";
}

window.onresize = function () {
    slidewidth = slideimages[0].clientWidth;
    slidescontainer.style.height = `${slideimages[0].childNodes[1].height}px`;
    slidescontainerq.style.height = "248px";
}

function init(){
    slideimages.forEach((element,i) => {
        element.style.left = i *100 +"%";
    });
        slideimages[0].classList.add("active");
    createnewnavdots();
}
init();

function createnewnavdots(){
    for(let i = 0; i < numberofimages; i++)
    {
        var dot = document.createElement("div");
        dot.classList.add("singel-dot");
        navigationdots.appendChild(dot);
        dot.addEventListener("click",()=>{
            currentslidee = i;
            gotoslide(i);
        })
    }
    navigationdots.children[0].classList.add("active");
}

nextbtn.addEventListener("click", ()=>{
    if (currentslidee >= numberofimages-1) {
        currentslidee=0;
        gotoslide(0);
    }
    else{
        currentslidee++;
        gotoslide(currentslidee);
    }
})


prevbtn.addEventListener("click", ()=>{
    if (currentslidee <= 0) {
        currentslidee=numberofimages-1;
        gotoslide(numberofimages-1);
    }
    else{
        currentslidee--;
        gotoslide(currentslidee);
    }
})

function gotoslide(n){
    slidescontainer.style.transform = "translateX(-" + slidewidth*n +"px)";
    setactiveclass();
}

function setactiveclass(){
    var ac = document.querySelector(".sec-s .wrapper .slide-image.active");
    ac.classList.remove("active");
    slideimages[currentslidee].classList.add("active");

    var acd = document.querySelector(".sec-s .wrapper .singel-dot.active");
    var acds = document.querySelectorAll(".sec-s .wrapper .singel-dot");
    acd.classList.remove("active");
    acds[currentslidee].classList.add("active");
}
//End slider

//start products slider
let productsslider = document.querySelector(".scroller");

let rightbtn = document.querySelector(".products .right");
let leftbtn = document.querySelector(".products .left");

rightbtn.addEventListener("click", ()=>{
    productsslider.scrollLeft +=900;
});

leftbtn.addEventListener("click", ()=>{
    productsslider.scrollLeft -=900;
});
//end products slider

//Start click products
let prod = document.querySelectorAll(".pro-box");

prod.forEach(element => {
    element.addEventListener("click",function () {
        let id =this.getAttribute("proid");
        location.assign(`product/index.html#${id}`);
    })
});

function setnumcart(){
    let numcart = document.querySelector("header .log li");
    numcart.setAttribute("shop-count",localStorage.getItem("cart").split(",").length)
}
setnumcart();

function clearcart(){
    let numcart = document.querySelector("header .log li");
    localStorage.clear();
    numcart.setAttribute("shop-count",0);
}
//End click products

/*
var test = document.getElementById("test");

var bigdiv = document.createElement("div");
bigdiv.className="pro-box";
bigdiv.setAttribute("proid",7);
bigdiv.setAttribute("cate","wooden");

var img = document.createElement("img");
img.setAttribute("src","images/Chairs/7/chair2.jpg");


var p = document.createElement("p");
var ptext = document.createTextNode("metal chair with some wood");
p.appendChild(ptext);

var h3 = document.createElement("h3");
var h3text = document.createTextNode(`$900`);
h3.appendChild(h3text);

var smalldiv = document.createElement("div");
var divtext = document.createTextNode(`show more details`);
smalldiv.appendChild(divtext);

bigdiv.appendChild(img);
bigdiv.appendChild(p);
bigdiv.appendChild(h3);
bigdiv.appendChild(smalldiv);

test.appendChild(bigdiv);
*/