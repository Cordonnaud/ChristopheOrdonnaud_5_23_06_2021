showRecipes(recipes);
// console.log("Recettes");
// console.log(recipes)

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




// Algo  de recherche des recettes suivant Nom et/ou Ingredient et/ou Description documentés dans la barre de recherche
searchBar.addEventListener('change', function() {
    
    // Etablir un tableau des mots clefs saisis par l'utilisateur à partir de 3 caractères
    createKeyWordsArray(searchBar);
    console.log(keyWordsArray);

    // recherche d'une correspondance entre les mots cléfs et les mots ingredients
    createCorrespondantWordArray();
    // console.log('tableau de correspondance mot clef / ingredient ');
    // console.log(correspondantWords);
    // console.log(correspondantWords.sort());

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
    
    closeTags()
    console.log("Ingredient filtrés")

    showTagsIngredientsFilter();
    showTagsAppareilsFilter();
    showTagsUstensilsFilter();
    // showFilterByResearchTag()

    // Filtrer les recette suivant les Tags selectionnés


   
});

// Algo  de recherche des recettes suivant Nom et/ou Ingredient et/ou Description documentés dans la barre de recherche
searchFilterIng.addEventListener('change', function() {

    // console.log(searchFilterIng.value)
    // console.log(recipeResult)
    createKeyWordsArray(searchFilterIng);
    console.log(keyWordsArray);
    //recuperer les table
   

    // recherche d'une correspondance entre les mots cléfs et les mots ingredients / noms / description dans searchFilterIng
    var ingredientsFilterTagArray=[];
    function createCorrespondantWordArrayFilter(){ 
        for (var i = 0; i < ingredientsFilterArray.length; i++){
            var ingredientWordListResearch = ingredientsFilterArray[i];
            for(var j=0; j<keyWordsArray.length; j++) {
                var keyWordSearch= keyWordsArray[j];
                console.log(keyWordsArray);
                console.log(keyWordSearch);
                console.log(ingredientWordListResearch);
                if(ingredientWordListResearch.includes(keyWordSearch)){
                    console.log( "------------------------------------------------test contient")
                    if(!ingredientsFilterTagArray.includes(ingredientWordListResearch)) {
                        ingredientsFilterTagArray.push(ingredientWordListResearch);
                    }
                    console.log(ingredientsFilterTagArray)
                }
            }
        }
        // for (var i = 0; i < recipeArray.length; i++){
        //     var nameWordListResearch = recipeArray[i];
        //     for(var j=0; j<keyWordsArray.length; j++) {
        //         var keyWordSearch= keyWordsArray[j];
        //         if(nameWordListResearch.includes(keyWordSearch)) {
        //             correspondantWords.push(nameWordListResearch);                    
        //         }
        //     }
        // }
        // for (var i = 0; i < descriptionArray.length; i++){
        //     var descriptWordListResearch = descriptionArray[i];
        //     for(var j=0; j<keyWordsArray.length; j++) {
        //         var keyWordSearch= keyWordsArray[j];
        //         if(descriptWordListResearch.includes(keyWordSearch)) {
        //             correspondantWords.push(descriptWordListResearch);                    
        //         }
        //     }
        // }
    } 
    createCorrespondantWordArrayFilter();
    console.log(ingredientsFilterTagArray);

    



    // if(recipeResult.length > 0) {
    //     showRecipes(recipeResult)
    //     function createRecipeResultBySearchFilterIng(){
    //         for(var i=0; i< recipeResult.length; i++) {
    //             var recipe=recipeResult[i];
    //             var ingredients= recipe.ingredients;
    //             console.log(ingredients);
    //             console.log(searchFilterIng.value)

    //             for(var j=0; j < ingredients.length; j++){
    //                 var ingredientBrut= ingredients[j].ingredient;
    //                 var ingredient= ingredientBrut.toLowerCase();
    //                 cleanWordCharactere(ingredient);
    //                 // ingredient=ingredient.replace(/'/g," ");
    //                 if(ingredient==searchFilterIng.value){
    //                     // recipeResultFilter = [];
    //                     if(!recipeResultFilter.includes(recipe)){
    //                         recipeResultFilter.push(recipe);
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
    // else{showRecipes(recipes)
    //     function createRecipeResultBySearchFilterIng(){
    //         console.log(recipes);
    //         for(var i=0; i< recipes.length; i++) {
    //             var recipe=recipes[i];
    //             // console.log(recipe)
            
    //             var ingredients= recipe.ingredients;
    //             // console.log(ingredients);
            
    //             for(var j=0; j < ingredients.length; j++){
    //                 var ingredientBrut= ingredients[j].ingredient;
    //                 // console.log(ingredientBrut)
    //                 if(ingredientBrut.length >2){
    //                     var ingredient= ingredientBrut.toLowerCase();
    //                     cleanWordCharactere(ingredient);

    //                     // ingredient=ingredient.replace(/'/g," ");
    //                     // console.log(ingredient)
    //                     if(ingredient==searchFilterIng.value){
    //                     // recipeResultFilter = [];
    //                     if(!recipeResultFilter.includes(recipe)){
    //                         recipeResultFilter.push(recipe);
    //                     }
    //                 }
    //             }
    //         //         
    //         //         recipeResultFilter = [];
    //         //             }
    //         //         }
    //         //     }
    //         }
    //     }
    // }
    // console.log(recipeResultFilter)
    // createRecipeResultBySearchFilterIng();

    // showRecipes(recipeResultFilter);
    // console.log("Tableau des recette filtrées");
    // console.log(recipeResultFilter);

    // ---------------------------- alimenter le filtre Ingredient
    
    // Etablir un tableau des ingredients
    //  closeTags()
    // createIngredientFilterArray(recipeResultFilter);
    //     console.log("Tableau des Ingredients des recettes filtrées")
    //     console.log(ingredientsFilterArray)

    
    // //  Etablir un tableau des Ustensiles
    // createUstensilsFilterArray();
    // console.log("Tableau des ustensils des recettes filtrées")
    //     console.log(ustensilsFilterArray)

    //     // Etablir un tableau des ingredients
    // createApplianceFilterArray();
    // console.log("Tableau des appareil des recettes filtrées")
    // console.log(appliancesFilterArray)
    
    // closeTags()

    // showTagsIngredientsFilter();
    // showTagsAppareilsFilter();
    // showTagsUstensilsFilter();
    // showFilterByResearchTag()
});
    
// searchFilterApp.addEventListener('change', function(event) {

//     console.log(searchFilterApp.value)
//     console.log(searchFilterApp.textContent);
//     console.log(searchFilterApp.value);
//     function createRecipeResultBySearchFilterApp(){
//         for(var i=0; i< recipes.length; i++) {
//         var recipe=recipes[i];
//         var appliancesconst= recipe.appliance

//         var appliance= appliancesconst.toLowerCase();
//         cleanWordCharactere(appliance);
//         appliance=appliance.replace(/'/g," ");
//         if(appliance.includes(searchFilterApp.value)){
//             if(!recipeResult.includes(recipe)){
//                 recipeResult.push(recipe);
//                 }
//             }
//         }
//     }
//     createRecipeResultBySearchFilterApp();
//     showRecipes(recipeResult);
//     console.log("Tableau des recette filtrées");
//     console.log(recipeResult);

//     // ---------------------------- alimenter le filtre Ingredient
    
    
//     //     // Etablir un tableau des ingredients
//     createApplianceFilterArray();
//     console.log("Tableau des appareil des recettes filtrées")
//     console.log(appliancesFilterArray)
    
//     closeTags()

//     showTagsIngredientsFilter(recipeResult);
//     showTagsAppareilsFilter(recipeResult);
//     showTagsUstensilsFilter(recipeResult);
// });

// searchFilterUst.addEventListener('change', function() {

//     console.log(searchFilterUst.value)
//     console.log(searchFilterUst.textContent);
//     console.log(searchFilterUst.value);
//     function createRecipeResultBySearchFilterUst(){
//         for(var i=0; i< recipes.length; i++) {
//         var recipe=recipes[i];
//         var ustensils= recipe.ustensils

//         for(var j=0; j < ustensils.length; j++){
//             var ustensilBrut= ustensils[j];
//             var ustensil= ustensilBrut.toLowerCase();
//             cleanWordCharactere(ustensil);
//             ustensil=ustensil.replace(/'/g," ");
//             if(ustensil.includes(searchFilterUst.value)){
//                 if(!recipeResult.includes(recipe)){
//                     recipeResult.push(recipe);
//                     }
//                 }
//             }
//         }
//     }
//     createRecipeResultBySearchFilterUst();
//     showRecipes(recipeResult);
//     console.log("Tableau des recette filtrées");
//     console.log(recipeResult);
    

//     // ---------------------------- alimenter le filtre Ingredient
    
//     // Etablir un tableau des ingredients
//     //  closeTags()
//     // createIngredientFilterArray();
//     //     console.log("Tableau des Ingredients des recettes filtrées")
//     //     console.log(ingredientsFilterArray)

    
//     //  Etablir un tableau des Ustensiles
//     createUstensilsFilterArray();
//     console.log("Tableau des ustensils des recettes filtrées")
//         console.log(ustensilsFilterArray)

//     //     // Etablir un tableau des ingredients
//     // createApplianceFilterArray();
//     // console.log("Tableau des appareil des recettes filtrées")
//     // console.log(appliancesFilterArray)
    
//     closeTags()

//     showTagsIngredientsFilter();
//     showTagsAppareilsFilter();
//     showTagsUstensilsFilter();
//     showFilterByResearchTag()
// });