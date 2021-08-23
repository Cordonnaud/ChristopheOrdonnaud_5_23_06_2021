
// console.log(recipes);
let recipeArray= [];
for(var index=0; index< recipes.length; index++) {
        // console.log(index);
        let recipe=recipes[index].name; 
        if(!recipeArray.includes(recipe)){
            recipeArray.push(recipe);}
}
console.log("Recette"); 
console.log(recipeArray); 

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
        let ustensilItem=tableauItemUstensils[i];
        let ustensil= ustensilItem.toLowerCase();
        ustensil=ustensil.replace(/ê/g,"è");
        ustensil=ustensil.replace(/î/g,"i");
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

let searchBar = document.getElementById("searchbar");

// Etablir un tableau des mots clefs saisis par l'utilisateur à partir de 3 caractère
let tableauKeyWordArray =[];
searchBar.addEventListener("change", function() {
    // console.log(searchBar.value);
    if(searchBar.value.length >= 3) {
        var keyWords= searchBar.value.toLowerCase();
        keyWords=keyWords.replace(/'/g," ");
        keyWords=keyWords.replace(/ê/g,"è");
        keyWords=keyWords.replace(/î/g,"i");
        if(keyWords.includes(" ")) {
            var keyWordSplit=keyWords.split(" ");
            console.log(keyWordSplit);
            for(var i=0; i<keyWordSplit.length; i++){
                var keyWord = keyWordSplit[i];
                // console.log(keyWord);
                if(keyWord.length>=3){
                    keyLongWord=keyWord;
                    console.log(keyLongWord);
                    if(!tableauKeyWordArray.includes(keyLongWord)){
                        tableauKeyWordArray.push(keyLongWord);
                    }
                }
            }
        }
    }
    console.log ("Tableau de mots clés");
    console.log(tableauKeyWordArray);
});

// poulet à l'ail braisé à la réunionnaise
// POULET A L'AIL BRAISE A LA REUNIONNAISE



