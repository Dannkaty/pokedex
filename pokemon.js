//definition du 1er pokemon affiché, on a choisi pikachu index 24 
let pokemonIndex = 24;
let pokemonList; 


// fonction pour decrementer l'index
function precedent(){
	if (pokemonIndex >0){
		pokemonIndex -= 1;
	}

	// affiche les caracteristiques du pokemon
	viewPokemon(pokemonIndex);
}	

// quand on clic sur le bouton precedent, on lance la fonction precedent()
document.getElementById("boutonPrecedent").onclick = function(){precedent()};

// fonction pour incrementer l'index
function suivant(){
	if (pokemonIndex <1049){
		pokemonIndex += 1;
	}

	// affiche les caracteristiques du pokemon
	viewPokemon(pokemonIndex);
}	

// quand on clic sur le bouton suivant, on lance la fonction suivant()
document.getElementById("boutonSuivant").onclick = function(){suivant()};

// on defini la fonction viewpokemon(pokemonIndex) qui affiche les caracteristique d'un pokemon
function viewPokemon(pokemonIndex){
	fetch(pokemonList[pokemonIndex].url).then(response => response.json()).then(function(onePokemon){
		let pokemonCharacteristic = onePokemon;
		let allHeld_items = "";
		let allAbilities = "";
		
		for (var i=0;i< pokemonCharacteristic.held_items.length;i++){
			allHeld_items += pokemonCharacteristic.held_items[i].item.name + " " ;
			document.getElementById("heldItemsValue").innerHTML = allHeld_items;
		};

		for (var i=0;i< pokemonCharacteristic.abilities.length;i++){
			allAbilities += pokemonCharacteristic.abilities[i].ability.name + " " ;
			document.getElementById("abilitiesValue").innerHTML = allAbilities;
		};
	
		// affiche toutes les carcteristiques d'un pokemon
		console.log(pokemonCharacteristic);
		
		document.getElementById("heightValue").innerHTML = pokemonCharacteristic.height;

		document.getElementById("idPokemon").innerHTML = "#" + pokemonCharacteristic.id;

		document.getElementById("nomPokemon").innerHTML = pokemonCharacteristic.name;

		document.getElementById("speciesNameValue").innerHTML = pokemonCharacteristic.species.name;

		if(pokemonCharacteristic.sprites.front_default!=null){
			document.getElementById("imagePokemon").innerHTML = "<img src ='"+ pokemonCharacteristic.sprites.front_default + "' alt=`image d'un pokemon`/>";
		}
		document.getElementById("imagePokemon").innerHTML = "<img src ='"+ pokemonCharacteristic.sprites.front_default + "' alt=`image d'un pokemon`/>";
		if(pokemonCharacteristic.sprites.other.dream_world.front_default!=null){
			document.getElementById("grandeImagePokemon").innerHTML = "<img src ='"+ pokemonCharacteristic.sprites.other.dream_world.front_default + "' alt=`image d'un pokemon`/>";
		}

		document.getElementById("hpValue").innerHTML = pokemonCharacteristic.stats[0].base_stat;

		document.getElementById("attackValue").innerHTML = pokemonCharacteristic.stats[1].base_stat;

		document.getElementById("defenseValue").innerHTML = pokemonCharacteristic.stats[2].base_stat;

		document.getElementById("speedValue").innerHTML = pokemonCharacteristic.stats[5].base_stat;

		document.getElementById("specialAttackValue").innerHTML = pokemonCharacteristic.stats[3].base_stat;

		document.getElementById("specialDefenseValue").innerHTML = pokemonCharacteristic.stats[4].base_stat;

		document.getElementById("weightValue").innerHTML = pokemonCharacteristic.weight;
	})
}



// definition de la fonction qui affiche le nom et l'url de tous les noms des pokemons
function fetchPokemon(){
	fetch("https://pokeapi.co/api/v2/pokemon?limit=1050").then(response => response.json()).then(function(allPokemon){
		pokemonList = allPokemon.results;
		document.getElementById("nomPokemon").innerHTML = pokemonList[pokemonIndex].name;
		// caracteristiques pour un pokemon
		viewPokemon(pokemonIndex);

	})
}

// appel de la fonction
fetchPokemon();
