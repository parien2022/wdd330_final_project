import {getMovieApiData} from './Functions.mjs';

//Using api url and parent selector builds a dynamic catalog of trending movies

function movieTrendingTemplate(movie) {
    const newItem = `
    <div class="movieCatalog">
      <div class="myListBack"></div>
      <a class="myListLink" title="Add to wish list" href="#" data-movie-id="${movie.id}"><span class="myListCross">&#x271A;</span></a>
      <a class="moviesLink" href="/wdd330_final_project/movieInfo/index.html?movieId=${movie.id}"><img class="movieImg" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/>
      <p class="movieTitle">${movie.title}</p></a>
    </div>
    `;
  
    return newItem;
  }

  
  
  export default class MovieCatalog {
    constructor(url, parentSelector = ".movieCatalogContainer") {
      this.url = url;
      this.parentSelector = parentSelector;
    }
    
    async renderMovieContents() {
      const movieData = await getMovieApiData(this.url);
      return movieData;
    }

    buildTrendingMoviesCatalog(data){
      const htmlItems = data.map((movie) => movieTrendingTemplate(movie));
      document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");
    }

  }