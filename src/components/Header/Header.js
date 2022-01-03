import React from 'react';

const Header = ({title}) => {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col s12 l12">
                        <div className="content">
                            <p className="breadcumbs text-uppercase">Inicio / <span>{title}</span></p>
                            <h3 className="title">{title}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
