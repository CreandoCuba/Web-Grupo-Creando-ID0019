import {Button, Center, Container, Heading, Stack, Text} from "@chakra-ui/react";

const Hiring = () => {
    return(
        <section>
            <Center>

            <Stack margin={'40px'}>
                <Heading>
                    Estamos contratando profesionales
                </Heading>
                <Center>
                <Text fontSize={'lg'} maxW={'500px'}>
                    Si deseas formar parte de nuestro equipo de trabajo, puedes
                    rellenar el siguiente formulario. Con tu información podremos
                    contactarte en caso de que tengamos trabajo para ti.
                </Text>
                    <img src={"images/icons/formulario.png"} alt="" style={{margin: '20px', maxWidth: '100px'}}/>
                </Center>
                <Button bg='orange' colorScheme='orange' color='white' width={'fit-content'} m='10px'>
                    <a href={'https://docs.google.com/forms/d/e/1FAIpQLSdcECEy7EJkBAJ1LS38LLJ0pxbCWboSiQF9nXj6vUUJCiMCDw/viewform?usp=sharing'}>Formulario de solicitud</a>
                </Button>
            </Stack>
            </Center>
        </section>
    )
}

export default Hiring;
