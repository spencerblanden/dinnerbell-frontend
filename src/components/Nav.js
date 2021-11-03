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
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: whitesmoke;
        height: 7rem;
        width: 100%;
        box-shadow: 1px 1px 3px 2px #808080;
        .links{
           display: flex;
           justify-content: flex-end;
           align-items: flex-end;
           
                font-size: 10px;
           a{ text-decoration: none;
            color: inherit;
            margin-right: 16px;
        }
       }
       }
       img{
         height: 100px;
            width: 100px;
            position: absolute;
       }
       
`;


const Nav = (props) => {

    return (
        <NavStyle >
           <Box className='outerBox'>
           <Container>
            <Box className='logo'>
                <img src='../DinnerBellLogo.png' alt=''/>
            </Box> 
            <Divider />
            <Box className='links'>
            <Link to="/">
                <h1>Home</h1>
            </Link>
            <Link to="/menu">
                <h1>Menu</h1>
            </Link>
            {
                props.user ? 
                <>
            <Link to="/" onClick={logOut}>
                <h1>Logout</h1>
            </Link>
                </ > :
                 <></>
                }
            </Box>
           </Container>
           </Box>
        </NavStyle>
    );
}

export default Nav;