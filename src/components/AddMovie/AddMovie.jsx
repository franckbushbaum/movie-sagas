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

    const setGenre = (event) => {
        setMovie({
            ...movie,
            genre_id: event.target.value
        })
    }


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
                 <select selected value={movie.genre} onChange={setGenre}>
                    <option value={1}>Adventure</option>
                    <option value={2}>Animated</option>
                    <option value={3}>Biographical</option>
                    <option value={4}>Comedy</option>
                    <option value={5}>Disaster</option>
                    <option value={6}>Drama</option>
                    <option value={7}>Epic</option>
                    <option value={8}>Fantasy</option>
                    <option value={9}>Musical</option>
                    <option value={10}>Romantic</option>
                    <option value={11}>Science Fiction</option>
                    <option value={12}>Space-Opera</option>
                    <option value={13}>Superhero</option>
                </select>
                <input type='submit' value='Submit' />
            </form>
            <button onClick={backToHome}>Cancel</button>
        </>


    );
}

export default AddMovie;