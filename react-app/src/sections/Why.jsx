import {Center, Container, Divider, Heading, Stack, Text} from "@chakra-ui/react";


export default () => {
    return (
        <Stack className="why_section layout_padding" px={'15%'}>
            <div className="heading_container heading_center">
                <h2>
                    Por qué <span>Elegirnos?</span>
                </h2>
            </div>
            <h4>
                Te ayudamos a conseguir tus metas
            </h4>
            <Text fontSize='lg'>
                ¿Por qué elegirnos? Porque somos más que una empresa de proyectos,
                somos tu socio en el éxito. En cada paso del camino, desde la concepción
                hasta la realización, estamos aquí para convertir tus ideas en realidad.
                ¿Qué nos hace diferentes? Permítenos contarte.
            </Text>
            <h4>
                Somos Versatiles
            </h4>
            <Text fontSize='lg'>
                En primer lugar, somos un equipo de apasionados por la innovación y la
                creatividad. Nos encanta enfrentarnos a desafíos y encontrar soluciones
                únicas para cada proyecto. Ya sea que necesites un diseño atractivo, una
                representación sólida de tu empresa, un servicio contable confiable o un
                software personalizado, estamos preparados para ofrecerte resultados
                excepcionales.
            </Text>
            <h4>
                Te damos diseños de calidad
            </h4>
            <Text fontSize='lg'>
                Hablemos de diseño. ¿Quieres destacar entre la multitud? Nuestro equipo
                de diseñadores expertos trabaja contigo para crear una identidad visual
                que refleje la esencia de tu marca. Desde logotipos impresionantes hasta
                sitios web cautivadores, te ayudamos a transmitir el mensaje correcto y
                a dejar una impresión duradera en tus clientes.
            </Text>
            <h4>
                Te hacemos dar tu mejor imagen
            </h4>
            <Text fontSize='lg'>
                Pero eso no es todo. Nos enorgullece ofrecer servicios integrales de
                representación empresarial. ¿Necesitas presentar tu empresa de manera
                profesional y persuasiva? ¡Estás en el lugar correcto! Desde la redacción
                de propuestas hasta la creación de presentaciones impactantes, nos
                aseguramos de que tu empresa brille en cada oportunidad.
            </Text>
            <h4>
                Podemos gestionar tus ingresos
            </h4>
            <Text fontSize='lg'>
                Y no olvidemos la importancia de una contabilidad sólida. Con nuestro equipo
                de expertos contables a tu disposición, puedes dejar de preocuparte por los
                números y concentrarte en hacer crecer tu negocio. Desde la gestión de cuentas
                hasta la presentación de impuestos, estamos aquí para garantizar que tus
                finanzas estén en orden y que puedas tomar decisiones informadas para el futuro.
            </Text>
            <h4>
                Hacemos desde paginas web hasta Aplicaciones
            </h4>
            <Text fontSize='lg'>
                Por último, pero no menos importante, nuestro equipo de desarrollo de
                software está listo para llevar tus ideas al siguiente nivel. ¿Tienes
                una visión única para una aplicación o sistema? Nosotros lo hacemos realidad.
                Con experiencia en una variedad de tecnologías y metodologías de desarrollo,
                creamos soluciones personalizadas que se adaptan a tus necesidades específicas
                y te ayudan a alcanzar tus objetivos empresariales.
            </Text>
            <Divider/>
            <Text fontSize='lg'>
                Entonces, ¿por qué elegirnos? Porque en cada proyecto, nos comprometemos
                a superar tus expectativas. Porque creemos en la excelencia en todo lo que
                hacemos y nos esforzamos por ofrecerte resultados que te hagan sentir orgulloso.
                Porque no solo somos tu proveedor de servicios, sino tu socio en el éxito.
                ¿Estás listo para llevar tu empresa al siguiente nivel? ¡Únete a nosotros y
                juntos hagamos grandes cosas!
            </Text>
            <Center>
                <img src="images/slider-img.png" alt="" width='30%'/>
            </Center>
        </Stack>
    )
}