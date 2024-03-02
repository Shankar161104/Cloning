document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    var bestseller = document.getElementById("bestseller");

    // Add a click event listener to the button
    bestseller.addEventListener("click", function() {
        // Open another HTML page
        // window.location.href = "bestseller.html";-->opens in the same page
        window.open("bestseller.html")//opens in another tab
    });

     var saree=document.getElementById("saree")
     saree.addEventListener("click",()=>{
        // window.location.href="bestseller.html"-->opens in the same page
        window.open("saree.html")// opens in another tab
     })

     let kurtis=document.getElementById("kurtis")
     kurtis.addEventListener("click",()=>{
        window.open("saree.html")
     })

});
