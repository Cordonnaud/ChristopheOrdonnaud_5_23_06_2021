

    
   


document.addEventListener("DOMContentLoaded", function() {    
    // console.log(recipes);

    // Etablir un tableau des noms de recettes
    var recipeArray= [];
    for(var i=0; i< recipes.length; i++) {
        var recipe=recipes[i].name;
        if(!recipeArray.includes(recipe)){
            recipeArray.push(recipe);
        }
    }
    console.log("Tableau des Noms de Recette");
    console.log(recipeArray);

    //  Etablir un tableau des Ingredients
    let ingredientsArray=[];
    for(var i=0; i< recipes.length; i++) {
        var itemIngredientsArray= recipes[i].ingredients;
       for(var j=0; j < itemIngredientsArray.length; j++){
           var ingredientBrut= itemIngredientsArray[j].ingredient;
           var ingredient= ingredientBrut.toLowerCase();
           ingredient=ingredient.replace(/'/g," ");
           ingredient=ingredient.replace(/ê/g,"e");
           ingredient=ingredient.replace(/î/g,"i");
           ingredient=ingredient.replace(/ë/g,"e");
           ingredient=ingredient.replace(/ï/g,"i");
           if(!ingredientsArray.includes(ingredient)){
               ingredientsArray.push(ingredient);
            }
        }
    }
    console.log("Tableau des Ingredients");
    console.log(ingredientsArray);

    // Etablir une liste de mots du tableau des Ingredients

    // let ingredientWordArray= [];
    // for (var i=0; i<ingredientArray.length; i++) {
    //     if(!ingredientArray.includes(" ")){
    //          var ingredientWord=ingredientArray[i].split(" ");
    //          console.log(ingredientWord);
    //     }
    // }
    // console.log("Tableau d'ingrédient seul");
    // console.log(ingredientWordArray);

    //  Etablir un tableau des Descriptions
    let descriptionArray=[];
    for(var i=0; i< recipes.length; i++) {
        var description=recipes[i].description;
        if(!descriptionArray.includes(description)){
            descriptionArray.push(description);
        }
    }
    console.log("tableau des Descriptions");
    console.log(descriptionArray);

    //  Etablir un tableau des Ustensiles
    let ustensilArray=[];
    for(var i=0; i< recipes.length; i++) {
        var itemUstensilsArray= recipes[i].ustensils;
        for(j=0; j<itemUstensilsArray.length; j++) {
            var ustensilItem=itemUstensilsArray[j];
            var ustensil= ustensilItem.toLowerCase();
            ustensil=ustensil.replace(/'/g," ");
            ustensil=ustensil.replace(/ê/g,"e");
            ustensil=ustensil.replace(/î/g,"i");
            ustensil=ustensil.replace(/ë/g,"e");
            ustensil=ustensil.replace(/ï/g,"i");
            if(!ustensilArray.includes(ustensil)){
                ustensilArray.push(ustensil);
            }
        }
    }
    console.log("Tableau des Ustensils");
    console.log(ustensilArray);

    //  Etablir un tableau des Appareils
    let appareilArray=[];
    for(var i=0; i< recipes.length; i++) {
        var appareilBrut= recipes[i].appliance;
        var appareil= appareilBrut.toLowerCase();
        appareil=appareil.replace(/ê/g,"e");
        appareil=appareil.replace(/ë/g,"e");
        appareil=appareil.replace(/î/g,"i");
        appareil=appareil.replace(/ï/g,"i");
        if(!appareilArray.includes(appareil)){
            appareilArray.push(appareil);
        }
    }
    console.log("Tableau des Appareils");
    console.log(appareilArray);

    console.log ("-------------------------------------------------");
// Algo  de recherhce par ingredient sur la barre de recherche
    // const centralSearchBar = document.getElementById('searchbar');
    

    var searchResultArrayFromIngredient = [];
    var resultForsearchIngredient = [];

    var searchResultArrayFromNameRecipe = [];
    var resultForSearchName = [];

    var searchResultArrayFromDescriptionRecipe = [];
    var resultForSearchDescription = [];

    let searchBar = document.getElementById("searchbar");

    searchBar.addEventListener('change', function(event) {

        // Etablir un tableau des mots clefs saisis par l'utilisateur à partir de 3 caractères

        var keyWordArray =[];
        if(searchBar.value.length >= 3) {
            var keyWords= searchBar.value.toLowerCase();
            keyWords=keyWords.replace(/'/g," ");
            keyWords=keyWords.replace(/ê/g,"e");
            keyWords=keyWords.replace(/ë/g,"e");
            keyWords=keyWords.replace(/î/g,"i");
            keyWords=keyWords.replace(/ï/g,"i");
            if(keyWords.includes(" ")) {
                var keyWordSplit=keyWords.split(" ");
                // console.log(keyWordSplit);
                for(var i=0; i<keyWordSplit.length; i++){
                    var keyWord = keyWordSplit[i];
                    //console.log(keyWord);
                    if(keyWord.length>=3){
                        keyLongWord=keyWord;
                        console.log(keyLongWord);
                        if(!keyWordArray.includes(keyLongWord)){
                            keyWordArray.push(keyLongWord);
                        }
                    }
                }
            }
        }
        console.log ("Tableau des mots clés");
        console.log(keyWordArray);


        // pour chaque valeur d'index du tableau mot clef, verifier si il est présent dans les index des tableau NOMS/INGREDIENT/USTENSILES/APPAREILS/DESCRIPTIONS

        console.log ("Valeur des mots clés");
        keyWordArray.forEach(function(item) {
            console.log(item);

        // pour chaque valeur d'index du tableau mot clef, verifier si il est présent dans les index des tableau NOMS/INGREDIENT/USTENSILES/APPAREILS/DESCRIPTIONS

         
        });


    // // RESET RECIPE RESULT ARRAY TO CLEAR FOR HTML
    //     recipeResult = [];
    //     let researchValue = event.target.value;
    //     console.log('Valeur de la recherche')
    //     console.log(researchValue);
    //     let cleanValue = researchValue.toLowerCase();
    //     // console.log('Valeur de la recherche en minuscule');
    //     // console.log(cleanValue);
    //     // console.log(cleanValue.indexOf(""));

    //     // condition > à 3 caractères
    //     if(cleanValue.length >= 3){
    //         // mots connu dans le tableau
    //         if(cleanValue.indexOf("") != -1) {
    //             // séparation des mots composés de la recherche en plusieurs mots de recherche
    //             let searchArray = cleanValue.split(" ");
    //             console.log(searchArray);
    //             for (var i = 0; i < searchArray.length; i++) {
    //                 // tableau des mots de recherche
    //                 let searchWord = searchArray[i];
    //                 // console.log('tableau des mots de recherche');
    //                 // console.log(searchWord);

    //                 // recherche sur des mots > à 2 caractères
    //                 if(searchWord.length > 2) {
    //                     for (var j = 0; j < ingredientsArray.length -1; j++) {

    //                         // liste des ingredients en minuscule
    //                        let ingredientList = ingredientsArray[j].toLowerCase();
    //                         // console.log('resultat de recherche');
    //                         // console.log(ingredientList);

    //                         // indexliste des ingredients connu
    //                         if(ingredientList.indexOf("") != -1) {

    //                             // séparation des mots composés de la liste des ingredients en plusieurs mots
    //                             let wordIngredientList = ingredientList.split(" ");
    //                             console.log('liste des mots spliter');
    //                             console.log(wordIngredientList);

    //                             for (var K = 0; K < wordIngredientList.length; K++) {

    //                                 // tableau de liste des mots d'ingredients
    //                                 let ingredientWord = wordIngredientList[K];
    //                                 // console.log('liste de mot de recherche');
    //                                 // console.log(ingredientWord);
    //                                 if(ingredientWord === searchWord) {
    //                                     resultForsearchIngredient.push(j);
    //                                     // console.log('tableau de recherche');
    //                                     // console.log(resultForsearchIngredient);
    //                                 }
    //                             }
    //                         }
    //                         else { 
    //                             if(ingredientList === searchWord) {
    //                             resultForsearchIngredient.push(j);
    //                             // console.log('tableau de recherche else');
    //                             // console.log(resultForsearchIngredient);
    //                             }
    //                         }
    //                     }
    //                     for (var i = 0; i < resultForsearchIngredient.length; i++) {
    //                         let indexForResultSearchIngredient = resultForsearchIngredient[i];
    //                         let ingredientByIndex = ingredientsArray[indexForResultSearchIngredient];
    //                         searchResultArrayFromIngredient.push(ingredientByIndex);                 
    //                     }
    //                     console.log('tableau des ingredients suite à la recherche');
    //                     console.log(searchResultArrayFromIngredient);
    //                 }
    //                 // recherche dans le tableau de nom de recette
    //                 if(searchWord.length > 2) {
    //                     for (var l = 0; l < recipeArray.length; l++) {
    //                         const nameList = recipeArray[l].toLowerCase();
    //                         // console.log('resultat de recherche');
    //                         // console.log(nameList);
    //                         if(nameList.indexOf("") != -1) {
    //                             let wordNameList = nameList.split(" ");
    //                             for (var m = 0; m < wordNameList.length; m++) {
    //                                 let nameWord = wordNameList[m];
    //                                 if(nameWord === searchWord) {
    //                                     resultForSearchName.push(l);
    //                                     console.log('tableau de recherche des noms de recette');
    //                                     console.log(resultForSearchName);
    //                                 }
    //                             }
    //                         }
    //                         else { if(nameList === searchWord) {
    //                             resultForSearchName.push(l);
    //                             }
    //                         }
    //                     }
    //                     for (var i = 0; i < resultForSearchName.length; i++) {
    //                         let indexForResultSearchName = resultForSearchName[i];
    //                         let nameRecipeByIndex = recipeNameArray[indexForResultSearchName];
    //                         searchResultArrayFromNameRecipe.push(nameRecipeByIndex);
    //                     }
    //                     console.log('tableau de nom de recette suite à la recherche');
    //                     console.log(searchResultArrayFromNameRecipe);
    //                 }

    //                 // recherche dans le tableau descrition de la recette
    //                 if(searchWord.length > 2) {
    //                     for (let n = 0; n < descriptionArray.length; n++) {
    //                         const descriptionList = descriptionArray[n].toLowerCase();
    //                         if(descriptionList.indexOf("") != -1) {
    //                             let wordDescriptionList = descriptionList.split(" ");
    //                             for (var o = 0; o < wordDescriptionList.length; o++) {
    //                                 let descriptionWord = wordDescriptionList[o];
    //                                 if(descriptionWord === searchWord) {
    //                                     resultForSearchDescription.push(n);
    //                                 }
    //                             }
    //                         }
    //                         else { if(descriptionList === searchWord) {
    //                             resultForSearchDescription.push(n);
    //                             }
    //                         }
    //                     }
    //                     for (var i = 0; i < resultForSearchDescription.length; i++) {
    //                         let indexForResultSearchDescription = resultForSearchDescription[i];
    //                         let descriptionRecipeByIndex = descriptionArray[indexForResultSearchDescription];
    //                         searchResultArrayFromDescriptionRecipe.push(descriptionRecipeByIndex);
    //                     }
    //                     console.log('tableau des descriptions de recette suite à la recherche');
    //                     console.log(searchResultArrayFromDescriptionRecipe);
    //                 }
    //             }
    //         }
    //     }

    //     // SEARCH INSIDE ALL RECIPES
    //     for(var i = 0; i < recipes.length - 1; i++) {
    //         var recipe = recipes[i];
    //         var ingredientsInRecipe = recipe.ingredients;
    //         for(var j = 0; j < searchResultArrayFromIngredient.length; j++) {
    //             var resultSearchIngredient = searchResultArrayFromIngredient[j];
    //             for(var k = 0; k < ingredientsInRecipe.length; k++) {
    //                 var ingredientInRecipe = ingredientsInRecipe[k];
    //                 if(ingredientInRecipe.ingredient == resultSearchIngredient) {
    //                     if(!recipeResult.includes(recipe)) {
    //                         recipeResult.push(recipe);
    //                     }
    //                 }
    //             }
    //         }

    //         for(var j = 0; j < searchResultArrayFromDescriptionRecipe.length; j++) {

    //         }

    //         for(var j = 0; j < searchResultArrayFromNameRecipe.length; j++) {

    //         }
    //     }
    //     console.log(recipeResult);
    //     if(recipeResult.length > 0) {
    //         showRecipes(recipeResult);
    //     } else {
    //         showRecipes(recipes);
    //     }
    
    
    //     // supprimer le recipes HTML
    //     var recipesHtml = document.getElementById('recipes_html');
    //     var recipesParent = document.getElementById('container');

    //     // recipesParent.removeChild(recipesHtml);

    //     // Insérer le tableau des ingredients dans le filtre
    //     let ingredientMenu = document.getElementById('ingredients_list');
    //     let listOfIngredientsHtml = document.createElement('ul');

    //     for(var i = 0; i < searchResultArrayFromIngredient.length; i++) {
    //         var IngredientInTheMenu = document.createElement('li');
    //         IngredientInTheMenu.textContent = searchResultArrayFromIngredient[i];
    //         IngredientInTheMenu.classList = "ingredients";
    //         listOfIngredientsHtml.appendChild(IngredientInTheMenu);
    //     }

    //     ingredientMenu.appendChild(listOfIngredientsHtml);
    });
});
// console.log(searchBar.value);
    
// poulet à l'ail braisé à la réunionnaise
// POULET A L'AIL BRAISE A LA REUNIONNAISE