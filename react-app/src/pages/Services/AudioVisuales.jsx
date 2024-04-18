import {Heading, Stack, Text} from "@chakra-ui/react";
import Info from "../../sections/Info";
import Footer from "../../sections/Footer";

export default () => {
    return(
        <div>
            <Stack paddingX='15%' py='40px'>
                <Heading>
                    Servicios de Creacion de Audiovisuales
                </Heading>
                <h4>
                    Fotografía Publicitaria: Estudio y Exteriores
                </h4>
                <Text fontSize='lg'>
                    En [Nombre de la Empresa], nos especializamos en la creación de fotografías publicitarias tanto en
                    estudio como en exteriores. Capturamos la esencia de tu marca con imágenes de alta calidad que
                    destacan tus productos o servicios de manera impactante y atractiva.
                </Text>
                <h4>
                    Colchón Fotográfico: Publicitario e Institucional
                </h4>
                <Text fontSize='lg'>
                    Nuestro equipo experto en fotografía publicitaria ofrece un colchón fotográfico versátil, adaptado a
                    tus necesidades. Ya sea para promocionar un producto o para transmitir la identidad institucional de
                    tu empresa, creamos imágenes que comunican tu mensaje de forma efectiva y profesional.
                </Text>
                <h4>
                    Videos Publicitarios: Estudio y Exteriores
                </h4>
                <Text fontSize='lg'>
                    Además de la fotografía, también ofrecemos servicios de creación de videos publicitarios en estudio
                    y en locaciones exteriores. Desde anuncios cortos hasta videos promocionales más elaborados, nos
                    encargamos de producir contenido audiovisual que capte la atención de tu audiencia y impulse tu
                    marca.
                </Text>
                <h4>
                    Colchón Videográfico: Publicitario e Institucional
                </h4>
                <Text fontSize='lg'>
                    Nuestro colchón videográfico abarca desde videos publicitarios que resaltan tus productos o
                    servicios hasta videos institucionales que transmiten la filosofía y los valores de tu empresa. Con
                    una combinación de creatividad y profesionalismo, creamos videos que generan impacto y conectan con
                    tu público objetivo.
                </Text>
            </Stack>
            <Info/>
            <Footer/>
        </div>
    )
}
