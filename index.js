let loader = document.getElementsByClassName("preloader2")[0];


document.getElementById("Home").innerHTML = `<a class="nav-link activePage border-2 border-bottom" href="index.html">Home</a>`
loader.style.display = "none"
const videoFrame = (x) => {
    let x1 = `<iframe class="border blueBg2" width="560" height="315" src="https://www.youtube-nocookie.com/embed/EE-4GvjKcfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen autoplay></iframe>`
    let x2 = `<iframe class="border blueBg2" width="560" height="315" src="https://www.youtube-nocookie.com/embed/K_03kFqWfqs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    let x3 = `<iframe class="border blueBg2" width="560" height="315" src="https://www.youtube-nocookie.com/embed/r72GP1PIZa0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    let x4 = `<iframe class="border blueBg2" width="560" height="315" src="https://www.youtube-nocookie.com/embed/K_03kFqWfqs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    let x5 = `<iframe class="border blueBg2" width="560" height="315" src="https://www.youtube-nocookie.com/embed/kJawWyRUOBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    
    

    if(x == 1){
        document.getElementById("videoFrame").innerHTML = x1;
    }else if(x == 2){
        document.getElementById("videoFrame").innerHTML = x2;
    }else if(x == 3){
        document.getElementById("videoFrame").innerHTML = x3;
    }else if(x == 4){
        document.getElementById("videoFrame").innerHTML = x4;
    }else if(x == 5){
        document.getElementById("videoFrame").innerHTML = x5;
    }

    
}
