import {Center, Heading, Image, Stack, Text} from "@chakra-ui/react";
import Info from "../../sections/Info";
import Footer from "../../sections/Footer";

export default () => {
    return(
        <div>
            <Stack paddingX='15%' py='70px'>
                <Center>
                    <Heading>
                        Servicios de Diseño
                    </Heading>
                    <img src={"images/services/Diseño.png"} alt="" style={{margin:'20px', maxWidth:'100px'}}/>
                </Center>

                <Text fontSize='lg'>
                    ¡Potencia tu presencia en línea y optimiza tus sistemas informáticos con nuestros servicios
                    integrales de Creación y Gestión de Páginas Web y soluciones informáticas!
                </Text>
                <Text fontSize='lg'>
                    En Creando, nos especializamos en proporcionar soluciones tecnológicas completas para
                    empresas y organizaciones que desean destacarse en el mundo digital. Con nuestro equipo de expertos
                    en desarrollo web y tecnología de la información, estamos comprometidos a ofrecer servicios de alta
                    calidad que impulsen el crecimiento y el éxito de tu negocio.
                </Text>
                <h4>
                    Creación y Gestión de Páginas Web:
                </h4>
                <Text fontSize='lg'>
                    Diseñamos y desarrollamos sitios web profesionales y atractivos que representan la esencia de tu
                    marca y atraen a tus clientes objetivo. Desde páginas web informativas hasta tiendas en línea
                    totalmente funcionales, nos encargamos de cada etapa del proceso, desde el diseño hasta la
                    implementación y el mantenimiento continuo.
                </Text>
                <h4>
                    Informatización de Procesos:
                </h4>
                <Text fontSize='lg'>
                    Optimiza la eficiencia de tu empresa digitalizando y automatizando tus procesos internos.
                    Implementamos sistemas y herramientas que simplifican tareas, mejoran la colaboración entre
                    equipos y aumentan la productividad de tu negocio.
                </Text>
                <h4>
                    Seguridad Informática:
                </h4>
                <Text fontSize='lg'>
                    Protege la integridad de tus datos y sistemas con nuestras soluciones avanzadas de seguridad
                    informática. Desde la evaluación de riesgos hasta la implementación de medidas de protección,
                    nos aseguramos de que tu empresa esté protegida contra amenazas cibernéticas en todo momento.
                </Text>
                <h4>
                    Administración de Redes:
                </h4>
                <Text fontSize='lg'>
                    Mantén tus redes informáticas funcionando sin problemas con nuestra administración profesional
                    de redes. Desde la configuración inicial hasta la optimización y el monitoreo continuo, nos
                    aseguramos de que tu infraestructura de red sea segura, confiable y eficiente.
                </Text>
                <h4>
                    Soporte a Sistemas Informáticos:
                </h4>
                <Text fontSize='lg'>
                    Contamos con un equipo de expertos técnicos listos para proporcionarte asistencia rápida y
                    efectiva para resolver cualquier problema informático que puedas enfrentar. Ya sea un problema
                    con tu computadora personal o un fallo en tu servidor, estamos aquí para ayudarte a recuperar tu
                    productividad rápidamente.
                </Text>
                <h4>
                    Mantenimiento de Ordenadores y Servidores:
                </h4>
                <Text fontSize='lg'>
                    Mantén tus equipos y servidores en óptimas condiciones con nuestro servicio de mantenimiento
                    preventivo. Realizamos actualizaciones de software, copias de seguridad regulares y monitoreo
                    constante para garantizar un rendimiento óptimo y una operación sin problemas.
                </Text>
                <Text fontSize='lg'>
                    En Creando, estamos comprometidos a brindarte soluciones informáticas completas y
                    personalizadas que te ayuden a alcanzar tus objetivos comerciales y a destacarte en el mercado
                    digital. ¡Contáctanos hoy mismo y lleva tu empresa al siguiente nivel tecnológico!
                </Text>
            </Stack>
            <Info/>
            <Footer/>
        </div>
    )
}
