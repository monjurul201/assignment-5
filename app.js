
const searchInput = document.getElementById('search-box');
const SearchBtn = document.getElementById('search-btn');
const showMeals = document.getElementById('meals');
const resultHeading = document.getElementById('result-heading');
const singleMeal = document.getElementById('single-meal');
const searchResult = document.getElementById('search-result')

SearchBtn.addEventListener('click', () => {
    searchMeal();
    searchInput.value = "";
})

function searchMeal() {
    const searchMeals = searchInput.value;
    if (searchMeals.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeals}`)
            .then(response => response.json())
            .then(data => {

                console.log(data);
                searchResult.innerHTML = `<h2 class="searchResult">search result for : ${searchMeals}</h2>`;
                if (data.meals === null) {
                    searchResult.innerHTML = `
                    <p class="searchResult">There Is No Search For This Meal</p>
                    `;
                } else {
                    showMeals.innerHTML = data.meals.map((meal) => `

                        <div class="meal">
                            <div class="show-details">
                            <img  src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
                            </div>
                            <div class="meal-info" data-mealID="${meal.idMeal}">
                                <h4>${meal.strMeal}</h4>
                            </div>
                        </div>
                        
                        `
                    )
                  .join("");
                }
            });
    }
     else {
        alert("Please Write Something input Box.");
    };
}



















































/*const apiKey='870967436c1517d581daf3b245495790'
const displayArea = document.getElementById('show-movies');
const singleDisplayArea = document.getElementById('singleMovie');


function getPopularMovies() {
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => {

        let previousHTML = displayArea.innerHTML;

        data.results.slice(0, 12)
        .map(movie => {
            const htmlTemplate = `
            <div class="col">
                    <div class="card">
                    <img src="https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}" alt="${movie.title}">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <button onclick="movieDetailsView(${movie.id})" class="btn btn-outline-success">View Details</button>
                    </div>
                    </div>
            </div>
            `;
            previousHTML += htmlTemplate;
        })

        displayArea.innerHTML = previousHTML;

    })
    .catch(err => console.log(err.message))
}


function movieDetailsView(id) {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
    .then(res => res.json())
    .then(data => {
       console.log(data);

       displayArea.classList.add('d-none')
       singleDisplayArea.classList.remove('d-none');

       const htmlTemplate = `
        <div class="card">
        <img src="https://image.tmdb.org/t/p/w1280/${data.backdrop_path}" alt="${data.original_title}">
            <div class="card-body">
            <h5 class="card-title">${data.original_title}</h5>

            <p class="card-text">${data.overview}</p>
            </div>
        </div>`
        singleDisplayArea.innerHTML = htmlTemplate;
    })
    .catch(err => console.log(err.message));



}

getPopularMovies()
*/