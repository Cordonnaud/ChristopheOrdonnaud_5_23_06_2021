function cleanWordCharactere(element) {
    element=element.replace(/ê/g,"e");
    element=element.replace(/ë/g,"e");
    element=element.replace(/'/g," ");
    element=element.replace(/î/g,"i");
    element=element.replace(/ï/g,"i");
}
function createIndexRecipeArray(){
    for(var i=0; i< recipes.length -1; i++) {
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
        cleanWordCharactere(keyWords);
        keyWords=keyWords.replace(/'/g," ");
        var keyWordSplit=keyWords.split(" ");
        for(var i=0; i<keyWordSplit.length; i++){
            var keyWord = keyWordSplit[i];
            if(keyWord.length>=3){
                keyLongWord=keyWord;
                if(!keyWordsArray.includes(keyLongWord)){
                    keyWordsArray.push(keyLongWord);
                }
            }
        }
    }
}

// recherche d'une correspondance entre les mots cléfs et les mots ingredients / noms / description
function createCorrespondantWordArray(){ 
    for (var i = 0; i < ingredientsArray.length; i++){
        var ingredientWordListResearch = ingredientsArray[i];
        for(var j=0; j<keyWordsArray.length; j++) {
            var keyWordSearch= keyWordsArray[j];
            if(ingredientWordListResearch.includes(keyWordSearch)) {
                correspondantWords.push(ingredientWordListResearch);                    
            }
        }
    }
    for (var i = 0; i < recipeArray.length; i++){
        var nameWordListResearch = recipeArray[i];
        for(var j=0; j<keyWordsArray.length; j++) {
            var keyWordSearch= keyWordsArray[j];
            if(nameWordListResearch.includes(keyWordSearch)) {
                correspondantWords.push(nameWordListResearch);                    
            }
        }
    }
    for (var i = 0; i < descriptionArray.length; i++){
        var descriptWordListResearch = descriptionArray[i];
        for(var j=0; j<keyWordsArray.length; j++) {
            var keyWordSearch= keyWordsArray[j];
            if(descriptWordListResearch.includes(keyWordSearch)) {
                correspondantWords.push(descriptWordListResearch);                    
            }
        }
    }
}

// Etablir le tableau des Recettes filtrées suivant ingredient filtrés
function createRecipeResult(){
    for(var i=0; i< recipes.length -1; i++) {
        var recipe=recipes[i];
        var ingredients= recipes[i].ingredients;
        for(var j=0; j < ingredients.length -1; j++){
            var ingredientBrut= ingredients[j].ingredient;
            var ingredient= ingredientBrut.toLowerCase();
            cleanWordCharactere(ingredient);
            ingredient=ingredient.replace(/'/g," ");
            for(k=0; k<correspondantWords.length; k++){
                var elementCor=correspondantWords[k];
                if(ingredient.includes(elementCor)){
                    if(!recipeResult.includes(recipe)){
                        recipeResult.push(recipe);
                    }
                }
            }
        }
        for(j=0; j<recipes.length -1; j++){
            var recipeName= recipes[i].name;
            var name=recipeName.toLowerCase();
            cleanWordCharactere(name);
            name=name.replace(/'/g," ");
            for(k=0; k<correspondantWords.length; k++){
                var elementCor=correspondantWords[k];
                if(name.includes(elementCor)){
                    if(!recipeResult.includes(recipe)){
                        recipeResult.push(recipe);
                    }
                }
            }
        }
        for(j=0; j<recipes.length -1; j++){
            var recipeDescript= recipes[i].description;
            var descript=recipeDescript.toLowerCase();
            cleanWordCharactere(descript);
            descript=descript.replace(/'/g," ");
            for(k=0; k<correspondantWords.length; k++){
                var elementCor=correspondantWords[k];
                if(descript.includes(elementCor)){
                    if(!recipeResult.includes(recipe)){
                        recipeResult.push(recipe);
                    }
                }
            }
        }
    }
}
