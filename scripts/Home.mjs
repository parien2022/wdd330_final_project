import {creatHeaderAndFooter, addToWishList} from './Functions.mjs';
import {setUserInfo} from './MovieCatalog.mjs';
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

addToWishList(".myListLink", data);

setUserInfo();


