
let bigone = document.querySelector(".bigone");
let smalls = document.querySelectorAll(".smallcont img");
let title = document.querySelector(".details h1");
let price = document.querySelector(".details .price");
let btn = document.querySelector(".details button");
let cartdata;
fetch('../json/products.json')
    .then(response => response.json())
    .then((data) => {
        if (location.hash != "#") {
            data.forEach(element => {
                if ("#"+element.id == location.hash) {
                    bigone.src = element.imgs[0];
                    smalls[0].src =element.imgs[0];
                    smalls[1].src =element.imgs[1];
                    smalls[2].src =element.imgs[2];
                    smalls[3].src =element.imgs[3];
                    title.innerHTML = element.title;
                    price.innerHTML = `$`+element.price;
                    btn.id = element.id;
                };
                
            });
        }
    });

smalls.forEach(element => {
    element.addEventListener("click",function() {
        bigone.src =this.src;
    })
});
btn.addEventListener("click",()=>{
    //localStorage.getItem("cart").split(",");
    if (localStorage.getItem("cart") == null) {
        localStorage.setItem("cart",`${btn.id}`)
    }
    else if(!localStorage.getItem("cart").split(",").includes(btn.id)){
        localStorage.setItem("cart",`${localStorage.getItem("cart")},${btn.id}`)
    }
    console.log(localStorage.getItem("cart"));
    setnumcart();
})

function setnumcart(){
    let numcart = document.querySelector("header .log li");
    numcart.setAttribute("shop-count",localStorage.getItem("cart").split(",").length)
}
console.log(localStorage.getItem("cart"));
setnumcart();


function clearcart(){
    let numcart = document.querySelector("header .log li");
    localStorage.clear();
    numcart.setAttribute("shop-count",0);
}