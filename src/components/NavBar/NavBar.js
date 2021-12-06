import React from "react";
import './styles.css'

function NavBar() {
    return (
        <nav>
            <div className="navbar-content">
                <a href="/" className="navbar-brand">Mélange</a>
                <a href="/" className="hide-on-large-only"><i class="material-icons">menu</i></a>
                <ul className="navbar-menu show-on-large">
                    <li><a href="/">Nosotros</a></li>
                    <li><a href="/">Tienda</a></li>
                    <li><a href="/">Únete</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
