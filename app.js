
const searchMeals = () => {
    const searchInput = document.getElementById('search-box').value;
    // console.log(searchInput);
    if(searchInput===""){
        alert('At first type value input box then click search button')
    }
    else{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
 
        fetch(url)
            .then(res => res.json())
            .then(data => displayMeals(data.meals))
    }
    

}

const displayMeals = meals => {
    const mealContainer = document.getElementById('meals');
    meals.forEach(meal => {
        const singleMeal = document.createElement('div');
        singleMeal.className = 'single-meal';
        singleMeal.innerHTML = `  

            <div onclick=" showDetails('${meal.strMeal}')" class="show-details">
            <img  src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
            </div>
            <div class="meal-info" data-mealID="${meal.idMeal}">
                <h4>${meal.strMeal}</h4>
            </div>              
        `;

        mealContainer.appendChild(singleMeal);
    })

}

   showDetails = (searchInput) => {
       console.log(searchInput);
    
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            const dataMeal = data.meals[0];
            console.log(dataMeal);

            const showDataInfo = document.getElementById('showMealList');
            const mealInfo = `
            <div class="detailsInfo">
                <div> 
                    <img src="${dataMeal.strMealThumb}">
                    <h3 style="color:white;">${dataMeal.strMeal}</h3>
                </div>               
                <ul class="Ingredient" style="color:white">
                    <li><i class="far fa-square"></i> ${dataMeal.strIngredient1}</li>
                    <li> <i class="far fa-square"></i>${dataMeal.strIngredient2}</li>
                    <li><i class="far fa-square"></i> ${dataMeal.strIngredient3}</li>
                    <li><i class="far fa-square"></i> ${dataMeal.strIngredient4}</li>
                    <li> <i class="far fa-square"></i>${dataMeal.strIngredient5}</li>
                    <li><i class="far fa-square"></i> ${dataMeal.strIngredient6}</li>
                </ul>

            </div>
                       
           `;        
            showDataInfo.innerHTML = mealInfo;           
        })


}