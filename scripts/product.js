document.querySelector(".cta-product").addEventListener("click", function(){
    this.innerHTML = "Added to bag";
    this.classList.add("cta-cue");
});