function cleanWordCharactere(element) {
    element=element.replace(/ê/g,"e");
    element=element.replace(/ë/g,"e");
    element=element.replace(/'/g," ");
    element=element.replace(/î/g,"i");
    element=element.replace(/ï/g,"i");
}
function createIndexRecipeArray(){
    for(var i=0; i< recipes.length -1; i++) {
        // var recipeId=recipes[i].id;   
        var recipeId=recipes[i].id;       
        if(!indexRecipeArray.includes(recipeId)){
            indexRecipeArray.push(recipeId);
        }
    }
}


// Etablir un tableau des noms de recettes
function createRecipeNameArray(){
    for(var i=0; i< recipes.length -1; i++) {
        var recipesName=recipes[i].name;
        var recipeName=recipesName.toLowerCase(); 
        cleanWordCharactere(recipeName);
        recipeName=recipeName.replace(/'/g," ");        
        if(!recipeArray.includes(recipeName)){
            recipeArray.push(recipeName);
        }
    }
}

// Etablir un tableau des ingredients
function createIngredientArray(){
    for(var i=0; i< recipes.length -1; i++) {
        itemIngredientsArray= recipes[i].ingredients;
       for(var j=0; j < itemIngredientsArray.length -1; j++){
           var ingredientBrut= itemIngredientsArray[j].ingredient;
           var ingredient= ingredientBrut.toLowerCase();
           cleanWordCharactere(ingredient);
           ingredient=ingredient.replace(/'/g," ");
           if(!ingredientsArray.includes(ingredient)){
               ingredientsArray.push(ingredient);
            }
            // var ingredientWord=ingredient.split(" ");
            // // console.log(ingredientWord);
            // for( k=0; k<ingredientWord.length; k++) {
            //     var word= ingredientWord[k];
            //     if(!ingredientWordList.includes(word)) {
            //         ingredientWordList.push (word);
            //     }
            // }
        }
    }
}



//  Etablir un tableau des Descriptions
function createDescriptionArray() {
    for(var i=0; i< recipes.length -1; i++) {
        var descriptions=recipes[i].description;
        var description=descriptions.toLowerCase();
        cleanWordCharactere(description);
        description=description.replace(/'/g," ");
        if(!descriptionArray.includes(description)){
            descriptionArray.push(description);
        }
    }
}

//  Etablir un tableau des Ustensiles
function createUstensilsArray(){
    for(var i=0; i< recipes.length -1; i++) {
        var itemUstensilsArray= recipes[i].ustensils;
        for(j=0; j<itemUstensilsArray.length -1; j++) {
            var ustensilItem=itemUstensilsArray[j];
            var ustensil= ustensilItem.toLowerCase();
            cleanWordCharactere(ustensil);
            ustensil=ustensil.replace(/'/g," ");
            if(!ustensilArray.includes(ustensil)){
                ustensilArray.push(ustensil);
            }
        }
    }
}

//  Etablir un tableau des Appareils
function createApplianceArray(){
    for(var i=0; i< recipes.length -1; i++) {
        var appareilBrut= recipes[i].appliance;
        var appareil= appareilBrut.toLowerCase();
        cleanWordCharactere(appareil);
        appareil=appareil.replace(/'/g," ");
        if(!appareilArray.includes(appareil)){
            appareilArray.push(appareil);
        }
    }
}

// Etablir un tableau des mots clefs saisis par l'utilisateur à partir de 3 caractères
function createKeyWordsArray(){
    if(searchBar.value.length >= 3) {
        var keyWords= searchBar.value.toLowerCase();
        // console.log(keyWords);
        cleanWordCharactere(keyWords);
        keyWords=keyWords.replace(/'/g," ");
        // console.log(keyWords)
        if(keyWords.includes(" ")) {
            var keyWordSplit=keyWords.split(" ");
            // console.log(keyWordSplit);
            for(var i=0; i<keyWordSplit.length; i++){
                var keyWord = keyWordSplit[i];
                console.log(keyWord);
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
}

// recherche d'une correspondance entre les mots cléfs et les mots ingredients
function createCorrespondantWordArray(){ 
    for (var i = 0; i < ingredientsArray.length -1; i++){
        var ingredientWordListResearch = ingredientsArray[i];
        // console.log(ingredientWordListResearch)
        // console.log("ingredient : " + ingredientWordListResearch);
        for(var j=0; j<keyWordsArray.length -1; j++) {
            var keyWordSearch= keyWordsArray[j];
            // console.log(keyWordsArray)
            // console.log("keyWordSearch" +  keyWordSearch);
            if(ingredientWordListResearch.includes(keyWordSearch)) {
                correspondantWords.push(ingredientWordListResearch);                    
            }
        }
    }
}


// recherche des recette correspondante aux ingredients
console.log("recherche des recette correspondante aux ingredients");
recipes.forEach(function(index){
    console.log (index)
});


function createRecipeFilterArray() {
    for(var i = 0; i < recipes.length - 1; i++) {
        var recipe = recipes[i];
        console.log(recipe);
        // var indexRecipe = recipes.indexOf(i);
        // console.log(indexRecipe);
        // var ingredientsInRecipe = recipe.ingredients;
        // for(var j = 0; j < correspondantWords.length -1; j++) {
        //     var resultSearchIngredient = correspondantWords[j];
        //     // console.log(resultSearchIngredient)
        //     for(var k = 0; k < ingredientsInRecipe.length -1; k++) {
        //         var ingredientInRecipe = ingredientsInRecipe[k];
        //         console.log(ingredientInRecipe)
                
        //         if(ingredientInRecipe.includes(resultSearchIngredient)) {
        //             var indexOfRecipe=recipe("");
        //             console.log(indexOfRecipe)
        //             // if(!recipeResult.includes(recipe)) {
        //             //     recipeResult.push(recipe);
        //             // }
        //         }
        //     }
        // }
    }
}
console.log("===================================================================")
//     
// 


//     for( i=0; i< recipes.length -1; i++){
//         var recipe=recipes[i];
//         for(j=0; j<correspondantWords.length -1; j++) {
//             var ingredientSearch=correspondantWords[j];
//             console.log(ingredientSearch)
//             for(k=0; k<ingredientsArray.length -1; k++) {
//                 var ingredientFind=ingredientsArray[k];
//                 console.log(ingredientsArray)
//                 // if(!ingredientsArray.includes(ingredientSearch)){
//                 //     recipeFilterArray.push(recipe)
//                 // }
//             }
//         }
//     