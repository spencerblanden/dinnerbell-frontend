import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
// import { ColumnToRow, Row, Item } from '@mui-treasury/components/flex';
// import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';




const Nav = (props) => {
    return (
        <header className="nav">
            <Link to="/">
                <h1>Home</h1>
            </Link>
            <Link to="/menu">
                <h1>Menu</h1>
            </Link>
        </header>
    );
}

export default Nav;