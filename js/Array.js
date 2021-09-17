showRecipes(recipes);
// console.log("Recettes");
// console.log(recipes)



 //  afficher les Tags des filtre 
// showTAgs(recipes)








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

createApplianceArray();
// console.log("Tableau des Appareils");
// console.log(appareilArray);

//  Etablir un tableau des Ustensiles
createUstensilsArray();
// console.log("Tableau des Ustensils");
// console.log(ustensilArray);

//  Etablir un tableau des Appareils


//  afficher les Tags des filtre 
showTagsIngredients()

showTagsAppareils()

showTagsUstensils() 



    
// console.log("Recettes");
// console.log(recipes);
    // afficher les tags des filtres  recettes dans le HTML


// Algo  de recherche des recettes suivant Nom et/ou Ingredient et/ou Description documentés dans la barre de recherche
searchBar.addEventListener('change', function(event) {
    // console.log(searchBar.value);
    // Cacher les Tags des filtre 
    closeTags()


    // Etablir un tableau des mots clefs saisis par l'utilisateur à partir de 3 caractères
    createKeyWordsArray();
    // console.log(keyWordsArray);

    // recherche d'une correspondance entre les mots cléfs et les mots ingredients
    createCorrespondantWordArray();
    // console.log('tableau de correspondance mot clef / ingredient ');
    // console.log(correspondantWords);
    // console.log(correspondantWords.sort());

    // console.log(correspondantWords);
    // Etablir le tableau des Recettes filtrées suivant ingredient filtrés
    createRecipeResult();
    showRecipes(recipeResult)
    console.log("Tableau des recette filtrées")
    console.log(recipeResult)
    

    // ---------------------------- alimenter le filtre Ingredient
    
    // Etablir un tableau des ingredients
    
    createIngredientFilterArray();
        console.log("Tableau des Ingredients des recettes filtrées")
        console.log(ingredientsFilterArray)

    
    //  Etablir un tableau des Ustensiles
    createUstensilsFilterArray();
    console.log("Tableau des ustensils des recettes filtrées")
        console.log(ustensilsFilterArray)

        // Etablir un tableau des ingredients
    createApplianceFilterArray();
    console.log("Tableau des appareil des recettes filtrées")
    console.log(appliancesFilterArray)

    showTagsIngredientsFilter();

    showTagsAppareilsFilter();

    showTagsUstensilsFilter()

    
});





    
// poulet à l'ail braise à la réunionnaise et lait de coco
// POULET A L'AIL BRAISE A LA REUNIONNAISE