import {Center} from "@chakra-ui/react";


const Footer = () => {
    return (
        <section className="footer_section">
            <Center>
                <p>
                    &copy; <span id="displayYear"></span> Todos los derechos reservados: Creando
                </p>
            </Center>
        </section>
    )
}
export default Footer;
