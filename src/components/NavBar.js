import React from 'react';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <a href="/" className="navbar-brand">Mélange</a>
                <div className="navbar-menu-mob hide-on-large-only">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 0.5C0.7 0.5 0 1.2 0 2C0 2.8 0.7 3.5 1.5 3.5H18.5C19.3 3.5 20 2.8 20 2C20 1.2 19.3 0.5 18.5 0.5H1.5ZM1.5 6.39996C0.7 6.39996 0 7.09996 0 7.89996C0 8.69996 0.7 9.39996 1.5 9.39996H18.5C19.3 9.39996 20 8.69996 20 7.89996C20 7.09996 19.3 6.39996 18.5 6.39996H1.5ZM1.5 12.3C0.7 12.3 0 13 0 13.8C0 14.6 0.7 15.3 1.5 15.3H18.5C19.3 15.3 20 14.6 20 13.8C20 13 19.3 12.3 18.5 12.3H1.5Z" fill="#020203"></path>
                    </svg>
                </div>
                <ul className="navbar-menu hide-on-med-and-down">
                    <li><a href="/">Nosotros</a></li>
                    <li><a href="/">Tienda</a></li>
                    <li><a href="/">Únete</a></li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;
