let book = document.querySelector(".flip1");
book.addEventListener("click", myFunction2);

function myFunction2() {
  let bookButton = document.getElementById("nalo");
  if (bookButton.style.backgroundImage.match("MidnightRobber-crop.jpg")) {
    bookButton.style.backgroundImage =
      "url(https://images-na.ssl-images-amazon.com/images/I/61h6zjbZxKL.jpg)";
    bookButton.style.backgroundSize = "cover";
  } else {
    bookButton.style.backgroundImage =
      "url(https://i0.wp.com/www.tor.com/wp-content/uploads/2018/05/MidnightRobber-crop.jpg?fit=740%2C+9999&crop=0%2C0%2C100%2C385px&ssl=1)";
    bookButton.style.backgroundSize = "contain";
  }
}

let book1 = document.querySelector(".flip2");
book1.addEventListener("click", myFunction3);

function myFunction3() {
  let bookButton1 = document.getElementById("binti");
  if (bookButton1.style.backgroundImage.match("1537451432l/37877850.jpg")) {
    bookButton1.style.backgroundImage =
      "url(https://images-na.ssl-images-amazon.com/images/I/81IICHFn4LL.jpg)";
    bookButton1.style.backgroundSize = "cover";
    bookButton1.style.backgroundPosition = "center top";
    let text = document.querySelector("#captionBinti");

    text.innerHTML = "";
  } else {
    bookButton1.style.backgroundImage =
      "url(https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1537451432l/37877850.jpg)";
    bookButton1.style.backgroundSize = "contain";
    bookButton1.style.backgroundPosition = "center";
    let text = document.querySelector("#captionBinti");
    text.innerHTML = "red";
  }
}

let blue = document.getElementById("blue");
let red = document.getElementById("red");
let green = document.getElementById("green");

/* backKey:
0 = id
1 = full first image url
2 = trunc first image
3 = full second image url
4 = trunc second image
*/
let backKey = [
  [
    blue,
    "url(https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg)",
    "cat_relaxing_on_patio_other.jpg",
    "url(https://i0.wp.com/www.tor.com/wp-content/uploads/2018/05/MidnightRobber-crop.jpg?fit=740%2C+9999&crop=0%2C0%2C100%2C385px&ssl=1)",
    "url(https://upload.wikimedia.org/wikipedia/en/7/77/Midnight_Robber.jpg)",
    "Midnight_Robber.jpg",
  ],
  [
    red,
    "url(https://static01.nyt.com/images/2020/04/22/science/22VIRUS-PETCATS1/22VIRUS-PETCATS1-mediumSquareAt3X.jpg)",
    "PETCATS1-mediumSquareAt3X.jpg",
    "url(https://images-na.ssl-images-amazon.com/images/I/61h6zjbZxKL.jpg)",
    "61h6zjbZxKL.jpg",
  ],
];

for (let i = 0; i < backKey.length; i++) {
  backKey[i][0].addEventListener("click", changeBackground);
  let currentArr = backKey[i];
  currentArr[0].style.backgroundImage = currentArr[1];

  function changeBackground() {
    if (currentArr[0].style.backgroundImage.match(currentArr[2])) {
      currentArr[0].style.backgroundImage = currentArr[3];
    } else {
      currentArr[0].style.backgroundImage = currentArr[1];
    }
  }
}
// , [red, green];

// let oldB = [, "url(https://static01.nyt.com/images/2020/04/22/science/22VIRUS-PETCATS1/22VIRUS-PETCATS1-mediumSquareAt3X.jpg)", "url(https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9)"];

// blue.style.backgroundImage = oldB[0];
// red.style.backgroundImage = oldB[1];
// green.style.backgroundImage = oldB[2];

// let backG = [, "url(https://images-na.ssl-images-amazon.com/images/I/61h6zjbZxKL.jpg)"];
