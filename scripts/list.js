document.querySelector(".navside .btn-menu:nth-of-type(2)").addEventListener("click", function(){
    if(localStorage.shoppingCartPopulated){
        document.querySelector(".shopping-cart-quickview").classList.toggle("visible");
    }
});