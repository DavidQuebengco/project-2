const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '584c938872msh5a0e1cf02a5269fp197d03jsna83433d26996',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  }
};

let page = 1; // initialize page to 1
let gamesPerPage = 10; // number of games to display per page

async function getGames(page, gamesPerPage) {
  const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical&page=${page}&gamesPerPage=${gamesPerPage}`, options);
  const data = await response.json();
  return data;
}

async function displayGames() {
  let games = await getGames(page, gamesPerPage);

  if (games.length === 1) {
    return;
  }

  // Clear the game output element
  document.getElementById('game-output').innerHTML = '';

  for (const game of games) {
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
  }
}



// Add a pagination component to the page
const pagination = document.getElementById('page-section');
pagination.innerHTML = `
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li id="prev-page" class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li id="next-page" class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
`;
document.body.appendChild(pagination);

// Add event listeners for the pagination buttons
document.getElementById('prev-page').addEventListener('click', () => {
  page--;
  displayGames();
  updatePagination();
});
document.getElementById('next-page').addEventListener('click', () => {
  page++;
  displayGames();
  updatePagination();
});

function updatePagination() {
  // Update the page number displayed in the pagination component
  document.getElementById('page-num').textContent

  if (page === 1) {
    document.getElementById('prev-page').disabled = true;
  } else {
    document.getElementById('prev-page').disabled = false;
  }
}

displayGames();
