
import MenuCard from  "../components/MenuCard"
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import ItemType from "../components/ItemType";
import { Card } from "@material-ui/core";
import { flexbox } from "@mui/system";
import { RowingTwoTone } from "@material-ui/icons";
import MenuHeader from "../components/MenuHeader";


  const ContainerStyle = styled.body`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  .ContainerCard {
    margin-top: 32px;
    margin-bottom: 32px;
  
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  
  .leftBox{
    width: 30%;
   margin-right: 10px;
  }
  .rightBox{
    display: 'flex';
    flex-wrap: 'wrap';
    flex-direction: 'row';
    width: 60%;
    border: 6px double  rgb(131, 0, 11);
    h1 {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
  .card{
    margin-left: 10px; 
    margin-right: 10px;
  } }
  `;



function Menu(props) {
  

  return (
    <ContainerStyle>
     <MenuHeader />
      <Card className='ContainerCard' variant='outlined' sx={{display: 'flex', flexDirection: 'row'}}>

        <Box sx={{ display: 'flex', flexDirection: 'column', m: 3}} className='leftBox'>
          <ItemType menuItems={props.menuItems}/>
        </Box>
       
        <Divider />

        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', m: 2}} className='rightBox'>
          <h1>
            Starters 
            </h1>
          <MenuCard className='card'    
          menuItems={props.menuItems} 
          updateMenuItem={props.updateMenuItem}
          userDetails={props.userDetails}
          updateUserDetails={props.updateUserDetails}/>
        </Box>
        </Card>
     
    </ContainerStyle>
  );
}

export default Menu;