document.querySelector(".cart-quickview-items").addEventListener("click", function(){
    location.href = "cart.html";
});

document.querySelector(".shopping-cart-clear").addEventListener("click", function(){
    localStorage.clear();
    document.querySelector("#cart-item-count").style.opacity = "0";
    if(document.querySelector(".cta-product")){
        document.querySelector(".cta-product").classList.remove("cta-cue");
        document.querySelector(".cta-product").innerHTML = "Add to bag";
    }
    document.querySelector(".cart-clear-screen").classList.add("visible");    
    document.querySelector(".shopping-cart-quickview").classList.add("animate-close");    

    // Learned from tutorialspoint.com
    // Execute the inner arrow function after a delay of 1500 milliseconds
    setTimeout(()=>{
        document.querySelector(".cart-clear-screen").classList.remove("visible");
        document.querySelector(".shopping-cart-quickview").classList.remove("visible");
    }, 1500);
});

if(localStorage.shoppingCartPopulated){
    document.querySelector("#cart-item-count").style.opacity = "1";
}