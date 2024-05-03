import {Center, Heading, Image, Stack, Text} from "@chakra-ui/react";
import Info from "../../sections/Info";
import Footer from "../../sections/Footer";

export default () => {
    return(
        <div>

            <Stack paddingX='15%' py='70px'>
                <Center>
                    <Heading>
                        Desarrollo Local
                    </Heading>
                    <Image src="/images/services/Desarrollo Local.png" alt="" margin={'20px'} maxW={'100px'}/>
                </Center>

                <Text fontSize='lg'>
                    ¡Potencia el desarrollo y la identidad de tu ciudad con nuestro servicio integral de consultoría y estrategias de desarrollo local!
                </Text>
                <Text fontSize='lg'>
                    En Creando, nos dedicamos a impulsar el crecimiento y la proyección de ciudades y localidades, fortaleciendo su identidad, imagen y posicionamiento en el ámbito nacional e internacional. Nuestro enfoque se centra en brindar soluciones innovadoras y personalizadas para promover el desarrollo económico, social y cultural de tu comunidad.
                </Text>
                <Text fontSize='lg'>
                    Nuestros servicios abarcan desde la creación de centros para el desarrollo local hasta la elaboración de estrategias de desarrollo empresarial, territorial, sectorial y nacional. Trabajamos de la mano contigo para identificar y aprovechar las fortalezas y oportunidades de tu ciudad, diseñando planes de acción concretos y efectivos para alcanzar tus objetivos de crecimiento y sostenibilidad.
                </Text>
                <Text fontSize='lg'>
                    Además, ofrecemos acompañamiento integral en el trabajo social y comunitario, promoviendo la participación activa de los ciudadanos en la construcción de su propio futuro. Nos enfocamos en fomentar la colaboración entre todos los actores locales, incluyendo empresas, instituciones, organizaciones sociales y gobierno, para impulsar el desarrollo inclusivo y sostenible de la comunidad.
                </Text>
                <Text fontSize='lg'>
                    Nuestros expertos también se encargan del llenado de expedientes para la creación de negocios, facilitando los trámites y procesos administrativos para emprendedores y empresarios locales. Asimismo, brindamos asistencia en el llenado de expedientes para la colaboración internacional, facilitando la conexión y el intercambio de experiencias y recursos con otras comunidades y entidades a nivel global.
                </Text>
                <Text fontSize='lg'>
                    En Creando, nos apasiona la creación de proyectos de desarrollo local que transformen positivamente la realidad de las ciudades y localidades. Trabajamos de manera comprometida y enfocada en resultados, ofreciendo soluciones innovadoras, creativas y adaptadas a las necesidades específicas de cada cliente.
                </Text>
            </Stack>
            <Info/>
            <Footer/>
        </div>
    )
}



