let searchBar = document.getElementById("searchbar");

// Etablir un tableau des mots clefs saisis par l'utilisateur à partir de 3 caractère
searchBar.addEventListener("input", function() {
    console.log(searchBar.value);
    if(searchBar.value.length >= 3) {
        if(searchBar.value.includes(" ")) {
            var motClef=searchBar.value.split(" ");
            console.log(motClef);
        }
    }
});

// console.log(recipes);
let tableauRecette= [];
for(var index=0; index< recipes.length; index++) {
        // console.log(index);
        let recette=recipes[index].name; 
        if(!tableauRecette.includes(recette)){
            tableauRecette.push(recette);}
}
console.log("Recette"); 
console.log(tableauRecette); 

let tableauIngredient=[];
for(var index=0; index< recipes.length; index++) {
    let tableauItemIngredients= recipes[index].ingredients;
    for(let i=0; i < tableauItemIngredients.length; i++){
        let ingredientBrut= tableauItemIngredients[i].ingredient;
        let ingredient= ingredientBrut.toLowerCase();
        ingredient=ingredient.replace(/ê/g,"è");
        ingredient=ingredient.replace(/î/g,"i");
        if(!tableauIngredient.includes(ingredient)){
            tableauIngredient.push(ingredient);
        }
    }
}
console.log("Ingredient");
console.log(tableauIngredient);


let tableauDescription=[];
for(var index=0; index< recipes.length; index++) {
    let description=recipes[index].description;
    if(!tableauDescription.includes(description)){
        tableauDescription.push(description);
    }
}
console.log("Description");
console.log(tableauDescription);


let tableauUstensil=[];
for(var index=0; index< recipes.length; index++) {
    tableauItemUstensils= recipes[index].ustensils;
    for(i=0; i<tableauItemUstensils.length; i++) {
        let ustensil=tableauItemUstensils[i];
        if(!tableauUstensil.includes(ustensil)){
            tableauUstensil.push(ustensil);
        }
    }
}
console.log("Ustensils");
console.log(tableauUstensil);


let tableauAppareil=[];
for(var index=0; index< recipes.length; index++) {
    let appareilBrut= recipes[index].appliance;
    let appareil= appareilBrut.toLowerCase();
    appareil=appareil.replace(/ê/g,"è");
    appareil=appareil.replace(/î/g,"i");
    if(!tableauAppareil.includes(appareil)){
        tableauAppareil.push(appareil);
    }
}
console.log("Appareils");
console.log(tableauAppareil);

