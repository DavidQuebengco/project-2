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

async function getGames(page, gamesPerPage) {
  const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical&page=${page}&gamesPerPage=${gamesPerPage}`, options);
  const data = await response.json();
  return data;
}

async function displayGames() {
  let games = await getGames(page, gamesPerPage);
  for (const game of games) {

    if (curArr <= maxArr) {
      const card = `
    <div class="col-md-3 mt-2 text-white" style="max-width: 100%;">
      <div class="card mb-3 px-5 bg-black" style="max-width: 40rem; height: 30rem;">
        <div>
        <img class = "my-2 p-1 border border-2 rounded img-fluid" src = ${game.thumbnail}>
        </div>
        <div class="card-body"> 
            <div class="card-title text-center px-3 pt-3 fw-bold">
            ${game.title}
            </div>
            <div>
            <p class="card-text text-start">${game.short_description}</p> 
            </div>
              <hr>
            <div>                          
            <p class="card-text text-start"><span>Genre :</span> ${game.genre}</p>
            </div>
            <div class="text-start">
            <a href ="${game.freetogame_profile_url}">For more Game details here</a>
            </div>
          </div>
        </div> 
      </div>
    </div>
    `;
      document.getElementById('game-output').innerHTML += card;
      document.getElementById("page-section").innerHTML = `
      <li class="page-item"><a class="page-link" onclick="nextPage()">Next</a></li>`
      curArr += 1;
    }
  }
  games2 = games;
}


const card2 = () => {
  document.getElementById('game-output').innerHTML += `<div class="col-md-3 mt-2 text-white" style="max-width: 100%;">
  <div class="card mb-3 px-5 bg-black" style="max-width: 40rem; height: 30rem;">
    <div>
    <img class = "my-2 p-1 border border-2 rounded img-fluid" src = ${games2[curArr].thumbnail}>
    </div>
    <div class="card-body"> 
        <div class="card-title text-center px-3 pt-3 fw-bold">
        ${games2[curArr].title}
        </div>
        <div>
        <p class="card-text text-start">${games2[curArr].short_description}</p> 
        </div>
          <hr>
        <div>                          
        <p class="card-text text-start"><span>Genre :</span> ${games2[curArr].genre}</p>
        </div>
        <div class="text-start">
        <a href ="${games2[curArr].freetogame_profile_url}">For more Game details here</a>
        </div>
      </div>
    </div> 
  </div>
</div>`
};
;

const nextPage = () => {
  minArr += 12;
  maxArr += 12;
  curArr = minArr
  document.getElementById("game-output").innerHTML = "";

  for (curArr; curArr <= maxArr; curArr++) {
    if (curArr <= maxArr && curArr <= games2.length - 1) {
      card2();
      document.getElementById("page-section").innerHTML = `
              <li class="page-item"><a class="page-link" onclick="prevPage()">Previous</a></li>
              <li class="page-item"><a class="page-link" onclick="nextPage()">Next</a></li>`
    }
    else {
      document.getElementById("page-section").innerHTML = `
                <li class="page-item"><a class="page-link" onclick="prevPage()">Previous</a></li>`
    };
  }
}

const prevPage = () => {
  minArr -= 12;
  maxArr -= 12;
  curArr = minArr
  document.getElementById("game-output").innerHTML = "";
  console.log(curArr);
    for (curArr; curArr <= maxArr && minArr >= 0; curArr++) {
      if (minArr == 0 && maxArr == 11) {
      card2();
      document.getElementById("page-section").innerHTML = `<li class="page-item"><a class="page-link" onclick="nextPage()">Next</a></li>`
      }
      else{
      card2();
      document.getElementById("page-section").innerHTML = `
      <li class="page-item"><a class="page-link" onclick="prevPage()">Previous</a></li>
      <li class="page-item"><a class="page-link" onclick="nextPage()">Next</a></li>`
      }
    }
}


displayGames();
