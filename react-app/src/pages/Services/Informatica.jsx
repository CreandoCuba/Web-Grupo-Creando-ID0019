import {Center, Heading, Image, Stack, Text} from "@chakra-ui/react";
import Info from "../../sections/Info";
import Footer from "../../sections/Footer";

export default () => {
    return(
        <div>
            <Stack paddingX='15%' py='70px'>
                <Center>
                    <Heading>
                        Servicios Informáticos
                    </Heading>
                    <Image src="/images/services/Informática.png" alt="" margin={'20px'} maxW={'100px'}/>
                </Center>

                <Text fontSize='lg'>
                    ¡Impulsa tu presencia en línea y optimiza tus sistemas informáticos con nuestro servicio integral de Creación y Gestión de páginas web y soluciones informáticas!
                </Text>
                <Text fontSize='lg'>
                    En Creando, nos especializamos en ofrecer soluciones tecnológicas avanzadas para satisfacer las necesidades de tu negocio en el mundo digital. Nuestro equipo de expertos en desarrollo web y tecnologías de la información está comprometido con brindar servicios de alta calidad que impulsen el crecimiento y la eficiencia de tu empresa.
                </Text>
                <h4>
                    Creación y Gestión de Páginas Web:
                </h4>
                <Text fontSize='lg'>
                    Diseñamos y desarrollamos sitios web a medida, adaptados a tus necesidades y objetivos comerciales. Desde páginas web informativas hasta tiendas en línea y portales corporativos, nos encargamos de cada aspecto del proceso, desde la planificación y el diseño hasta el lanzamiento y el mantenimiento continuo.
                </Text>
                <h4>
                    Informatización de Procesos:
                </h4>
                <Text fontSize='lg'>
                    Optimiza tus procesos empresariales mediante la implementación de soluciones tecnológicas innovadoras. Automatizamos tareas repetitivas, digitalizamos documentos y creamos sistemas de gestión personalizados que te ayudan a aumentar la productividad y reducir costos.
                </Text>
                <h4>
                    Seguridad Informática:
                </h4>
                <Text fontSize='lg'>
                    Protege tus datos y sistemas contra amenazas cibernéticas con nuestras soluciones de seguridad informática avanzadas. Realizamos evaluaciones de riesgos, implementamos medidas de seguridad proactivas y brindamos monitoreo constante para garantizar la integridad y confidencialidad de tu información.
                </Text>
                <h4>
                    Administración de Redes:
                </h4>
                <Text fontSize='lg'>
                    Gestionamos y optimizamos tus redes informáticas para garantizar un rendimiento óptimo y una conectividad confiable. Desde la configuración inicial hasta la administración continua, nos aseguramos de que tu infraestructura de red funcione de manera eficiente y segura.
                </Text>
                <h4>
                    Soporte a Sistemas Informáticos:
                </h4>
                <Text fontSize='lg'>
                    Ofrecemos soporte técnico experto para resolver cualquier problema informático que puedas enfrentar. Nuestro equipo de profesionales está disponible para brindarte asistencia rápida y efectiva, ya sea de manera remota o en sitio.
                </Text>
                <h4>
                    Mantenimiento de Ordenadores y Servidores:

                </h4>
                <Text fontSize='lg'>
                    Mantenemos tus ordenadores y servidores en óptimas condiciones para garantizar un funcionamiento sin problemas. Realizamos mantenimiento preventivo, actualizaciones de software y hardware, y monitoreo constante para evitar fallos y maximizar el rendimiento.
                </Text>
                <Text fontSize='lg'>
                    En Creando, nos comprometemos a ofrecerte soluciones informáticas integrales y personalizadas que impulsen el éxito de tu negocio en el mundo digital. ¡Contáctanos hoy mismo y lleva tu empresa al siguiente nivel tecnológico!
                </Text>
            </Stack>
            <Info/>
            <Footer/>
        </div>
    )
}


