
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
    var ingredientWordList=[];
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
            var ingredientWord=ingredient.split(" ");
            // console.log(ingredientWord);
            if(!ingredientWordList.includes(ingredientWord)) {
                ingredientWordList.push (ingredientWord);
            }
        }
    }
    console.log("Tableau des Ingredients");
    console.log(ingredientsArray);

    console.log("Liste des Ingredients");
    console.log(ingredientsArray);

   

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
        // console.log(searchBar.value);

        // Etablir un tableau des mots clefs saisis par l'utilisateur à partir de 3 caractères

        var keyWordsArray =[];
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
                        // console.log(keyLongWord);
                        if(!keyWordsArray.includes(keyLongWord)){
                            keyWordsArray.push(keyLongWord);
                        }
                    }
                }
            }
        }
        console.log ("Tableau des mots clés");
        console.log(keyWordsArray);


        // pour chaque valeur d'index du tableau mot clef, verifier si il est présent dans les index des tableau NOMS/INGREDIENT/USTENSILES/APPAREILS/DESCRIPTIONS
        // if(keyLongWord.length > 2) {
        //     for (var j = 0; j < ingredientsArray.length -1; j++) {

        //         // liste des ingredients des recettes
        //         let ingredientList = ingredientsArray[j];
        //         console.log('resultat de recherche');
        //         console.log(ingredientList);

        //         // indexliste des ingredients connu
        //         if(ingredientList.indexOf("") != -1) {

        //             // séparation des mots composés de la liste des ingredients en plusieurs mots
        //             let wordIngredientList = ingredientList.split(" ");
        //             // console.log('liste des mots spliter');
        //             // console.log(wordIngredientList);

        //             for (var K = 0; K < wordIngredientList.length; K++) {

        //                 // tableau de liste des mots d'ingredients
        //                 let ingredientWord = wordIngredientList[K];
        //                 // console.log('liste de mot de recherche');
        //                 // console.log(ingredientWord);
        //                 if(ingredientWord === keyLongWord) {
        //                     resultForsearchIngredient.push(j);
        //                     // console.log('tableau de recherche');
        //                     // console.log(resultForsearchIngredient);
        //                 }
        //             }
        //         }
        //         else { 
        //             if(ingredientList === keyLongWord) {
        //             resultForsearchIngredient.push(j);
        //             // console.log('tableau de recherche else');
        //             // console.log(resultForsearchIngredient);
        //             }
        //         }
        //     }
        //     for (var i = 0; i < resultForsearchIngredient.length; i++) {
        //         let indexForResultSearchIngredient = resultForsearchIngredient[i];
        //         // console.log(indexForResultSearchIngredient);
        //         let ingredientByIndex = ingredientsArray[indexForResultSearchIngredient];
        //         searchResultArrayFromIngredient.push(ingredientByIndex);                 
        //     }
        //     console.log('tableau des ingredients suite à la recherche');
        //     console.log(searchResultArrayFromIngredient);
        // }
        
        // });
    });

});

    
// poulet à l'ail braisé à la réunionnaise
// POULET A L'AIL BRAISE A LA REUNIONNAISE