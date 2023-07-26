const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers:{
        "Content-Type": "application/json;charset=utf-8"
    },
    params:{
        'api_key': API_KEY,
    }
});

async function getTrendingMoviesPreview(){
    const { data } = await api('trending/movie/day');
    const movies = data.results;

    trendingPreviewMoviesConteiner.innerHTML = ""
    movies.forEach(element => {
//const trendingPreviewMoviesConteiner = document.querySelector("#trendingPreview .trendingPreview-movieList ")

        const movieConteiner = document.createElement("div");
        movieConteiner.classList.add('movie-container');

        const movieImg = document.createElement("img");
        movieImg.classList.add("movie-img");
        movieImg.setAttribute("alt", element.title);
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + element.poster_path);

        movieConteiner.appendChild(movieImg);
        trendingPreviewMoviesConteiner.appendChild(movieConteiner)
    });
}


//API que apunta a "Movie Lista" para las categorias
async function getCategoriesPreview(){
    const { data } = await api('/genre/movie/list');
    const generos = data.genres

    categoriesPreviewSection .innerHTML = ""
    generos.forEach(element => {
       //const categoriesPreviewMoviesConteiner = document.querySelector("#categoriesPreview .categoriesPreview-list ")

        const div = document.createElement("div");
        div.classList.add("category-container");
        const h3 = document.createElement("h3");
        h3.setAttribute("id",'id' + element.id)
        h3.classList.add("category-title");
        h3.textContent = element.name
        
        h3.addEventListener("click", e =>{
            location.hash =`#category=${ element.id}-${ element.name}`
        })

        div.appendChild(h3);
        categoriesPreviewSection .appendChild(div);
    });
}


async function getMoviesByCategory(id){
    const { data } = await api('discover/movie',{
        params:{
            with_genres: id
        }
    });
    const movies = data.results;
    console.log(movies);
//Esta linea nos ayuda a borrar ir borrando las solicitudes de las apis y que no se nos junten
    genericSection.innerHTML = ""
    movies.forEach(element => {

        const movieConteiner = document.createElement("figcaption");
        movieConteiner.classList.add('movie-container');

        const movieImg = document.createElement("img");
        movieImg.classList.add("movie-img");

        const title = document.createElement("figure")
        title.textContent = element.original_title

        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + element.backdrop_path);

        movieConteiner.appendChild(movieImg);
        movieConteiner.appendChild(title)
        genericSection.appendChild(movieConteiner)
    });
}

async function getMoviesBysearch(query){
    const { data } = await api('search/movie',{
        params:{
            query,
        }
    });
    const movies = data.results;
    console.log(movies);
//Esta linea nos ayuda a borrar ir borrando las solicitudes de las apis y que no se nos junten
    genericSection.innerHTML = ""
    movies.forEach(element => {

        const movieConteiner = document.createElement("figcaption");
        movieConteiner.classList.add('movie-container');

        const movieImg = document.createElement("img");
        movieImg.classList.add("movie-img");

        const title = document.createElement("figure")
        title.textContent = element.original_title

        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + element.backdrop_path);

        movieConteiner.appendChild(movieImg);
        movieConteiner.appendChild(title)
        genericSection.appendChild(movieConteiner)
    });
}


async function getTrendingMovies(){
    const { data } = await api('trending/movie/day');
    const movies = data.results;

    genericSection.innerHTML = ""
    movies.forEach(element => {
//const trendingPreviewMoviesConteiner = document.querySelector("#trendingPreview .trendingPreview-movieList ")

        const movieConteiner = document.createElement("div");
        movieConteiner.classList.add('movie-container');

        const movieImg = document.createElement("img");
        movieImg.classList.add("movie-img");
        movieImg.setAttribute("alt", element.title);
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + element.poster_path);

        movieConteiner.appendChild(movieImg);
        genericSection.appendChild(movieConteiner)
    });
}

async function description(){
    const { data } = await api('discover/movie');
    const movie = await data.results
    genericSection.innerHTML = ""

    document.addEventListener("click", e =>{
        if (e.target.matches(".movie-container *")) {
            movie.forEach(element => {
                const movieConteiner = document.createElement("div");
                movieConteiner.classList.add('movie-container');        
                location.hash = '#movie=' + element.id

            });
        }
    })
}





getTrendingMoviesPreview()
getCategoriesPreview()
getMoviesByCategory()
description()
