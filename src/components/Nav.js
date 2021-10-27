
   
import { Link } from 'react-router-dom';


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