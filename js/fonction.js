function cleanWordCharactere(element) {
    element=element.replace(/ê/g,"è");
    element=element.replace(/é/g,"e");
    element=element.replace(/ë/g,"e");
    element=element.replace(/'/g," ");
    element=element.replace(/î/g,"i");
    element=element.replace(/ï/g,"i");
    element=element.replace(/'/g," ");
}
function createIndexRecipeArray(array){
    for(var i=0; i< array.length -1; i++) {
        var recipeId=array[i].id;       
        if(!indexRecipeArray.includes(recipeId)){
            indexRecipeArray.push(recipeId);
        }
    }
}

// Etablir un tableau des noms de recettes
function createRecipeNameArray(array){
    for(var i=0; i< array.length -1; i++) {
        var recipesName=array[i].name;
        var recipeName=recipesName.toLowerCase(); 
        cleanWordCharactere(recipeName);
        recipeName=recipeName.replace(/'/g," ");        
        if(!recipeArray.includes(recipeName)){
            recipeArray.push(recipeName);
        }
    }
}

// Etablir un tableau des ingredients
function createIngredientArray(array){
    for(var i=0; i< array.length -1; i++) {
        var itemIngredientsArray= array[i].ingredients;
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
function createDescriptionArray(array) {
    for(var i=0; i< array.length -1; i++) {
        var descriptions=array[i].description;
        var description=descriptions.toLowerCase();
        cleanWordCharactere(description);
        description=description.replace(/'/g," ");
        if(!descriptionArray.includes(description)){
            descriptionArray.push(description);
        }
    }
}

//  Etablir un tableau des Ustensiles
function createUstensilsArray(array){
    for(var i=0; i< array.length -1; i++) {
        var itemUstensilsArray = array[i].ustensils;
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

function createApplianceArray(array){
    // console.log(recipes)
    for(var i=0; i< array.length -1; i++) {
        var appareils = array[i].appliance;
        var appareil= appareils.toLowerCase();
        cleanWordCharactere(appareil);
        appareil=appareil.replace(/'/g," ");
        if(!applianceArray.includes(appareil)){
            applianceArray.push(appareil);
        }
    }
}

// Etablir un tableau des mots clefs saisis par l'utilisateur à partir de 3 caractères
function createKeyWordsArray(input){
    if(input.value.length >= 3) {
        var keyWords= input.value.toLowerCase();
        cleanWordCharactere(keyWords);
        // keyWords=keyWords.replace(/'/g," ");
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

function createKeyWordsArrayFilterIng(input){
    if(input.value.length >= 3) {
        var keyWords= input.value.toLowerCase();
        cleanWordCharactere(keyWords);
        keyWords=keyWords.replace(/'/g," ");
        var keyWordSplit=keyWords.split(" ");
        for(var i=0; i<keyWordSplit.length; i++){
            var keyWord = keyWordSplit[i];
            if(keyWord.length>=3){
                keyLongWord==keyWord;
                if(!keyWordsArrayFilterIng.includes(keyLongWord)){
                    keyWordsArrayFilterIng.push(keyLongWord);
                }
            }
        }
    }
}

// recherche d'une correspondance entre les mots cléfs et les mots ingredients / noms / description dans searchBar
function createCorrespondantWordArray(keyWordSearch){ 
    for (var i = 0; i < ingredientsArray.length; i++){
        var ingredientWordListResearch = ingredientsArray[i];
        for(var j=0; j<keyWordSearch.length; j++) {
            var wordSearch= keyWordSearch[j];
            if(ingredientWordListResearch.includes(wordSearch)) {
                correspondantWords.push(ingredientWordListResearch);                    
            }
            // console.log(correspondantWords)
        }
    }
    for (var i = 0; i < recipeArray.length; i++){
        var nameWordListResearch = recipeArray[i];
        for(var j=0; j<keyWordSearch.length; j++) {
            var wordSearch= keyWordSearch[j];
            if(nameWordListResearch.includes(wordSearch)) {
                correspondantWords.push(nameWordListResearch);                    
            }
        }
    }
    for (var i = 0; i < descriptionArray.length; i++){
        var descriptWordListResearch = descriptionArray[i];
        for(var j=0; j<keyWordSearch.length; j++) {
            var wordSearch= keyWordSearch[j];
            if(descriptWordListResearch.includes(wordSearch)) {
                correspondantWords.push(descriptWordListResearch);                    
            }
        }
    }
}
function createCorrespondantWordArrayFilterIng(array){ 
    for (var i = 0; i < ingredientsArray.length; i++){
        var ingredientWordListResearch = ingredientsArray[i];
        for(var j=0; j<array.length; j++) {
            var wordSearch= array[j];
            if(ingredientWordListResearch.includes(wordSearch)) {
                correspondantWords.push(ingredientWordListResearch);                    
            }
            // console.log(correspondantWords)
        }
    }
}

// console.log(correspondantWords)

// function searchRecipes(keywords){

//     // recipeResult=[];
  

//     for(var i=0; i< recipes.length ; i++){
//         var recipe=recipes[i];
//         // console.log("---------------------TEST--------------------------")
//         // console.log(recipe.ingredients)

//         for( var indexKeywords=0; indexKeywords<keywords.length -1; indexKeywords++){
//             var keyword=keywords[indexKeywords];
//             var appliance = recipe.appliance.toLocaleLowerCase();
//             cleanWordCharactere(appliance);
//             if( appliance == keyword) {
//                 if(!recipeResult.includes(recipe)){
//                     recipeResult.push(recipe);
//                 }
//             }
//             var description = recipe.description.toLocaleLowerCase();
//             cleanWordCharactere(description);
//             if(description == keyword){
//                 if(!recipeResult.includes(recipe)){
//                     recipeResult.push(recipe);
//                 }
//             }
//             var name = recipe.name.toLocaleLowerCase();
//             cleanWordCharactere(name);
//             if(name == keyword){
//                 if(!recipeResult.includes(recipe)){
//                     recipeResult.push(recipe);
//                 }
//             }
//             // for(var j=0; j< recipe.ingredients.length; j++){
//             //     var ingredient=recipe.ingredients[j].toLocaleLowerCase();
//             //     cleanWordCharactere(ingredient);
//             //     if(ingredient.name.includes(keyword)){
//             //         if(!recipeResult.includes(recipe)){
//             //             recipeResult.push(recipe);
//             //         }
//             //     }
//             // }
//             // for(var k=0; k< recipes.ustensils.length ; k++){
//             //     var ustensil=recipes.ustensils[k].toLocaleLowerCase();
//             //     cleanWordCharactere(ustensil);
//             //     if(ustensil.name.includes(keyword)){
//             //         if(!recipeResult.includes(recipe)){
//             //             recipeResult.push(recipe);
//             //         }
//             //     }
//             // }

//         }
//     }
// }


// Etablir le tableau des Recettes filtrées suivant ingredient filtrés
function createRecipeResult(array){
     for(var i=0; i< array.length; i++) {
        var recipe=array[i];
        var ingredients= recipe.ingredients;
        for(var j=0; j < ingredients.length; j++){
            var ingredientBrut= ingredients[j].ingredient;
            var ingredient= ingredientBrut.toLowerCase();
            cleanWordCharactere(ingredient);
            ingredient=ingredient.replace(/'/g," ");
            for(var k=0; k<correspondantWords.length; k++){
                var elementCor=correspondantWords[k];
                if(ingredient.includes(elementCor)){
                    if(!recipeResult.includes(recipe)){
                        recipeResult.push(recipe);
                    }
                }
            }
        }
        for(var j=0; j<array.length; j++){
            var recipeName= array[i].name;
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
        for(var j=0; j<array.length; j++){
            var recipeDescript= array[i].description;
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
function createRecipeResult2(array){
    for(var i=0; i< array.length; i++) {
       var recipe=array[i];
       var ingredients= recipe.ingredients;
    //    var ustensils=recipe.ustensils;
       for(var j=0; j < ingredients.length; j++){
           var ingredientBrut= ingredients[j].ingredient;
           var ingredient= ingredientBrut.toLowerCase();
           cleanWordCharactere(ingredient);
           ingredient=ingredient.replace(/'/g," ");
        //    for(var k=0; k<correspondantWords.length; k++){
        //        var elementCor=correspondantWords[k];
            if(ingredient.includes(searchFilterIng.value)){
                if(!recipeResult2.includes(recipe)){
                    recipeResult2.push(recipe);
                }
            }
        }
    // }
// }
    //    for(var j=0; j<ustensils.length; j++){
    //        var ustensilsBrut= ustensils[j];
    //        var ustensil=ustensilsBrut.toLowerCase();
    //        cleanWordCharactere(ustensil);
    //        ustensil=ustensil.replace(/'/g," ");
    //     //    for(var k=0; k<correspondantWords.length; k++){
    //     //        var elementCor=correspondantWords[k];
    //         if(ustensil.includes(searchFilterUst.value)){
    //             if(!recipeResult2.includes(recipe)){
    //                 recipeResult2.push(recipe);
    //             }
    //         }
    //     }
    }
}
    //    for(var j=0; j<array.length; j++){
    //        var recipeDescript= array[i].description;
    //        var descript=recipeDescript.toLowerCase();
    //        cleanWordCharactere(descript);
    //        descript=descript.replace(/'/g," ");
    //        for(var k=0; k<correspondantWords.length; k++){
    //            var elementCor=correspondantWords[k];
    //            if(descript.includes(elementCor)){
    //                if(!recipeResult.includes(recipe)){
    //                    recipeResult.push(recipe);
    //                }
    //            }
    //        }
    //    }
//    }
// }

// function createRecipeResultFilterIng(array){
//     for(var i=0; i< array.length; i++) {
//        var recipe=array[i];
//        var ingredients= recipe.ingredients;
//        for(var j=0; j < ingredients.length; j++){
//            var ingredientBrut= ingredients[j].ingredient;
//            var ingredient= ingredientBrut.toLowerCase();
//            cleanWordCharactere(ingredient);
//         //    ingredient=ingredient.replace(/'/g," ");
//            for(var k=0; k<keyWordsArrayFilterIng.length; k++){
//                var elementCor=keyWordsArrayFilterIng[k];
//                if(ingredient.includes(elementCor)){
//                    recipeResult=[];
//                    if(!recipeResult.includes(recipe)){
//                        recipeResult.push(recipe);
//                    }
//                }
//            }
//        }
//     }
// }




// montrer les recettes dans le HTML
function createRecipesCards(array) {
    var recipeList = document.getElementById("recipes-list");
    recipeList.innerHTML = "";
    for(var i = 0; i < array.length; i++) {
        var recipe = array[i];
        
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

// 5. L’utilisateur précise sa recherche grâce à l’un des champs : ingrédients, ustensiles, appareil.
// Au fur et à mesure du remplissage les mots clés ne correspondant pas à la frappe dans le
// champ disparaissent. Par exemple, si l’utilisateur entre “coco” dans la liste d’ingrédients,
// seuls vont rester “noix de coco” et “lait de coco”.




// ---------------------------Montrer les elements dans Tags Filtre-------------- 

// Tags Ingredients : liste des ingredients

function showTagsIngredients() {
    ingredientsArray.sort()
     for(var i=0; i<ingredientsArray.length-1 ; i++ ){
        var ingredientA = ingredientsArray[i];
        var listContainer= document.getElementById("ingredients_menu");
        var listItem = document.createElement("li");
        listItem.className="dropdown-item text-white bg-primary";
        listItem.id="ingredient-tag";
        listItem.addEventListener("click", createSelectedTagIngredient);
        listItem.textContent = ingredientA;
        listContainer.appendChild(listItem);
    }
}
// Tags Ingredients : Ingredients sélectionnés
var tagsSelectedArray=[];
var tagIngredientSearchArray= [];
function createSelectedTagIngredient(event){
    var tagedIngredient = event.target;
    var ingredientTaged= tagedIngredient.textContent;
    var selectedTag=document.getElementById("selected_tag_ing");
   
    var tagItem=document.createElement("div");
    tagItem.className= "selected-Tag text-white bg-primary"
    tagItem.id= "selected-Tag-Ingredient"
    tagItem.textContent=ingredientTaged;
    
    var tagIcone=document.createElement("i");
    tagIcone.className="bi bi-x-circle cross-icone";
    tagIcone.addEventListener("click", closeTagFilterIng);

    selectedTag.appendChild(tagItem);
    tagItem.appendChild(tagIcone);
    
     
    if(!tagIngredientSearchArray.includes(ingredientTaged)){
        tagIngredientSearchArray.push(ingredientTaged);
        }
    else{selectedTag.removeChild(tagItem)
    }

    // if(!tagsSelectedArray.includes(ingredientTaged)){
    //     tagsSelectedArray.push(ingredientTaged)
    //     }

    // console.log(tagsSelectedArray);
    // console.log(tagIngredientSearchArray);
    
   
}

// Tags Appareils

function showTagsAppareils() {
    applianceArray.sort();
    for(var i=0; i<applianceArray.length ; i++ ){
        var appareil = applianceArray[i];
        var listContainer= document.getElementById("appareils_menu");
        var listItem = document.createElement("li");
        listItem.id="appareil-tag";
        listItem.addEventListener("click", createSelectedTagAppareils);
        listItem.className="dropdown-item text-white bg-danger";
        listItem.textContent = appareil;
        listContainer.appendChild(listItem);
    }
}
// Tags Appareils : Appareils sélectionnés
var tagAppareilSearchArray= [];
function createSelectedTagAppareils(event){
    var tagedAppareil = event.target;
    var appareilTaged= tagedAppareil.textContent;
    var selectedTag=document.getElementById("selected_tag_app");
   
    var tagItem=document.createElement("div");
    tagItem.className= "selected-Tag text-white bg-danger"
    tagItem.id = "selected-Tag-Appareil"
    tagItem.textContent=appareilTaged;
    
    var tagIcone=document.createElement("i")
    tagIcone.className="bi bi-x-circle cross-icone"
    tagIcone.addEventListener("click", closeTagFilterApp);
   
    selectedTag.appendChild(tagItem);
    tagItem.appendChild(tagIcone);

    if(!tagAppareilSearchArray.includes(appareilTaged)){
        tagAppareilSearchArray.push(appareilTaged);
        }
    else{selectedTag.removeChild(tagItem)};

    
    // if(!tagsSelectedArray.includes(appareilTaged)){
    //     tagsSelectedArray.push(appareilTaged)
    //     }

    // console.log(tagsSelectedArray);
    // console.log(tagAppareilSearchArray);
  



}

// Tags Ustensils
function showTagsUstensils() {
    ustensilArray.sort();
    for(var i=0; i<ustensilArray.length ; i++ ){
        var ustensilA = ustensilArray[i];
    
        var listContainer= document.getElementById("ustensils_menu");
        var listItem = document.createElement("li");
        listItem.className="dropdown-item text-white bg-success";
        listItem.id="appareil-tag";
        listItem.addEventListener("click", createSelectedTagUstensils);
        listItem.textContent = ustensilA;
        listContainer.appendChild(listItem);
    }
}
// Tags Ustensils : Ustensils sélectionnés
var tagUstensilSearchArray=[];
function createSelectedTagUstensils(event){
    var tagedUstensil = event.target;
    var ustensilTaged= tagedUstensil.textContent;
    
    tagUstensilSearch = ustensilTaged

    var selectedTag=document.getElementById("selected_tag_ust");
    
    var tagItem=document.createElement("div");
    tagItem.className= "selected-Tag text-white bg-success"
    tagItem.id= "selected-Tag-Ustensil";
    tagItem.textContent=ustensilTaged;
   
    var tagIcone=document.createElement("i")
    tagIcone.className="bi bi-x-circle cross-icone"
    tagIcone.addEventListener("click", closeTagFilterUst);

    selectedTag.appendChild(tagItem);
    tagItem.appendChild(tagIcone);

    if(!tagUstensilSearchArray.includes(ustensilTaged)){
        tagUstensilSearchArray.push(ustensilTaged);
        }
    else{selectedTag.removeChild(tagItem)};

    // if(!tagsSelectedArray.includes(ustensilTaged)){
    //     tagsSelectedArray.push(ustensilTaged)
    //     }

    
    // console.log(tagsSelectedArray);
    // console.log(tagUstensilSearchArray);
  
}
// console.log("tagsSelectedArray");
// console.log(tagsSelectedArray);


//  Cacher les Tags Array

function closeTags() {
    // console.log("Recettes");
    // console.log(recipes)
    
    var ingredientsList = document.getElementById("ingredients_menu");
    ingredientsList.innerHTML = "";
    var appareilsList = document.getElementById("appareils_menu");
    appareilsList.innerHTML = "";
    var ustensilsList = document.getElementById("ustensils_menu");
    ustensilsList.innerHTML = "";
} 

// close tags when the cross is selected
function closeTagFilterIng(event){
    var selectedTagedFilter = event.target;
    var tagFilter= selectedTagedFilter.parentElement;
   
    var indexOfTagFilterToDelete = tagIngredientSearchArray.lastIndexOf(tagFilter.textContent)
    tagIngredientSearchArray.splice(indexOfTagFilterToDelete,1);
    var indexOfTagSelectedToDelete= tagsSelectedArray.lastIndexOf(tagFilter.textContent)
    tagsSelectedArray.splice(indexOfTagSelectedToDelete)
    console.log("test suppression tableau tagSelected");
    console.log(tagsSelectedArray);
    console.log(tagIngredientSearchArray);

    
    var tagFilterParentIng = document.getElementById("selected_tag_ing")
    tagFilterParentIng.removeChild(tagFilter);
    

       
    // filtrerMesRecettesEnFonctiondestag(tagFilter.textContent)
}
function closeTagFilterApp(event){
    var selectedTagedFilter = event.target;
    var tagFilter= selectedTagedFilter.parentElement;

    var indexOfTagFilterToDelete = tagAppareilSearchArray.lastIndexOf(tagFilter.textContent)
    tagAppareilSearchArray.splice(indexOfTagFilterToDelete,1);
    var indexOfTagSelectedToDelete= tagsSelectedArray.lastIndexOf(tagFilter.textContent)
    tagsSelectedArray.splice(indexOfTagSelectedToDelete)
    console.log("test suppression tableau tagSelected");
    console.log(tagsSelectedArray);
    console.log(tagAppareilSearchArray)
   
    var tagFilterParentApp = document.getElementById("selected_tag_app")
    tagFilterParentApp.removeChild(tagFilter);
    
    // filtrerMesRecettesEnFonctiondestag(tagFilter.textContent)
}
function closeTagFilterUst(event){
    var selectedTagedFilter = event.target;
    var tagFilter= selectedTagedFilter.parentElement;
    
    var indexOfTagFilterToDelete = tagUstensilSearchArray.lastIndexOf(tagFilter.textContent)
    tagUstensilSearchArray.splice(indexOfTagFilterToDelete,1);
    var indexOfTagSelectedToDelete= tagsSelectedArray.lastIndexOf(tagFilter.textContent)
    tagsSelectedArray.splice(indexOfTagSelectedToDelete)
    console.log("test suppression tableau tagSelected");
    console.log(tagsSelectedArray);
    console.log(tagUstensilSearchArray)
    
   
    var tagFilterParentUst = document.getElementById("selected_tag_ust")
    tagFilterParentUst.removeChild(tagFilter);
    
    // filtrerMesRecettesEnFonctiondestag(tagFilter.textContent)
}



    
// Etablir un tableau des ingredients des recettes filtrées
// console.log(recipeResult)
function createIngredientFilterArray(array){
    ingredientsFilterArray=[];
    for(var i=0; i< array.length; i++) {
        var itemIngredientsFilterArray= array[i].ingredients;
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
// console.log("IngredientFilterArray");
// console.log(ingredientsFilterArray);

//  Etablir un tableau des Ustensiles des recettes filtrées
function createUstensilsFilterArray(array){
    ustensilsFilterArray=[];
    for(var i=0; i< array.length; i++) {
        var itemUstensilsFilterArray= array[i].ustensils;
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
// console.log("UstensilsFilterArray");
// console.log(ustensilsFilterArray);

//  Etablir un tableau des Appareils des recettes filtrées
function createApplianceFilterArray(array){
    appliancesFilterArray=[]
    for(var i=0; i< array.length; i++) {
        var applianceFilterBrut= array[i].appliance;
        var applianceFilter= applianceFilterBrut.toLowerCase();
        cleanWordCharactere(applianceFilter);
        applianceFilter=applianceFilter.replace(/'/g," ");
        if(!appliancesFilterArray.includes(applianceFilter)){
            appliancesFilterArray.push(applianceFilter);
        }
    }
}
// console.log("AppareilFilterArray");
// console.log(appliancesFilterArray);

// ------------------------------------------Montrer les elements dans Tags des recettes filtrées
// Tags Ingredients
function showTagsIngredientsFilter() {

    // for(var i = 0; i < recipeResult.length -1; i++) {
    //     var recipe = recipeResult[i];
    //     var ingredientsArray = recipe.ingredients;
        // 
        // for (let i = 0; i < ingredientsArray.length; i++) {
        //     var ingredientsFilterArray = ingredientsArray[i].ingredient;
            
        ingredientsFilterArray.sort();
        console.log(ingredientsFilterArray);
        for(var j=0; j<ingredientsFilterArray.length ; j++ ){
            var ingredientA = ingredientsFilterArray[j];
            var listContainer= document.getElementById("ingredients_menu");
            var listItem = document.createElement("li");
            listItem.className="dropdown-item text-white bg-primary  ";
            listItem.id="tag-ingredient grid";
            listItem.addEventListener("click", createSelectedTagIngredient);
            listItem.textContent = ingredientA;
            listContainer.appendChild(listItem);recipeResultFilter = [];
        
        }
    // } console.log(recipe)
    
    // }

    
}

// Tags Appareils
function showTagsAppareilsFilter() {

    // for(var i = 0; i < recipeResult.length -1; i++) {
    //     var recipe = recipeResult[i];
    //     console.log(recipe)
    // }
    appliancesFilterArray.sort();
    for(var i=0; i<appliancesFilterArray.length ; i++ ){
        var appareil = appliancesFilterArray[i];
        var listContainer= document.getElementById("appareils_menu");
        var listItem = document.createElement("li");
        listItem.className="dropdown-item text-white bg-danger ";
        listItem.id="tag-appareil grid";
        listItem.addEventListener("click", createSelectedTagAppareils);
        listItem.textContent = appareil;
        listContainer.appendChild(listItem);
    } 
}

// Tags Ustensils
function showTagsUstensilsFilter() {

    // for(var i = 0; i < tableau.length; i++) {
    //     var recipe = tableau[i];
    //     // console.log(recipe)
    // }
    ustensilsFilterArray.sort();
    for(var i=0; i<ustensilsFilterArray.length ; i++ ){
        var ustensilA = ustensilsFilterArray[i];
        var listContainer= document.getElementById("ustensils_menu");
        var listItem = document.createElement("li");
        listItem.className="dropdown-item text-white bg-success";
        listItem.id="tag-ustensil grid";
        listItem.addEventListener("click", createSelectedTagUstensils);
        listItem.textContent = ustensilA;
        listContainer.appendChild(listItem);
    }
}

// function showFilterByResearchTag() {

//     ingredientsFilterArray.sort()
//     console.log(ingredientsArray)
//     console.log(ingredientsFilterArray)
//     if(ingredientsFilterArray.length > 0) {
//         for(var i=0; i<ingredientsFilterArray.length ; i++ ){
//             var ingredientA = ingredientsFilterArray[i];
//             var listContainer= document.getElementById("ingredients_menu");
//             var listItem = document.createElement("li");
//             listItem.className="dropdown-item text-white bg-primary  ";
//             listItem.id="tag-ingredient grid";
//             listItem.addEventListener("click", createSelectedTagIngredient);
//             listItem.textContent = ingredientA;
//             listContainer.appendChild(listItem);
        
//         }
//     }
//     else{
//         for(var i=0; i<ingredientsArray.length-1 ; i++ ){
//             var ingredientA = ingredientsArray[i];
//             var listContainer= document.getElementById("ingredients_menu");
//             var listItem = document.createElement("li");
//             listItem.className="dropdown-item text-white bg-primary  ";
//             listItem.id="tag-ingredient grid";
//             listItem.addEventListener("click", createSelectedTagIngredient);
//             listItem.textContent = ingredientA;
//             listContainer.appendChild(listItem);
        
//         }
//     }
// }
// 

// function menuDeroulantIng(){
//     document.getElementById("ingredients_menu").classList.toggle("grid");
  
// }

// function menuDeroulantApp(){
//     document.getElementById("appareils_menu").classList.toggle("grid");
// }

// function menuDeroulantUst(){
//     document.getElementById("ustensils_menu").classList.toggle("grid");
// }