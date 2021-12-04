import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './Details.css'
import MovieItem from '../MovieItem/MovieItem';

function Details() {
    const movieDetails = useSelector(store => store.specificMovie)

    const movieGenres = useSelector(store => store.genres)

    const history = useHistory()

    const backToHome = () => {
        history.push('/')
    }



    return (
        <>
            <Card>
                <div className="class-container">
                    <div className='poster'>
                        <img src={movieDetails.poster} />
                    </div>
                    <div>
                        <h1>{movieDetails.title}</h1>
                        <h4>{movieDetails.description}</h4>
                        <h3>Genres:</h3>
                        {movieGenres.map(genre => (
                            <li>{genre.name}</li>
                        ))}
                    </div>
                </div>
            </Card>

            <Button variant="contained" style={{ margin: 22 }} onClick={backToHome}>back</Button>
        </>


    );
}

export default Details;