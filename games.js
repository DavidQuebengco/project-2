const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '584c938872msh5a0e1cf02a5269fp197d03jsna83433d26996',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  }
};

let games2 = [];
let curArr = 0;
let minArr = 0;
let maxArr = 11;

let page = 1; // initialize page to 1
let gamesPerPage = 12; // number of games to display per page
let pageCount = 0;
let curPage = 1;

async function getGames(page, gamesPerPage) {
  const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical&page=${page}&gamesPerPage=${gamesPerPage}`, options);
  const data = await response.json();
  return data;
}

async function displayGames() {
  let games = await getGames(page, gamesPerPage);
  for (const game of games) {
    document.getElementById("mainGameImg").innerHTML = `
      <div class="card text-bg-dark rounded-0 imgZoom">
              <img src="https://news.otakukart.com/wp-content/uploads/2020/04/Dota-2.jpg" class="card-img rounded-0 " alt="Loading..." style="max-width: 54rem; height: 52vh; object-fit: cover">
              <div class="card-img-overlay">
                <small class="fw-bold col-2 text-light orangeBg p-1 text-center ps-3 pe-3 shadow-sm">
                FEATURED GAMES
                </small>
                <div class="">
                  <a class="cardLink aLink" href="${games[98].freetogame_profile_url}">See more details</a>
                  <h5 class="card-title pt-5">${games[98].title} </h5>
                  <p class="card-text">${games[98].short_description}</p>
                </div>
              </div>
            </div>`;

      document.getElementById("mainGameImg2-1").innerHTML = `
      <div class="card text-bg-dark rounded-0 imgZoom">
              <img src="https://wallpapercave.com/wp/wp6012286.jpg" class="card-img rounded-0" alt="..." style="max-width: 54rem; height: 52vh; object-fit: cover">
              <div class="card-img-overlay">
                <small class="fw-bold col-2 text-light orangeBg p-1 text-center ps-3 pe-3 shadow-sm">
                FEATURED GAMES
                </small>
                <div class="">
                  <a class="cardLink aLink" href="${games[344].freetogame_profile_url}">See more details</a>
                  <h5 class="card-title pt-5">${games[344].title} </h5>
                  <p class="card-text">${games[344].short_description}</p>
                  
                </div>
              </div>
            </div>`;

      document.getElementById("mainGameImg3-1").innerHTML = `
      <div class="card text-bg-dark rounded-0 imgZoom">
              <img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltd7421a88656e0a28/5fdc56b0b529867fcec246ce/Champions_VGU_2021_Banner.jpg" class="card-img rounded-0" alt="..." style="max-width: 54rem; height: 52vh; object-fit: cover">
              <div class="card-img-overlay">
                <small class="fw-bold col-2 text-light orangeBg p-1 text-center ps-3 pe-3 shadow-sm">
                FEATURED GAMES
                </small>
                <div class="pt-5">
                  <h5 class="card-title">${games[189].title} </h5>
                  <p class="card-text">${games[189].short_description}</p>
                  <a class="cardLink aLink" href="${games[189].freetogame_profile_url}">See more details</a>
                </div>
              </div>
            </div>`;

    document.getElementById("mainGameImg2").innerHTML = `
      <div class="card text-bg-dark rounded-0 imgZoom" style="overflow: hidden;">
              <img src=${games[248].thumbnail} class="card-img rounded-0" alt="..." style="max-width: 27rem; height: 26vh; object-fit: cover">
              <div class="card-img-overlay d-flex align-items-end rounded-0">
                <div>
                  <a class="cardLink aLink" href="${games[248].freetogame_profile_url}">See more details</a>
                  
                </div>
              </div>
            </div>`;

    document.getElementById("mainGameImg3").innerHTML = `
            <div class="card text-bg-dark rounded-0 imgZoom" style="overflow: hidden;">
                    <img src=${games[57].thumbnail} class="card-img rounded-0" alt="..." style="max-width: 27rem; height: 26vh; object-fit: cover">
                    <div class="card-img-overlay d-flex align-items-end">
                    <div>
                    <a class="cardLink aLink" href="${games[57].freetogame_profile_url}">See more details</a>
                    </div>
                  </div>`;

    pageCount = games.length % 12 > 1 ? (games.length - games.length % 12) / 12 + 1 : games.length / 12;
    if (curArr <= maxArr) {
    const icon = () => {
      if(game.platform == "PC (Windows)"){
        return `<i class="fa-brands fa-windows"></i>
        `;
      }else if(game.platform == "Web Browser"){
        return `<i class="fa-regular fa-window-maximize"></i>`;
      }else{
        return `<i class="fa-brands fa-windows"></i> <i class="fa-regular fa-window-maximize"></i>`;
      }
    }


    const cardSample = `
    <small  class="col-lg-3 col-md-6 card-group p-2 rounded-0 text-start">
      <div class="card text-bg-dark shadow rounded-0 imgZoom" style="overflow: hidden;">
        <img src=${game.thumbnail} class="card-img-top rounded-0" alt="Loading...">
        <div class="card-img-overlay d-flex align-items-start rounded-0 cardOvrLay" style="
        height: 197px;">
          <small class="card-text mb-4 orangeBg ps-lg-2 pe-lg-2 p-lg-1 m-0">${game.genre}</small>
        </div>
        <div class="card-body d-grid">
          <small class="card-title fw-bold fs-5">${game.title}</small>
          <small class="card-text mb-4">${icon()} | ${game.release_date}</small>
          <small class="card-text">${game.short_description}</small>
        </div>
        <div class="card-footer d-flex justify-content-between">
          <a class="cardLink aLink" href="${game.freetogame_profile_url}">See more details</a>
          <button type="button" class="btn blueBg2 btn-sm text-light rounded-1 border-0" >Free</button>
        </div>
      </div>
    </small>`;

    document.getElementById("mainPageNumber").innerHTML = ``;
    

    for(let pageCounter = 1 ; pageCounter <= pageCount ; pageCounter++){
      document.getElementById("mainPageNumber").innerHTML += `<li class="page-item orangeText btnBg "><button class="page-link orangeText btnBg" id="page${pageCounter}" onclick="pageNumSelect(${pageCounter})">${pageCounter}</button></li>`;
      document.getElementById("page1").setAttribute("class", "page-link orangeBg text-light btnBg");
    }

      document.getElementById('game-output').innerHTML += cardSample;
      document.getElementById("prev").setAttribute('disabled', 0);
      document.getElementById("prevTop").setAttribute('disabled', 0);
      document.getElementById("pageNumberTop").innerText = `${curPage} of ${pageCount}`;
      curArr += 1;
    }
    document.getElementsByClassName("preloader")[0].style.display = "none"
  }
  games2 = games;
  
  
}

const genreList = ['ARPG', 'Battle Royale', 'Card Game', 'Fantasy', 'Fighting', 'MMO', 'MMOARPG', 'MMOFPS', 'MMORPG',
  'MOBA', 'Racing', 'Shooter', 'Social', 'Sports', 'Strategy'];
let genreValue = "";

const genreDropdown = () => {
  for (let genreNumber = 0; genreNumber < genreList.length; genreNumber++) {
    genreValue = genreList[genreNumber];
    document.getElementById('sample').innerHTML += `<li><a class="dropdown-item" onclick="selectGenre('${genreValue}')">${genreValue}</a></li>`;
  }
}

genreDropdown();

const card2 = () => {
  const icon = () => {
    if(games2[curArr].platform == "PC (Windows)"){
      return `<i class="fa-brands fa-windows"></i>
      `;
    }else if(games2[curArr].platform == "Web Browser"){
      return `<i class="fa-regular fa-window-maximize"></i>`;
    }else{
      return `<i class="fa-brands fa-windows"></i> <i class="fa-regular fa-window-maximize"></i>`;
    }
  }

  document.getElementById('game-output').innerHTML += `<small  class="col-lg-3 col-md-6 card-group p-2 rounded-0 text-start">
  <div class="card text-bg-dark shadow rounded-0 imgZoom" style="overflow: hidden">
    <img src=${games2[curArr].thumbnail} class="card-img-top rounded-0" alt="Loading...">
    <div class="card-img-overlay d-flex align-items-start rounded-0 cardOvrLay">
      <small class="card-text mb-4 orangeBg ps-lg-2 pe-lg-2 p-lg-1 m-0">${games2[curArr].genre}</small>
    </div>
    <div class="card-body d-grid">
          <small class="card-title fw-bold fs-5">${games2[curArr].title}</small>
          <small class="card-text mb-4">${icon()} | ${games2[curArr].release_date}</small>
          <small class="card-text">${games2[curArr].short_description}</small>
        </div>
    <div class="card-footer d-flex justify-content-between">
      <a class="cardLink aLink" href="${games2[curArr].freetogame_profile_url}">See more details</a>
      <button type="button" class="btn blueBg2 btn-sm text-light rounded-1 border-0" >Free</button>
    </div>
  </div>
</small>`
};

const nextPage = () => {
  scrollToTop()
  curPage += 1;
  minArr += 12;
  maxArr += 12;
  curArr = minArr

  let prevPageId = `page${curPage-1}`;
  let pageId = `page${curPage}`;
  document.getElementById(pageId).setAttribute("class", "page-link orangeBg text-light btnBg fw-bold");
  document.getElementById(prevPageId).setAttribute("class", "page-link orangeText btnBg");

  document.getElementById("game-output").innerHTML = "";

  for (curArr; curArr <= maxArr; curArr++) {
    if (curArr <= maxArr && curArr <= games2.length - 1) {
      card2();
      document.getElementById("prev").removeAttribute("disabled");
      document.getElementById("prevTop").removeAttribute("disabled");
      document.getElementById("pageNumberTop").innerText = `${curPage} of ${pageCount}`
    }
    else {
      document.getElementById("next").setAttribute(`disabled`, 0);
      document.getElementById("nextTop").setAttribute(`disabled`, 0);
    };
  }
}

function scrollToTop() {
  window.scrollTo(500, 500);
}

const prevPage = () => {
  scrollToTop()
  curPage -= 1;
  minArr -= 12;
  maxArr -= 12;
  curArr = minArr;

  let nextPageId = `page${curPage+1}`;
  let pageId = `page${curPage}`;
  document.getElementById(pageId).setAttribute("class", "page-link orangeBg text-light btnBg fw-bold");
  document.getElementById(nextPageId).setAttribute("class", "page-link orangeText btnBg");

  document.getElementById("game-output").innerHTML = ``;
  for (curArr; curArr <= maxArr && minArr >= 0; curArr++) {
    if (minArr == 0 && maxArr == 11) {
      card2();
      document.getElementById("prev").setAttribute(`disabled`, 0);
      document.getElementById("prevTop").setAttribute(`disabled`, 0);
      document.getElementById("pageNumberTop").innerText = `${curPage} of ${pageCount}`
    }
    else {
      card2();
      document.getElementById("next").removeAttribute("disabled");
      document.getElementById("nextTop").removeAttribute("disabled");
      document.getElementById("pageNumberTop").innerText = `${curPage} of ${pageCount}`
    }
  }
}
displayGames();

// pageNumSelect()
const pageNumSelect = (pageNum) => {
  let pageId = `page${pageNum}`;
  let lastPageID = `page${curPage}`;
  curPage = pageNum;
  document.getElementById(lastPageID).setAttribute("class", "page-link orangeText btnBg");
  document.getElementById(pageId).setAttribute("class", "page-link orangeBg text-light btnBg fw-bold");

  scrollToTop()
  maxArr = (curPage * 12) -1;
  minArr = (maxArr - 12) + 1;
  curArr = (curPage * 12) - 12;

  document.getElementById("game-output").innerHTML = ``;
  for (curArr; curArr <= maxArr && minArr >= 0; curArr++) {
    if (minArr == 0 && maxArr == 11) {
      card2();
      document.getElementById("prev").setAttribute(`disabled`, 0);
      document.getElementById("prevTop").setAttribute(`disabled`, 0);
      document.getElementById("pageNumberTop").innerText = `${curPage} of ${pageCount}`
    }
    else {
      card2();
      document.getElementById("next").removeAttribute("disabled");
      document.getElementById("nextTop").removeAttribute("disabled");
      document.getElementById("pageNumberTop").innerText = `${curPage} of ${pageCount}`
    }
  }

}

const selectGenre = (genreChoice) => {
  document.getElementById("game-output").innerHTML = ``;

  document.getElementById("prev").setAttribute(`disabled`, 0);
  document.getElementById("prevTop").setAttribute(`disabled`, 0);
  document.getElementById("next").setAttribute(`disabled`, 0);
  document.getElementById("nextTop").setAttribute(`disabled`, 0);
  document.getElementById("pageNumberTop").innerText = `1 of 1`

  document.getElementById("mainPageNumber").innerHTML = `<li class="page-item"><button class="page-link orangeBg text-light fw-bold">1</button></li>`

  curArr = 0;
  minArr = 0;
  let sortMinCounter = 0;
  let sortMaxCounter = 11;
  let sortCounter = 0;

  document.getElementById("genreBtn").innerText = genreChoice;
  for (curArr; curArr <= games2.length; curArr++) {

    if (games2[curArr].genre == genreChoice) {
      card2();
      sortCounter += 1;
      const plural = sortCounter > 1 ? "games" : "game";
      document.getElementById("foundMatch").innerHTML = `Found <span class="orangeText">${sortCounter} ${plural}</span> for <span class="orangeText"> ${genreChoice}</span> genre.`;
    }
  }
}

document.getElementById("Games").innerHTML = `<a class="nav-link activePage border-2 border-bottom" href="games.html">Games</a>`






