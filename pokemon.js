// afficher les noms et url de tous les pokemons
function fetchPokemon(){
	fetch("https://pokeapi.co/api/v2/pokemon?limit=1050").then(response => response.json()).then(function(allPokemon){
		let pokemonList = allPokemon.results;
		// console.log(pokemonList[57]);
		document.getElementById("nomPokemon").innerHTML = pokemonList[24].name;
		console.log(pokemonList[24].url);
		// caracteristiques pour un pokemon
		function viewPokemon(){
			fetch(pokemonList[24].url).then(response => response.json()).then(function(onePokemon){
				let pokemonCharacteristic = onePokemon;
				
				for (var i=0;i< pokemonCharacteristic.held_items.length;i++){
					console.log("valeur de pokemonCharacteristic.held_items[i].item.name " + pokemonCharacteristic.held_items[i].item.name);

				};

				for (var i=0;i< pokemonCharacteristic.abilities.length;i++){
					console.log("valeur de pokemonCharacteristic.abilities[i].ability.name " + pokemonCharacteristic.abilities[i].ability.name);

				};





				console.log(pokemonCharacteristic);

				console.log("valeur de abilities " + pokemonCharacteristic.abilities);
				// document.getElementById("nomPokemon").innerHTML = pokemonList[57].name;
				console.log("valeur de base experience " + pokemonCharacteristic.base_experience);
				console.log("valeur de height " + pokemonCharacteristic.height);
				
				console.log("valeur de held_items " + pokemonCharacteristic.held_items);

				console.log("valeur de id " + pokemonCharacteristic.id);
				console.log("valeur de name " + pokemonCharacteristic.name);
				console.log("valeur de species " + pokemonCharacteristic.species.name);
				console.log("valeur de sprites " + pokemonCharacteristic.sprites.front_default);
				console.log("valeur de base hp " + pokemonCharacteristic.stats[0].base_stat);
				console.log("valeur de base attack " + pokemonCharacteristic.stats[1].base_stat);
				console.log("valeur de base defense " + pokemonCharacteristic.stats[2].base_stat);
				console.log("valeur de base speed " + pokemonCharacteristic.stats[5].base_stat);
				console.log("valeur de base special attack " + pokemonCharacteristic.stats[3].base_stat);
				console.log("valeur de base special defense " + pokemonCharacteristic.stats[4].base_stat);
				console.log("valeur de weight " + pokemonCharacteristic.weight);
			})
		}
		viewPokemon();

	})
}
fetchPokemon();
