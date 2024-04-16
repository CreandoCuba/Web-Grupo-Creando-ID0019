import {pages} from "../App";
import {Link} from "react-router-dom";

const mainImgRoute = 'images/services/'
export default () => {
const services = pages[2].children
    return (

        <section className="service_section layout_padding">
            <div className="service_container">
                <div className="container ">
                    <div className="heading_container heading_center">
                        <h2>
                            Nuestros <span>Servicios</span>
                        </h2>
                        <p>
                            Todos nuestros servicios se concretan mediante diagnosticos,
                            asesorias, acompañamiento, implementacion o seguimiento de
                            cada una de las areas.
                        </p>
                    </div>
                    <div className="row">
                        {services.map((value,index) => {return(
                                <div className="col-md-4 ">
                                    <div className="box ">
                                        <div className="img-box">
                                            <img src={value.imgRoute} alt="Icono Representativo"/>
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                {value.label}
                                            </h5>
                                            <ul>{value.subList?.map((value) => {return <li className='noDeco'>{value}</li>} )}</ul>
                                            <a href={value.path}>
                                                Leer más
                                            </a>
                                        </div>
                                    </div>
                                </div>
                        )})}
                    </div>
                </div>
            </div>
        </section>

    )
}