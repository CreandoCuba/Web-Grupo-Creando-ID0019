import {pages} from "../App";
import {Link} from "react-router-dom";

const Service = () => {
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
                                <div className="col-md-4 " key={index}>
                                    <div className="box ">
                                        <div className="img-box">
                                            <img src={value.imgRoute} alt="Icono Representativo"/>
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                {value.label}
                                            </h5>
                                            <ul>{value.subList?.map((value, index) => {return <li className='noDeco' key={index}>{value}</li>} )}</ul>
                                            <Link to={value.path}>
                                                Leer más
                                            </Link>
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

export default Service;