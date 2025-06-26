import { Link } from "react-router-dom";
import style from "../components/styles/navbar-style.module.css"
export default function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link className={style["link-styles"]} to="/">Home</Link>
                </li>
                <li>
                    <Link className={style["link-styles"]} to="/Owner">Owner</Link>
                </li>
            </ul>
        </nav>
    )
}