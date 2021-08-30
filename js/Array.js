
document.addEventListener("DOMContentLoaded", function() {    
    console.log(recipes);
    // CALL RECIPE FOR HTML
    // showRecipes(recipes);
    // RECIPE RESULT TO BE SHOWN
    

    // Etablir un tableau des noms de recettes
    var recipeArray= [];
    for(var i=0; i< recipes.length; i++) {
        var recipeName=recipes[i].name;
        if(!recipeArray.includes(recipeName)){
            recipeArray.push(recipeName);
        }
    }
    // console.log("Tableau des Noms de Recette");
    // console.log(recipeArray);

    //  Etablir un tableau des Ingredients
    var ingredientsArray=[];
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
            for( k=0; k<ingredientWord.length; k++) {
                var word= ingredientWord[k];
                if(!ingredientWordList.includes(word)) {
                    ingredientWordList.push (word);
                }
            }          
            
        }
    }
    // console.log("Tableau des Ingredients");
    // console.log(ingredientsArray);

    // console.log("Liste des Ingredients");
    // console.log(ingredientWordList);

   

    //  Etablir un tableau des Descriptions
    var descriptionArray=[];
    for(var i=0; i< recipes.length; i++) {
        var description=recipes[i].description;
        if(!descriptionArray.includes(description)){
            descriptionArray.push(description);
        }
    }
    // console.log("tableau des Descriptions");
    // console.log(descriptionArray);

    //  Etablir un tableau des Ustensiles
    var ustensilArray=[];
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
    // console.log("Tableau des Ustensils");
    // console.log(ustensilArray);

    //  Etablir un tableau des Appareils
    var appareilArray=[];
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
    // console.log("Tableau des Appareils");
    // console.log(appareilArray);

    console.log ("-------------------------------------------------");
// Algo  de recherhce par ingredient sur la barre de recherche
    // const centralSearchBar = document.getElementById('searchbar');
    

    var searchResultArrayFromIngredient = [];
    var resultForsearchIngredient = [];

    var searchResultArrayFromNameRecipe = [];
    var resultForSearchName = [];

    var searchResultArrayFromDescriptionRecipe = [];
    var resultForSearchDescription = [];

    var searchBar = document.getElementById("searchbar");

    searchBar.addEventListener('change', function(event) {
        // console.log(searchBar.value);

        // Etablir un tableau des mots clefs saisis par l'utilisateur à partir de 3 caractères

        var keyWordsArray =[];
        var ingredientInResearchArray = [];

        if(searchBar.value.length >= 3) {
            var keyWords= searchBar.value.toLowerCase();
            keyWords=keyWords.replace(/'/g," ");
            keyWords=keyWords.replace(/ê/g,"e");
            keyWords=keyWords.replace(/ë/g,"e");
            keyWords=keyWords.replace(/î/g,"i");
            keyWords=keyWords.replace(/ï/g,"i");
            if(keyWords.includes(" ")) {
                var keyWordSplit=keyWords.split(" ");
                var ingredientsFind =[]
                // console.log(keyWordSplit);
                for(var i=0; i<keyWordSplit.length; i++){
                    var keyWord = keyWordSplit[i];
                    //console.log(keyWord);
                    if(keyWord.length>=3){
                        keyLongWord=keyWord;
                        console.log(keyLongWord);
                        if(!keyWordsArray.includes(keyLongWord)){
                            keyWordsArray.push(keyLongWord);
                        }
                    }
                }
            }
        }
        console.log(keyWordsArray);
        console.log(ingredientWordList);
        for (var i = 0; i < ingredientWordList.length; i++){
            var ingredientWordListResearch = ingredientWordList[i];
            for(var j=0; j<keyWordsArray.length; j++) {
                var keyWordSearch= keyWordsArray[j];
                // console.log(keyWordSearch);
                if(ingredientWordList.includes(keyWordSearch)) {
                    ingredientsFind.push(keyWordSearch);
                }
                // console.log(ingredientWordListResearch);
                // console.log('tableau des résultats');
            }
            
        }
        console.log(ingredientsFind);
        // console.log(ingredientWordListResearch);
        // console.log('mots clefs'+' ' + keyWordSearch);
        // console.log(' tableau des ingredients ' +' ' + ingredientWordListResearch);
            
                
        
    });

});

    
// poulet à l'ail braisé à la réunionnaise
// POULET A L'AIL BRAISE A LA REUNIONNAISE