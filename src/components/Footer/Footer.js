import React from 'react';
import iconWhatsapp from '../../assets/images/icons/whatsapp.svg';
import iconFacebook from '../../assets/images/icons/facebook.svg';
import iconInstagram from '../../assets/images/icons/instagram.svg';
import iconTwitter from '../../assets/images/icons/twitter.svg';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row mb-0">
                    <div className="col s12 l3">
                        <div className="group">
                            <h5 className="title text-uppercase">Contáctanos</h5>
                            <ul className="list-social">
                                <li><a className="btn-social-media" href="/"><img src={iconWhatsapp} alt="WhatsApp" /></a></li>
                                <li><a className="btn-social-media" href="/"><img src={iconFacebook} alt="Facebook" /></a></li>
                                <li><a className="btn-social-media" href="/"><img src={iconInstagram} alt="Instagram" /></a></li>
                                <li><a className="btn-social-media" href="/"><img src={iconTwitter} alt="Twitter" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col s12 l3">
                        <div className="group">
                            <h5 className="title text-uppercase">Información</h5>
                            <ul>
                                <li><a href="/">Sobre nosotros</a></li>
                                <li><a href="/">Sobre envíos</a></li>
                                <li><a href="/">Preguntas frecuentes</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col s12 l3">
                        <div className="group">
                            <h5 className="title text-uppercase">Tienda</h5>
                            <ul>
                                <li><a href="/">Todos los productos</a></li>
                                <li><a href="/">Categorías</a></li>
                                <li><a href="/">Promociones</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col s12 l3">
                        <div className="group">
                            <h5 className="title text-uppercase">Enlaces útiles</h5>
                            <ul>
                                <li><a href="/">Afiliados</a></li>
                                <li><a href="/">Política de privacidad</a></li>
                                <li><a href="/">Términos y condiciones</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
