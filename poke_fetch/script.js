// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// .then(response => {
//     if(!response.ok){
//         throw new Error("could not fetch resource")
//     }
//     return response.json();
// })
// .then(data => console.log(data.name))
// .catch(error => console.error(error))

async function fetchData() {
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

            if(!response.ok){
                throw new Error("cannot fetch the data");
            }
            const data = await response.json();
            const pokemonSprite = data.sprites.front_default;
            const imgElement = document.getElementById("pokemonSprite");
            imgElement.src = pokemonSprite;
            imgElement.style.display = "block";

    }
    catch(error) {
        console.log(error);
    }
   
}
fetchData();