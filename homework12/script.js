async function getFilmData() {
    const request = await fetch(`https://swapi.dev/api/films/2/`);
    const response = await request.json();
    rednerFilmData(response)
}
getFilmData()


function rednerFilmData(character) {
const characterRequest = character.characters.map(getCharacterInfo);
Promise.all (characterRequest).then ((response) => response.forEach(renderCharacter))
}


async function getCharacterInfo (url) {
    const request = await fetch(url);
    const response = await request.json();
    renderCharacter(response)
}

function renderCharacter(character){
    const characterTemplate = `
    <div class="charapters">
    <h2>${character.name}</h2>
    <p>${character.birth_year}, ${character.gender}</p>
    </div>
    `
    document.querySelector("#btn_1").addEventListener("click", function(){
        document.querySelector("#info").innerHTML+=characterTemplate;
    })
    document.querySelector(".exit").addEventListener("click", function(){
        document.querySelector("#info").innerHTML="";
    })
}

async function getFilmData_2() {
    const request = await fetch(`https://swapi.dev/api/films/2/`);
    const response = await request.json();
    rednerFilmData_2(response)
}
getFilmData_2()

function rednerFilmData_2(planet) {
    const planetsRequest = planet.planets.map(getPlanetsInfo);
    Promise.all (planetsRequest).then ((response) => response.forEach(renderPlanets))
    }
    async function getPlanetsInfo (url) {
        const request = await fetch(url);
        const response = await request.json();
        renderPlanets(response)
    }
    function renderPlanets(planets){
        const planetsTemplate = `
        <div class="planets">
        <h2>${planets.name}</h2> 
        </div>
        `
        document.querySelector("#btn_2").addEventListener("click", function(){
            document.querySelector("#info").innerHTML+=planetsTemplate;
        })
        document.querySelector(".exit").addEventListener("click", function(){
            document.querySelector("#info").innerHTML="";
        })
        
    }