document.querySelector(".cta-product").addEventListener("click", function(){
    this.innerHTML = "Added to bag";
    this.classList.add("cta-cue");
    document.querySelector("#cart-item-count").style.opacity = "1";
    localStorage.shoppingCartPopulated = true;
    document.querySelector(".shopping-cart-quickview").classList.remove("animate-close");
    document.querySelector(".shopping-cart-quickview").style.right = "10px";
    document.querySelector(".shopping-cart-quickview").classList.remove("visible");
    document.querySelector(".cart-clear-screen").classList.remove("visible");
});

document.querySelector(".navside .btn-menu:nth-of-type(2)").addEventListener("click", function(){
    if(localStorage.shoppingCartPopulated){
        document.querySelector(".shopping-cart-quickview").classList.toggle("visible");
    }
});

if(localStorage.shoppingCartPopulated){
    document.querySelector(".cta-product").innerHTML = "Added to bag";
    document.querySelector(".cta-product").classList.add("cta-cue");
}