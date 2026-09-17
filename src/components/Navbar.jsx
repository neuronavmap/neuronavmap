import {Link} from "react-router-dom";


export default function Navbar() {

    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>
                        <p className="nav-link">ABOUT</p>
                    </Link>
                </li>
                <li>
                    <Link to={"/map"}>
                        <p className="nav-link">MAP</p>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}