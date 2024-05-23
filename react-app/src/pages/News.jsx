import {Center, Container, Flex, Heading, Text} from "@chakra-ui/react";

const News = () => {
    return(
        <Container mt={'80px'}>

            <Flex direction={"column"} textAlign='center'>
                <Heading>
                    Actualmente no tenemos noticias.
                </Heading>
                <Text fontSize={'lg'} textAlign='center'>
                    Proximamente estaremos publicando
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