// =============================================
// 🧩 Exercice 01 – Pokedex Explorer
// Fichier : J09/01_pokedex/script.js
// =============================================

// 🧠 Objectif : explorer et analyser les données du Pokédex en JavaScript pur
// ---------------------------------------------------------------
// Étapes :
// 1. Charger les données JSON
// 2. Manipuler les tableaux et objets
// 3. Écrire des fonctions d’analyse et de recherche
// ---------------------------------------------------------------

// 💾 Étape 1 : Charger le fichier JSON
// Si tu es dans un environnement Node.js, tu peux utiliser fs :
import fs from "fs";

let pokedex;

// Essaie d’abord de lire et parser le fichier local pokedex.json
try {
  const data = fs.readFileSync("./pokedex.json", "utf8");
  pokedex = JSON.parse(data);
  console.log("✅ Fichier chargé avec succès !");
} catch (err) {
  console.error("❌ Erreur de lecture du fichier pokedex.json :", err.message);
  process.exit(1);
}

// Vérifie que la structure est bien celle attendue
console.log("Nombre de Pokémon :", pokedex.pokemon.length);
console.log("Premier Pokémon :", pokedex.pokemon[0].name);

// ---------------------------------------------------------------
// ✨ Étape 2 : Fonctions de base à compléter
// ---------------------------------------------------------------

/**
 * Retourne le nombre total de Pokémon dans le Pokédex
 */
function countPokemon() {
  // TODO : compter les Pokémon à partir de pokedex.pokemon
 console.log(pokedex.pokemon.length);
}
countPokemon();
/**
 * Retourne un tableau des Pokémon pesant plus de 10 kg
 */
function heavyPokemon() {
  // TODO : filtrer selon le champ "weight" (ex: "6.9 kg" -> penser à parseFloat)
  let tableauPokemon = [];
  for(let i = 0; i < pokedex.pokemon.length; i++){ // on parcourt le tableau avec une boucle
    const poids = parseFloat(pokedex.pokemon[i].weight);// on converti le poids string en nombre
    if (poids > 10){// condition
   tableauPokemon.push(pokedex.pokemon[i].name);}// le nom du pokemon est poussé dans le tableau
  }
 return console.log(tableauPokemon);
}
heavyPokemon();

/**
 * Retourne la liste des Pokémon triés par poids (croissant)
 */
function sortByWeight() {
  // TODO : trier le tableau pokedex.pokemon par poids
   for(let i= 0; i < pokedex.pokemon.length; i++){// on parcourt le tableau
    pokedex.pokemon[i].weight = parseFloat(pokedex.pokemon[i].weight); //on converti le poids string en nombre
  }
  let pokemonTri = pokedex.pokemon.sort((a, b)=> a.weight - b.weight);// n ordonne le poids avec méthode.sort
   return console.log(pokemonTri); 
}
sortByWeight();

/**
 * Retourne les évolutions d’un Pokémon donné (s’il en a)
 */
function getEvolutions(name) {
  // TODO : chercher le Pokémon, vérifier la clé "next_evolution"
  let pokemonEvolution = [];
  for(let i= 0; i < pokemon.next_evolution.length; i++){// on parcourt le tableau
    if (pokedex.pokemon[i].next_evolution === false){
      return console.log(pokemonEvolution);
    }
    else if (pokedex.pokemon[i].next_evolution === true){
        pokemonEvolution.push(pokemon.next_evolution[i].name);
    }
  }
  return console.log(pokemonEvolution);
}
console.log(getEvolutions("Bulbasaur"));

/**
 * Retourne un objet complet représentant le Pokémon recherché
 */
function searchPokemon(name) {
  // TODO : trouver le Pokémon, retourner ses infos principales
}

// ---------------------------------------------------------------
// 🔍 Tests rapides (tu peux commenter ou adapter ces lignes)
// ---------------------------------------------------------------

// console.log(countPokemon());
// console.log(heavyPokemon().slice(0, 5));
// console.log(getEvolutions("Bulbasaur"));
// console.log(searchPokemon("Pikachu"));