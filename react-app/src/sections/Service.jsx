
const mainImgRoute = 'images/services/'
const services = [
    {
        name:'Administración de Empresas',
        imgRoute: mainImgRoute +'Administración de Empresas.png',
        subList: [
            'Diseño de Modelo de Negocios.',
            'Planeación Estratégica',
            'Logística'
        ]
    },
    {
        name: 'Contabilidad y Finanzas',
        imgRoute: mainImgRoute +'Contabilidad y Finanzas.png',
        subList:[
            'Teneduría de libros',
            'Finanzas corporativas',
            'Estudios de factibilidad'
        ]
    },
    {
        name: 'Desarrollo Local',
        imgRoute: mainImgRoute+'Desarrollo Local.png',
        subList: [
            'Identidad, Imagen y Marketing de ciudades o localidades.',
            'Diseño y desarrollo de marcas.'
        ]
    },
    {
        name: 'Diseño',
        imgRoute: mainImgRoute +'Diseño.png',
        subList: [
            'Diseño de Personaje o Mascota',
            'Diseño de interiores',
            'Diseño de infografías.'
        ]
    },
    {
        name: 'Fotografía',
        imgRoute: mainImgRoute +'Fotografía.png',
        subList: [
            'Fotos publicitarias de estudio.',
            'Fotos publicitarias de exteriores.',
            'Colchón fotográfico publicitario.'
        ]
    },
    {
        name: 'Informatica',
        imgRoute: mainImgRoute +'Informática.png',
        subList: [
            'Creación y Gestión de páginas web.',
            'Informatización de procesos.',
            'Seguridad informática.'
        ]
    },
    {
        name: 'Marketing y Comunicacion',
        imgRoute: mainImgRoute +'Marketing y Comunicación.png',
        subList: [
            'Investigación de mercados',
            'Conceptualización de productos.',
            'Diseño de productos.'
        ]
    },
    {
        name: 'Turismo',
        imgRoute: mainImgRoute+'Turismo.png',
        subList: [
            'Diseño de productos turísticos.',
            'Diseño de puntos náuticos.',
            'Diseño de souvenirs.'
        ]
    }
]
export default () => {
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
                                                {value.name}
                                            </h5>
                                            <ul>{value.subList?.map((value) => {return <li>{value}</li>} )}</ul>
                                            <a href="">
                                                Leer más
                                            </a>
                                        </div>
                                    </div>
                                </div>
                        )})}
                    </div>
                    <div className="btn-box">
                        <a href="">
                            Ver todos
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}