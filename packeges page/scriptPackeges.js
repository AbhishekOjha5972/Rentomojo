let loggedInUserName=JSON.parse(localStorage.getItem("loggedInUserName"))||[];  
if(loggedInUserName==0){
document.querySelector('#inner__login-signup__button').innerText="LOGIN / SIGNUP";
}
else{
document.querySelector('#inner__login-signup__button').innerText=loggedInUserName;
}




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
let packege = [
    {
        img_url: "https://p.rmjo.in/moodShot/vgqeajhe-1024x512.jpg",
        item_name: "Kipper Basic Bedroom",
        item_price: "809",
        details_images1: "https://p.rmjo.in/moodShot/5l878xg2-1024x512.jpg",
        details_images2: "https://p.rmjo.in/moodShot/xr6vpae5-1024x512.jpg",
        details_images3: "https://p.rmjo.in/moodShot/7uby624n-1024x512.jpg",
        image_quantity: "3",
        cartID: "Kipper Basic Bedroom",
        quantity: "1",
    },
    {
        img_url: "https://p.rmjo.in/moodShot/lcc7ot7j-1024x512.jpg",
        item_name: "Hutch 2-Door Wardrobe & Saddle Shoe Rack",
        item_price: "559",
        details_images1: "https://p.rmjo.in/moodShot/nw4qg95i-1024x512.jpg",
        details_images2: "https://p.rmjo.in/moodShot/jmk78egt-1024x512.jpg",
        image_quantity: "2",
        cartID: "Hutch 2-Door Wardrobe & Saddle Shoe Rack",
        quantity: "1",
    },
    {
        img_url: "https://p.rmjo.in/moodShot/i05w1kj4-1024x512.jpg",
        item_name: "Double Bed with Fridge & Washing Machine",
        item_price: "2286",
        details_images1: "https://p.rmjo.in/moodShot/qpjmaco1-1024x512.jpg",
        details_images2: "https://p.rmjo.in/moodShot/awhgksmv-1024x512.jpg",
        details_images3: "https://p.rmjo.in/moodShot/a8tus7b3-1024x512.jpg",
        image_quantity: "3",
        cartID: "Double Bed with Fridge & Washing Machine",
        quantity: "1",
    },
    {
        img_url: "https://p.rmjo.in/moodShot/wruziw9d-1024x512.jpg",
        item_name: "Sofa & Bed Combo",
        item_price: "1298",
        details_images1: "https://p.rmjo.in/moodShot/0ypndvym-1024x512.jpg",
        details_images2: "https://p.rmjo.in/moodShot/no20qjrx-1024x512.jpg",
        image_quantity: "2",
        cartID: "Sofa & Bed Combo",
        quantity: "1",
    },
    {
        img_url: "https://p.rmjo.in/moodShot/5zqb993g-1024x512.jpg",
        item_name: "Napster single bed, Single (6x3) Coir & Foam Mattress & cooler",
        item_price: "407",
        details_images1: "https://p.rmjo.in/moodShot/kgk2znv0-1024x512.jpg",
        details_images2: "https://p.rmjo.in/moodShot/kb1gpiqh-1024x512.jpg",
        details_images3: "https://p.rmjo.in/moodShot/mx0zcxv0-1024x512.jpg",
        image_quantity: "3",
        cartID: "Napster single bed, Single (6x3) Coir & Foam Mattress & cooler",
        quantity: "1",
    },
    {
        img_url: "https://p.rmjo.in/moodShot/wruziw9d-1024x512.jpg",
        item_name: "Double Bed with Study Table & Chair",
        item_price: "871",
        details_images1: "https://p.rmjo.in/moodShot/v0glssa7-1024x512.jpg",
        details_images2: "https://p.rmjo.in/moodShot/a8tus7b3-1024x512.jpg",
        details_images3: "https://p.rmjo.in/moodShot/uf2goxfd-1024x512.jpg",
        image_quantity: "3",
        cartID: "Double Bed with Study Table & Chair",
        quantity: "1",
    },
]

let container_item_class = document.querySelector('.container_item');

// Creating the html body

packege.forEach(function (ele) {
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
    addToCart.innerText = "Add To Cart";
    addToCart.addEventListener("click", () => {
        AddToCartFunction(ele);
    })

    let imageQ_div = document.createElement('div');

    imageQ_div.append(addToCart);

    child_div.append(price_div, imageQ_div);

    // Appending to item div 
    item_div.append(productImg, productName, child_div);

    // Appending the complete div data in to the container
    // container data 
    container_item_class.append(item_div);
})


let LSdata = JSON.parse(localStorage.getItem("allCartData")) || []
function AddToCartFunction(ele) {

    let alreadyIncart = 0;
    LSdata.forEach(function (fEle) {
        if (fEle.cartID == ele.cartID) {
            alreadyIncart = 1;
            return;
        }
    })
    if (alreadyIncart == 0) {
        alert("Item added in Cart ✔")
        LSdata.push(ele);
        localStorage.setItem("allCartData", JSON.stringify(LSdata));
        return;
    }
    else {
        alert("This item is already exist in the Cart!")
        return;
    }

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


