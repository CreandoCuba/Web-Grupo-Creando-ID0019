import {SimpleGrid} from "@chakra-ui/react";
import SocialProfileSimple from "../Chakra templates/ProfileCard";
import {useLocation} from "react-router-dom";
import Slider from "react-slick";
import {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";
import '../Chakra templates/slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ArrowLeftIcon, ArrowRightIcon} from "@chakra-ui/icons";

const team = [
    {
        name: 'WALTER JESÚS NAVEIRA CARREÑO',
        image: 'images/Walter.jpg',
        job: 'PRESIDENTE',
        studies: [
            'Doctor en Ciencias de la Educación',
            'Máster en Matemática Educativa',
            'Licenciado en Educación Matemática - Física',
        ],
        Email: 'mailto:walter.creando@gmail.com',
        ResearchGate: 'https://www.researchgate.net/profile/Walter-Naveira',
    },
    {
        name:'ULISES BETANCOURT MORFFIS',
        image: 'images/Ulises.jpg',
        job:'DIRECTOR DE ADMINISTRACIÓN EMPRESARIAL',
        studies: [
            'Máster en Administración Empresarial',
            'Ingeniero Industrial',
        ],
        Email: 'mailto:ulises.creando@gmail.com',
        ResearchGate: 'https://www.researchgate.net/profile/Ulises-Betancourt-Morffis',
        LinkedIn:'https://www.linkedin.com/in/ulises-betancourt-morffis-23ab411a0/',
    },
    {
        name: 'ARLETT MEDINA RODRÍGUEZ',
        image: 'images/Arlett.png',
        job: 'DIRECTOR DE NEGOCIOS',
        studies: [
            'Doctor en Ciencias Económicas',
            'Licenciada en Economía',
        ],
        Email: 'mailto:arlett.creando@gmail.com'
    },
    {
        name: 'ALEJANDRO RAMOS GUERRA',
        image: 'images/Alejandro.jpg',
        job: 'DIRECTOR DE COMUNICACIÓN Y DISEÑO',
        studies: [
            'Máster en Ciencias de la Comunicación',
            'Licenciado en Comunicación Social',
        ],
        Email: 'mailto:alejandrorg.creando@gmail.com',
        LinkedIn:  'https://www.linkedin.com/in/alejandro-ramos-guerra-765619143/',
    },
    {
        name: 'ARMANDO SANTANA MONTES DE OCA',
        image: 'images/Armando.jpg',
        job: 'ADMINISTRADOR DE LA PLATAFORMA PARA EL DESARROLLO LOCAL',
        studies: [
            'Doctor en Ciencias de la Educación',
            'Máster en Didácticas de las Humanidades',
            'Licenciado en Educación, Historia y Marxismo-Leninismo ',
        ],
        Email: 'mailto:desarrollo.creando@gmail.com',
        LinkedIn: 'https://www.linkedin.com/in/armando-santana-montes-de-oca-b62ba719a/',
        ResearchGate: 'https://www.researchgate.net/profile/Armando-Santana-Montes-De-Oca',
    },
    {
        name:'ÁNGEL DANLEY RODRÍGUEZ MARTÍNEZ',
        image: 'images/Ángel Danley.jpg',
        job:'JEFE DEL DEPARTAMENTO DE COMUNICACIÓN',
        studies:[
            'Máster en Ciencias de la Comunicación',
            'Licenciado en Comunicación Social',
        ],
        LinkedIn:  'https://www.linkedin.com/in/angel-rodriguez-martinez-ab3939137/',
    },
    {
        name: 'TAMARA HERNÁNDEZ MANSO',
        image: 'images/Tamara.jpg',
        job: 'ESPECIALISTA EN GESTIÓN COMERCIAL',
        studies: [
            'Doctora en Ciencias de la Educación',
            'Licenciada en Gestión Sociocultural',
            'Licenciada en Educación Laboral',
        ],
        LinkedIn: 'https://www.linkedin.com/in/tamara-hdez-5991301aa/',
    },
    {
        name: 'YOSBEL PEÑATE BARCELÓ',
        image: 'images/Yosbel.jpg',
        job: 'JEFE DEL DEPARTAMENTO DE DESARROLLO DE SOFTWARE',
        studies:[
            'Máster en Informática y Computación',
            'Ingeniero en Ciencias Informáticas',
        ],
        LinkedIn: 'https://www.linkedin.com/in/yosbel-penate-barcelo/',
        ResearchGate: 'https://www.researchgate.net/profile/Yosbel-Penate-Barcelo',
    }
]


export default function () {
    const path = useLocation();
    const [isMain, setIsMain] = useState(true);
    useEffect(()=> {
        setIsMain(path.pathname === '/' || path.pathname==='/inicio');
    }, [path.pathname])
    const portrait = useMediaQuery({orientation: "portrait"})

    if (isMain) {
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
        return(
            <section>
                <div className="heading_container heading_center">
                    <h2 className="">
                        Nuestro <span> Equipo </span>
                    </h2>
                </div>
                <Slider className='slider' dotsClass="custom-dots" style={{display:'flex', flexDir:'row'}} {...SliderSettings}>

                    {team.map((member, index) => {
                        return (
                            <SocialProfileSimple
                                name={member.name}
                            job={member.job}
                            studies={member.studies}
                            image={member.image}
                            LinkedIn={member.LinkedIn ? member.LinkedIn : null}
                            ResearchGate={member.ResearchGate ? member.ResearchGate : null}
                            Email={member.Email ? member.Email : null}
                        />
                    )
                })}
                </Slider>
            </section>
        )
    }
    return (
        <section>
            <div className="heading_container heading_center">
                <h2 className="">
                    Nuestro <span> Equipo </span>
                </h2>
            </div>
            <div className="team_container">
                <SimpleGrid columns={{base: 1, md: 2, lg: 3}}>
                    {team.map((member, index) => {
                        return (
                            <SocialProfileSimple
                                name={member.name}
                                job={member.job}
                                studies={member.studies}
                                image={member.image}
                                LinkedIn={member.LinkedIn ? member.LinkedIn : null}
                                ResearchGate={member.ResearchGate ? member.ResearchGate : null}
                                Email={member.Email ? member.Email : null}
                            />
                        )
                    })}
                </SimpleGrid>
            </div>
        </section>
    )
}