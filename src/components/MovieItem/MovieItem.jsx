import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BsArrowRightShort, BsTrashFill } from "react-icons/bs";
import Paper from '@material-ui/core/Paper';
import './MovieItem.css';

function MovieItem({ movie }) {

    //Set history to change pages.
    const history = useHistory();

    const dispatch = useDispatch();

    const toDetailsPage = () => {
        dispatch({ type: 'SET_SELECTED_MOVIE', payload: movie });
        // console.log('IN SELECTED MOVIE', movie)
        history.push('/details')
    }

    const removeTitle = () => {
        dispatch({ type: 'REMOVE_TITLE', payload: movie });
        // console.log('IN SELECTED MOVIE', movie)
    }

    return (

        <div key={movie.id} className="item">
            <h3 className="title">{movie.title}</h3>
                <div className="poster">
                    <img onClick={toDetailsPage} src={movie.poster} alt={movie.title} />
                </div>
                    <div className="button1">
                        <Button onClick={toDetailsPage} variant="contained" 
                                            size="small"
                                            color="primary"
                                            style= {{
                                                fontSize: 15,
                                                borderRadius: "18px",
                                            }}>Description<BsArrowRightShort size="21px"/></Button>
                    </div>
                    <div className="button2">
                        <Button variant="contained" 
                                size="small" 
                                color="secondary" 
                                style={{ fontSize: 17, borderRadius:"29px"}}  
                                onClick={removeTitle}><BsTrashFill color="black" style= {{borderRadius: "50%"}}/></Button>
                    </div>
        </div>

    );
}

export default MovieItem;