const mainNavbar = () => {
    document.getElementById("mainNavbar").innerHTML = `<div class="container-fluid d-flex justify-content-between pt-0 pb-0 mt-0 p-5 ms-5 me-5">
    <a class="navbar-brand ps-3 pt-2 pb-2" href="index.html">
      <img src="https://i.ibb.co/4s4480F/GGNext-Logo-white.png" width="150" alt="">
    </a>
    <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <small class="collapse navbar-collapse navbar2 pt-4 pb-4 mt-0 pe-3" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto me-2">
        <li class="nav-item me-5 ms-5" id="Home">
          <a class="nav-link" href="index.html" onclick="activePage2(Home)">HOME</a>
        </li>
        <li class="nav-item me-5 ms-5" id="Games">
          <a class="nav-link" href="games.html" onclick="activePage2(Games)">GAMES</a>
        </li>
        <li class="nav-item me-5 ms-5 ">
          <a class="nav-link" href="">CONTACTS</a>
        </li>
        <li class="nav-item me-5 ms-5" id="About">
          <a class="nav-link" href="About.html" onclick="activePage2(About)">ABOUT</a>
        </li>
        <div class="input-group ms-5">
          <input class="form-control border-0 bg-light bg-opacity-25 text-light" type="search"
            placeholder="Search Game">
          <button class="btn orangeBg text-light border-0" id="searchGame" type="submit"><i class='bx bx-search'></i></button>
        </div>
      </ul>
    </small>
  </div>`;
}

const mainFooter = () => {
    document.getElementById("mainFooter").innerHTML = `<div class="row align-items-center d-flex justify-content-around p-5   pb-3 ms-5 me-5">
    <div class="col-sm">
      <img src="images/activision2.png" alt="">
    </div>
    <div class="col-sm">
      <img src="images/bethesda2.png" alt="">
    </div>
    <div class="col-sm">
      <img src="images/blizzard2.png" alt="">
    </div>
    <div class="col-sm">
      <img src="images/capcom2.png" alt="">
    </div>
    <div class="col-sm">
      <img src="images/EA2.png" alt="">
    </div>
    <div class="col-sm">
      <img src="images/nintendo2.png" alt="">
    </div>
    <div class="col-sm">
      <img src="images/riot2.png" alt="">
    </div>
    <div class="col-sm">
      <img src="images/rockstar2.png" alt="">
    </div>
    <div class="col-sm">
      <img src="images/santa-monica2.png" alt="">
    </div>
    <div class="col-sm">
      <img src="images/ubisoft2.png" alt="">
    </div>
    <div class="col-sm">
      <img src="images/unity2.png" alt="">
    </div>
    <div class="col-sm">
      <img src="images/valve2.png" alt="">
    </div>
  </div>
  <hr class="container-fluid col-9 hr2">
  <div class="container-fluid col-9">
    <small class="orangeText fw-bold d-flex pt-3">
      <div class="col-3 me-5">About Us</div>
      <div class="col-3 me-5">Social Media</div>
      <div class="col-2 me-5">Quick Links</div>
      <div class="col-3 me-5">Help Us Grow</div>
    </small>
    <section class="d-flex pt-3 pb-4 text-light">
      <small class="col-3 me-5">
        GG Next is a brings you the gaming trends, hotest reviews, epic guides which will help you find the best game that fits your interest.
        <span><a href="About.html">read more..</a></span>
      </small>
      <h3 class="col-3 text-light me-5">
        <i class="fa-brands fa-facebook pe-3 socmedIcon"></i>
        <i class="fa-brands fa-twitter pe-3 socmedIcon"></i>
        <i class="fa-brands fa-youtube pe-3 socmedIcon"></i>
        <i class="fa-brands fa-discord pe-3 socmedIcon"></i>
        <i class="fa-brands fa-twitch pe-3 socmedIcon"></i>
      </h3>
      <small class="col-2 me-5">
        <div class="socmedIcon">- Help</div>
        <div class="pt-1 socmedIcon">- FAQ's</div>
        <div class="pt-1 socmedIcon">- Contact Us</div>
        <div class="pt-1 socmedIcon">- Privacy Policy</div>
      </small>
      <small class="col-3 me-5">
        GG Next is a free and self-funding website. Every cents are much Appreciated!
        <span><a href="About.html">Send donation.</a></span>
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