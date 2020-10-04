import { loadingMovies, addNewMovie, editMovie, deleteMovie } from './../actions/actions';


//Fetch movies
const fetchMovies = (moviesNumbers = 6) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/movies?limit=${moviesNumbers}`)  
            .then( response => {  
                if (response.status !== 200) {  
                    console.log('Looks like there was a problem. Status Code: ' +  response.status);  
                    return;  
                } 
                return response.json()
                }  
            )
            .then( movies => dispatch(loadingMovies(movies.data)))
            .catch( err => console.log('Fetch Error :-S', err))
    }
}

//Add movie
const addMovie = (data) => {
    return (dispatch) => {
        fetch('http://localhost:4000/movies', {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)})
        .then(res=> res.json())
        .then(res => dispatch(addNewMovie(res)))
        .catch(err => console.log('Fetch Error :-S', err))
    }
}

//Update movie
const updateMovie = (data) => {
      return (dispatch) => {
        fetch('http://localhost:4000/movies', {
          method: 'put',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)})
        .then(res=> res.json())
        .then(res => dispatch(editMovie(res)))
        .catch(err => console.log('Fetch Error :-S', err))
    }
}

//Delete movie
const removeMovie = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/movies/${id}`, {
        method: 'DELETE',
        })
        .then(res => {
            if (res.ok){
                dispatch(deleteMovie(id))
            }
        })
        .catch(err => console.log('Fetch Error :-S', err))
    }
}

export { 
    fetchMovies,
    addMovie,
    updateMovie,
    removeMovie,
};
