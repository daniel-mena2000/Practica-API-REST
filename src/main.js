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

    movies.forEach(element => {
        const trendingPreviewMoviesConteiner = document.querySelector("#trendingPreview .trendingPreview-movieList ")

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
    console.log(generos);

    generos.forEach(element => {
        const categoriesPreviewMoviesConteiner = document.querySelector("#categoriesPreview .categoriesPreview-list ")

        const div = document.createElement("div");
        div.classList.add("category-container");
        const h3 = document.createElement("h3");
        h3.setAttribute("id",'id' + element.id)
        h3.classList.add("category-title");
        h3.textContent = element.name

        div.appendChild(h3);
        categoriesPreviewMoviesConteiner.appendChild(div)



    });
}

getTrendingMoviesPreview()
getCategoriesPreview()