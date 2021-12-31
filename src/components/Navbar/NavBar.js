import React from 'react';
import iconBrand from '../../assets/images/icons/brand.svg';
import iconMenuMob from '../../assets/images/icons/menu-mob.svg';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div id="navbar">
            <div className="navbar-fixed">
                <nav className="nav-extended">
                    <div className="nav-wrapper container">
                        <CartWidget/>
                        <a href="/" className="brand-logo">
                            <img src={iconBrand} alt="Logo" />
                        </a>
                        <a href="/" data-target="mobile-demo" className="sidenav-trigger">
                            <img src={iconMenuMob} alt="Menu" />
                        </a>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><a class="text-uppercase current" href="/">Tienda</a></li>
                            <li><a class="text-uppercase" href="/">Nosotros</a></li>
                            <li><a class="text-uppercase" href="/">Únete</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <ul className="sidenav" id="mobile-demo">
                <li><a class="text-uppercase current" href="/">Tienda</a></li>
                <li><a class="text-uppercase" href="/">Nosotros</a></li>
                <li><a class="text-uppercase" href="/">Únete</a></li>
            </ul>
        </div>
    )
}

export default NavBar;
