//Common and shared functions

export async function getTemplate(path){

    const html = await fetch(path);
    const template = await html.text();
    return template;
}

export function insertionAdjacent(template, parentElement){

    parentElement.insertAdjacentHTML("afterbegin", template);
}

//Creates and fetches both header and footer html and inserts them in DOM
export async function creatHeaderAndFooter(headerPath, footerPath){

    const headerTemplate = await getTemplate(headerPath);
    const footerTemplate = await getTemplate(footerPath);

    const headerTag = document.querySelector("header");
    const footerTag = document.querySelector("footer");

    insertionAdjacent(headerTemplate, headerTag);
    insertionAdjacent(footerTemplate, footerTag);

    const button = document.querySelector(".navMenuButton");
    responsiveNavbar(button)

}


export function responsiveNavbar(button){

    button.addEventListener('click', changeStyle);

    function changeStyle(){
        const navUl = document.querySelector('.navUl');
        navUl.classList.toggle('responsive');
    }
    
}

export async function getMovieApiData(url){

    const data = await fetch(url);
    const result =  await data.json();
    
    return result;
}

export function getParameter(parameter){
    const paramString = window.location.search;
    const paramURL = new URLSearchParams(paramString);
    const result = paramURL.get(parameter);

    return result;
}


export function setLocalStorage(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}

export function getLocalStorage(key){
    return JSON.parse(localStorage.getItem(key));
}



export function addToWishList(linkSelector, data){
    document.querySelectorAll(linkSelector).forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
      
          const movieId = link.getAttribute('data-movie-id');
  
          const wishList = getLocalStorage("wishList") || [];
  
          
          const movieIndex = data.findIndex((movie) => movie.id == movieId);
          const wishData = data[movieIndex];
  
          const movieCheckValue = wishList.find((movie) => movie.id == movieId);
          movieCheck(movieCheckValue, wishList, wishData);
          
      });
  });
  }


  export function addToWishListDetails(linkSelector, data){
        const linkPlusSelector = document.querySelector(linkSelector);
   
        linkPlusSelector.addEventListener('click', (e) => {
          e.preventDefault();
            
          const movieId = linkPlusSelector.getAttribute('data-movie-id');
          console.log(movieId);
          
          const wishList = getLocalStorage("wishList") || [];
  
  
          const movieCheckValue = wishList.find((movie) => movie.id == movieId);
          movieCheck(movieCheckValue, wishList, data);
      });
}

function movieCheck(movieCheckValue, wishList, data){
    let message = "";
    let backgroundcolor = "";
    let color = "";
    if(!movieCheckValue){
  
        wishList.push(data);
        setLocalStorage("wishList", wishList);

        message = `${data.title} successfully added to wish list.`;
        backgroundcolor = "yellowgreen"
        color = "darkgreen"

    }else{

        message = `${data.title} is already in wish list.`;
        backgroundcolor = "lightcoral";
        color = "darkred";
    }

    displayAlert(message, backgroundcolor, color, 3000);
}


export function displayAlert(message, backgroundcolor, color, sec){

    const alertTag = document.querySelector(".alert");

    alertTag.textContent = message;

    alertTag.style.display = "block";
    alertTag.style.backgroundColor = backgroundcolor;
    alertTag.style.color = color

    setTimeout(function (){
        alertTag.style.display = "none";
    }, sec);
}