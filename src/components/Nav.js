import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
// import { ColumnToRow, Row, Item } from '@mui-treasury/components/flex';
// import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';

const navStyle = makeStyles(() => ({
    outerBox: {

    }
}))


const Nav = (props) => {
    const styles = navStyle();
    return (
        <navStyle>
           <Box className={styles.outerBox}>
           <Container>
            <Box>
                <img src='../DinnerBellLogo.png' alt=''/>
            </Box> 
            <Divider />
            <Box>
            <Link to="/">
                <h1>Home</h1>
            </Link>
            <Link to="/menu">
                <h1>Menu</h1>
            </Link>
            </Box>
           </Container>
           </Box>
        </navStyle>
    );
}

export default Nav;