
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card'
import  CardHeader from '@mui/material/CardHeader';
import Box from '@material-ui/core/Box';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import { useState } from 'react';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const useStyles= makeStyles(() => ({
    card: {
        minWidth: 200,
        width: 300,
        position: 'relative',
        boxshadow: '0 8px 24px 0 rgba(0,0,0,0.12',
        overflow: 'visible',
        borderRadius: '1.5rem',
        margin: 5,
        cursor: 'pointer',
        transition: '0.4s',
        '&:hover': {
            transform: 'translateY(-2px)',
            '& $shadow': {
                bottom: '-1.5rem',
            },
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            zIndex: 0,
            display: 'block',
            width: '100%',
            bottom: -1,
            height: '100%',
            borderRadius: '1.5rem',
            backgroundColor: 'rgba(0,0,0,0.08)',
          },
        },
        main: {
            overflow: 'hidden',
            borderTopLeftRadius: '1.5rem',
            borderTopRightRadius: '1.5rem',
            zIndex: 1,
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              display: 'block',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to top, #014a7d, rgba(0,0,0,0))',
            },
          },
        shadow: {
            transition: '0.2s',
            position: 'absolute',
            zIndex: 0,
            width: '88%',
            height: '100%',
            bottom: 0,
            borderRadius: '1.5rem',
            backgroundColor: 'rgba(0,0,0,0.06)',
            left: '50%',
            transform: 'translateX(-50%)',
          },
    
}))




function MenuCard(props) {


    const [ heartState, setHeartState ] = useState({
        name: '',
        image: '',
        description: '',
        rating: false
} )



const handleClick = async (event, dish) => {
   const value = event.target.name === 'rating' 
    ? event.target.checked 
    : event.target.value
         
    
        setHeartState({...props.menuItems,
      [event.target.name]: value})
  
        
   await handleSubmit(event);
}
console.log(props.menuItems)
const handleSubmit = event => {
    event.preventDefault();
    // TODO: adds user's uid to Heart
   props.updateMenuItem(heartState);
    setHeartState({
        ...props.menuItems,
        rating: false
    }); 
}





 const styles = useStyles();
const mediaStyles = useCoverCardMediaStyles();

return (
        props.menuItems &&
        props.menuItems.map((dish, idx) => (
            <Card className={styles.card} href='./pages/menu'>
                <Box className={styles.main}  minHeight={200} position={'relative'}>
            <CardMedia classes ={mediaStyles}
                component="img"
                height="194"
                image={dish.image} value={dish.image}
                alt={dish.name}
                key= {idx}
                />
                </Box>
             <CardHeader 
                action={
                    <Checkbox {...label} 
                    icon={<FavoriteBorder />} 
                    checkedIcon={<Favorite />} 
                    name="rating" 
                    onChange={handleClick}
                    // onClick={handleSubmit}
                    checked={heartState.rating} />
                }
                title={dish.name} value={dish.name}
                subheader={dish.description} value={dish.description}
                />
                <div className={styles.shadow}/>
                
        </Card>
        )
));
            }
export default MenuCard;