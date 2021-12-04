import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { TextField } from '@material-ui/core';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


import './AddMovie.css';
import { $CombinedState } from 'redux';

function AddMovie() {

    //Data to be sent to Sagas.
    const [movie, setMovie] = useState('');


    const dispatch = useDispatch();

    const history = useHistory();


    // If there is a way to combine setMovieTitle, setMoviePoster and setMovieDescription
    // I would love to see it. Spoiler: There absolutely is one.

    // const setMovieTitle = (event) => {
    //     setMovie({
    //         ...movie,
    //         title: event.target.value
    //     })
    // }



    // const setMoviePoster = (event) => {
    //     setMovie({
    //         ...movie,
    //         poster: event.target.value
    //     })
    // }

    // const setMovieDescription = (event) => {
    //     setMovie({
    //         ...movie,
    //         description: event.target.value
    //     })
    // }

    //Record the input title, description and poster.

    const useStyles = makeStyles({
        app: {
            fonstSize: 2,
            textAlign: 'center',
            '&:hover': {
                backgroundColor: 'transparent',
                transition: 'all 1s ease'

            }
        }
    })

    const classes = useStyles()


//Switch statement for the three input fields: Title, Description and Poster.

    const setMovieInput = (event) => {
        switch (event.target.id) {
            case 'title':
                setMovie({ ...movie, title: event.target.value })
                break;
            case 'description':
                setMovie({ ...movie, description: event.target.value })
                break;
            case 'poster':
                setMovie({ ...movie, poster: event.target.value })
                break;
        }
    }

// Records the value of the Select input field.
    const setGenre = (event) => {
        setMovie({
            ...movie,
            genre_id: event.target.value
        })
    }


    const handleSubmit = event => {
        event.preventDefault();
        alert('Movie Added!')
        dispatch({
            type: 'ADD_MOVIE',
            payload: movie
        })
    }

    const backToHome = () => {
        history.push('/')
    }


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClick = (pageURL) => {
        history.push(pageURL)
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar>
                <div>
                    <MenuIcon
                        id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Dashboard
                    </MenuIcon>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenuClick}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={() => handleMenuClick('/')}>Main</MenuItem>
                    </Menu>
                </div>
            </AppBar>



            <form onSubmit={handleSubmit} className="add-movie-form">
                <TextField
                    className="title-input"
                    label="title"
                    variant="outlined"
                    required
                    style={{ backgroundColor: '#dbe3de' }}
                    id={"title"}
                    required
                    placeholder="Title"
                    value={movie.titles}
                    onChange={setMovieInput}
                />
                <TextField
                    label="Add movie poster"
                    variant="outlined"
                    required
                    style={{ backgroundColor: '#dbe3de' }}
                    id={"poster"}
                    required
                    placeholder="Poster"
                    value={movie.poster}
                    onChange={setMovieInput}
                />
                <TextField
                    label="description"
                    variant="outlined"
                    required
                    style={{ backgroundColor: '#dbe3de' }}
                    id={"description"}
                    required
                    placeholder="Description"
                    value={movie.description}
                    onChange={setMovieInput}
                />
                {/* On Load, the value of the input will be 'Adventure', if the user happens to 
                want to add a movie whose genre is 'Adventure', and doesn't select anything, I've noticed that
                no value is sent. Perhaps bring this up tomorrow if time allows. */}
            <div className="custom-select">
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
            </div>
                <input type='submit' value='Submit' />
            </form>
            <Button onClick={backToHome}
                    variant="contained"
                    size="small"
                    color="primary"
                    style= {{
                        fontSize: 15,
                        borderRadius: "18px",
                    }} >Cancel</Button>
        </>


    );
}

export default AddMovie;