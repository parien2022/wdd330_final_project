
function buildSpecificMovieData(movie, newData){
    const newItem = `
    <div class="movieImgContainer">
    <div class="myListBack"></div>
    <a class="myListLink" title="Add to wish list" href="#" data-movie-id="${movie.id}"><span class="myListCrossDetails">&#x271A;</span></a>
    <img class="movieImg" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/>
    </div>
    <div class="MovieDetailsContainer">
    <h2 class="movieTitleInfo">${movie.title} (${movie.release_date.slice(0,4)})</h2>
    <h3>${movie.tagline}</h3>
    <h5>Description</h5>
    <p>${movie.overview}</p>
    <p>Vote Avarage (${movie.vote_average}) | Vote count (${movie.vote_count})</p>
    <p>Language: ${movie.spoken_languages[0]['english_name']}</p>
    <p>Genres: ${newData}</p>
    </div>
    `;
  
    return newItem;
  }



function buildVideoMovie(data, num){
    const newItem = `
    <div>
    <iframe class="movieTrailer" src="https://www.youtube.com/embed/${data.results[num]['key']}" frameborder="0" allowfullscreen></iframe>
    </div>
    `;
  
    return newItem;
}

export function movieVideo(data, parentSelector) {
    let num = 0;
    for (let i = 0; i < data.results.length; i++){
        if (data.results[i]['name'] == "Official Trailer"){
            num = i;
        } 
    }
    const htmlItem = buildVideoMovie(data, num);
      document.querySelector(parentSelector).insertAdjacentHTML("afterbegin", htmlItem);
    
}


export function buildMovieData(data, parentSelector){
    let newData = "";
    for (let i = 0; i < data.genres.length; i++){
      newData += ` - ${data.genres[i]['name']}`;
    }
    const htmlItem = buildSpecificMovieData(data, newData);
    document.querySelector(parentSelector).innerHTML = htmlItem;
}