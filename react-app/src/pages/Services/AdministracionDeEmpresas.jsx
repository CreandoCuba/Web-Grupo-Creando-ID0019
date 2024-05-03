import Header from "../../sections/Header";
import Features from '../../Chakra templates/Features';
import {Button, Center, Flex, Stack} from "@chakra-ui/react";
import React from "react";
import { Image } from '@chakra-ui/react'

export default () => {

    const featureList = [
        {
            title:"DISEÑO DE MODELOS DE NEGOCIOS",
            intro:"El diseño de negocios permite a las organizaciones deliberadamente crear un modelo de negocio para demostrar la" +
                "sostenibilidad en el mercado mediante la validación de los componentes básicos de un modelo de negocio. El diseñador " +
                "de negocios puede ayudar a una organización a construir un modelo de negocio probando fácilmente sus suposiciones " +
                "más riesgosas contra el mercado.",
            columns: 3,
            results:[
                {
                    title:'Innovación',
                    text:'Impulsar la innovación identificando nuevas oportunidades de negocio y diseñando soluciones creativas.'
                },
                {
                    title:'Customer Satisfaction',
                    text:'Mejorar la satisfacción del cliente mediante la creación de productos y servicios que satisfagan las necesidades del usuario de manera efectiva.'
                },
                {
                    title: 'Crecimiento empresarial',
                    text: 'Contribuir al crecimiento empresarial mediante el desarrollo de nuevas fuentes de ingresos y la expansión del mercado.'
                },
                {
                    title: 'Ventaja competitiva',
                    text: 'Proporcionar una ventaja competitiva mediante el diseño de propuestas de valor y modelos de negocio únicos.'
                },
                {
                    title: 'Adaptabilidad',
                    text: 'Mejorar la adaptabilidad y resiliencia de una organización frente a la dinámica cambiante del mercado.'
                },
                {
                    title: 'Colaboración interfuncional',
                    text: 'Promover la colaboración y una comprensión compartida de los objetivos comerciales entre diferentes equipos y departamentos.'
                }
            ]

        },
        {
            title: 'LOGÍSTICA',
            intro: 'La logística es la acción del colectivo laboral dirigida a garantizar las actividades de diseño, dirección y operación de los ' +
                'flujos material, informativo y financiero, desde sus fuentes de origen hasta sus destinos finales, que deben ejecutarse de ' +
                'forma racional y coordinada con el objetivo de proveer al cliente los productos y servicios en la cantidad, calidad, plazos, ' +
                'costos, lugar y la información demandados, con elevada competitividad y garantizando la preservación del medio ambiente.',
            columns: 2,
            results:[
                {
                    title: 'Mínimo de interrupciones',
                    text: 'Minimice las interrupciones en su proceso logistico'
                },
                {
                    title: 'Sincronización de acciones',
                    text: 'Coordine las actividades y procesos para una mayor eficiencia'
                },
                {
                    title: 'Hacer exactamente lo que se demanda',
                    text: 'Optimice su negocio identificando cuales acciones son la prioridad'
                },
                {
                    title: 'Mínima o cero pérdida',
                    text: 'Disminuya al minimo las perdidas por operaciones'
                }
            ]
        },
        {
            title: 'PLANEACIÓN ESTRATÉGICA',
            intro: 'La Planificación Estratégica (PE), es una herramienta de gestión que permite apoyar la toma de decisiones de las ' +
                'organizaciones en torno al quehacer actual y al camino que deben recorrer en el futuro para adecuarse a los cambios y a ' +
                'las demandas que les impone el entorno y lograr la mayor eficiencia, eficacia, calidad en los bienes y servicios que se ' +
                'proveen. La Planificación Estratégica consiste en un ejercicio de formulación y establecimiento de objetivos de carácter ' +
                'prioritario, cuya característica principal es el establecimiento de los cursos de acción (estrategias) para alcanzar dichos ' +
                'objetivos',
            columns: 2,
            results: [
                {
                  title: 'Visión',
                  text: 'Evita Trabajar a ciegas'
                },
                {
                    title: 'Eficiencia',
                    text: 'Permite la eficiencia como resultado del orden.'
                },
                {
                    title: 'Coordinación',
                    text: 'Maneje las acciones de su empresa de forma mas organizada'
                },
                {
                    title: 'Optimización',
                    text: 'Mejore el uso de sus recursos',
                }
            ]
        },
        {
            title:"PROCEDIMIENTOS Y METODOLOGÍAS PARA EL FUNCIONAMIENTO EMPRESARIAL",
            intro:"La eliminación de los defectos, la mejora de la moral y la reducción del tiempo para comercializar productos y servicios, " +
                "son objetivos esenciales y comunes de casi todas las organizaciones. La llave para lograr estos objetivos yace en entender " +
                "primero, y después cambiar, los procesos subyacentes que introducen las ineficacias, defectos, baja satisfacción o el bajo " +
                "ritmo de producción. Para entender estos procesos es necesario apreciar las interrelaciones existentes entre distintas " +
                "actividades, analizarlas detenidamente, definir los puntos de contacto con otros procesos, así como identificar los " +
                "subprocesos comprendidos. De esta manera, los problemas existentes pueden ponerse de manifiesto de forma clara y " +
                "propiciar el inicio de acciones de mejora.",
            columns: 2,
            results:[
                {
                    title: 'Mayor capacidad',
                    text: 'para proporcionar regularmente productos y servicios que satisfagan los requisitos del cliente'
                },
                {
                    title: 'Facílite oportunidades',
                    text: 'Busque formas de aumentar la satisfacción tus clientes.'
                },
                /*{
                    title: 'Abordar los riesgos y oportunidades',
                    text: 'Trate y estudie el contexto y objetivos de su empresa'
                },*/
                {
                    title: 'Toma de desiciones',
                    text: 'Le ayudamos a tomar desiciones mas certeras y eficaces'
                },
                {
                    title:'Comprensión',
                    text: 'Contar con la forma de hacer, lo que permite entender el buen funcionamiento organizacional.'
                }
            ]
        },
        {
            title: 'RECURSOS PARA LA TOMA DE DECISION ES EMPRESARIALES',
            intro: 'El proceso de toma de decisiones es una de las grandes preocupaciones ' +
                'en la administración de organizaciones como disciplina, y del administrador de empresas en su desempeño ' +
                'profesional. Es difícil en algunos casos tener claro cuál es el nivel de certeza e incertidumbre y depende mucho ' +
                'del conocimiento que se tenga del tema relacionado con la decisión y del entorno de la decisión.',
            columns: 2,
            results: [
                {
                    title: 'Conocimiento',
                    text: 'Aprenda mas detalles de la situación actual de su empresa'
                },
                {
                    title: 'Objetivos',
                    text: 'Conozca sus objetivos para tomar decisiones mas eficientemente'
                },
                {
                    title: 'Análisis',
                    text: 'Revise los detalles sobre equilibrio financiero de su empresa'
                },
                {
                    title: 'Propuestas',
                    text: 'Encuentre posibles soluciones y apoyo en la ejecución y selección de opciones.'
                }
            ]
        },
        {
            title: 'ADMINISTRACIÓN DE LOS RECURSOS HUMANOS',
            intro: 'La expresión “recursos humanos” se refiere a las personas que forman parte de las organizaciones y que ' +
                'desempeñan en ellas determinadas funciones. Las personas pasan gran parte de su tiempo trabajando en las ' +
                'organizaciones. Éstas necesitan a las personas para sus actividades y operaciones, de la misma manera que ' +
                'necesitan recursos financieros, materiales y tecnológicos. De ahí la denominación de recursos humanos para ' +
                'describir a las personas que trabajan en las organizaciones.',
            columns: 2,
            results: [
                {
                    title: 'Productividad',
                    text: 'Incremento de la productividad del trabajo'
                },
                {
                    title: 'Calidad de vida',
                    text: 'Mejora la calidad de vida de los trabajadores.'
                },
                {
                    title: 'Mayor cantidad de trabajadores',
                    text:'Incremento de las ofertas de trabajo y empleo'
                },
                {
                    title: 'Minimice las perdidas',
                    text: 'Disminución de las pérdidas de producción'
                }
            ]
        },
        {
            title: 'ENCADENAMIENTO PRODUCTIVOS',
            intro: 'El estudio de la empresa como un todo, en busca de la optimización del sistema total y no de cada una de las ' +
                'partes independientes resulta una política adecuada y necesaria, por lo que la teoría del encadenamiento ' +
                'productivo, se convierte en una herramienta sumamente necesaria y potente para los estudios de gestión de ' +
                'operaciones y para la toma de decisiones económicamente fundamentados.',
            results: [
            ]
        },
        {
            title: 'GESTIÓN DE CERTIFICACION ES DE LOS SISTEMAS EMPRESARIALES',
            intro: 'La certificación es el procedimiento, mediante el cual una tercera parte asegura por escrito que un producto, proceso o' +
                'servicio está conforme con los requisitos especificados. La certificación consiste pues, en que una organización (tercera' +
                'parte) competente y debidamente reconocida realiza la evaluación de un producto, proceso o sistema de otra organización,' +
                'con la cual no mantiene relaciones contractuales contra los requisitos establecidos en una norma también reconocida, y' +
                'como resultado emite un certificado de conformidad y una autorización para utilizar la marca de conformidad.',
            columns: 3,
            results: [
                {
                    title: 'Certificado de conformidad.',
                    text: 'Es el documento emitido según las reglas de un sistema de certificación, que brinda\n' +
                        'confianza de que un producto, proceso o servicio, debidamente identificado, está en conformidad con una norma u otro\n' +
                        'documento normativo específico'
                },
                {
                    title: 'Marca de conformidad.',
                    text: 'Es la marca protegida, aplicada o emitida según las reglas de un sistema de certificación, para ' +
                        'indicar con un nivel suficiente de confianza que el producto, proceso o servicio pertinente está en conformidad con una ' +
                        'norma u otro documento normativo específico.'
                },
                {
                    title: 'Orden',
                    text: 'Disponer de una norma internacional de reconocido prestigio, que permite al empresario acogerse a un marco organizado'
                },
                {
                    title: 'Seguridad',
                    text: 'Estructurar un modelo para facilitar al empresario el cumplimiento del deber de protección de los trabajadores, la ' +
                        'producción/servicios y al cliente'
                },
                {
                    title: 'Optimización',
                    text: 'Conseguir una mayor optimización en la gestión.'
                },
                {
                    title: 'Experiencia',
                    text: 'Integración con otros sistemas de gestión, fomentando la cultura preventiva'
                },
                {
                    title: 'Control',
                    text: 'Facilitar el cumplimiento normativo.'
                },
                {
                    title: 'Imagen',
                    text: 'Mejorar la imagen de la empresa al demostrar a sus partes interesadas, su responsabilidad y compromiso'
                }

            ]
        }
    ]
        .map((value, index) => {
        return (
            <Features
                Header={value.title}
                text={value.intro}
                features={value.results}
                columns={value.columns}
                key={index}
                mt={'100px'}

            />
        )
    })
    return(

        <div className="sub_page">
            <section className="why_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h1>
                            Administración de Empresas
                        </h1>
                    </div>
                    <div className="why_container">
                        <Center>
                            <Image src="/images/services/Administración de Empresas.png" alt="" margin={'20px'} maxW={'100px'}/>
                        </Center>
                        {featureList}

                        {/*<Flex direction={"column"} mt={'50px'}>
                        <Button
                            colorScheme='orange'
                            backgroundColor='orange'
                            variant={'solid'}
                            size='lg'
                            alignSelf={"center"}
                            m={"auto"}
                        >
                            Contactenos
                        </Button>
                        </Flex>*/}
                    </div>
                </div>
            </section>
        </div>

)
}