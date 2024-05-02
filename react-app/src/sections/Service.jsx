import {pages} from "../App";
import {Link} from "react-router-dom";
import {Slide} from 'react-reveal';
import {Container, SimpleGrid} from "@chakra-ui/react";

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
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }}>
                        {services.map((value,index) => {return(
                            <Slide up duration={500} delay={100*(index%4)} fraction={0.5}>
                                <Container className="col-md-4 " key={index}>
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
                                </Container>
                            </Slide>
                        )})}
                    </SimpleGrid>
                </div>
            </div>
        </section>

    )
}

export default Service;