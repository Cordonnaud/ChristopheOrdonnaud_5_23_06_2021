// console.log(recipes);

// Etablir un tableau des noms de recettes
createRecipeNameArray();
console.log("Tableau des Noms de Recette");
// console.log(recipeArray);
 
// Etablir un tableau des Id de recettes
createIndexRecipeArray();
console.log("tableau des Id recette")
// console.log(indexRecipeArray);


//  Etablir un tableau des Ingredients
createIngredientArray();
console.log("Tableau des Ingredients");
// console.log(ingredientsArray);



// console.log("Liste des Ingredients");
// console.log(ingredientWordList);



//  Etablir un tableau des Descriptions
createDescriptionArray();
console.log("tableau des Descriptions");
// console.log(descriptionArray);



//  Etablir un tableau des Ustensiles
createUstensilsArray();
console.log("Tableau des Ustensils");
// console.log(ustensilArray);

//  Etablir un tableau des Appareils
createApplianceArray();
console.log("Tableau des Appareils");
// console.log(appareilArray);

console.log ("-------------------------------------------------");

// Algo  de recherche par ingredient sur la barre de recherche
searchBar.addEventListener('change', function(event) {
    console.log(searchBar.value);


    // Etablir un tableau des mots clefs saisis par l'utilisateur à partir de 3 caractères
    createKeyWordsArray();
    console.log(keyWordsArray);

    // recherche d'une correspondance entre les mots cléfs et les mots ingredients
    createCorrespondantWordArray();
    console.log('tableau de correspondance mot clef / ingredient ');
    // console.log(correspondantWords);
    console.log(correspondantWords.sort());

    //  Tableau des recette filtrées
    // createRecipeFilterArray ();
    // console.log(recipeFilterArray)

    // for(i=0; i<ingredientsArray.length -1; i++){
    // var ingredient=ingredientsArray[i];

    // // console.log(ingredient)
    // }
    
    var recipeResult=[]
    for(var i=0; i< recipes.length -1; i++) {
        var recipe=recipes[i];
        var ingredients= recipes[i].ingredients;
        for(var j=0; j < ingredients.length -1; j++){
            var ingredientBrut= ingredients[j].ingredient;
            var ingredient= ingredientBrut.toLowerCase();
            cleanWordCharactere(ingredient);
            ingredient=ingredient.replace(/'/g," ");
            console.log(ingredient);
            console.log(correspondantWords)
            if(correspondantWords.includes(ingredient)){
                recipeResult.push(recipe)
            }console.log(recipeResult)
        }
    }
});





    
// poulet à l'ail braise à la réunionnaise et lait de coco
// POULET A L'AIL BRAISE A LA REUNIONNAISE