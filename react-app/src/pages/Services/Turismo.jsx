import Info from "../../sections/Info";
import Footer from "../../sections/Footer";
import React from "react";
import {Center, Heading, Image, Stack, Text} from "@chakra-ui/react";


export default () => {
    return(
        <div>
            <Stack paddingX='15%' py='70px'>
                <Center>
                    <Heading>
                        Servicios de Apoyo al Turismo
                    </Heading>
                    <Image src="/images/services/Turismo.png" alt="" margin={'20px'} maxW={'100px'}/>
                </Center>

                <h4>
                    Diseño de Destinos y Centros Turísticos
                </h4>
                <Text fontSize='lg'>
                    En Creando, nos enorgullece colaborar con negocios locales para potenciar su oferta
                    turística y brindar experiencias inolvidables a los viajeros. Con un enfoque integral y
                    personalizado, trabajamos codo a codo con nuestros socios para diseñar destinos y centros turísticos
                    que cautiven a los visitantes desde el primer momento.
                </Text>
                <h4>
                    Creando Experiencias Náuticas Inolvidables
                </h4>
                <Text fontSize='lg'>
                    Nuestro equipo especializado se dedica a crear puntos náuticos que aprovechan al máximo los recursos
                    acuáticos de la región, ofreciendo actividades emocionantes y seguras para todas las edades. Además,
                    desarrollamos elementos de apoyo y didácticos que enriquecen la experiencia del turista,
                    proporcionando información relevante y fomentando la conexión con el entorno.
                </Text>
                <h4>
                    Turismo Responsable: Naturaleza y Ecoturismo
                </h4>
                <Text fontSize='lg'>
                    Con un profundo compromiso con la preservación del medio ambiente, promovemos el turismo de
                    naturaleza y ecoturismo, diseñando itinerarios que permiten a los viajeros sumergirse en la belleza
                    natural de la zona mientras se promueve su conservación. Asimismo, impulsamos el turismo rural y
                    agroturismo, colaborando con comunidades locales para ofrecer experiencias auténticas y
                    enriquecedoras.
                </Text>
                <h4>
                    Ofreciendo Espacios de Descanso y Esparcimiento
                </h4>
                <Text fontSize='lg'>
                    Nuestro portafolio incluye el diseño de paradores y miradores turísticos estratégicamente ubicados,
                    que permiten a los visitantes disfrutar de vistas impresionantes y descansar en entornos únicos.
                    Además, creamos animaciones turísticas que añaden un toque de diversión y entretenimiento a la
                    experiencia del viajero, destacando la riqueza cultural y natural de la región.
                </Text>
                <h4>
                    Aventura y Recuerdos Inolvidables
                </h4>
                <Text fontSize='lg'>
                    Para los más intrépidos, ofrecemos emocionantes actividades de turismo de aventura que despiertan la
                    adrenalina y dejan recuerdos imborrables. Y para aquellos que desean llevar un pedacito de su viaje
                    consigo, diseñamos souvenirs únicos y auténticos que reflejan la esencia del destino.
                </Text>
                <h4>
                    Compromiso con el Desarrollo Sostenible
                </h4>
                <Text fontSize='lg'>
                    Pero nuestro compromiso va más allá de simplemente atraer turistas. Trabajamos en estrecha
                    colaboración con las comunidades locales para desarrollar estrategias de turismo sostenible que
                    beneficien tanto a la población como al medio ambiente, asegurando que el crecimiento turístico sea
                    equitativo y respetuoso con la naturaleza y la cultura local.
                </Text>
                <h4>
                    Únete a Nosotros en esta Aventura
                </h4>
                <Text fontSize='lg'>
                    En Creando, creemos que el turismo no solo debe enriquecer la vida de los viajeros,
                    sino también contribuir al desarrollo sostenible de las comunidades locales. Estamos comprometidos a
                    seguir colaborando con nuestros socios para hacer realidad esta visión y crear un futuro turístico
                    más vibrante y responsable para todos. ¡Únete a nosotros en esta emocionante aventura!
                </Text>
            </Stack>
            <Info/>
            <Footer/>
        </div>
    )
}
