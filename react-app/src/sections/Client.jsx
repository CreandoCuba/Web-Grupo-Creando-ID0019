import SocialProfileSimple from "../Chakra templates/ProfileCard";
import Slider from "react-slick";
import {ArrowLeftIcon, ArrowRightIcon} from "@chakra-ui/icons";
import {useMediaQuery} from "react-responsive";
import {Center} from "@chakra-ui/react";

const Client = () => {
    const clients=[
        {
            name:'AFROATENAS',
            image: 'images/clients/AFROATENAS.png',
        },
        {
            name: 'Bar Élite',
            image: 'images/clients/Bar Élite.png',
        },
        {
            name:'Centro Provincial de Cine Matanzas',
            image: 'images/clients/Centro Provincial de Cine Matanzas.png',
        },{
            name:'Empresa Pecuaria Genética de Matanzas',
            image: 'images/clients/Empresa Pecuaria Genética de Matanzas.jpg',
        },{
            name:'ERVIS BUENOS',
            image: 'images/clients/ERVIS BUENOS.png',
        },{
            name:'Hospital Provincial  Clínico - Quirúrgico - Docente Faustino Pérez',
            image: 'images/clients/Hospital Provincial  Clínico - Quirúrgico - Docente Faustino Pérez.png',
        },{
            name:'Los Alejos PDL',
            image: 'images/clients/Los Alejos PDL.png',
        },{
            name:'Servicios Médicos Cubanos',
            image: 'images/clients/Servicios Médicos Cubanos.jpeg',
        },{
            name:'Super-Visión SURL',
            image: 'images/clients/Super-Visión SURL.png',
        },{
            name:'Universidad de Ciencias Médicas de Matanzas',
            image: 'images/clients/Universidad de Ciencias Médicas de Matanzas.png',
        },
    ]
    const NextArrow = ({ onClick }) => {
        return (
            <ArrowRightIcon
                display='block'
                size='40px'
                bgColor='none'
                margin='auto'
                onClick={onClick} />
        );
    };
    const portrait = useMediaQuery({orientation: "portrait"})
    const PrevArrow = ({ onClick }) => {
        return (
            <ArrowLeftIcon
                display='block'
                size='40px'
                bgColor='none'
                margin='auto'
                onClick={onClick}
            />
        );
    };
    const SliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: (portrait? 1:3),
        slidesToScroll: 1,

        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <section className="client_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center psudo_white_primary mb_45">
                    <h2>
                        Nuestros <span>Clientes</span>
                    </h2>
                </div>
                <Slider className='slider' dotsClass="custom-dots" style={{display:'flex', flexDir:'row'}} {...SliderSettings}>
                    {clients.map((value, index)=> {
                        return(
                            <Center width={'200px'} paddingTop={'20px'}>
                                <img style={{margin:'auto' ,width:'200px', backgroundPosition:'center',}} src={value.image} alt={'logo de'+value.name}/>
                            </Center>
                        )
                    })}
                </Slider>
            </div>
        </section>

    )
}
export default Client
