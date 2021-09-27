
let cont = document.querySelector(".prods .container");
let btns = document.querySelectorAll(".shop .filter div");

fetch('../json/products.json')
    .then(response => response.json())
    .then((data) => {
        data.forEach(element => {
            var bigdiv = document.createElement("div");
            bigdiv.className="pro-box";
            bigdiv.setAttribute("proid",element.id);
            bigdiv.setAttribute("cate",element.cate);

            var img = document.createElement("img");
            img.setAttribute("src",element.imgs[0]);


            var p = document.createElement("p");
            var ptext = document.createTextNode(element.title);
            p.appendChild(ptext);

            var h3 = document.createElement("h3");
            var h3text = document.createTextNode(`$${element.price}`);
            h3.appendChild(h3text);

            var smalldiv = document.createElement("div");
            var divtext = document.createTextNode(`show more details`);
            smalldiv.appendChild(divtext);

            bigdiv.appendChild(img);
            bigdiv.appendChild(p);
            bigdiv.appendChild(h3);
            bigdiv.appendChild(smalldiv);

            cont.appendChild(bigdiv);
            });
            let prod = document.querySelectorAll(".pro-box");

            prod.forEach(element => {
            element.addEventListener("click",function () {
            let id =this.getAttribute("proid");
            location.assign(`../product/index.html#${id}`);
            })
            });
            if (location.hash != "#"){
                btns.forEach(element => {
                    if ("#"+element.getAttribute("cate") == location.hash) {
                        element.click();
                    }
                });
            }
    });

    btns.forEach(element => {
        element.addEventListener("click",()=>{
            var cate = element.getAttribute("cate");
            var ac = document.querySelector(".shop .filter div.active");
            ac.classList.remove("active");
            element.classList.add("active")
            var prods = document.querySelectorAll(".pro-box");
            if (cate == "all") {
                prods.forEach(pro => {
                    pro.style.display = "block"
                });
            }
            else{
                prods.forEach(pro => {
                    if (pro.getAttribute("cate") == cate) {
                        pro.style.display = "block"
                    }
                    else{
                        pro.style.display = "none"
                    }
                    
                });
            }
        })
    });

    
    function setnumcart(){
        var numcart = document.querySelector("header .log li");
        numcart.setAttribute("shop-count",localStorage.getItem("cart").split(",").length)
    }
    setnumcart();

    
function clearcart(){
    let numcart = document.querySelector("header .log li");
    localStorage.clear();
    numcart.setAttribute("shop-count",0);
}