import Info from "../../sections/Info";
import Footer from "../../sections/Footer";
import {Heading, Stack, Text} from "@chakra-ui/react";

export default () => {
    return(
        <div>
            <Stack paddingX='15%' py='70px'>
                <Heading>
                    Servicios de Contabilidad y Finanzas
                </Heading>
                <h4>
                    Análisis Financiero para la Toma de Decisiones
                </h4>
                <Text fontSize='lg'>
                    La modelación de escenarios a partir del análisis de estados financieros es una herramienta
                    fundamental para determinar y analizar la situación financiera de una organización. A través de un
                    exhaustivo examen de los estados financieros, podemos identificar tendencias, fortalezas y áreas de
                    mejora que permitan proponer a la dirección decisiones financieras tanto a corto como a largo plazo.
                </Text>
                <h4>
                    Proyección de Ingresos y Elaboración de Informes Contables
                </h4>
                <Text fontSize='lg'>
                    Parte integral de este proceso es la proyección de ingresos, que nos permite anticipar el desempeño
                    financiero futuro de la organización. Además, se elaboran informes contables detallados que resumen
                    el comportamiento económico de la empresa, proporcionando una visión clara y concisa de su situación
                    financiera.
                </Text>
                <h4>
                    Análisis Integral del Negocio y Planificación Económica
                </h4>
                <Text fontSize='lg'>
                    En los estudios de factibilidad, se describe minuciosamente el negocio objeto de estudio, analizando
                    los flujos de efectivo y elaborando un plan económico detallado que guíe las operaciones futuras de
                    la organización. Se confeccionan fichas de costos y gastos, y se planifica y ejecuta la carga fiscal
                    de manera eficiente.
                </Text>
                <h4>
                    Gestión Contable y Teneduría de Libros
                </h4>
                <Text fontSize='lg'>
                    La teneduría de libros abarca la ejecución de tareas contables como la gestión de cuentas por
                    cobrar, cuentas por pagar, activos fijos tangibles e inventarios, siguiendo procedimientos
                    preestablecidos con precisión y exactitud. Además, se recaban, registran y clasifican las
                    operaciones de la organización, y se narran en forma escrita los hechos económicos relevantes.
                </Text>
            </Stack>
            <Info/>
            <Footer/>
        </div>
    )
}
