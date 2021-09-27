let cont=document.querySelector(".cart table tbody");
fetch('../json/products.json')
    .then(response => response.json())
    .then((data) => {
        data.forEach(element => {
            let cartitems = localStorage.getItem("cart").split(",");
            cartitems.forEach(item => {
                if (item == element.id) {
                    cont.innerHTML +=`
                    <tr>
                        <td><img src="${element.imgs[0]}" alt=""></td>
                        <td>${element.title}</td>
                        <td>$${element.price}</td>
                        <td><button id="${element.id}">remove</button></td>
                    </tr>
                    `
                }
            });

            let rembtns=document.querySelectorAll(".cart table tbody tr td button");
            rembtns.forEach(element => {
                var arr = localStorage.getItem("cart").split(",");
                element.addEventListener("click",()=>{
                    for( var i = 0; i < arr.length; i++){ 
                    
                        if ( arr[i] === element.id) { 
                    
                            arr.splice(i, 1); 
                        }
                    
                    }
                    localStorage.setItem("cart",arr.join(','))
                    location.reload();
                })
                
            });

            
            let bbtns=document.querySelectorAll(".cart .buy button");
            bbtns.forEach(element => {
                element.addEventListener("click",()=>{
                    clearcart();
                    location.reload();
                })
            });
        });
    })

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