import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from "@mui/material/ListItemButton";
import { makeStyles } from '@material-ui/core/styles';


const useStyles= makeStyles(() => ({
    box: {
        border: '3px solid black',
        position: 'relative',
        boxshadow: '0 8px 24px 0 rgba(0,0,0,0.12',
        overflow: 'visible',
        borderRadius: '1.5rem',
        margin: 5,
        cursor: 'pointer',
        
    },
    resize:{
        fontSize:50
    }
}))


function ItemType(props) {
    const styles = useStyles();

    return (
    <Box className={styles.box} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        
        <List>
            <ListItemButton>
                <ListItem>
                    <ListItemText 
                   
                    primary='Starters'
                    />
                </ListItem>
            </ListItemButton>
            <ListItem>
                <ListItemButton>
                     <ListItemText 
                    primary='Entrees'
                    />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                     <ListItemText 
                    primary='Sides'
                    />
                </ListItemButton>
            </ListItem>
            <ListItem>
                <ListItemButton>
                     <ListItemText 
                    primary='Beverages'
                    />
                </ListItemButton>
            </ListItem>
        </List>
        
    </Box>
    );
  }
  
  export default ItemType;