function movieSelected(id){     //to transfer movie details from 1 html page to another
    sessionStorage.setItem('movieId', id);
    window.location = 'movie.html';
    return false;
  }
  
  function getMovie(){
    let movieId = sessionStorage.getItem('movieId');    //get using data sent via session storage
    
    var apikey="2ad7681adf43290559749458fc78a528";
    var a="https://image.tmdb.org/t/p/w500";
    var url ="https://api.themoviedb.org/3/movie/"; 
    axios.get(url+movieId+"?api_key="+apikey)
      .then((response) => {
        let movie = response.data;
        console.log(response);
        let output =`
            <div class="row">
            <div class="col-md-4">
              <img src="${a+movie.poster_path}" class="thumbnail">
            </div>
            <div class="col-md-8">
              <h2 class="disp1">${movie.title}</h2>
              <br>
              <ul class="list-group">
                    <li class="list-group-item"><strong>Released:</strong> ${movie.release_date}</li>
                    <li class="list-group-item"><strong>Runtime:</strong> ${movie.runtime} min</li>
                    <li class="list-group-item"><strong>Rating:</strong> ${movie.vote_average}</li>
                    <li class="list-group-item"><strong>Plot:</strong> ${movie.overview}</li>
              </ul>
            </div>
          </div>
        `;


        document.body.style.backgroundImage = "url('')";
  
        $('#movie').html(output);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  
  
