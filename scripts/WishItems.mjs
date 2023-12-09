import {getLocalStorage, setLocalStorage, displayAlert} from './Functions.mjs';


export function buildWishList(movie){

    const newItem2 = `
    <div class="wishListContainer">
        <div class="movieImgContainerWishList">
        <a class="moviesLink" href="/wdd330_final_project/movieInfo/index.html?movieId=${movie.id}"><img class="movieImgWishList" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/>
        </div>
        <div class="MovieDetailsContainerWishList">
        <h3 class="movieTitleInfoWishList">${movie.title} (${movie.release_date.slice(0,4)})</h3>
        <h5 class="descriptionWishList">Description</h5>
        <p>${movie.overview}</p>
        </div>
        <a class="hyphenLink" title="Remove from wish list" href="#" data-movie-id="${movie.id}"><span class="myListHyphen">&#x2718;</span></a>
    </div>
    `;

    return newItem2;
}



export function renderWishListData(key, parentSelector){

    const data = getLocalStorage(key) || [];

    const htmlData = data.map((movie) => buildWishList(movie));
    document.querySelector(parentSelector).innerHTML = htmlData.join("");

    document.querySelectorAll(".hyphenLink").forEach(link => {
        link.addEventListener('click', () =>
        removeItem(link.dataset.movieId, data))
        });

}


export function removeItem(movieId, data){

    const wishList = getLocalStorage("wishList") || [];

    const movieCheck = wishList.find((movie) => movie.id == movieId);

    if(movieCheck){

        const newWishList = wishList.filter((movie) => movie.id != movieId);
        setLocalStorage("wishList", newWishList);

        const movieIndex = data.findIndex((movie) => movie.id == movieId);
        const wishData = data[movieIndex];

        const message = `${wishData.title} was successfully removed from wish list.`;
        const backgroundcolor = "yellowgreen";
        const color = "darkgreen";

        renderWishListData("wishList", ".movieWishListContainer");

        displayAlert(message, backgroundcolor, color);

    }else{

        const message = `Looks like ${wishData.title} is not in wish list.`;
        const backgroundcolor = "lightcoral";
        const color = "darkred";

        displayAlert(message, backgroundcolor, color);
    }
}




