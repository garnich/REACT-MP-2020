import { loadingMovies, addNewMovie, editMovie, deleteMovie } from './../actions/actions';


//Fetch movies
const fetchMovies = (querySring = '', moviesNumbers = 6) => {
    const baseUrl = `http://localhost:4000/movies?limit=${moviesNumbers}`;
    const offseNumber = Math.floor(Math.random() * 2000);
    const url = querySring ? `${baseUrl}&searchBy=title&search=${querySring}` : `${baseUrl}&offset=${offseNumber}`;

    return (dispatch) => {
        fetch(url)  
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

//Add movie or Update movie
const addOrUpdateMovie = (data, func) => {
    const { editMovie, ...values } = data;

    if(!editMovie){
        const newMovie = {
            ...values,
            genres: values.genres.split(','),
            tagline: values.title,
            vote_average: 5.5,
            vote_count: 100,
            budget: 55000000,
            revenue: 136906000,
        };
        return addMovie(newMovie, func);
    } else {
        return updateMovie(values, func);
    }
};

//Add movie
const addMovie = (data, func) => {
    return (dispatch) => {
        fetch('http://localhost:4000/movies', {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)})
        .then(res=> res.json())
        .then(res => {
            dispatch(addNewMovie(res));
            func();
        })
        .catch(err => console.log('Fetch Error :-S', err))
    }
}

//Update movie
const updateMovie = (data, func) => {
      return (dispatch) => {
        fetch('http://localhost:4000/movies', {
          method: 'put',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)})
        .then(res=> res.json())
        .then(res => {
            dispatch(editMovie(res));
            func();
        })
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
    addOrUpdateMovie,
    removeMovie,
};
