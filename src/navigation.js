document.addEventListener("click",async e =>{
    if (e.target.matches("#searchBtn")) {
        location.hash = "#search=" + searchFormInput.value;


    }
    if (e.target.matches(".header-arrow")) {
//Para que la flecha nos mande a la pagina anterior
        history.back();

    }
    if (e.target.matches(".trendingPreview-btn")) {
        location.hash = "#trends"
    }
 
})





//Este evento no solo queremos que ejecute cuando cambien el "hash" si no tambien cuando cargue nuestra aplicacion
window.addEventListener("DOMContentLoaded", navigator, false);

//El tercer parámetro "false" en la función window.addEventListener es un valor booleano que indica si el evento debe ser manejado en la fase de captura o en la fase de burbujeo.
window.addEventListener("hashchange", navigator, false);

function navigator(){
//Si la ruta despues del hash empieza con "trends" ejecutamos este condicional
//"startsWith" para saber si una cadena empieza con cierta palabra
    if (location.hash.startsWith('#trends')) {
        trendsPage()
    }
    else if(location.hash.startsWith('#search=')){
        searchPage();
    }
//En este if aputara a los detalles de una pelicula usaremos el "id" de la pelicula
    else if(location.hash.startsWith('#movie=')){
        movieDetailsPage();
    }
//Con este haremos un llamado a la API para que nos lanze las peliculas con por ejmplo la categoria "37"
    else if(location.hash.startsWith('#category=')){
        categoriesPage();
    }
//Si no se cumple ninguna que nos lance al home y ya
    else{
        home()
    }
}





function home(){
    headerSection.classList.remove("header-container--long");
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');

    headerTitle.classList.remove("inactive");
    headerCategoryTitle.classList.add("inactive");
    searchForm.classList.remove("inactive");

    trendingPreviwSection.classList.remove("inactive");
    categoriesPreviewSection.classList.remove("inactive");
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add("inactive")

    getTrendingMoviesPreview()
    getCategoriesPreview()
    
}
function categoriesPage(){
    console.log("categorias");

    headerSection.classList.remove("header-container--long");
    headerSection.style.background = '';

    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');

    headerTitle.classList.add("inactive");
    headerCategoryTitle.classList.remove("inactive");
    searchForm.classList.add("inactive");

    trendingPreviwSection.classList.add("inactive");
    categoriesPreviewSection.classList.remove("inactive");
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add("inactive");

    const [_, categoryData] = location.hash.split('=')
    const [categoryId, categoryName] = categoryData.split('-');

    headerCategoryTitle.innerHTML = categoryName;

    getMoviesByCategory(categoryId);
}


function movieDetailsPage(){
    console.log("detalles movie");

    headerSection.classList.add("header-container--long");
    //headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');

    headerTitle.classList.add("inactive");
    headerCategoryTitle.classList.remove("inactive");
    searchForm.classList.add("inactive");

    trendingPreviwSection.classList.add("inactive");
    categoriesPreviewSection.classList.add("inactive");
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove("inactive")

 
    
}
function searchPage(){
    console.log("buscar");

    
    headerSection.classList.remove("header-container--long");
    headerSection.style.background = '';

    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');

    headerTitle.classList.add("inactive");
    headerCategoryTitle.classList.add("inactive");
    searchForm.classList.remove("inactive");

    trendingPreviwSection.classList.add("inactive");
    categoriesPreviewSection.classList.add("inactive");
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add("inactive");

    

}

function trendsPage(){
    console.log("trends");
    
    headerSection.classList.remove("header-container--long");
    headerSection.style.background = '';

    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');

    headerTitle.classList.add("inactive");
    headerCategoryTitle.classList.remove("inactive");
    searchForm.classList.add("inactive");

    trendingPreviwSection.classList.add("inactive");
    categoriesPreviewSection.classList.add("inactive");
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add("inactive")

    headerCategoryTitle.innerHTML = "Tendencias 🔥"
    getTrendingMovies()
}
