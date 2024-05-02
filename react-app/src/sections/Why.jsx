import {Center, Container, Divider, Flex, Heading, Image, Stack, Text} from "@chakra-ui/react";
import {Slide} from "react-reveal";

    const reasonsWhy = [
        {
            title:'Te ayudamos a conseguir tus metas',
            resume: 'En cada paso del camino, desde la concepción'+
                ' hasta la realización, estamos aquí para convertir tus ideas en realidad.',
            text:'¿Por qué elegirnos? Porque somos más que una empresa de proyectos,'+
                ' somos tu socio en el éxito. En cada paso del camino, desde la concepción'+
                ' hasta la realización, estamos aquí para convertir tus ideas en realidad.',
            image:"./images/icons/diana.png",
        },
        {
            title: 'Somos Versatiles',
            resume: 'Nos encanta enfrentarnos a desafíos y encontrar soluciones'+
                ' únicas para cada proyecto.',
            text: 'En primer lugar, somos un equipo de apasionados por la innovación y'+
                ' la creatividad. Nos encanta enfrentarnos a desafíos y encontrar soluciones'+
                ' únicas para cada proyecto. Ya sea que necesites un diseño atractivo, una'+
                ' representación sólida de tu empresa, un servicio contable confiable o un'+
                ' software personalizado, estamos preparados para ofrecerte resultados excepcionales.',
            image:'./images/icons/versatil.png',
        },
        {
            title: 'Te damos diseños de calidad',
            resume: 'Te ayudamos a transmitir el mensaje correcto y ' +
                'a dejar una impresión duradera en tus clientes.',
            text: 'Hablemos de diseño. ¿Quieres destacar entre la multitud? Nuestro equipo ' +
                'de diseñadores expertos trabaja contigo para crear una identidad visual ' +
                'que refleje la esencia de tu marca. Desde logotipos impresionantes hasta ' +
                'sitios web cautivadores, te ayudamos a transmitir el mensaje correcto y ' +
                'a dejar una impresión duradera en tus clientes.',
            image:'./images/icons/diseños.png',
        },
        {
            title: 'Te hacemos dar tu mejor imagen',
            resume: 'Desde la redacción ' +
            'de propuestas hasta la creación de presentaciones impactantes, nos ' +
                'aseguramos de que tu empresa brille en cada oportunidad.',
            text: 'Pero eso no es todo. Nos enorgullece ofrecer servicios integrales de ' +
                'representación empresarial. ¿Necesitas presentar tu empresa de manera ' +
                'profesional y persuasiva? ¡Estás en el lugar correcto! Desde la redacción ' +
                'de propuestas hasta la creación de presentaciones impactantes, nos ' +
                'aseguramos de que tu empresa brille en cada oportunidad.',
            image:'./images/icons/brillante.png',
        },
        {
            title: 'Podemos gestionar tus ingresos',
            resume: 'Con nuestro equipo de expertos contables a tu disposición, puedes dejar' +
                ' de preocuparte por los números y concentrarte en hacer crecer tu negocio.',
            text: 'Y no olvidemos la importancia de una contabilidad sólida. Con nuestro equipo ' +
                'de expertos contables a tu disposición, puedes dejar de preocuparte por los ' +
                'números y concentrarte en hacer crecer tu negocio. Desde la gestión de cuentas ' +
                'hasta la presentación de impuestos, estamos aquí para garantizar que tus ' +
                'finanzas estén en orden y que puedas tomar decisiones informadas para el futuro.',
            image:'./images/icons/dinero.png',
        },
        {
            title: 'Hacemos desde paginas web hasta Aplicaciones',
            resume: 'Creamos soluciones personalizadas que se adaptan a tus necesidades específicas ',
            text: 'Por último, pero no menos importante, nuestro equipo de desarrollo de ' +
                'software está listo para llevar tus ideas al siguiente nivel. ¿Tienes ' +
                'una visión única para una aplicación o sistema? Nosotros lo hacemos realidad. ' +
                'Con experiencia en una variedad de tecnologías y metodologías de desarrollo, ' +
                'creamos soluciones personalizadas que se adaptan a tus necesidades específicas ' +
                'y te ayudan a alcanzar tus objetivos empresariales.',
            image:'./images/icons/web.png',
        }
    ];

const IndexReasonHeader = ({title, image, isLeft, delay, resume}) => {
    if(isLeft){
        return(
            <Slide
                left
                duration={500}
                fraction={1}
                delay={delay}
                key={title}
            >
                <Center m={'50px'}>
                    <Container px={0} mx={0}>
                        <Heading fontSize='30px'>{title}</Heading>
                        <Text fontSize='lg'>
                            {resume}
                        </Text>
                    </Container>
                    <Image src={image} alt='icon' w={'100px'} mx={'40px'}/>
                </Center>
            </Slide>
        )
    } else return(
        <Slide
            right
            duration={500}
            fraction={1}
            delay={delay}
            key={title}
        >
            <Center m={'50px'}>
                <Image src={image} alt='icon' w={'100px'} mx={'40px'}/>
                <Container px={0} mx={0}>
                    <Heading fontSize='30px'>{title}</Heading>
                    <Text fontSize='lg'>
                        {resume}
                    </Text>
                </Container>
            </Center>
        </Slide>
    )
}
export default () => {

    return(
            <Flex direction='column' my={'100px'}>
                <div className="heading_container heading_center">
                    <h2>
                        Por qué <span>Elegirnos?</span>
                    </h2>
                </div>
                {reasonsWhy.map((reason, index) => {
                    return (
                        <IndexReasonHeader
                            title={reason.title}
                            image={reason.image}
                            resume={reason.resume}
                            isLeft={index%2===0}
                        />
                    )
                })}
            </Flex>
    )
    // return (
    //     <Stack className="why_section layout_padding" px={'15%'}>
    //         <div className="heading_container heading_center">
    //             <h2>
    //                 Por qué <span>Elegirnos?</span>
    //             </h2>
    //         </div>
    //         <h4>
    //
    //         </h4>
    //         <Text fontSize='lg'>
    //
    //         </Text>
    //         <h4>
    //
    //         </h4>
    //         <Text fontSize='lg'>
    //
    //         </Text>
    //         <h4>
    //
    //         </h4>
    //         <Text fontSize='lg'>

    //         </Text>
    //         <h4>
    //
    //         </h4>
    //         <Text fontSize='lg'>

    //         </Text>
    //         <h4>
    //
    //         </h4>
    //         <Text fontSize='lg'>

    //         </Text>
    //         <Divider/>
    //         <Text fontSize='lg'>
    //             Entonces, ¿por qué elegirnos? Porque en cada proyecto, nos comprometemos
    //             a superar tus expectativas. Porque creemos en la excelencia en todo lo que
    //             hacemos y nos esforzamos por ofrecerte resultados que te hagan sentir orgulloso.
    //             Porque no solo somos tu proveedor de servicios, sino tu socio en el éxito.
    //             ¿Estás listo para llevar tu empresa al siguiente nivel? ¡Únete a nosotros y
    //             juntos hagamos grandes cosas!
    //         </Text>
    //         <Center>
    //             <img src="images/slider-img.png" alt="" width='30%'/>
    //         </Center>
    //     </Stack>
    // )
}