let loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})

document.getElementById("Home").innerHTML = `<a class="nav-link activePage border-2 border-bottom" href="index.html">Home</a>`