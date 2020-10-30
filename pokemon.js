//definition du 1er pokemon affiché, on a choisi le 50 +1
let pokemonIndex;
let pokemonList; 
pokemonIndex = 24;

// fonction pour decrementer l'index
function precedent(){
	if (pokemonIndex >0){
		pokemonIndex -= 1;
	}
	// affichage de pokemon index dans le navigateur
	document.getElementById("test").innerHTML = " la valeur du <mark>pokemon</mark> index est " + pokemonIndex;

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
	document.getElementById("test").innerHTML = pokemonIndex;

	// affiche les caracteristiques du pokemon
	viewPokemon(pokemonIndex);
}	

// quand on clic sur le bouton suivant, on lance la fonction suivant()
document.getElementById("boutonSuivant").onclick = function(){suivant()};

// on defini la fonction viewpokemon(pokemonIndex) qui affiche les caracteristique d'un pokemon
function viewPokemon(pokemonIndex){
	fetch(pokemonList[pokemonIndex].url).then(response => response.json()).then(function(onePokemon){
		let pokemonCharacteristic = onePokemon;
		let allHeld_items;
		let allAbilities;


		for (var i=0;i< pokemonCharacteristic.held_items.length;i++){
			allHeld_items += pokemonCharacteristic.held_items[i].item.name + " " ;
			console.log(" valeur de allHeld_items " + allHeld_items);
			document.getElementById("heldItemsValue").innerHTML = allHeld_items;
			// console.log("valeur de pokemonCharacteristic.held_items[i].item.name " + pokemonCharacteristic.held_items[i].item.name);
			// document.getElementById("heldItemsValue").innerHTML += pokemonCharacteristic.held_items[i].item.name + " " ;
		};

		for (var i=0;i< pokemonCharacteristic.abilities.length;i++){
			allAbilities += pokemonCharacteristic.abilities[i].ability.name + " " ;
			console.log(" valeur de allAbilities " + allAbilities);
			document.getElementById("abilitiesValue").innerHTML = allAbilities;

			// console.log("valeur de pokemonCharacteristic.abilities[i].ability.name " + pokemonCharacteristic.abilities[i].ability.name);
			// document.getElementById("abilitiesValue").innerHTML += pokemonCharacteristic.abilities[i].ability.name + " " ;
		};
	
		// affiche toutes les carcteristiques d'un pokemon
		// console.log(pokemonCharacteristic);

		// console.log("valeur de abilities " + pokemonCharacteristic.abilities);
		// document.getElementById("nomPokemon").innerHTML = pokemonList[57].name;
		// console.log("valeur de base experience " + pokemonCharacteristic.base_experience);
		
		// console.log("valeur de height " + pokemonCharacteristic.height);
		document.getElementById("heightValue").innerHTML = pokemonCharacteristic.height;

		// console.log("valeur de held_items " + pokemonCharacteristic.held_items);

		// console.log("valeur de id " + pokemonCharacteristic.id);
		document.getElementById("idPokemon").innerHTML = pokemonCharacteristic.id;

		// console.log("valeur de name " + pokemonCharacteristic.name);
		document.getElementById("nomPokemon").innerHTML = pokemonCharacteristic.name;

		// console.log("valeur de species " + pokemonCharacteristic.species.name);
		document.getElementById("speciesNameValue").innerHTML = pokemonCharacteristic.species.name;

		// console.log("valeur de sprites " + pokemonCharacteristic.sprites.front_default);
		if(pokemonCharacteristic.sprites.front_default!=null){
			document.getElementById("imagePokemon").innerHTML = "<img src ='"+ pokemonCharacteristic.sprites.front_default + "' alt=`image d'un pokemon`/>";
		}
		document.getElementById("imagePokemon").innerHTML = "<img src ='"+ pokemonCharacteristic.sprites.front_default + "' alt=`image d'un pokemon`/>";
		if(pokemonCharacteristic.sprites.other.dream_world.front_default!=null){
			document.getElementById("grandeImagePokemon").innerHTML = "<img src ='"+ pokemonCharacteristic.sprites.other.dream_world.front_default + "' alt=`image d'un pokemon`/>";
		}
		console.log("valeur de pokemonCharacteristic.sprites.other.dream_world.front_default " + pokemonCharacteristic.sprites.other.dream_world.front_default);

		// console.log("valeur de base hp " + pokemonCharacteristic.stats[0].base_stat);
		document.getElementById("hpValue").innerHTML = pokemonCharacteristic.stats[0].base_stat;

		// console.log("valeur de base attack " + pokemonCharacteristic.stats[1].base_stat);
		document.getElementById("attackValue").innerHTML = pokemonCharacteristic.stats[1].base_stat;

		// console.log("valeur de base defense " + pokemonCharacteristic.stats[2].base_stat);
		document.getElementById("defenseValue").innerHTML = pokemonCharacteristic.stats[2].base_stat;


		// console.log("valeur de base speed " + pokemonCharacteristic.stats[5].base_stat);
		document.getElementById("speedValue").innerHTML = pokemonCharacteristic.stats[5].base_stat;

		// console.log("valeur de base special attack " + pokemonCharacteristic.stats[3].base_stat);
		document.getElementById("specialAttackValue").innerHTML = pokemonCharacteristic.stats[3].base_stat;

		// console.log("valeur de base special defense " + pokemonCharacteristic.stats[4].base_stat);
		document.getElementById("specialDefenseValue").innerHTML = pokemonCharacteristic.stats[4].base_stat;

		// console.log("valeur de weight " + pokemonCharacteristic.weight);
		document.getElementById("weightValue").innerHTML = pokemonCharacteristic.weight;
	})
}



// definition de la fonction qui affiche le nom et l'url de tous les noms des pokemons
function fetchPokemon(){
	fetch("https://pokeapi.co/api/v2/pokemon?limit=1050").then(response => response.json()).then(function(allPokemon){
		pokemonList = allPokemon.results;
		// console.log(pokemonList[57]);
		document.getElementById("nomPokemon").innerHTML = pokemonList[pokemonIndex].name;
		console.log(pokemonList[pokemonIndex].url);
		// caracteristiques pour un pokemon
		
		viewPokemon(pokemonIndex);

	})
}

// appel de la fonction
fetchPokemon();
