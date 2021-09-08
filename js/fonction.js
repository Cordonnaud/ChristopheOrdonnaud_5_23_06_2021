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
            // console.log(correspondantWords)
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
    // console.log(correspondantWords)
    for(var i=0; i< recipes.length; i++) {
        var recipe=recipes[i];
        var ingredients= recipe.ingredients;
        for(var j=0; j < ingredients.length; j++){
            var ingredientBrut= ingredients[j].ingredient;
            var ingredient= ingredientBrut.toLowerCase();
            cleanWordCharactere(ingredient);
            ingredient=ingredient.replace(/'/g," ");
            // console.log("itest")
    
            for(var k=0; k<correspondantWords.length; k++){
                var elementCor=correspondantWords[k];
                // console.log( "element rechercher" +  elementCor);
                // console.log( "ingredient issu des recette" +  ingredient)
               if(ingredient.includes(elementCor)){
                    // console.log(elementCor)
                    if(!recipeResult.includes(recipe)){
                        recipeResult.push(recipe);
                    }
                }
            }
        }
        for(var j=0; j<recipes.length; j++){
            var recipeName= recipes[i].name;
            var name=recipeName.toLowerCase();
            cleanWordCharactere(name);
            name=name.replace(/'/g," ");
            for(var k=0; k<correspondantWords.length; k++){
                var elementCor=correspondantWords[k];
                if(name.includes(elementCor)){
                    if(!recipeResult.includes(recipe)){
                        recipeResult.push(recipe);
                    }
                }
            }
        }
        for(var j=0; j<recipes.length; j++){
            var recipeDescript= recipes[i].description;
            var descript=recipeDescript.toLowerCase();
            cleanWordCharactere(descript);
            descript=descript.replace(/'/g," ");
            for(var k=0; k<correspondantWords.length; k++){
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

// SHOW RECIPES IN HTML
function showRecipes(recipes) {
    console.log(recipes)
    
    var recipeList = document.getElementById("recipes-list");
    recipeList.innerHTML = "";

    for(var i = 0; i < recipes.length; i++) {

        var recipe = recipes[i];
        

        var recipeCard = document.createElement("div");
        recipeCard.className = "row";
        

        var recipeCard1 = document.createElement("div");
        recipeCard1.className = "col-12 col-lg-4 mb-3";
        recipeCard1.id = "recipe";
        

        var recipeCardLink = document.createElement("div");
        recipeCardLink.classList.add("card");
        recipeCardLink.id = "link";
       

        var recipeCardImg = document.createElement("img");
        recipeCardImg.classList = "card-img-top ";
        recipeCardImg.id = "card_img";
        recipeCardLink.appendChild(recipeCardImg);

        var recipeCardBody = document.createElement("div");
        recipeCardBody.classList.add("card-body");
        

            //  zone de texte
        var recipeCardText = document.createElement ("div");
        recipeCardText.classList.add("card-text");
        

            // titre
        var recipeCardTitle = document.createElement("div");
        recipeCardTitle.className= "card-title info-card" ;
        recipeCardTitle.id = "title";
        recipeCardTitle.textContent = recipe.name;
        recipeCardText.appendChild(recipeCardTitle);

            //  icone + timer
        var recipeCardTime = document.createElement("div");
        recipeCardTime.className= "time_area info-card" ;
        recipeCardTime.id = "time";
        recipeCardText.appendChild(recipeCardTime)
        
        var recipeCardIconTime= document.createElement( "i");
        recipeCardIconTime.className ="bi bi-clock icon-large";
        recipeCardIconTime.id = "icon_time"
        recipeCardTime.appendChild(recipeCardIconTime);

        var recipeCardTimer = document.createElement("p");
        recipeCardTimer.classList.add("timer");
        recipeCardTimer.id = "timer";
        recipeCardTimer.textContent = recipe.time + "min";
        recipeCardTime.appendChild(recipeCardTimer);

            // ingredients et quantité / unité
        var recipeCardIngredients = document.createElement("div");
        recipeCardIngredients.className = "ingredients_area info-card";
        recipeCardIngredients.id = "ingredients"
  
        for(var j = 0; j < recipe.ingredients.length; j++) {
            var ingredientInRecipe = recipe.ingredients[j];
            
            var quantityAndUnit = "";

            if(ingredientInRecipe.quantity) {
                if(ingredientInRecipe.unit) {
                    quantityAndUnit = " " + ingredientInRecipe.quantity + " " + ingredientInRecipe.unit;
                }
                if(ingredientInRecipe.unite) {
                    quantityAndUnit = " " + ingredientInRecipe.quantity + " " + ingredientInRecipe.unite;
                }
                
            }
            if(ingredientInRecipe.quantite) {
                if(ingredientInRecipe.unit) {
                    quantityAndUnit = " " + ingredientInRecipe.quantite + " " + ingredientInRecipe.unit;
                }
                if(ingredientInRecipe.unite) {
                    quantityAndUnit = " " + ingredientInRecipe.quantite + " " + ingredientInRecipe.unite;
                }
            }
        }
            
            
        var recipeCardIngred = document.createElement("div");
        recipeCardIngred.classList.add("ingredient_of_recipe") 
        recipeCardIngred.id = "ingredient_of_recipe";
        recipeCardIngred.textContent = ingredientInRecipe.ingredient + ":";
        console.log("texte de Ingredient en gras" + " =====" + recipeCardIngred.textContent  )
        recipeCardIngredients.appendChild(recipeCardIngred);
        

        var recipeCardQuantity = document.createElement("div");
        recipeCardQuantity.classList.add("quantity");
        recipeCardQuantity.id ="quantity";
        recipeCardQuantity.textContent = quantityAndUnit
        console.log("texte de recipeCardQuantity" + " =====" + recipeCardQuantity.textContent)
        recipeCardIngredients.appendChild(recipeCardQuantity);
        recipeCardText.appendChild(recipeCardIngredients);



            //Description
        var recipeCardDescription = document.createElement("div");
        recipeCardDescription.className = "description_area info-card";
        recipeCardDescription.id = "description";
        recipeCardDescription.textContent = recipe.description;
        console.log("texte de la description" + " =====" + recipeCardDescription.textContent);
        recipeCardText.appendChild(recipeCardDescription);

        recipeCardBody.appendChild(recipeCardText);
        recipeCardLink.appendChild(recipeCardBody);
        recipeCard1.appendChild(recipeCardLink);
        recipeCard.appendChild(recipeCard1);

        
        



        

        //     var recipeCardPart1 = document.createElement("div");
        //     recipeCardPart1.classList.add("part1");
    
        //     var recipeCardPart1H3 = document.createElement("h3");
        //     recipeCardPart1H3.classList.add("title_card");
        //     recipeCardPart1H3.textContent = recipe.name;
        //     recipeCardPart1.appendChild(recipeCardPart1H3);
    
        //     var recipeCardPart1Timing = document.createElement("div");
        //     recipeCardPart1Timing.classList.add("timing");
        
        //     var recipeCardPart1TimingI = document.createElement("i");
        //     recipeCardPart1TimingI.className = "far fa-clock";
        //     recipeCardPart1Timing.appendChild(recipeCardPart1TimingI);
    
        //     var recipeCardPart1TimingTime = document.createElement("p");
        //     recipeCardPart1TimingTime.classList.add("time");
        //     recipeCardPart1TimingTime.textContent = recipe.time + " min";
        //     recipeCardPart1Timing.appendChild(recipeCardPart1TimingTime);
    
        //     recipeCardPart1.appendChild(recipeCardPart1Timing);
    
        //     recipeCardBody.appendChild(recipeCardPart1);
    
    //     var recipeCardPart2 = document.createElement("div");
    //     recipeCardPart2.classList.add("part2");
    
    //     var recipeCardPart2Listing = document.createElement("div");
    //     recipeCardPart2Listing.classList.add("listing");

    //     for(var j = 0; j < recipe.ingredients.length; j++) {
    //         var ingredientInRecipe = recipe.ingredients[j];

    //         var recipeIngredientI = document.createElement("i");
    //         var recipeIngredientIStrong = document.createElement("strong");
    //         recipeIngredientIStrong.textContent = ingredientInRecipe.ingredient + " :";
    //         recipeIngredientI.appendChild(recipeIngredientIStrong);

    //         var quantityAndUnit = "";

    //         if(ingredientInRecipe.quantity) {
    //             if(ingredientInRecipe.unit) {
    //                 quantityAndUnit = " " + ingredientInRecipe.quantity + " " + ingredientInRecipe.unit;
    //             }
    //             if(ingredientInRecipe.unite) {
    //                 quantityAndUnit = " " + ingredientInRecipe.quantity + " " + ingredientInRecipe.unite;
    //             }
                
    //         }
    //         if(ingredientInRecipe.quantite) {
    //             if(ingredientInRecipe.unit) {
    //                 quantityAndUnit = " " + ingredientInRecipe.quantite + " " + ingredientInRecipe.unit;
    //             }
    //             if(ingredientInRecipe.unite) {
    //                 quantityAndUnit = " " + ingredientInRecipe.quantite + " " + ingredientInRecipe.unite;
    //             }
    //         }
    //         recipeIngredientI.append(quantityAndUnit);
    //         var recipeIngredientLineBreak = document.createElement("br");
    //         recipeCardPart2Listing.appendChild(recipeIngredientI);
    //         recipeCardPart2Listing.appendChild(recipeIngredientLineBreak);
    //     }
    
    //     recipeCardPart2.appendChild(recipeCardPart2Listing);
    
    //     var recipeCardPart2Description = document.createElement("p");
    //     recipeCardPart2Description.classList.add("description");
    //     recipeCardPart2Description.textContent = recipe.description;
    
    //     recipeCardPart2.appendChild(recipeCardPart2Description);
    
    //     recipeCardBody.appendChild(recipeCardPart2);

    //     recipeCard.appendChild(recipeCardBody);

    //     recipeList.appendChild(recipeCard);
    }
}
