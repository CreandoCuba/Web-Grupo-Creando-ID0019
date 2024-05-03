import {Center, Heading, Image, Stack, Text} from "@chakra-ui/react";
import Info from "../../sections/Info";
import Footer from "../../sections/Footer";

export default () => {
    return(
        <div>
            <Stack paddingX='15%' py='70px'>
                <Center>
                    <Heading>
                        Servicios de Marketing
                    </Heading>
                    <Image src="/images/services/Marketing y Comunicación.png" alt="" margin={'20px'} maxW={'100px'}/>
                </Center>
                <Text fontSize='lg'>
                En Creando, estamos comprometidos con impulsar el éxito de tu negocio a través de
                soluciones estratégicas y creativas de investigación de mercados, marketing y comunicación corporativa.
                Nuestro equipo de expertos en marketing y comunicación trabaja de la mano contigo para identificar
                oportunidades de crecimiento, desarrollar productos innovadores y construir una imagen sólida de marca
                que conecte con tu audiencia.
                </Text>
                <h4>
                Investigación de Mercados:
                </h4>
                <Text fontSize='lg'>
                Analizamos en profundidad el mercado y la competencia para proporcionarte información valiosa que te
                permita tomar decisiones informadas. Nuestros estudios de mercado incluyen análisis de tendencias,
                segmentación de clientes, evaluación de la demanda y estudios de satisfacción del cliente.
                </Text>
                <h4>
                Estrategia de Marketing:
                </h4>
                <Text fontSize='lg'>
                Desarrollamos estrategias de marketing integrales y personalizadas que te ayudan a alcanzar tus
                objetivos comerciales. Desde la conceptualización de productos hasta la planificación de marketing mix,
                nos enfocamos en diseñar estrategias efectivas que impulsen el crecimiento de tu negocio.
                </Text>
                <h4>
                Comunicación Corporativa:
                </h4>
                <Text fontSize='lg'>
                Definimos la identidad e imagen corporativa de tu empresa, asegurando que cada aspecto de tu marca
                refleje tus valores y objetivos. Desarrollamos estrategias de comunicación interna y externa, manuales
                de gestión de comunicación, protocolos y ceremoniales, así como planes de responsabilidad social
                corporativa.
                </Text>
                <h4>
                Gestión de Marcas y Diseño:
                </h4>
                <Text fontSize='lg'>
                Diseñamos y desarrollamos marcas sólidas que destaquen en el mercado y generen una conexión emocional
                con tus clientes. Nos encargamos de la protección de marcas y denominaciones de productos, así como del
                diseño y actualización de manuales de identidad visual.
                </Text>
                <h4>
                Estrategia de Comunicación y Publicidad:
                </h4>
                <Text fontSize='lg'>
                Creamos campañas comunicativas impactantes que generen notoriedad y engagement con tu audiencia. Desde
                la redacción de textos publicitarios hasta la organización de eventos y la gestión de campañas en medios
                digitales y tradicionales, nos aseguramos de que tu mensaje llegue de manera efectiva a tu público
                objetivo.
                </Text>
                <Text fontSize='lg'>
                En Creando, nos comprometemos a brindarte soluciones integrales y efectivas que impulsen
                el crecimiento y la reputación de tu negocio. ¡Contáctanos hoy mismo y déjanos ayudarte a alcanzar tus
                metas empresariales!
                </Text>
            </Stack>
            <Info/>
            <Footer/>
        </div>
    )
}
