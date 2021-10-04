import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('ADD_MOVIE', addMovie)
    yield takeEvery('SET_SELECTED_MOVIE', selectedMovie)
    yield takeEvery('SET_SELECTED_MOVIE', selectedGenre)
}
//1 THE FUNCTIONS                                                  
function* addMovie(action) {
    try {
        // console.log('WHAT IS ACTION', action)
        const newElement = action.payload
        console.log('what is newElement', newElement)
        yield axios.post('api/movie', newElement)
        yield put({ type: 'FETCH_MOVIES' })
    } catch {
        console.log('ERROR in addMovie')
    }
}

function* selectedMovie(action) {
    try {
        //selected movie, action.payload will be selected move from /details
        const movie = action.payload;
        // console.log('IN SELECTED MOVIE', movie);
        const movieDetails = yield axios.get(`/api/movie/details/${movie.id}`);
        // console.log('IN FUNCTION', movieDetails);
        yield put({ type: 'SET_MOVIE_DETAIL', payload: movieDetails.data })
    } catch (error) {
        console.log('error in selectedMovie', error);
    }
}

function* selectedGenre(action) {
    try {
        //selected movie, action.payload will be selected move from /details
        const movie = action.payload;
        // console.log('IN SELECTED MOVIE', movie);
        const theGenres = yield axios.get(`/api/genre/details/${movie.id}`);
        console.log('IN GENRES FUNCTION', theGenres);
        // yield put({ type: 'SET_MOVIE_DETAIL', payload: theGenres.data })
    } catch (error) {
        console.log('error in selectedMovie', error);
    }
}


function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        // console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();
//2 THE REDUCERS.        STORE.MOVIES         STORE.GENRES                                       
// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

//Used to store specific movie when 'Description' button is clicked
const specificMovie = (state = {}, action) => {
    switch (action.type) {
        case 'SET_MOVIE_DETAIL':
            return action.payload;
        default:
            return state;
    }
}


//3 THE STORE
// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        specificMovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
