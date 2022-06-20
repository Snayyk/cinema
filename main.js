function makeService(){

    let service = {
      getGenres,
      getFilmsPop,
      getFilmsBest,
      getFilmsFutur,
      getFilmsAffiche,
      getFilmSearch,
      detailFilm,
      creditFilm
    };
    
    async function getGenres(){
    var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
         return fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=113f4ce7394aac0e598bdf1b782721ac&language=fr-FR", requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));
    
    }
    
    async function getFilmsPop(page, id){
    var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
         return fetch("https://api.themoviedb.org/3/movie/popular?api_key=113f4ce7394aac0e598bdf1b782721ac&language=fr-FR&page="+page+"&with_genres="+ id, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));
    
    }
    
    async function getFilmsBest(page, id){
    var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
         return fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=113f4ce7394aac0e598bdf1b782721ac&language=fr-FR&page="+page+"&with_genres="+ id, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));
    
    }
    
    async function getFilmsFutur(page, id){
    var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
         return fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=113f4ce7394aac0e598bdf1b782721ac&language=fr-FR&page="+page+"&with_genres="+ id, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));
    
    }
    
    async function getFilmsAffiche(page, id){
    var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
         return fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=113f4ce7394aac0e598bdf1b782721ac&language=fr-FR&page="+page+"&with_genres="+ id, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));
    
    }
  
    async function getFilmSearch(name,page){
  
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
         return fetch("https://api.themoviedb.org/3/search/movie?api_key=113f4ce7394aac0e598bdf1b782721ac&language=fr-FR&query="+name+"&page="+page+"&include_adult=true", requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));
      
    }
  
    async function detailFilm(id){
  
        var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
        return fetch("https://api.themoviedb.org/3/movie/"+id+"?language=fr-FR&api_key=113f4ce7394aac0e598bdf1b782721ac", requestOptions)
                .then(response => response.json())
                .catch(error => console.log('error', error));
  
    }
    
    async function creditFilm(id){

        var requestOptions = {
                method: 'GET',
                redirect: 'follow'
              };
              
        return fetch("https://api.themoviedb.org/3/movie/"+id+"/credits?api_key=113f4ce7394aac0e598bdf1b782721ac&language=fr-FR", requestOptions)
                .then(response => response.json())
                .catch(error => console.log('error', error));
    }

    return service
    }
    