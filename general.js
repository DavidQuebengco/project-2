const mainNavbar = () => {
  document.getElementById("mainNavbar").innerHTML = `
  <nav class="navbar navbar-expand-lg fixed-top fw-bold pt-0">
    <div class="container-fluid col-10 d-flex justify-content-between pt-0 pb-0 mt-0">
      <a class="navbar-brand pt-2 pb-2" href="index.html">
        <img src="https://i.ibb.co/4s4480F/GGNext-Logo-white.png" width="110" alt="">
      </a>
      <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <small class="collapse navbar-collapse navbar2 pt-1 pb-1 mt-0" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto me-2">
          <li class="nav-item me-5 ms-5" id="Home">
            <a class="nav-link aLink" href="index.html">Home</a>
          </li>
          <li class="nav-item me-5 ms-5" id="Games">
            <a class="nav-link aLink" href="games.html">Games</a>
          </li>
          <li class="nav-item me-5 ms-5 ">
            <a class="nav-link aLink" href="">Contacts</a>
          </li>
          <li class="nav-item me-5 ms-5" id="About">
            <a class="nav-link aLink" href="About.html">About</a>
          </li>
          <div class="input-group ms-5">
            <input class="form-control bg-light bg-opacity-25 text-light" type="search"
              placeholder="Search Game">
            <button class="btn orangeBg text-light " id="searchGame" type="submit"><i class='bx bx-search'></i></button>
          </div>
        </ul>
      </small>
    </div>
  </nav>`;
}

const mainFooter = () => {
  document.getElementById("mainFooter").innerHTML = `
  <div class="container-fluid col-10 align-items-center d-flex justify-content-between pb-5 pt-5">
    <div class="col-md pe-4">
      <img src="images/activision2.png" alt="">
    </div>
    <div class="col-md pe-4">
      <img src="images/bethesda2.png" alt="">
    </div>
    <div class="col-md pe-4">
      <img src="images/blizzard2.png" alt="">
    </div>
    <div class="col-md pe-4">
      <img src="images/capcom2.png" alt="">
    </div>
    <div class="col-md pe-4">
      <img src="images/EA2.png" alt="">
    </div>
    <div class="col-md pe-4">
      <img src="images/nintendo2.png" alt="">
    </div>
    <div class="col-md pe-4">
      <img src="images/riot2.png" alt="">
    </div>
    <div class="col-md pe-4">
      <img src="images/rockstar2.png" alt="">
    </div>
    <div class="col-md pe-4">
      <img src="images/santa-monica2.png" alt="">
    </div>
    <div class="col-md pe-4">
      <img src="images/ubisoft2.png" alt="">
    </div>
    <div class="col-md pe-4">
      <img src="images/unity2.png" alt="">
    </div>
    <div class="col-md">
      <img src="images/valve2.png" alt="">
    </div>
  </div>
  <hr class="container-fluid col-10 hr2">
  <div class="container-fluid col-10">
    <small class="orangeText fw-bold d-flex pt-3">
      <div class="col-3 me-5">About Us</div>
      <div class="col-3 me-5">Social Media</div>
      <div class="col-2 me-5">Quick Links</div>
      <div class="col-3 me-5">Help Us Grow</div>
    </small>
    <section class=" d-flex pt-3 pb-4 text-light">
      <small class="col-3 me-5">
        GG Next is a brings you the gaming trends, hotest reviews, epic guides which will help you find the best game that fits your interest.
        <span><a class="aLink" href="About.html">read more..</a></span>
      </small>
      <h3 class="col-3 text-light me-5">
        <a class="text-light" href="https://www.facebook.com/ggnextofficial/"><i class="fa-brands fa-facebook pe-3 socmedIcon"></i></a>
        <a class="text-light" href="https://twitter.com/GGNextOfficial"><i class="fa-brands fa-twitter pe-3 socmedIcon"></i></a>
        <a class="text-light" href="https://www.youtube.com/@gg-nextofficial"><i class="fa-brands fa-youtube pe-3 socmedIcon"></i></a>
        <a class="text-light" href=""><i class="fa-brands fa-discord pe-3 socmedIcon"></i></a>
        <a class="text-light" href="https://www.twitch.tv/ggnext123"><i class="fa-brands fa-twitch pe-3 socmedIcon"></i></a>
        
      </h3>
      <small class="col-2 me-5">
        <div class="socmedIcon">- Help</div>
        <div class="pt-1 socmedIcon">- FAQ's</div>
        <div class="pt-1 socmedIcon">- Contact Us</div>
        <div class="pt-1 socmedIcon">- Privacy Policy</div>
      </small>
      <small class="col-3 me-5">
        GG Next is a free and self-funding website. Every cents are much Appreciated!
        <span><a class="aLink" href="About.html">Send donation.</a></span>
      </small>
    </section>
    </section>
  </div>`;
}

const mainFooter2 = () => {
  document.getElementById("mainFooter2").innerHTML = `<img src="https://i.ibb.co/4s4480F/GGNext-Logo-white.png" width="55" alt=""> <small class="ps-3 text-secondary">
    <span class="orangeText">©</span> copyright 2023</small>`;
}

mainNavbar();
mainFooter();
mainFooter2()