import {Container, SimpleGrid} from "@chakra-ui/react";
import SocialProfileSimple from "../Chakra templates/ProfileCard";

const team = [
    {
        name: 'WALTER JESÚS NAVEIRA CARREÑO',
        image: '/images/Walter.jpg',
        job: 'PRESIDENTE',
        studies: [
            'Doctor en Ciencias de la Educación',
            'Máster en Matemática Educativa',
            'Licenciado en Educación Matemática - Física',
        ],
        email: 'walter.creando@gmail.com',
        ResearchGate: 'Walter Naveira (researchgate.net)',
    },
    {
        name:'ULISES BETANCOURT MORFFIS',
        image: '/images/Ulises.jpg',
        job:'DIRECTOR DE ADMINISTRACIÓN EMPRESARIAL',
        studies: [
            'Máster en Administración Empresarial',
            'Ingeniero Industrial',
        ],
        email: 'ulises.creando@gmail.com',
        ResearchGate: 'Ulises Betancourt Morffis (researchgate.net)',
        LinkedIn:'https://www.linkedin.com/in/ulises-betancourt-morffis-23ab411a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
        name: 'ARLETT MEDINA RODRÍGUEZ',
        image: '',
        job: 'DIRECTOR DE NEGOCIOS',
        studies: [
            'Doctor en Ciencias Económicas',
            'Licenciada en Economía',
        ],
        Email: 'arlett.creando@gmail.com'
    },
    {
        name: 'ALEJANDRO RAMOS GUERRA',
        image: '/images/Alejandro.jpg',
        job: 'DIRECTOR DE COMUNICACIÓN Y DISEÑO',
        studies: [
            'Máster en Ciencias de la Comunicación',
            'Licenciado en Comunicación Social',
        ],
        LinkedIn:  'Alejandro Ramos Guerra | LinkedIn',

    },
    {
        name: 'ARMANDO SANTANA MONTES DE OCA',
        image: '/images/Armando.jpg',
        job: 'ADMINISTRADOR DE LA PLATAFORMA PARA EL DESARROLLO LOCAL',
        studies: [
            'Doctor en Ciencias de la Educación',
            'Máster en Didácticas de las Humanidades',
            'Licenciado en Historia y Marxismo Leninismo e Historia',
        ],
        LinkedIn: 'Armando Santana Montes de Oca | LinkedIn',
        ResearchGate: 'Armando Santana Montes de Oca (researchgate.net)',
    },
    {
        name:'ÁNGEL DANLEY RODRÍGUEZ MARTÍNEZ',
        image: '/images/Ángel Danley.jpg',
        job:'JEFE DEL DEPARTAMENTO DE COMUNICACIÓN',
        studies:[
            'Máster en Ciencias de la Comunicación',
            'Licenciado en Comunicación Social',
        ],
        LinkedIn:  'Angel Rodriguez Martinez | LinkedIn',
    },
    {
        name: 'TAMARA HERNÁNDEZ MANSO',
        image: '/images/Tamara.jpg',
        job: 'ESPECIALISTA EN GESTIÓN COMERCIAL',
        studies: [
            'Doctora en Ciencias de la Educación',
            'Licenciada en Gestión Sociocultural',
            'Licenciada en Educación Laboral',
        ],
        LinkedIn: 'tamara hdez | LinkedIn',
    },
    {
        name: 'YOSBEL PEÑATE BARCELÓ',
        image: '/images/Yosbel.jpg',
        job: 'JEFE DEL DEPARTAMENTO DE DESARROLLO DE SOFTWARE',
        studies:[
            'Máster en Informática y Computación',
            'Ingeniero en Ciencias Informáticas',
        ],
        LinkedIn: 'Yosbel (MSc Peñate) Peñate Barceló | LinkedIn',
        ResearchGate: 'Yosbel Peñate Barceló (researchgate.net)',
    }
]

export default () => {
    return (
        <section>
                <div className="heading_container heading_center">
                    <h2 className="">
                        Nuestro <span> Equipo </span>
                    </h2>
                </div>
                <div className="team_container">
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
                        {team.map((member, index) => {
                            return(
                                <SocialProfileSimple
                                    name={member.name}
                                    job={member.job}
                                    studies={member.studies}
                                    image={member.image}
                                    LinkedIn={member.LinkedIn? member.LinkedIn : null}
                                    ResearchGate={member.ResearchGate? member.ResearchGate : null}
                                    Email={member.Email? member.Email : null}
                                />
                            )})}
                    </SimpleGrid>
                </div>
        </section>
    )
}