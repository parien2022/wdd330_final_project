import {creatHeaderAndFooter, setLocalStorage, getLocalStorage} from './Functions.mjs';
import MovieCatalog from './MovieCatalog.mjs';

const header = '/wdd330_final_project/snippets/header.html';
const footer = '/wdd330_final_project/snippets/footer.html';

creatHeaderAndFooter(header, footer);

//This is for displaying home page with trending movies

const url = 'https://api.themoviedb.org/3/movie/popular?api_key=bb930f2a8368fa7042a25742d750800f';

const movieCatalog = new MovieCatalog(url);
const allData = await movieCatalog.renderMovieContents();
const data = allData.results;

movieCatalog.buildTrendingMoviesCatalog(data);


document.querySelectorAll(".myListLink").forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    
        const movieId = link.getAttribute('data-movie-id');

        const wishList = getLocalStorage("whisList") || [];

        
        const movieIndex = data.findIndex((movie) => movie.id == movieId);
        const wishData = data[movieIndex];

        const movieCheck = wishList.find((movie) => movie.id == movieId);

        if(!movieCheck){

            wishList.push(wishData);
            setLocalStorage("whisList", wishList);

            alert(`${wishData.title} successfully added to wish list.`);

        }else{

            alert(`${wishData.title} is already in wish list.`);
        }
        
    });
});

