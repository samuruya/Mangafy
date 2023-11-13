import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const Nav = () => {
    return ( <>
        <Stack direction="horizontal" className="nav">
            <div className="nav-wrap">
                <div className="logo">
                
                </div>
                <div className="log-btn">
                    <Link to='/Login'> Login </Link>
                    /
                    <Link to='/Register'> Register </Link>
                </div>
            </div>
        </Stack>

    </> );
}
 
export default Nav;