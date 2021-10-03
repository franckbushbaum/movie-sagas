import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import './MovieItem.css';

function MovieItem({ id, title, poster }) {

 //Set history to change pages.
 const history = useHistory();

 const toDetailsPage = (id) => {
     console.log('in details page', id)
     history.push(`/details/${id}`)
 }

    return (
        
        <div key={id} className="item">
            <h3 className="title">{title}</h3>
            <div className="poster">
            <img src={poster} alt={title} />
            </div>
            <Button onClick={(event) => toDetailsPage(id)} variant="contained" size="small">Description</Button>
        </div>
        
    );
}

export default MovieItem;