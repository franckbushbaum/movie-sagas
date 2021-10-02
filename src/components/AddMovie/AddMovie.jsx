import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { $CombinedState } from 'redux';

function AddMovie() {
    //Data to be sent to Sagas.
    const [movie, setMovie] = useState('');


    const dispatch = useDispatch();
    const history = useHistory();


    //If there is a way to combine setMovieTitle, setMoviePoster and setMovieDescription
    //I would love to see it. Spoiler: There absolutely is one.
    const setMovieTitle = (event) => {
        setMovie({
            ...movie,
            title: event.target.value
        })
    }

    const setMoviePoster = (event) => {
        setMovie({
            ...movie,
            poster: event.target.value
        })
    }

    const setMovieDescription = (event) => {
        setMovie({
            ...movie,
            description: event.target.value
        })
    }

    // console.log(description);

    const handleSubmit = event => {
        event.preventDefault();
        console.log('in handleSubmit')
        dispatch({
            type: 'ADD_MOVIE',
            payload: movie
        })
    }

    const backToHome = () => {
        history.push('/')
    }

    return (
        <>
            <p>Under Construction...</p>
            <h2>Add a Movie</h2>
            <form onSubmit={handleSubmit} className="add-movie-form">
                <input id={1}
                    required
                    placeholder="Title"
                    value={movie.title}
                    onChange={setMovieTitle}
                />
                <input id={2}
                    required
                    placeholder="Poster"
                    value={movie.poster}
                    onChange={setMoviePoster}
                />
                <input id={3}
                    required
                    placeholder="Description"
                    value={movie.description}
                    onChange={setMovieDescription}
                />
                <input type='submit' value='Submit' />
            </form>
            <button onClick={backToHome}>Cancel</button>
        </>


    );
}

export default AddMovie;