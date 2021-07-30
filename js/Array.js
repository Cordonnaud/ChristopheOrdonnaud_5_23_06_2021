let searchBar = document.getElementById("searchbar");

// Etablir un tableau des mots clefs saisis par l'utilisateur à partir de 3 caractère
searchBar.addEventListener("input", function() {
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
                console.log(keyWord);
                if(keyWord.length>3){
                    keyLongWord=keyWord;
                    var keyWordArray =[]
                    if(!keyWordArray.includes(keyLongWord)){
                        keyWordArray.push(keyLongWord);}
                }


                
            }console.log(keyWordArray);
        }
    }
});
// let searchBarInput = document.getElementById("searchbar"); 
//     let searchingIngredients = []; VARIABLE TABLEAU DE RECHERCHE
//     searchBarInput.addEventListener("change", function(event) { 
//         let searchText = event.target.value; SAISIE UNTILISATEUR
//         if(searchText !== "") { 
//             if(searchText.length > 3) { 
//                 var searchValue = searchText.toLowerCase(); 
//                 if(searchValue.indexOf(" ") != -1) { 
//                     var searchArray = searchValue.split(" "); 
//                     for(var i = 0; i < searchArray.length; i++) { 
//                         var word = searchArray[i]; 
//                         if(word.length > 2) { 
//                             for(var j = 0; j < ingredientsArray.length - 1; j++) { 
//                                 var ingredient = ingredientsArray[j].toLowerCase(); 
//                                 if(ingredient.indexOf(" ") != -1) { 
//                                     var ingredientWords = ingredient.split(" "); 
//                                     for(var k = 0; k < ingredientWords.length; k++) { 
//                                         var ingredientWord = ingredientWords[k]; 
//                                         if(ingredientWord === word) { 
//                                             searchingIngredients.push(j); 
//                                         } 
//                                     } 
//                                 } else { 
//                                     if(ingredient === word) { 
//                                         searchingIngredients.push(j); 
//                                     } 
//                                 } 
//                             } 
//                         }                        
//                     } 

// poulet à l'ail braisé à la réunionnaise
// POULET A L'AIL BRAISE A LA REUNIONNAISE


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

