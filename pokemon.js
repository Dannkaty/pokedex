function fetchPokemon(){
	fetch("https://pokeapi.co/api/v2/pokemon?limit=1050").then(response => response.json()).then(function(allPokemon){
		let pokemonList = allPokemon.results;
		// console.log(pokemonList[57]);
		document.getElementById("nomPokemon").innerHTML = pokemonList[57].name;
	})
}
fetchPokemon();
