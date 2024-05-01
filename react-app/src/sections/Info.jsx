import {pages} from "../App";
import {Link} from "react-router-dom";

const Info = () => {
    return (

        <section className="info_section layout_padding2">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 info_col">
                        <div className="info_contact">
                            <h4>
                                Dirección
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                            </h4>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1091.5923588064852!2d-81.58061029208068!3d23.03609668317251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d2fc40510bf059%3A0x35eae657732d1706!2sCalle%20135%2C%20Matanzas!5e0!3m2!1ses-419!2scu!4v1714429225900!5m2!1ses-419!2scu"
                                width="400" height="300" style={{border: "0"}} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                            <div className="contact_link_box">
                                {/*<a href="">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <span>
                                        Location
                                    </span>
                                </a>*/}
                                <a href="tel:+5353692707">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <span>
                                        Llamar al +53 53692707
                                    </span>
                                </a>
                                <a href="tel:+5354384681">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <span>
                                        Llamar al +53 53692707
                                    </span>
                                </a>
                                <a href="https://www.facebook.com/share/scNCWKjZkCCtUQdm/?mibextid=qi2Omg">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                    <span> Perfil en Facebook</span>
                                </a>
                                {/*<a href="">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <span>
                                        demo@gmail.com
                                    </span>
                                </a>*/}
                            </div>
                        </div>
                        ?
                    </div>
                    <div className="col-md-6 col-lg-3 info_col">
                        {/*<div className="info_detail">
                            <h4>
                                Informacion
                            </h4>
                            <p>
                                Recuerde que siempre puede conocer mas acerca de
                                los servicios que ofrecemos contactando con nosotros
                            </p>
                        </div>*/}
                    </div>
                    <div className="col-md-6 col-lg-2 mx-auto info_col">
                        <div className="info_link_box">
                            <h4>
                                Enlaces
                            </h4>
                            <div className="info_links">
                                {
                                    pages.map((value, index) => {return(
                                            <Link className="active" to={value.path}>
                                                {value.label}
                                            </Link>
                                    )})
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 info_col ">
                        <h4>
                            Subscribe
                        </h4>
                        <form action="#">
                            <input type="text" placeholder="Enter email"/>
                            <button type="submit">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Info;