// console.log(recipes);

// Etablir un tableau des noms de recettes
createRecipeNameArray();
// console.log("Tableau des Noms de Recette");
// console.log(recipeArray);
 
// Etablir un tableau des Id de recettes
createIndexRecipeArray();
// console.log("tableau des Id recette")
// console.log(indexRecipeArray);


//  Etablir un tableau des Ingredients
createIngredientArray();
// console.log("Tableau des Ingredients");
// console.log(ingredientsArray);


//  Etablir un tableau des Descriptions
createDescriptionArray();
// console.log("tableau des Descriptions");
// console.log(descriptionArray);



//  Etablir un tableau des Ustensiles
createUstensilsArray();
// console.log("Tableau des Ustensils");
// console.log(ustensilArray);

//  Etablir un tableau des Appareils
createApplianceArray();
// console.log("Tableau des Appareils");
// console.log(appareilArray);


// Algo  de recherche des recettes suivant Nom et/ou Ingredient et/ou Description documentés dans la barre de recherche
searchBar.addEventListener('change', function(event) {
    console.log(searchBar.value);


    // Etablir un tableau des mots clefs saisis par l'utilisateur à partir de 3 caractères
    createKeyWordsArray();
    console.log(keyWordsArray);

    // recherche d'une correspondance entre les mots cléfs et les mots ingredients
    createCorrespondantWordArray();
    // console.log('tableau de correspondance mot clef / ingredient ');
    // console.log(correspondantWords);
    // console.log(correspondantWords.sort());

    
    // Etablir le tableau des Recettes filtrées suivant ingredient filtrés
    createRecipeResult();
    console.log("Tableau des recette filtrées")
    console.log(recipeResult)
    
});





    
// poulet à l'ail braise à la réunionnaise et lait de coco
// POULET A L'AIL BRAISE A LA REUNIONNAISE