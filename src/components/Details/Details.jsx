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
            
            {/* <div>{JSON.stringify(movieDetails)}</div>  */}
            <h1>{movieDetails.title}</h1>
            <h4>{movieDetails.description}</h4>
            <button  onClick={backToHome}>back</button>
        </>


    );
}

export default Details;