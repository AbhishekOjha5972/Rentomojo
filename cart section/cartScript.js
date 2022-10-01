
let modelbtn = document.getElementById('navbar__city__button');
let modelbg = document.querySelector('.rm-city-select__background')
let modelcloss = document.querySelector('#close-city-selector-model');


// hide and visible feature
modelbtn.addEventListener("click", function () {
    modelbg.classList.add('model_active');


})
modelcloss.addEventListener("click", function () {
    modelbg.classList.remove('model_active');
    window.location.reload();
})

// city select navbar
let cityselect = document.querySelector('#city__name__boxes');

// city select function 
let cityNameLS;
cityselect.addEventListener('click', function (event) {

    cityNameLS = event.target.innerText

    localStorage.setItem("cityNameLS", JSON.stringify(cityNameLS));
})

let cityPrint = JSON.parse(localStorage.getItem("cityNameLS")) || " ";
document.querySelector('#print_city_name').innerText = cityPrint;


// package data sending 

let container_item_class = document.querySelector('.container_item');
let LSdata=JSON.parse(localStorage.getItem("allCartData"))|| [];
// Creating the html body

LSdata.forEach(function (ele,index) {
    let item_div = document.createElement('div');

    let productImg = document.createElement('img');
    productImg.src = ele.img_url;

    let productName = document.createElement('h3');
    productName.innerText = ele.item_name;

    // creating child div 
    let child_div = document.createElement('div');

    let price_div = document.createElement('div');
    let productPrice = document.createElement('span');
    productPrice.innerText = "Rs." + ele.item_price + "/mo";
    price_div.append(productPrice);


    // Add to cart & view details page 
    let addToCart = document.createElement("button");
    addToCart.innerText = "Remove";
    addToCart.addEventListener("click", () => {
        deleteCartFunction(ele,index);
    })

    let imageQ_div = document.createElement('div');

    imageQ_div.append(addToCart);

    child_div.append(price_div, imageQ_div);

    
    let linkATage=document.createElement('a');
    linkATage.innerText="Place Order";
    linkATage.addEventListener('click',()=>{
        payAmount(ele);
    })
    linkATage.href="gateway.html"
    // Appending to item div 
    item_div.append(productImg, productName, child_div,linkATage);

    // Appending the complete div data in to the container
    // container data 
    container_item_class.append(item_div);
})



function deleteCartFunction(ele,index) {

        LSdata.splice(index,1);
    localStorage.setItem("allCartData",JSON.stringify(LSdata));
    window.location.reload();
}

// Pay amount from cart 
function payAmount(ele){
    localStorage.setItem("payAmount",JSON.stringify(ele.item_price));
}


let image=[
    {
    img:"https://www.rentomojo.com/public/images/error/no-cart.png"
    },
];
let empty=JSON.parse(localStorage.getItem("allCartData"));

empty.push(0);
if(empty[0]==0){

    let emptyDivData=document.createElement('div');
    let emptyDivImg=document.createElement("img");
    let heading=document.createElement("h1");
    heading.innerText="No item in cart"
    let paragraphTag=document.createElement("p");
    paragraphTag.innerText="Add a few items to your cart and come back here for an express checkout process!"
    let aTag=document.createElement('a');
    aTag.innerText="Browse Catalogue";
    aTag.href="../packeges page/packeges.html";
    emptyDivImg.src=image[0].img;
    emptyDivData.append(emptyDivImg,heading,paragraphTag,aTag);
    document.querySelector('.emptyCart').append(emptyDivData);
}

// readmore & readless feature 
let lessMore = document.querySelector('#readmorebtn');

lessMore.addEventListener('click', myFunction);
function myFunction() {
    var dots = document.getElementById("less");
    var moreText = document.getElementById("more");
    //   var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        lessMore.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        lessMore.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}


