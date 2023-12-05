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

    const headerTag = document.querySelector(".headerTag");
    const footerTag = document.querySelector(".footerTag");

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

