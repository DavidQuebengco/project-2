//carousel Section

document.getElementById("carouselSec").innerHTML = `
        <div>
          <div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel" data-pause="true">
              <div class="blueBg carousel-indicators carousel-indicators2 align-items-end ">
                <div class="container-fluid card-img-overlay d-flex justify-content-end video2" id="videoFrame">
                  <iframe class="border blueBg2" width="560" height="315" src="https://www.youtube-nocookie.com/embed/EE-4GvjKcfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen autoplay onload="preloader()"></iframe>
                </div>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="p-0 m-0 imgZoom active" style="overflow: hidden;" aria-current="true" aria-label="Slide 1"><img src="images/P2-home-banner.jpg" class="d-block c-img" alt="..." onclick="videoFrame(1)"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" class="p-0 m-0 imgZoom" style="overflow: hidden;" aria-label="Slide 2"><img src="images/image2.jpg" class="d-block c-img" alt="..." onclick="videoFrame(2)"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" class="p-0 m-0 imgZoom" style="overflow: hidden;" aria-label="Slide 3"><img src="images/image3.jpg" class="d-block c-img" alt="..." onclick="videoFrame(3)"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" class="p-0 m-0 imgZoom" style="overflow: hidden;" aria-label="Slide 3"><img src="images/image4.jpg" class="d-block c-img" alt="..." onclick="videoFrame(4)"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" class="p-0 m-0 imgZoom" style="overflow: hidden;" aria-label="Slide 3"><img src="images/image5.jpg" class="d-block c-img" alt="..." onclick="videoFrame(5)"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active c-item" data-bs-interval="4000"><img src="images/P2-home-banner.jpg" class="d-block c-img" alt="...">
                </div>
                <div class="carousel-item c-item" data-bs-interval="4000"><img src="images/image2.jpg" class="d-block c-img" alt="..."></div>
                <div class="carousel-item c-item" data-bs-interval="4000"><img src="images/image3.jpg" class="d-block c-img" alt="..."></div>
                <div class="carousel-item c-item" data-bs-interval="4000"><img src="images/image4.jpg" class="d-block c-img" alt="..."></div>
                <div class="carousel-item c-item" data-bs-interval="4000"><img src="images/image5.jpg" class="d-block c-img" alt="..."></div>
              </div>
          </div>
        </div>`


// game Ranking Section
document.getElementById("gameRankingSec").innerHTML = `
<div class="col-12 game-rank">
        <h1 class="text-center pt-4 pb-5 gameRank2 border-top border-2"><span><img class="mb-3"
              src="https://i.ibb.co/Ybyzj0Z/GGNext-Logo-white2.png" width="100" alt=""></span><br>Game <span
            class="text-light">Rankings</span></h1>
        <table class="container table table-dark table-hover text-center">
          <thead class="">
            <tr class="tableHeader">
              <th scope="col">Rank #</th>
              <th scope="col">Game Title</th>
              <th scope="col">Developer</th>
              <th scope="col">Year Released</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr>
              <th scope="row">1</th>
              <td>Elden Ring</td>
              <td>FromSoftware</td>
              <td>2022</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>God of War Ragnarok</td>
              <td>Santamonica Studios</td>
              <td>2022</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Stray</td>
              <td>BlueTwelve Studio</td>
              <td>2022</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Marvel Snap</td>
              <td>Second Dinner</td>
              <td>2022</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Pokemon Legends: Arceus</td>
              <td>Game Freak</td>
              <td>2022</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Splatoon 3</td>
              <td>Nintendo EPD</td>
              <td>2022</td>
            </tr>
          </tbody>
        </table>
      </div>`

document.getElementById("Home").innerHTML = `<a class="nav-link activePage border-2 border-bottom" href="index.html">Home</a>`


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
