createRecipesCards(recipes);
// console.log("Recettes");
// console.log(recipes)

// Etablir un tableau des noms de recettes
createRecipeNameArray(recipes);
// console.log("Tableau des Noms de Recette");
// console.log(recipeArray);
 
// Etablir un tableau des Id de recettes
createIndexRecipeArray(recipes);
// console.log("tableau des Id recette")
// console.log(indexRecipeArray);


//  Etablir un tableau des Ingredients
createIngredientArray(recipes);
// console.log("Tableau des Ingredients");
// console.log(ingredientsArray);


//  Etablir un tableau des Descriptions
createDescriptionArray(recipes);
// console.log("tableau des Descriptions");
// console.log(descriptionArray);

createApplianceArray(recipes);
// console.log("Tableau des Appareils");
// console.log(appareilArray);

//  Etablir un tableau des Ustensiles
createUstensilsArray(recipes);
// console.log("Tableau des Ustensils");
// console.log(ustensilArray);

//  Etablir un tableau des Appareils


//  afficher les Tags des filtre 
showTagsIngredients()

showTagsAppareils()

showTagsUstensils() 




// Algo  de recherche des recettes suivant Nom et/ou Ingredient et/ou Description documentés dans la barre de recherche
searchBar.addEventListener('change', function() {
    
    // Etablir un tableau des mots clefs saisis par l'utilisateur à partir de 3 caractères dans la SEARCHBAR
    createKeyWordsArray(searchBar);
    console.log('tableau des mot clef');
    console.log(keyWordsArray);

    // recherche d'une correspondance entre les mots cléfs et les mots ingredients
    createCorrespondantWordArray(keyWordsArray);
    // console.log('tableau de correspondance mot clef');
    // console.log(correspondantWords);
    // console.log(correspondantWords.sort());

    // Etablir le tableau des Recettes filtrées suivant ingredient filtrés
    createRecipeResult(recipes);
    // createRecipesCards(recipeResult)
    // console.log("Tableau des recette filtrées")
    // console.log(recipeResult)
    // console.log (keyWordsArray)
    // searchRecipes(keyWordsArray) 
    console.log(recipeResult) 
    // createRecipeResult(recipeResult);
  
    createRecipesCards(recipeResult)
    // console.log("Tableau des recette filtrées")
    // console.log(recipeResult)
    
    // ---------------------------- alimenter le filtre Ingredient
    // Etablir un tableau des ingredients
    //  closeTags()
    createIngredientFilterArray(recipeResult);
    console.log("Tableau des Ingredients des recettes filtrées")
    console.log(ingredientsFilterArray)
    //  Etablir un tableau des Ustensiles
    createUstensilsFilterArray(recipeResult);
    console.log("Tableau des ustensils des recettes filtrées")
    console.log(ustensilsFilterArray)
    // Etablir un tableau des ingredients
    createApplianceFilterArray(recipeResult);
    console.log("Tableau des appareil des recettes filtrées")
    console.log(appliancesFilterArray)
    
    closeTags()
    // console.log("Ingredient filtrés")

    showTagsIngredientsFilter(recipeResult);
    showTagsAppareilsFilter(recipeResult);
    showTagsUstensilsFilter(recipeResult);
 
});

// Algo  de recherche des recettes suivant Nom et/ou Ingredient et/ou Description documentés dans la barre de recherche
searchFilterIng.addEventListener('change', function() {

    // console.log(searchFilterIng.value)
    // console.log(recipeResult)
    // keyWordsArray=[];

    createKeyWordsArrayFilterIng(searchFilterIng);
    console.log(keyWordsArrayFilterIng);

    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // filtrer recipe result en fonction de l'input filtre 
    createRecipeResultFilterIng(recipeResult); 
    console.log(recipeResult) 
    // createRecipesCards(recipeResult)
    // console.log("Tableau des recette filtrées")
    // console.log(recipeResult)
    // console.log (keyWordsArray)
    // searchRecipes(keyWordsArray) 
   
    // createRecipeResult(recipeResult);
  
    createRecipesCards(recipeResult)
    // console.log("Tableau des recette filtrées")
    // console.log(recipeResult)
    
    // ---------------------------- alimenter le filtre Ingredient
    // Etablir un tableau des ingredients
    //  closeTags()
    createIngredientFilterArray(recipeResult);
    console.log("Tableau des Ingredients des recettes filtrées")
    console.log(ingredientsFilterArray)
    //  Etablir un tableau des Ustensiles
    createUstensilsFilterArray(recipeResult);
    console.log("Tableau des ustensils des recettes filtrées")
    console.log(ustensilsFilterArray)
    // Etablir un tableau des ingredients
    createApplianceFilterArray(recipeResult);
    console.log("Tableau des appareil des recettes filtrées")
    console.log(appliancesFilterArray)
    
    closeTags()
    // console.log("Ingredient filtrés")

    showTagsIngredientsFilter(recipeResult);
    showTagsAppareilsFilter(recipeResult);
    showTagsUstensilsFilter(recipeResult);

 
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // ingredientsArray=[];
    // createIngredientArray(recipeResult);
    // console.log(ingredientsArray);
    // //recuperer les table
   

    // // recherche d'une correspondance entre les mots cléfs et les mots ingredients / noms / description dans searchFilterIng
    // var ingredientsFilterTagArray=[];
    // function createCorrespondantIngredientWordArrayFilter(){ 
    //     for (var i = 0; i < ingredientsFilterArray.length; i++){
    //         var ingredientWordListResearch = ingredientsFilterArray[i];
    //         for(var j=0; j<keyWordsArray.length; j++) {
    //             var keyWordSearch= keyWordsArray[j];
    //             if(ingredientWordListResearch.includes(keyWordSearch)){
    //                 if(!ingredientsFilterTagArray.includes(ingredientWordListResearch)) {
    //                     ingredientsFilterTagArray.push(ingredientWordListResearch);
    //                 }
    //                 console.log("ingredientsFilterTagArray")
    //                 console.log(ingredientsFilterTagArray)
    //             }
    //         }
    //     }
    // }
    // var appareilsFilterTagArray=[];
    // function createCorrespondantApplianceWordArrayFilter(){
    //     for (var i = 0; i < appliancesFilterArray.length; i++){
    //         var appareilsWordListResearch = appliancesFilterArray[i];
    //         for(var j=0; j<keyWordsArray.length; j++) {
    //             var keyWordSearch= keyWordsArray[j];
    //             if(appareilsWordListResearch.includes(keyWordSearch)) {
    //                 if(!appareilsFilterTagArray.includes(appareilsWordListResearch)){
    //                     appareilsFilterTagArray.push(appareilsWordListResearch);
    //                 }
    //                 // console.log(appareilsFilterTagArray)
    //             }
    //         }
    //     }
    // }
    // var ustensilsFilterTagArray=[];
    // function createCorrespondantUstensilsWordArrayFilter(){
    //     for (var i = 0; i < ustensilArray.length; i++){
    //         var ustensilsWordListResearch = ustensilArray[i];
    //         for(var j=0; j<keyWordsArray.length; j++) {
    //             var keyWordSearch= keyWordsArray[j];
    //             if(ustensilsWordListResearch.includes(keyWordSearch)) {
    //                 if(ustensilsFilterTagArray.includes(ustensilsWordListResearch)) {
    //                     ustensilsFilterTagArray.push(ustensilsWordListResearch);                    
    //                 }
    //             }
    //             // console.log(ustensilsFilterTagArray)
    //         }
    //     }
    // }

    // createCorrespondantIngredientWordArrayFilter();
    // console.log("createCorrespondantIngredientWordArrayFilter ==> ingredientsFilterTagArray ")
    // console.log(ingredientsFilterTagArray);

    // createCorrespondantApplianceWordArrayFilter();
    // console.log("createCorrespondantApplianceWordArrayFilter ==> appareilsFilterTagArray ")
    // console.log(appareilsFilterTagArray);

    // createCorrespondantUstensilsWordArrayFilter();
    // console.log("createCorrespondantUstensilsWordArrayFilter ==> ustensilsFilterTagArray ")
    // console.log(ustensilsFilterTagArray);

    // createSelectedTagIngredient();
    // console.log("createSelectedTagIngredient ==> tagIngredientSearchArray ")
    // console.log(tagIngredientSearchArray);



    



    // if(recipeResult.length > 0) {
    //     createRecipesCards(recipeResult)
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
    // else{createRecipesCards(recipes)
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

    // createRecipesCards(recipeResultFilter);
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
//     createRecipesCards(recipeResult);
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
//     createRecipesCards(recipeResult);
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