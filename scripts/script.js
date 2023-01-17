// JavaScript Document
console.log("hi");

const aantal=document.querySelector("main form div output");

const plus=document.querySelector("main form div button:nth-of-type(1)");

const min=document.querySelector("main form div button:nth-of-type(2)");

plus.addEventListener("click",plus1);

min.addEventListener("click",min1);


function plus1(){
    let currentAmount = parseInt(aantal.innerHTML);
    let newAmount = currentAmount + 1;
    aantal.innerHTML = newAmount;

    // en de min button enablen
    min.disabled=false;
}

function min1(){
    let currentAmount = parseInt(aantal.innerHTML);

    if(currentAmount > 0){
        let newAmount = currentAmount - 1;
        aantal.innerHTML = newAmount;

        // als nieuwe aantal nul is
        if(newAmount == 0){
            // dan de min button weer disablen
            min.disabled=true;
        }
    }
}

const cart=document.querySelector("header a:last-of-type span");

const addToCart=document.querySelector("main form > button[type='button']");

addToCart.addEventListener("click", updateCart);

function updateCart(){
    let currentAmount=parseInt(cart.innerHTML);
    let extraAmount=parseInt(aantal.innerHTML);
    let newAmount=currentAmount+extraAmount;
    cart.innerHTML=newAmount;
    aantal.innerHTML = 0;
}