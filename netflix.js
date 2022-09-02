const API_key = "api_key=982994cd6c8a109004bff7b431789d7e"
const BASE_URL = "https://api.themoviedb.org/3"
const API_URL = BASE_URL + "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&" + API_key;
const IMG_URL = 'https://image.tmdb.org/t/p/w500'


    
    //  const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_key;
    


const main = document.getElementById("main");
getMovies(API_URL);

function getMovies(url){
    // console.log(data)
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        showMovies(data.results);
    })
}

function showMovies(data){
    // main.innerHTML = '';

    data.map(function(data){
        console.log(data);
        let displayMovies = document.getElementById("displayMovies")
        displayMovies.innerHTML += `
        <div id="displayMovies" class="movie">
            <img src="${IMG_URL +data.poster_path}" alt="${data.title}">
        
            <div class="movie-info">
                <h3>${data.title}</h3>
                <span class="green">${data.vote_average}</span>
            </div>
            
            <div class="overview">
                <h3>Overview</h3>
                ${data.overview}
            </div>
        </div>
        `
    })

//     data.forEach(movie => {
//         const {title, poster_path, vote_average, overview} = movie;
//         const movieEl = document.createElement('div');
//         movieEl.classList.add('movie');
//         movieEl.innerHTML += `
//             <div class="movie">
//                 <img src="${IMG_URL+data.poster_path}" alt="${data.title}">
                
//                 <div class="movie-info">
//                     <h3>${data.title}</h3>
//                     <span class="${getColor(vote_average)}">${data.vote_average}</span>
//                 </div>
                
//                 <div class="overview">
//                     <h3>Overview</h3>
//                     ${data.overview}
//                 </div>
//             </div>

//         `
//         main.appendChild(movieEl);
//     });

// }

// function getColor(vote){
//     if(vote >= 0){
//         return "green";
//     }else if(vote >= 5){
//         return "orange";
//     }else{
//         return "red";
//     }
 }