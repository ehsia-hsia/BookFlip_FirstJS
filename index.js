let book = document.querySelector('.flip1');
book.addEventListener("click", myFunction2);

function myFunction2() {
    let bookButton = document.getElementById("nalo");
    if (bookButton.style.backgroundImage.match("MidnightRobber-crop.jpg")) {
        bookButton.style.backgroundImage = "url(https://images-na.ssl-images-amazon.com/images/I/61h6zjbZxKL.jpg)";
        bookButton.style.backgroundSize = "cover";
    } else {
        bookButton.style.backgroundImage = "url(https://i0.wp.com/www.tor.com/wp-content/uploads/2018/05/MidnightRobber-crop.jpg?fit=740%2C+9999&crop=0%2C0%2C100%2C385px&ssl=1)";
        bookButton.style.backgroundSize = "contain";

    }
}

let book1 = document.querySelector('.flip2');
book1.addEventListener("click", myFunction3);

function myFunction3() {
    let bookButton1 = document.getElementById("binti");
    if (bookButton1.style.backgroundImage.match("1537451432l/37877850.jpg")) {
        bookButton1.style.backgroundImage = "url(https://images-na.ssl-images-amazon.com/images/I/81IICHFn4LL.jpg)";
        bookButton1.style.backgroundSize = "cover";
        bookButton1.style.backgroundPosition = "center top";
        text.innerHTML = "cat";
    } else {
        bookButton1.style.backgroundImage = "url(https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1537451432l/37877850.jpg)";
        bookButton1.style.backgroundSize = "contain";
        bookButton1.style.backgroundPosition = "center";
        let text = document.querySelector('#captionBinti');
        text.innerHTML = "red";
    }
}


let blue = document.getElementById("blue");
let red = document.getElementById("red");
let green = document.getElementById("green");

let curItem = [blue, red, green];

let backG = ["url(https://i0.wp.com/www.tor.com/wp-content/uploads/2018/05/MidnightRobber-crop.jpg?fit=740%2C+9999&crop=0%2C0%2C100%2C385px&ssl=1)", "url(https://upload.wikimedia.org/wikipedia/en/7/77/Midnight_Robber.jpg)", "url(https://images-na.ssl-images-amazon.com/images/I/61h6zjbZxKL.jpg)"];

for (let i = 0; i < curItem.length; i++) { // assign i 
    curItem[i].addEventListener("click", myFunction);

    function myFunction() {

        if (curItem[i].style.backgroundColor.match("white")) {
            curItem[i].style.backgroundImage = (backG[i]);
        } else {
            curItem[i].style.backgroundImage = (backG[i]);
        }

        // curItem[i].style.backgroundImage = (backG[i]);



    }//end function

}//end first loop
