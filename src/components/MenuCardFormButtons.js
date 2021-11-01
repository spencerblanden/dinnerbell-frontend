import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function CheckboxLabels(props) {
    const [ heartState, setHeartState ] = useState({
            rating: false
    } )
const handleChange = event => {

    const value = event.target.name === 'rating' 
    ? event.target.checked 
    : event.target.value

        setHeartState(prevState => ({
            ...prevState,
            [event.target.name]: value
        }));
    }

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     // TODO: adds user's uid to Heart
    //     props.createContact(heartState);
    //     // setHeartState({
    //     //     rating: false
    //     // }); 
    // }

  return (
    <div>
      <Checkbox {...label} 
      icon={<FavoriteBorder />} 
      checkedIcon={<Favorite />} 
    name="rating" 
    onChange={handleChange}
    checked={heartState.rating} />
      
    </div>
  );
}
