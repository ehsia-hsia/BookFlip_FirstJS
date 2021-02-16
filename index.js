let book = document.querySelector('.flip');
book.addEventListener("click", myFunction2);

function myFunction2() {
    let bookButton = document.getElementById("round");
    if (bookButton.style.backgroundImage.match("MidnightRobber-crop.jpg")) {
        bookButton.style.backgroundImage = "url(https://images-na.ssl-images-amazon.com/images/I/61h6zjbZxKL.jpg)";
        bookButton.style.backgroundSize = "cover";
    } else {
        bookButton.style.backgroundImage = "url(https://i0.wp.com/www.tor.com/wp-content/uploads/2018/05/MidnightRobber-crop.jpg?fit=740%2C+9999&crop=0%2C0%2C100%2C385px&ssl=1)";
        bookButton.style.backgroundSize = "contain";
    }
}


