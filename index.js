var num1 = Math.floor(Math.random() * 6)+1;
var img1 = "dice" + num1 + ".png";
// var random_img_source1 = "images/"+img1;

document.querySelectorAll("img")[0].setAttribute("src",img1);

// document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);


var num2 =  Math.floor(Math.random() * 6)+1;
var img2 = "dice" + num2 + ".png";
// var random_img_source2 = "images/"+img2;

document.querySelectorAll("img")[1].setAttribute("src",img2);


if(num1>num2){
  document.querySelector("h1").innerHTML = "Rahul won 😊";
}
else if (num2>num1){
  document.querySelector("h1").innerHTML = "Akash won 😊";
}
else {
  document.querySelector("h1").innerHTML = "Its a drwa 🤝 Refresh Again";

}
