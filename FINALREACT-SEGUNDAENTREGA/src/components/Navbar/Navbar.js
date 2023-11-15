
import CartWidget from "../CartWidget/CartWidget.js";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <h3>CODER STORE</h3>
            <div>
                <NavLink to= {`/`}>Home</NavLink>
                <NavLink to= {`/category/100`}>Académicos</NavLink>
                <NavLink to= {`/category/200`}>Figuras</NavLink>
                <NavLink to= {`/category/300`}>Tech</NavLink>
                </div> 
                <CartWidget />
            
        </nav>
        

    )
}

export default Navbar;