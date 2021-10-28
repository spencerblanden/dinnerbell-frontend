
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function CheckboxLabels() {
  return (
    <div>
      <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      
    </div>
  );
}
