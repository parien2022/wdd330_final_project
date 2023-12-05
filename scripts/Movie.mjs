import {creatHeaderAndFooter, getParameter} from './Functions.mjs';
import {movieVideo, buildMovieData} from './MovieInfo.mjs';
import MovieCatalog from './MovieCatalog.mjs';

const header = '/wdd330_final_project/snippets/header.html';
const footer = '/wdd330_final_project/snippets/footer.html';

creatHeaderAndFooter(header, footer);


const movieId = getParameter("movieId");
const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=bb930f2a8368fa7042a25742d750800f`;

const movieCatalog = new MovieCatalog(url);
const data = await movieCatalog.renderMovieContents();
console.log(data);
buildMovieData(data, ".movieInfoContainer");

const url2 =`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=bb930f2a8368fa7042a25742d750800f`
const movieVideos = new MovieCatalog(url2);
const dataVideos = await movieVideos.renderMovieContents();
console.log(dataVideos);
movieVideo(dataVideos, ".videoContainer");

