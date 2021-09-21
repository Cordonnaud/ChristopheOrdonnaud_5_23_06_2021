function cleanWordCharactere(element) {
    element=element.replace(/ê/g,"è");
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
        var itemIngredientsArray= recipes[i].ingredients;
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
        var itemUstensilsArray = recipes[i].ustensils;
        for(j=0; j<itemUstensilsArray.length -1; j++) {
            var ustensilItem = itemUstensilsArray[j];
            var ustensil = ustensilItem.toLowerCase();
            cleanWordCharactere(ustensil);
            ustensil = ustensil.replace(/'/g," ");
            if(!ustensilArray.includes(ustensil)){
                ustensilArray.push(ustensil);
            }
        }
    }
}

//  Etablir un tableau des Appareils
var applianceArray=[];
function createApplianceArray(){
    console.log(recipes)
    for(var i=0; i< recipes.length -1; i++) {
        var appareils = recipes[i].appliance;
        var appareil= appareils.toLowerCase();
        cleanWordCharactere(appareil);
        appareil=appareil.replace(/'/g," ");
        if(!applianceArray.includes(appareil)){
            applianceArray.push(appareil);
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

// } console.log(recipeResult)




// montrer les recettes dans le HTML
function showRecipes(recipes) {
    // console.log("Recettes");
    // console.log(recipes)
    
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
        recipeCardIconTime.className ="fa fa-clock-o";
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
            var ingredientUnit= ingredientInRecipe.unit;
            
            if(ingredientInRecipe.quantity) {
                quantityAndUnit =  ingredientInRecipe.quantity
            }
            if(ingredientInRecipe.quantite) {
                quantityAndUnit =  ingredientInRecipe.quantite
            }
            if(ingredientInRecipe.quantity) {
                if(ingredientUnit) {
                    quantityAndUnit = " " + ingredientInRecipe.quantity + " " + ingredientUnit;
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
            var ingredientPlusQuantity = document.createElement('div');
            ingredientPlusQuantity.classList.add("ingredient_aligne");
            var recipeCardIngred = document.createElement("p");
            recipeCardIngred.classList.add("ingredient_of_recipe") 
            recipeCardIngred.id = "ingredient_of_recipe";
            var recipeCardIngredStrong = document.createElement('strong')
            recipeCardIngredStrong.textContent = ingredientInRecipe.ingredient   + " : "  ;
            // console.log("texte de Ingredient en gras" + " =====" + recipeCardIngred.textContent  )
            recipeCardIngred.appendChild(recipeCardIngredStrong);
            ingredientPlusQuantity.appendChild(recipeCardIngred);

            var recipeCardQuantity = document.createElement("p");
            recipeCardQuantity.classList.add("quantity");
            recipeCardQuantity.id ="quantity";
            recipeCardQuantity.textContent = quantityAndUnit;
            // console.log("texte de recipeCardQuantity" + " =====" + recipeCardQuantity.textContent)
            ingredientPlusQuantity.appendChild(recipeCardQuantity);
            recipeCardIngredients.appendChild(ingredientPlusQuantity);
            recipeCardText.appendChild(recipeCardIngredients);
        }
        

            //Description
        var recipeCardDescription = document.createElement("div");
        recipeCardDescription.className = "description_area info-card";
        recipeCardDescription.id = "description";
        recipeCardDescription.textContent = recipe.description;
        // console.log("texte de la description" + " =====" + recipeCardDescription.textContent);
        recipeCardText.appendChild(recipeCardDescription);

        recipeCardBody.appendChild(recipeCardText);
        recipeCardLink.appendChild(recipeCardBody);
        recipeCard1.appendChild(recipeCardLink);
        recipeList.appendChild(recipeCard1)
    }
}


// ---------------------------Montrer les elements dans Tags Filtre-------------- 

// Tags Ingredients
var tagIngredientsArray= [];
function showTagsIngredients() {
    ingredientsArray.sort()
     for(var k=0; k<ingredientsArray.length-1 ; k++ ){
        var ingredientA = ingredientsArray[k];
        var listContainer= document.getElementById("ingredients_menu");
        var listItem = document.createElement("li");
        listItem.className="dropdown-item text-white bg-primary";
        listItem.textContent = ingredientA;
        listContainer.appendChild(listItem);
       
    }

}
// Tags Appareils
var tagAppareilsArray= [];
function showTagsAppareils() {
    applianceArray.sort();
    for(var j=0; j<applianceArray.length ; j++ ){
        var appareil = applianceArray[j];
        var listContainer= document.getElementById("appareils_menu");
        var listItem = document.createElement("li");
        listItem.className="dropdown-item text-white bg-danger";
        listItem.textContent = appareil;
        listContainer.appendChild(listItem);
    } 
    // console.log("Appareil")
    // console.log(appareil)
 
}
// Tags Ustensils

function showTagsUstensils() {
    ustensilArray.sort();
    for(var j=0; j<ustensilArray.length ; j++ ){
        var ustensilA = ustensilArray[j];
        
        var listContainer= document.getElementById("ustensils_menu");
        var listItem = document.createElement("li");
        listItem.className="dropdown-item text-white bg-success";
        listItem.textContent = ustensilA;
        listContainer.appendChild(listItem);
    }
}

//  Cacher les Tags Array

function closeTags(recipes) {
    // console.log("Recettes");
    // console.log(recipes)
    
    var ingredientsList = document.getElementById("ingredients_menu");
    ingredientsList.innerHTML = "";
    var appareilsList = document.getElementById("appareils_menu");
    appareilsList.innerHTML = "";
    var ustensilsList = document.getElementById("ustensils_menu");
    ustensilsList.innerHTML = "";
}

    
// Etablir un tableau des ingredients des recettes filtrées

function createIngredientFilterArray(){
    for(var i=0; i< recipeResult.length -1; i++) {
        var itemIngredientsFilterArray= recipeResult[i].ingredients;
    for(var j=0; j < itemIngredientsFilterArray.length -1; j++){
        var ingredientFilterBrut= itemIngredientsFilterArray[j].ingredient;
        var ingredientFilter= ingredientFilterBrut.toLowerCase();
        cleanWordCharactere(ingredientFilter);

        ingredientFilter=ingredientFilter.replace(/'/g," ");
        if(!ingredientsFilterArray.includes(ingredientFilter)){
            ingredientsFilterArray.push(ingredientFilter);
            }
        }
    }
}
console.log("IngredientFilterArray")
console.log(ingredientsFilterArray)


//  Etablir un tableau des Ustensiles des recettes filtrées
function createUstensilsFilterArray(){
    for(var i=0; i< recipeResult.length -1; i++) {
        var itemUstensilsFilterArray= recipeResult[i].ustensils;
        for(j=0; j<itemUstensilsFilterArray.length -1; j++) {
            var ustensilFilterBrut=itemUstensilsFilterArray[j];
            var ustensilFilter= ustensilFilterBrut.toLowerCase();
            cleanWordCharactere(ustensilFilter);
            ustensilFilter=ustensilFilter.replace(/'/g," ");
            if(!ustensilsFilterArray.includes(ustensilFilter)){
                ustensilsFilterArray.push(ustensilFilter);
            }
        }
    }
}

//  Etablir un tableau des Appareils des recettes filtrées
function createApplianceFilterArray(){
    for(var i=0; i< recipeResult.length -1; i++) {
        var applianceFilterBrut= recipeResult[i].appliance;
        var applianceFilter= applianceFilterBrut.toLowerCase();
        cleanWordCharactere(applianceFilter);
        applianceFilter=applianceFilter.replace(/'/g," ");
        if(!appliancesFilterArray.includes(applianceFilter)){
            appliancesFilterArray.push(applianceFilter);
        }
    }
}
// ------------------------------------------Montrer les elements dans Tags des recettes filtrées
// Tags Ingredients
function showTagsIngredientsFilter() {
    ingredientsFilterArray.sort()
     for(var i=0; i<ingredientsFilterArray.length-1 ; i++ ){
        var ingredientA = ingredientsFilterArray[i];
        var listContainer= document.getElementById("ingredients_menu");
        var listItem = document.createElement("button");
        listItem.type="button";
        listItem.className="dropdown-item text-white bg-primary grid";
        listItem.textContent = ingredientA;
        listContainer.appendChild(listItem);
       
    }
}


// Tags Appareils
function showTagsAppareilsFilter() {
    applianceArray.sort();
    for(var i=0; i<appliancesFilterArray.length ; i++ ){
        var appareil = appliancesFilterArray[i];
        var listContainer= document.getElementById("appareils_menu");
        var listItem = document.createElement("li");
        listItem.className="dropdown-item text-white bg-danger grid";
        listItem.textContent = appareil;
        listContainer.appendChild(listItem);
    } 
}

// Tags Ustensils
function showTagsUstensilsFilter() {
    ustensilsFilterArray.sort();
    for(var i=0; i<ustensilsFilterArray.length ; i++ ){
        var ustensilA = ustensilsFilterArray[i];var listContainer= document.getElementById("ustensils_menu");
        var listItem = document.createElement("li");
        listItem.className="dropdown-item text-white bg-success grid";
        listItem.textContent = ustensilA;
        listContainer.appendChild(listItem);
    }
}

function menuDeroulantIng(){
    document.getElementById("ingredients_menu").classList.toggle("grid");
  
}

function menuDeroulantApp(){
    document.getElementById("appareils_menu").classList.toggle("grid");
}

function menuDeroulantUst(){
    document.getElementById("ustensils_menu").classList.toggle("grid");
}