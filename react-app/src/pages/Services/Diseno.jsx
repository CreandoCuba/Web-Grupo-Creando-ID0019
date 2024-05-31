import {Center, Heading, Image, Stack, Text} from "@chakra-ui/react";
import Info from "../../sections/Info";
import Footer from "../../sections/Footer";

export default () => {
    return(
        <div>
            <Stack paddingX='15%' py='70px'>
                <Center>
                    <Heading>
                        Servicios de Diseño
                    </Heading>
                    <img src={"images/services/Diseño.png"} alt="" style={{margin:'20px', maxWidth:'100px'}}/>
                </Center>
                <Text fontSize='lg'>
                    ¡Potencia tu marca con un logotipo cautivador! Diseñamos logotipos impactantes que hablan por sí mismos, reflejando la esencia única de tu negocio y atrayendo a tu público objetivo.
                </Text>
                <h4>
                    Infografías que informan y cautivan
                </h4>
                <Text fontSize='lg'>
                    Transforma los datos complejos en historias visuales atractivas. Nuestras infografías presentan información de manera clara y concisa, convirtiendo los conceptos abrumadores en comprensibles y memorables.
                </Text>

                <h4>
                    Etiquetas que venden
                </h4>
                <Text fontSize='lg'>
                    Destaca tus productos con etiquetas personalizadas que atraigan la atención de los clientes y promuevan tus ventas. Creamos diseños llamativos que comunican tu mensaje de marca y hacen que tus productos sobresalgan en los estantes.
                </Text>

                <h4>
                    Personajes que cobran vida
                </h4>
                <Text fontSize='lg'>
                    Crea mundos imaginarios y personajes memorables que den vida a tu marca. Nuestros diseñadores desarrollan personajes únicos y atractivos que se conectan con tu audiencia y crean un impacto emocional.
                </Text>

                <h4>
                    Stands para ferias que impactan
                </h4>
                <Text fontSize='lg'>
                    Atrae la atención en las ferias comerciales con stands personalizados diseñados para impresionar. Creamos espacios únicos y llamativos que reflejan tu identidad de marca y cautivan a los asistentes.
                </Text>
                <h4>
                    Diseño de interiores que inspira
                </h4>
                <Text fontSize='lg'>
                    Transforma tu espacio de trabajo o hogar en un oasis inspirador. Nuestros diseñadores crean espacios estéticamente agradables y funcionales que mejoran la productividad, la creatividad y el bienestar.
                </Text>
                <h4>
                    Diseño gráfico integral
                </h4>
                <Text fontSize='lg'>
                    Somos tu socio integral para todas tus necesidades de diseño gráfico. Desde logotipos y etiquetas hasta infografías y diseño de interiores, te brindamos soluciones creativas que impulsan tu negocio y deleitan a tus clientes.
                </Text>
            </Stack>
            <Info/>
            <Footer/>
        </div>
    )
}
