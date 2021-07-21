//  avancement


console.log("Start Algo");

let ingredientsArray = [];
let appliancesArray = [];
let ustensilsArray = [];
let ingredientFilter = document.getElementById("ingredients-list");


document.addEventListener("DOMContentLoaded", function() {
    // console.log(recipes);
    
    
    createIngredientsList(ingredientsArray);
    console.log("Liste des ingredients");
    console.log(ingredientsArray);
    
    createAppliancesList(appliancesArray);
    console.log("Liste des appareils");
    console.log(appliancesArray);
    
    createUstensilesList(ustensilsArray);
    console.log("Liste des ustensils");
    console.log(ustensilsArray);

    let searchBarInput = document.getElementById("searchbar");
    searchBarInput.addEventListener("change", function(event) {
        let searchText = event.target.value;
        if(searchText !== "") {
            if(ingredientsArray.indexOf(searchText) > -1) {
                let indexOfIngredients = ingredientsArray.indexOf(searchText);
                let ingredient = ingredientsArray[indexOfIngredients];
                console.log("Ingredients visible dans notre tableau");
                console.log(ingredient);
                console.log("Recettes avec cet ingredient :");
                let recipesToShow = searchRecipeFromIngredients(ingredient);
                console.log(recipesToShow);
                showRecipes(recipesToShow);
            }
        }
    });
});


function createIngredientsList(ingredientArrayToAgregate) {
    for(var i = 0; i < recipes.length; i++) {
        let ingredientList = recipes[i].ingredients;
        for(var j = 0; j < ingredientList.length; j++) {
            let ingredient = ingredientList[j].ingredient;
            if(!ingredientArrayToAgregate.includes(ingredient)) {
                ingredientArrayToAgregate.push(ingredient);
            }
        }
        
    }
}



function createUstensilesList(ustensilsArrayToAggregate) {
    for(var i = 0; i < recipes.length; i++) {
        let ustensilsList = recipes[i].ustensils;
        for(var j = 0; j < ustensilsList.length; j++) {
            let ustensil = ustensilsList[j];
            if(!ustensilsArrayToAggregate.includes(ustensil)) {
                ustensilsArrayToAggregate.push(ustensil);
            }
        }
    }
}

function createAppliancesList (applianceArrayToAgregate) {
    for(var n=0; n<recipes.length; n++) {
        let appliance= recipes[n].appliance;
        if(!applianceArrayToAgregate.includes(appliance)) {
            applianceArrayToAgregate.push(appliance);
        }
    }
}

const button = document.getElementById("searchBtn");
button .addEventListener("click", function() {
    let searchBarInput = document.getElementById("searchbar");
    searchBarInput.addEventListener("change", function(event) {
        let searchText = event.target.value;
        console.log(searchText);
        if(searchText !== "") {
            if(ingredientsArray.indexOf(searchText) > -1) {
                let indexOfIngredients = ingredientsArray.indexOf(searchText);
                let ingredient = ingredientsArray[indexOfIngredients];
                console.log("Ingredients visible dans notre tableau");
                console.log(ingredient);
                console.log("Recettes avec cet ingredient :");
                let recipesToShow = searchRecipeFromIngredients(ingredient);
                console.log(recipesToShow);
                showRecipes(recipesToShow);
            }
        }
    })
});    


// const inputSearchBar = document.getElementById("searchbar"); //récuperation des données de searchbar
// inputSearchBar.addEventListener("modify", function (e){ // "écoute" de la donné de l'input searchbar
//     let searchBarText = e.target.value; //création de la variable  "searcBarText" qui est égale à la valeur documentée dans searchbar 
//     if(searchBarText !== ""{
//         let 

//     })
// });
// const searchError = document.getElementById("search_error");
// console.log(inputSearchBar.value);

// function input(){ 
//     if(inputSearchBar.value == "") {
//         searchError.innerHTML = "Essai";
//     }
// }

// console.log("merdum");