import React from 'react';
import { useState } from 'react'; 
import { useDispatch } from 'react-redux'; 
import { useHistory } from 'react-router';

function Details(){

    const history = useHistory()

    const backToHome = () => {
        history.push('/')
    }

    return(
        <>
            <p>Under Construction</p>
            <button  onClick={backToHome}>Cancel</button>
        </>


    );
}

export default Details;