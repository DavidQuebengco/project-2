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

let searchCounter = 0;


let searchInputValue;

const searchBtn2 = () =>{
    searchInputValue = document.getElementById("searchInput").value
    document.getElementById("searchField").innerHTML = "";
    document.getElementById("searchFieldInfo").innerHTML = "";
    searchCounter = 0;

const searchBtn = () => {

    async function getGames(page, gamesPerPage) {
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical&page=${page}&gamesPerPage=${gamesPerPage}`, options);
        const data = await response.json();
        return data;
    }

    async function displayGames() {
        let games = await getGames(page, gamesPerPage);
        pageCount = games.length % 12 > 1 ? (games.length - games.length % 12) / 12 + 1 : false;

        let inputValueOrg = searchInputValue;
        let inputValue = searchInputValue.toLowerCase().split("");

        //x assigned for array counter of games (games' value inside games)
        if(inputValue.length >= 2 && inputValue.length < 25){
            console.log(searchCounter);

            searchCounter == 0 ? document.getElementById("errorCatcher").innerHTML = `<h4 class="orangeText">Sorry! <span class="text-light">Didnt find anything for</span>  "${inputValue.join("")}"</h4>` : ``

            for (let x = 0; x <= games.length; x++) {
                let gameTitle = games[x].title.toLowerCase().split("")
                for(let inputValueAry = 0; inputValueAry < inputValue.length ; inputValueAry++){
                        for(let gameTitleAry = 0; gameTitleAry < gameTitle.length ; gameTitleAry++){
                            if(inputValue[0] == gameTitle[gameTitleAry]){
                                if(gameTitle.length - gameTitleAry >= inputValue.length){
                                    let gameTitleSorted = gameTitle.slice(gameTitleAry).slice(0,inputValue.length).join("");
                                    if(inputValueOrg.toLowerCase() == gameTitleSorted){
                                        inputValueAry = inputValue.length;
                                        searchCounter += 1;

                                        const searchCounterPlural = searchCounter > 1 ? "games" : "game";

                                        document.getElementById("errorCatcher").innerText = "";
                                        document.getElementById("searchFieldInfo").innerHTML = `<h3 class="text-light">Found <span class="orangeText">${searchCounter}</span> ${searchCounterPlural} for <span class="orangeText">"${searchInputValue}"</span></h3>`;
                                        document.getElementById("searchField").innerHTML += `
                                        <div class="col-3 card-group p-2">
                                            <div class="card text-bg-dark shadow">
                                            <img src=${games[x].thumbnail} class="card-img-top" alt="...">
                                            <div class="card-body d-grid">
                                                <h5 class="card-title fw-bold">${games[x].title}</h5>
                                                <small class="card-text">${games[x].short_description}</small><br>
                                                <p class="card-text">Genre: ${games[x].genre}</p>
                                            </div>
                                            <div class="card-footer ">
                                                <a class="cardLink aLink" href="${games[x].freetogame_profile_url}">See more details</a>
                                            </div>
                                            </div>
                                        </div>`;
                                    }
                                                              
                                }
                            }
                        }
                    }
            }
        games2 = games;
        }else{
            document.getElementById("errorCatcher").innerHTML = `<h4 class="orangeText">**Please enter at least 2 characters!</h4>`;
        }
    }
    displayGames();
}
searchBtn();
}
document.getElementById("searchField").innerHTML = "";
