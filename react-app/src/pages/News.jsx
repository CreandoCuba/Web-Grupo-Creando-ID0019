import {Center, Container, Flex, Heading, Text} from "@chakra-ui/react";

const News = () => {
    return(
        <Container mt={'80px'}>

            <Flex direction={"column"} textAlign='center'>
                <Heading>
                    Actualmente esta seccion se encuentra en mantenimiento.
                </Heading>
                <Text fontSize={'lg'} textAlign='center'>
                    Proximamente estaremos publicando noticias.
                    Si quieres recibir un correo de notificación una vez
                    sean publicadas, no olvides subscribirte a nuestra página.
                </Text>
                <Center>
                    <img src={'images/construction.png'} alt={'decorative pic'} style={{width:'200px'}}/>
                </Center>
                <Text fontSize={'lg'} textAlign='center'>
                    Recuerde que si tienes dudas, siempre puede contactarnos.
                </Text>
            </Flex>
        </Container>
    )
}

export default News;