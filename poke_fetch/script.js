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
        const pokemonName = document.getElementById("pokemonSpirit")
         const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

            if(!response.ok){
                throw new Error("cannot fetch the data");
            }
            const data = await response.json();
            console.log(data);
    }
    catch(error) {
        console.log(error);
    }
   
}
fetchData();