
let nav_bar = document.querySelector('nav-links-container');

function shownavbar(){
    let close = document.querySelector('#close');
    let ser_btn = document.querySelector("#service_heading");
let nav_bar = document.querySelector('.nav-links-container');
let bar = document.querySelector('#bars');
    nav_bar.style.display="block";
    close.style.display="block";
    bar.style.display="none";
    ser_btn.style.display="none";

}

function hidenavbar(){
    let close = document.querySelector('#close');
let nav_bar = document.querySelector('.nav-links-container');
let ser_btn = document.querySelector("#service_heading");
let bar = document.querySelector('#bars');
    nav_bar.style.display="none";
    close.style.display="none";
    bar.style.display="block";
    ser_btn.style.display="block";
}