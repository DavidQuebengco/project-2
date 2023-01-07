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
    pageCount = games.length % 12 > 1 ? (games.length - games.length % 12) / 12 + 1 : false;
    if (curArr <= maxArr) {
      const cardSample = `
    <div class="col-3 card-group p-2">
      <div class="card text-bg-dark shadow">
        <img src=${game.thumbnail} class="card-img-top" alt="...">
        <div class="card-body d-grid">
          <h5 class="card-title fw-bold">${game.title}</h5>
          <small class="card-text">${game.short_description}</small><br>
          <p class="card-text">Genre: ${game.genre}</p>
        </div>
        <div class="card-footer">
          <a href="${game.freetogame_profile_url}">See more details</a>
        </div>
      </div>
    </div>`;
      document.getElementById('game-output').innerHTML += cardSample;
      document.getElementById("prev").setAttribute('disabled', 0);
      document.getElementById("prevTop").setAttribute('disabled', 0);
      document.getElementById("pageNumber").innerText = `${curPage} of ${pageCount}`;
      document.getElementById("pageNumberTop").innerText = `${curPage} of ${pageCount}`;
      curArr += 1;
    }
  }
  games2 = games;
}

const genreList = ['ARPG','Battle Royale', 'Card Game', 'Fantasy', 'Fighting', 'MMO', 'MMOARPG', 'MMOFPS', 'MMORPG',
  'MOBA', 'Racing', 'Shooter', 'Social', 'Sports', 'Strategy'];
let genreValue = "";

const genreDropdown = () => {
  for(let genreNumber = 0; genreNumber < genreList.length ; genreNumber++){
    genreValue = genreList[genreNumber];
    document.getElementById('sample').innerHTML += `<li><a class="dropdown-item" onclick="selectGenre('${genreValue}')">${genreValue}</a></li>`;
  }}

genreDropdown();

const card2 = () => {
  document.getElementById('game-output').innerHTML += `
  <div class="col-3 card-group p-2">
    <div class="card text-bg-dark shadow">
      <img src=${games2[curArr].thumbnail} class="card-img-top" alt="...">
      <div class="card-body d-grid">
        <h5 class="card-title fw-bold">${games2[curArr].title}</h5>
        <small class="card-text">${games2[curArr].short_description}</small><br>                         
        <p class="card-text">Genre: ${games2[curArr].genre}</p>
      </div>
      <div class="card-footer">
      <a href="${games2[curArr].freetogame_profile_url}">See more details</a>
      </div>
    </div>
  </div>`
};



const nextPage = () => {
  scrollToTop()
  curPage += 1;
  minArr += 12;
  maxArr += 12;
  curArr = minArr
  document.getElementById("game-output").innerHTML = "";

  for (curArr; curArr <= maxArr; curArr++) {
    if (curArr <= maxArr && curArr <= games2.length - 1) {
      card2();
      document.getElementById("prev").removeAttribute("disabled");
      document.getElementById("prevTop").removeAttribute("disabled");
      document.getElementById("pageNumber").innerText = `${curPage} of ${pageCount}`
      document.getElementById("pageNumberTop").innerText = `${curPage} of ${pageCount}`
    }
    else {
      document.getElementById("next").setAttribute(`disabled`, 0);
      document.getElementById("nextTop").setAttribute(`disabled`, 0);
    };
  }
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

const prevPage = () => {
  scrollToTop()
  curPage -= 1;
  minArr -= 12;
  maxArr -= 12;
  curArr = minArr
  document.getElementById("game-output").innerHTML = "";
  for (curArr; curArr <= maxArr && minArr >= 0; curArr++) {
    if (minArr == 0 && maxArr == 11) {
      card2();
      document.getElementById("prev").setAttribute(`disabled`, 0);
      document.getElementById("prevTop").setAttribute(`disabled`, 0);
      document.getElementById("pageNumber").innerText = `${curPage} of ${pageCount}`
      document.getElementById("pageNumberTop").innerText = `${curPage} of ${pageCount}`
    }
    else {
      card2();
      document.getElementById("next").removeAttribute("disabled");
      document.getElementById("nextTop").removeAttribute("disabled");
      document.getElementById("pageNumber").innerText = `${curPage} of ${pageCount}`
      document.getElementById("pageNumberTop").innerText = `${curPage} of ${pageCount}`
    }
  }
}
displayGames();

const selectGenre = (genreChoice) => {
    document.getElementById("game-output").innerHTML = "";
    
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
        document.getElementById("foundMatch").innerText = `Found ${sortCounter} games for ${genreChoice} Genre`;
      }
    }
  }


