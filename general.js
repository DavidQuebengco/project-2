const mainNavbar = () => {
  document.getElementById("mainNavbar").innerHTML = `
  <nav class="navbar navbar-expand-lg fixed-top border-bottom2 fw-bold pt-0" id="mainNavbar2">
    <nav class="navbar navbar-expand-lg fixed-top fw-bold pt-0 pb-0 d-flex justify-content-center">
      <div class="container col-12 d-flex justify-content-center align-items-center pt-0 pb-0 mt-0">
        <a class="navbar-brand pt-2 pb-2" href="index.html">
          <img src="https://i.ibb.co/4s4480F/GGNext-Logo-white.png" width="110" alt="">
        </a>
        <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <small class="collapse navbar-collapse navbar2 pt-1 pb-1 mt-0" id="navbarSupportedContent">
          <ul class="navbar-nav align-items-center mx-auto">
            <li class="nav-item me-lg-5 ms-lg-5" id="Home">
              <a class="nav-link aLink" href="index.html">Home</a>
            </li>
            <li class="nav-item me-lg-5 ms-lg-5" id="Games">
              <a class="nav-link aLink" href="games.html">Games</a>
            </li>
            <li class="nav-item me-lg-5 ms-lg-5" id="Contacts">
              <a class="nav-link aLink" href="contacts.html">Contacts</a>
            </li>
            <li class="nav-item me-lg-5 ms-lg-5" id="About">
              <a class="nav-link aLink" href="About.html">About</a>
            </li>
          </ul>
          <div class="d-flex me-lg-3 justify-content-center">
            <a class="text-light" href="https://www.facebook.com/ggnextofficial/"><i
                class="fa-brands fa-facebook pe-3 socmedIcon"></i></a>
            <a class="text-light" href="https://twitter.com/GGNextOfficial"><i
                class="fa-brands fa-twitter pe-3 socmedIcon"></i></a>
            <a class="text-light" href="https://www.youtube.com/@gg-nextofficial"><i
                class="fa-brands fa-youtube pe-3 socmedIcon"></i></a>
            <a class="text-light" href=""><i class="fa-brands fa-discord pe-3 socmedIcon"></i></a>
            <a class="text-light" href="https://www.twitch.tv/ggnext123"><i
                class="fa-brands fa-twitch pe-lg-3 socmedIcon"></i></a>
          </div>
          <form class="" role="search">
            <a href="searchbar.html"><img class="searchBtnSize"
              src="images/search-icon.png" alt="" id="searchBtnSize"></a>
          </form>

        </small>
      </div>
    </nav>
  </nav>`;
}

const mainFooter = () => {
  document.getElementById("mainFooter").innerHTML = `
  <div class="container ">
    <div class="row col-12 align-items-center pb-5 pt-5">
      <div class="col-lg col-md-3 col-6 pe-4">
        <img src="images/activision2.png" alt="">
      </div>
      <div class="col-lg col-md-3 col-6 pe-4">
        <img src="images/bethesda2.png" alt="">
      </div>
      <div class="col-lg col-md-3 col-6 pe-4">
        <img src="images/blizzard2.png" alt="">
      </div>
      <div class="col-lg col-md-3 col-6 pe-4">
        <img src="images/capcom2.png" alt="">
      </div>
      <div class="col-lg col-md-3 col-6 pe-4">
        <img src="images/EA2.png" alt="">
      </div>
      <div class="col-lg col-md-3 col-6 pe-4">
        <img src="images/nintendo2.png" alt="">
      </div>
      <div class="col-lg col-md-3 col-6 pe-4">
        <img src="images/riot2.png" alt="">
      </div>
      <div class="col-lg col-md-3 col-6 pe-4">
        <img src="images/rockstar2.png" alt="">
      </div>
      <div class="col-lg col-md-3 col-6 pe-4">
        <img src="images/santa-monica2.png" alt="">
      </div>
      <div class="col-lg col-md-3 col-6 pe-4">
        <img src="images/ubisoft2.png" alt="">
      </div>
      <div class="col-lg col-md-3 col-6 pe-4">
        <img src="images/unity2.png" alt="">
      </div>
      <div class="col-lg col-md-3 col-6">
        <img src="images/valve2.png" alt="">
      </div>
    </div>
  </div>
  
  <div class="container pb-3">
    <div class="row d-flex">
      <div class="col-lg-4 pt-5">
        <div class="pb-md-1"><img src="https://i.ibb.co/4s4480F/GGNext-Logo-white.png" width="55" alt=""></div>
        <small class="text-light">
          GG Next brings you the gaming trends, hotest reviews, epic guides which will help you find the best game
          that fits your interest. <br>
          <a class="aLink" href="About.html">Read more..</a>
        </small>
      </div>
      <div class="col-lg-3 pt-5">
        <div class="orangeText fw-bold">Social Media</div>
        <h3 class="text-light me-5 pt-md-1">
          <a class="text-light" href="https://www.facebook.com/ggnextofficial/"><i
              class="fa-brands fa-facebook socmedIcon"></i></a>
          <a class="text-light ps-md-3" href="https://twitter.com/GGNextOfficial"><i
              class="fa-brands fa-twitter socmedIcon"></i></a>
          <a class="text-light ps-md-3" href="https://www.youtube.com/@gg-nextofficial"><i
              class="fa-brands fa-youtube socmedIcon"></i></a>
          <a class="text-light ps-md-3" href=""><i class="fa-brands fa-discord socmedIcon"></i></a>
          <a class="text-light ps-md-3" href="https://www.twitch.tv/ggnext123"><i
              class="fa-brands fa-twitch socmedIcon"></i></a>
        </h3>
      </div>
      <div class="col-lg-2 pt-5" id="container">
        <div class="orangeText fw-bold">Quick Links</div>
        <small class="text-light d-md-flex d-lg-grid  pt-md-1">
          <div class="socmedIcon" id="help"><a class="text-white text-decoration-none " onclick="linkValue(1)">-Help</a></div>
          <div class="socmedIcon" id="faqs"><a class="text-white text-decoration-none" onclick="linkValue(2)">-FAQ's</a></div>
          <div class="socmedIcon" id="contact"><a class="text-white text-decoration-none" href = "contacts.html">-Contact Us</a></div>
          <div class="socmedIcon" id="privacy"><a class="text-white text-decoration-none" onclick="linkValue(4)">-Privacy Policy</a></div>
        </small>
      </div>
      <div class="col-lg-3 pt-5">
        <div class="orangeText fw-bold">Help Us Grow</div>
        <small class="text-light pt-md-1">
          GG Next is a free and self-funding website. Every cents are much Appreciated!
        </small>
      </div>
    </div>
  </div>`;
}

const mainFooter2 = () => {
  document.getElementById("mainFooter2").innerHTML = `<small class="ps-3 text-secondary">
     Copyright <span class="orangeText">©</span> 2022 All Rights Reserved.</small>`;
}

setTimeout(myGreeting, 2000);

let loader = document.getElementById("preloaderIndex");

setTimeout(myGreeting, 1000);

function myGreeting() {
  loader.style.display = "none"
}

mainNavbar();
mainFooter();
mainFooter2()