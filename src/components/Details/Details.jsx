import React, { useEffect } from 'react'; 
import { useSelector } from 'react-redux'; 
import { useHistory } from 'react-router';
import MovieItem from '../MovieItem/MovieItem';

function Details(){
    const movieDetails = useSelector(store => store.specificMovie)
    const history = useHistory()

    const backToHome = () => {
        history.push('/')
    }

    

    return(
        <>
            <p>Under Construction....</p>
            <div>{JSON.stringify(movieDetails)}</div> 
            <button  onClick={backToHome}>Cancel</button>
        </>


    );
}

export default Details;