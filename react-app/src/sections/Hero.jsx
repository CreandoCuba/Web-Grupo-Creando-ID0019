import {Link} from "react-router-dom";
import {Button, Text} from "@chakra-ui/react";

export default () => {
    return (
        <section className="slider_section ">
            <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-6 ">
                                    <div className="detail-box">
                                        <h1>
                                            SUPER-VISIÓN SURL

                                        </h1>
                                        <Text fontSize='lg'>
                                            PRIMERA MIPYME CERTIFICADA EN CUBA POR EL CECMED<br/>
                                            Grupo líder en la consultoría
                                            empresarial integral, con presencia a nivel
                                            nacional, en constante desarrollo de
                                            estrategias de negocios y planes de
                                            mejoras, que apoyen a nuestros clientes y
                                            al desarrollo local.
                                        </Text>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="img-box">
                                        <img src="images/slider-img.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-6 ">
                                    <div className="detail-box">
                                        <h1>
                                            Te ayudamos a crecer
                                        </h1>
                                        <Text fontSize='lg'>
                                            Nuestra empresa brinda variados servicios para ayudarte a crecer
                                            entre los cuales se incluyen servicios informaticos, de contabilidad
                                            o de diseño.
                                        </Text>
                                        <Link to={'/servicios'}>
                                            <Button
                                                colorScheme='orange'
                                                backgroundColor='orange'
                                                color='white'
                                                mt='20px'>
                                                Saber Más
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="img-box">
                                        <img src="images/slider-img.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-6 ">
                                    <div className="detail-box">
                                        <h1>
                                            Conocenos
                                        </h1>
                                        <Text fontSize='lg'>
                                            Somos un grupo que brinda servicios de consultoría
                                            empresarial integral a los actores económicos del
                                            territorio, para garantizar su rentabilidad y
                                            sostenibilidad en el tiempo.
                                        </Text>
                                        <Link to={'/SobreNosotros'}>
                                            <Button
                                                colorScheme='orange'
                                                backgroundColor='orange'
                                                color='white'
                                                mt='20px'>
                                                Saber Más
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="img-box">
                                        <img src="images/slider-img.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ol className="carousel-indicators">
                    <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
                    <li data-target="#customCarousel1" data-slide-to="1"></li>
                    <li data-target="#customCarousel1" data-slide-to="2"></li>
                </ol>
            </div>

        </section>
    )
}