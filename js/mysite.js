let ingredientsArray = [];
let appliancesArray = [];
let ustensilsArray = [];
let namesArray = [];
let descriptionsArray = []
// let ingredientFilter = document.getElementById("ingredients-list");


document.addEventListener("DOMContentLoaded", function() {
    // console.log(recipes);

    createNamesList(namesArray);
    console.log("Liste des noms de recette");
    console.log(namesArray);
    
    createIngredientsList(ingredientsArray);
    console.log("Liste des ingredients");
    console.log(ingredientsArray);
    
    createAppliancesList(appliancesArray);
    console.log("Liste des appareils");
    console.log(appliancesArray);
    
    createUstensilesList(ustensilsArray);
    console.log("Liste des ustensils");
    console.log(ustensilsArray);

    createDescriptionsList(descriptionsArray);
    console.log("Liste des descriptions");
    console.log(descriptionsArray);

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

function createNamesList (nameArrayToAgregate) {
    for (var i=0; i<recipes.length; i++) {
        var name = recipes[i].name;
        if(!nameArrayToAgregate.includes(name)) {
            nameArrayToAgregate.push(name);
        }
    }
}

function createDescriptionsList (descriptionArrayToAgregate) {
    for (var i=0; i<recipes.length; i++) {
        var description=recipes[i].description;
        if(!descriptionArrayToAgregate.includes(description)) {
            descriptionArrayToAgregate.push(description);
        }
    }
}

// Récuperer les donner de searchBar
let searchBarInput = document.getElementById("searchbar");
// tableaux des filtres en cft de searchBarInput
let searchingIngredients =[];

// let searchingUstensils =[];
// console.log(searchingUstensils);
// let searchingApplances =[]
// console.log(searchingApplances);

// lire le contenu de searchBar
// searchBarInput.addEventListener("change", function(event) {
//     let searchText = event.target.value; // la variable SearchText = valeur de la cible (ici le texte documenté dans searchBar)
//     // console.log(searchText);
//     if(searchText !== "") {
//         if(searchText.length >3) {// si le nb de caractere du texte est sup à 3
//             let searchValue = searchText.toLowerCase(); // la variable SearchValue = le texte en minuscule
//             console.log(searchValue);
//             if(searchValue.indexOf(" ") != -1) { // si le texte en minuscule comprend des espaces
//                 let searchArray = searchValue.split(" "); // la variable searchArray = séparer searchValue sur le caractere "espace"
//                 console.log("Tableau de recherche par mot");
//                 console.log(searchArray);
//                 for(let i = 0 ; i < searchArray.length; i++) {
//                     let word= searchArray[i]; // la variable word = le tableau des mot recherchés
//                     // console.log(word);
//                     for(let j=0; j<ingredientsArray.length - 1; j++) {
//                         let ingredient = ingredientsArray[j].toLowerCase();
//                         // console.log(ingredient);
//                         if(ingredient.includes(word)) {
//                             searchingIngredient.push(j);
//                         }
//                     }
//                 }
//                 console.log("Ingredients recherchés")
//                 console.log(searchingIngredients);
//             }
//         }
//     }
// });
// 
// Ajout tableau dans le filtre ingrédients
// let ingredientFilter = document.getElementById('ingredients_list');
// var ingredientListHtml = document.createElement('ul');

// for(var i = 0; i < ingredientsArray.length - 1; i++) {
//     var ingredientItemHtml = document.createElement('li');
//     ingredientItemHtml.textContent = ingredientsArray[i];
//     ingredientItemHtml.classList = "ingredients";
//     ingredientListHtml.appendChild(ingredientItemHtml);
// }

// ingredientFilter.appendChild(ingredientListHtml);

