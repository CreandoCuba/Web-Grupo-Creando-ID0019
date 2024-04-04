
const mainRoute = 'images/services/'
const services = [
    {
        name:'Administración de Empresas',
        route: (mainRoute +'Administración de Empresas.png'),
    },
    {
        name: 'Contabilidad y Finanzas',
        route: mainRoute +'Contabilidad y Finanzas.png'
    },
    {
        name: 'Desarrollo Local',
        route: mainRoute+'Desarrollo Local.png'
    },
    {
        name: 'Diseño',
        route: mainRoute +'Diseño.png'
    },
    {
        name: 'Fotografía',
        route: mainRoute +'Fotografía.png'
    },
    {
        name: 'Informatica',
        route: mainRoute +'Informática.png'
    },
    {
        name: 'Marketing y Comunicacion',
        route: mainRoute +'Marketing y Comunicación.png'
    },
    {
        name: 'Turismo',
        route: mainRoute+'Turismo.png'
    }
]
export default () => {
    return (

        <section className="service_section layout_padding">
            <div className="service_container">
                <div className="container ">
                    <div className="heading_container heading_center">
                        <h2>
                            Our <span>Services</span>
                        </h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration
                        </p>
                    </div>
                    <div className="row">
                        {services.map((value,index) => {return(
                                <div className="col-md-4 ">
                                    <div className="box ">
                                        <div className="img-box">
                                            <img src={value.route} alt="Icono Representativo"/>
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                {value.name}
                                            </h5>
                                            <p>
                                                fact that a reader will be distracted by the readable content of a page
                                                when looking at its layout.
                                                The
                                                point of using
                                            </p>
                                            <a href="">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                        )})}
                    </div>
                    <div className="btn-box">
                        <a href="">
                            View All
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}