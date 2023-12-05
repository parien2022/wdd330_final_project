//This is to build a dynamic movide search input with the correct catalog of movies
import MovieCatalog from './MovieCatalog.mjs';

function moviesFoundTemplate(movie) {
    if(movie.poster_path == undefined){
        return;
    }
    const newItem = `
    <div class="movieSearched">
    <a class="moviesLink" href="/wdd330_final_project/movieInfo/index.html?movieId=${movie.id}"><img class="movieImgSearch" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/>
    <p class="movieTitle">${movie.title}</p></a>
    </div>
    `;
  
    return newItem;
  }


export default class MovieFinder{
    constructor(inputSelector){
        this.inputSelector = inputSelector;
    }

    async getInputValue(){
        
            const searchInput = document.querySelector(this.inputSelector);
            console.log("Value: " + searchInput);
        
            const query = searchInput.value;
            console.log("Query: " + query);
        
            let url = `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&api_key=bb930f2a8368fa7042a25742d750800f`;
        
            const movieCatalog = new MovieCatalog(url);
            const allData = await movieCatalog.renderMovieContents();

            const data = allData.results;
            
            return data;

    }

    buildMovieSearched(data, parentSelector){
        const htmlItems = data.map((movie) => moviesFoundTemplate(movie));
        document.querySelector(parentSelector).innerHTML = htmlItems.join("");
      }
}
