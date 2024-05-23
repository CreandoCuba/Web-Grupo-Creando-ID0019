import {Button, Container, Heading, Stack, Text} from "@chakra-ui/react";

const Hiring = () => {
    return(
        <section>
            <Stack margin={'40px'}>
                <Heading>
                    Estamos contratando profesionales
                </Heading>
                <Text>
                    Tu puedes formar parte de nuestro equipo, contratamos diseñadores,
                    programadores y profesionales expertos en economia. Si deseas, puedes
                    enviar tu informacion para hacer una solicitud de empleo presionando
                    el siguiente enlace
                </Text>
                <Button bg='orange' colorScheme='orange' color='white' width={'fit-content'} m='10px'>
                    <a href={'https://docs.google.com/forms/d/e/1FAIpQLSdcECEy7EJkBAJ1LS38LLJ0pxbCWboSiQF9nXj6vUUJCiMCDw/viewform?usp=sharing'}>Formulario de solicitud</a>
                </Button>
            </Stack>
        </section>
    )
}

export default Hiring;