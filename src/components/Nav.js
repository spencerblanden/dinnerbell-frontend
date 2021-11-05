import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { logOut } from '../services/firebase';
// import { ColumnToRow, Row, Item } from '@mui-treasury/components/flex';
// import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';

const NavStyle = styled.header`
       .outerBox {
            display: flex;
       
        
        justify-content: space-between;
        background-color: whitesmoke;
        height: 7rem;
        width: 100%;
        box-shadow: 1px 1px 3px 2px #808080;
      
        .links{
            width: 50%;
            font-family: Tahoma sans-serif;
           display: flex;
           justify-content: space-around;
           margin-left: 50px;
           align-items: center;
           
                font-size: 25px;
           a{ text-decoration: none;
            color: inherit;
            margin-right: 50px;
            font-family: Tahoma, sans-serif;
        }
       }
       }
       img{
         height: 100px;
            width: auto;
            position: absolute;
       }
       
`;


const Nav = (props) => {

    return (
        <NavStyle >
           <Box className='outerBox'>
            <Box ml={5} className='logo'>
                <Link to='/'>
                <img src='../DBLOGO.png' alt='' />
                </Link>
            </Box> 
            <Box sx={{ display: 'flex', 
            justifycontent: 'end' , 
            alignitems: 'center'}}className='links'>
            <Link to="/">
               Home
            </Link>
            <Link to="/menu">
                Menu
            </Link>
            <Link to="/menu">
                Store
            </Link>
            <Link to="/menu">
                About Us
            </Link>
            {
                props.user ? 
                <>
            <Link to="/" onClick={logOut}>
                Logout
            </Link>
                </ > :
                 <></>
                }
            </Box>
           </Box>
        </NavStyle>
    );
}

export default Nav;