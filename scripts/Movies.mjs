//this is for displaying all movies and serach input

import {creatHeaderAndFooter} from './Functions.mjs';
import MovieFinder from './MovieFinder.mjs';

const header = '/wdd330_final_project/snippets/header.html';
const footer = '/wdd330_final_project/snippets/footer.html';

creatHeaderAndFooter(header, footer);

const inputElement = document.querySelector(".searchInput");
inputElement.addEventListener("input", async (e) => {
    e.preventDefault();

    const movieFinder = new MovieFinder(".searchInput");
    const data = await movieFinder.getInputValue();

    console.log(data);


    movieFinder.buildMovieSearched(data, ".movieSearchContainer");
});


