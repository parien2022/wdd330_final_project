import {getMovieApiData} from './Functions.mjs';

function movieItemTemplate(movie) {
    const newItem = `
    <div class="movieCatalog">
    <img class="movieImg" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/>
    <p class="movieTitle">${movie.title}</p>
    </div>
    `;
  
    return newItem;
  }
  
  export  default class MovieCatalog {
    constructor(url, parentSelector) {
      this.url = url;
      this.parentSelector = parentSelector;
    }
    
    async renderMovieContents() {
      const movieData = await getMovieApiData(this.url);

      const movieItems = movieData.results;

      const htmlItems = movieItems.map((movie) => movieItemTemplate(movie));
      document.querySelector(this.parentSelector).innerHTML = htmlItems.join("");
    }
  }