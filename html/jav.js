
var gridItems = document.querySelectorAll('.grid-item');


gridItems.forEach(function(gridItem) {
    var button = gridItem.querySelector('button');
    var moreText = gridItem.querySelector('.add-more');


    button.addEventListener('click', function() {
       
        if (moreText.style.display === "none" || moreText.style.display === "") {
            moreText.style.display = "inline";
            button.innerHTML = "&#9650;";
        } else {
            moreText.style.display = "none";
            button.innerHTML = "&#9660;"; 
        }
    });
});
const homeLink = document.getElementsByClassName('home')[0];
const aboutLink = document.getElementsByClassName('about')[0];
const contactLink = document.getElementsByClassName('contact')[0];
const feqstDiv = document.getElementsByClassName('feqs')[0];
const verifyDiv = document.getElementsByClassName('verify')[0];
const internDiv = document.getElementsByClassName('intern')[0];

verifyDiv.addEventListener('click', function(event) {
    document.getElementById("home") 

});
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("verfycontact").addEventListener("click",function(e){
        e.preventDefault();
        window.location.href="verify.html";
    })
})
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("homepage").addEventListener("click",function(e){
        e.preventDefault();
        window.location.href="navbar.html";
    })
})

