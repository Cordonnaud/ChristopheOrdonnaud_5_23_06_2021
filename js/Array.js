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

// createSelectedTag()

    
// console.log("Recettes");
// console.log(recipes);
    // afficher les tags des filtres  recettes dans le HTML


// Algo  de recherche des recettes suivant Nom et/ou Ingredient et/ou Description documentés dans la barre de recherche
searchBar.addEventListener('change', function(event) {
    // console.log(searchBar.value);
    // Cacher les Tags des filtre 
    // closeTags()


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
    //  closeTags()
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
    
    // closeTags()

    showTagsIngredientsFilter();
    showTagsAppareilsFilter();
    showTagsUstensilsFilter();
   
});

// Algo  de recherche des recettes suivant Nom et/ou Ingredient et/ou Description documentés dans la barre de recherche
searchFilterIng.addEventListener('change', function(event) {

    console.log(searchFilterIng.value)
    console.log(searchFilterIng.textContent);
    console.log(searchFilterIng.value);
    function createRecipeResultBySearchFilterIng(){
        for(var i=0; i< recipes.length; i++) {
        var recipe=recipes[i];
        var ingredients= recipe.ingredients;

        for(var j=0; j < ingredients.length; j++){
            var ingredientBrut= ingredients[j].ingredient;
            var ingredient= ingredientBrut.toLowerCase();
            cleanWordCharactere(ingredient);
            ingredient=ingredient.replace(/'/g," ");
            if(ingredient.includes(searchFilterIng.value)){
                if(!recipeResult.includes(recipe)){
                    recipeResult.push(recipe);
                    }
                }
            }
        }
    }
    createRecipeResultBySearchFilterIng();
    showRecipes(recipeResult);
    console.log("Tableau des recette filtrées");
    console.log(recipeResult);

    // ---------------------------- alimenter le filtre Ingredient
    
    // Etablir un tableau des ingredients
    //  closeTags()
    createIngredientFilterArray();
        console.log("Tableau des Ingredients des recettes filtrées")
        console.log(ingredientsFilterArray)

    
    // //  Etablir un tableau des Ustensiles
    // createUstensilsFilterArray();
    // console.log("Tableau des ustensils des recettes filtrées")
    //     console.log(ustensilsFilterArray)

    //     // Etablir un tableau des ingredients
    // createApplianceFilterArray();
    // console.log("Tableau des appareil des recettes filtrées")
    // console.log(appliancesFilterArray)
    
    closeTags()

    showTagsIngredientsFilter();
    showTagsAppareilsFilter();
    showTagsUstensilsFilter();
});
    
searchFilterApp.addEventListener('change', function(event) {

    console.log(searchFilterApp.value)
    console.log(searchFilterApp.textContent);
    console.log(searchFilterApp.value);
    function createRecipeResultBySearchFilterApp(){
        for(var i=0; i< recipes.length; i++) {
        var recipe=recipes[i];
        var appliancesconst= recipe.appliance

        var appliance= appliancesconst.toLowerCase();
        cleanWordCharactere(appliance);
        appliance=appliance.replace(/'/g," ");
        if(appliance.includes(searchFilterApp.value)){
            if(!recipeResult.includes(recipe)){
                recipeResult.push(recipe);
                }
            }
        }
    }
    createRecipeResultBySearchFilterApp();
    showRecipes(recipeResult);
    console.log("Tableau des recette filtrées");
    console.log(recipeResult);

    // ---------------------------- alimenter le filtre Ingredient
    
    
    //     // Etablir un tableau des ingredients
    createApplianceFilterArray();
    console.log("Tableau des appareil des recettes filtrées")
    console.log(appliancesFilterArray)
    
    closeTags()

    showTagsIngredientsFilter(recipeResult);
    showTagsAppareilsFilter(recipeResult);
    showTagsUstensilsFilter(recipeResult);
});

searchFilterUst.addEventListener('change', function() {

    console.log(searchFilterUst.value)
    console.log(searchFilterUst.textContent);
    console.log(searchFilterUst.value);
    function createRecipeResultBySearchFilterUst(){
        for(var i=0; i< recipes.length; i++) {
        var recipe=recipes[i];
        var ustensils= recipe.ustensils

        for(var j=0; j < ustensils.length; j++){
            var ustensilBrut= ustensils[j];
            var ustensil= ustensilBrut.toLowerCase();
            cleanWordCharactere(ustensil);
            ustensil=ustensil.replace(/'/g," ");
            if(ustensil.includes(searchFilterUst.value)){
                if(!recipeResult.includes(recipe)){
                    recipeResult.push(recipe);
                    }
                }
            }
        }
    }
    createRecipeResultBySearchFilterUst();
    showRecipes(recipeResult);
    console.log("Tableau des recette filtrées");
    console.log(recipeResult);
    

    // ---------------------------- alimenter le filtre Ingredient
    
    // Etablir un tableau des ingredients
    //  closeTags()
    // createIngredientFilterArray();
    //     console.log("Tableau des Ingredients des recettes filtrées")
    //     console.log(ingredientsFilterArray)

    
    //  Etablir un tableau des Ustensiles
    createUstensilsFilterArray();
    console.log("Tableau des ustensils des recettes filtrées")
        console.log(ustensilsFilterArray)

    //     // Etablir un tableau des ingredients
    // createApplianceFilterArray();
    // console.log("Tableau des appareil des recettes filtrées")
    // console.log(appliancesFilterArray)
    
    closeTags()

    showTagsIngredientsFilter();
    showTagsAppareilsFilter();
    showTagsUstensilsFilter();
    showFilterByResearchTag()
});