let searchBar = document.getElementById("searchbar");


searchBar.addEventListener("change", function() {
    // console.log(searchBar.value);
    
    // Etablir un tableau des mots clefs saisis par l'utilisateur à partir de 3 caractères
    let keyWordArray =[];
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
    
    // console.log(recipes);

// Etablir un tableau des noms de recettes
    let recipeArray= [];
    for(var i=0; i< recipes.length; i++) {
        let recipe=recipes[i].name;
        if(!recipeArray.includes(recipe)){
            recipeArray.push(recipe);
        }
    }
    console.log("Tableau des Noms de Recette");
    console.log(recipeArray);

    //  Etablir un tableau des Ingredient
    let ingredientArray=[];
    for(var i=0; i< recipes.length; i++) {
        let itemIngredientsArray= recipes[i].ingredients;
       for(let j=0; j < itemIngredientsArray.length; j++){
           let ingredientBrut= itemIngredientsArray[j].ingredient;
           let ingredient= ingredientBrut.toLowerCase();
           ingredient=ingredient.replace(/ê/g,"e");
          ingredient=ingredient.replace(/î/g,"i");
          ingredient=ingredient.replace(/ë/g,"e");
          ingredient=ingredient.replace(/ï/g,"i");
          if(!ingredientArray.includes(ingredient)){
              ingredientArray.push(ingredient);
            }
        }
    }
    console.log("Tableau des Ingredients");
    console.log(ingredientArray);


//  Etablir un tableau des Descriptions
    let descriptionArray=[];
    for(var i=0; i< recipes.length; i++) {
        let description=recipes[i].description;
        if(!descriptionArray.includes(description)){
            descriptionArray.push(description);
        }
    }
    console.log("tableau des Descriptions");
    console.log(descriptionArray);

//  Etablir un tableau des Ustensiles
    let ustensilArray=[];
    for(var i=0; i< recipes.length; i++) {
        let itemUstensilsArray= recipes[i].ustensils;
        for(j=0; j<itemUstensilsArray.length; j++) {
            let ustensilItem=itemUstensilsArray[j];
            let ustensil= ustensilItem.toLowerCase();
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
        let appareilBrut= recipes[i].appliance;
        let appareil= appareilBrut.toLowerCase();
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
});







 

// poulet à l'ail braisé à la réunionnaise
// POULET A L'AIL BRAISE A LA REUNIONNAISE



