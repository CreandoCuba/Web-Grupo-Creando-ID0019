import {Link as RouterLink, useLocation} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import {Button, Center, Container, Flex, Image, Link, Stack, Text} from '@chakra-ui/react'
import {useMediaQuery} from "react-responsive";

export default () => {
    const path = useLocation();
    const [isMain, setIsMain] = useState(true);
    useEffect(()=> {
        setIsMain(path.pathname === '/' || path.pathname==='/inicio');
    }, [path.pathname])

    const portrait = useMediaQuery({orientation: "portrait"})
    if(isMain) {
        return (
                <Stack>
                    <div className="heading_container heading_center">
                        <h2>
                            Sobre <span>Nosotros</span>
                        </h2>
                        <Text fontSize={'20px'} mx={'30px'}>
                            Somos un grupo de <b>Consultoría Empresarial Integral</b> para el sector estatal y privado
                        </Text>
                    </div>
                    {portrait?
                        <Stack marginX={'30px'}>
                            <Center>
                                <Image src="images/about-img.png" alt="" margin='auto' maxW={'90vw'}/>
                            </Center>

                            <h2>
                                Somos Creando
                            </h2>
                            <Text fontSize='20px'>
                                Brindamos servicios de consultoría
                                empresarial integral a los actores económicos del
                                territorio, para garantizar su rentabilidad y
                                sostenibilidad en el tiempo.
                            </Text>
                            <Link to={'/SobreNosotros'} p={0} as={RouterLink} backgroundColor='none'>
                                <Button bg='orange' colorScheme='orange' color='white'>
                                    Saber mas
                                </Button>
                            </Link>
                        </Stack>
                        :
                        <Center marginX={'30px'}>
                            <Flex direction={'row'}>

                            <Image src="images/about-img.png" alt="" margin={'40px'} w={'40vw'} maxW={'400px'}/>
                            <Stack margin={'40px'}>
                                <h2>
                                    Somos Creando
                                </h2>
                                <Text fontSize='20px' maxW={'500px'}>
                                    Brindamos servicios de consultoría
                                    empresarial integral a los actores económicos del
                                    territorio, para garantizar su rentabilidad y
                                    sostenibilidad en el tiempo.
                                </Text>
                                <Link to={'/SobreNosotros'} p={0} as={RouterLink} backgroundColor='none'>
                                    <Button bg='orange' colorScheme='orange' color='white'>
                                        Saber mas
                                    </Button>
                                </Link>
                            </Stack>
                            </Flex>
                        </Center>
                            }

                        </Stack>
                        )
                    } else return (

                    <section className="about_section layout_padding">
                        <div className="container  ">
                            <div className="heading_container heading_center">
                                <h2>
                                    Sobre <span>Nosotros</span>
                                </h2>
                                <p>
                                    Somos un grupo de <b>Consultoría Empresarial Integral</b> para el sector estatal y
                                    privado
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-md-6 ">
                                    <div className="img-box">
                                        <img src="images/about-img.png" alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="detail-box">
                                    <h2>
                                Somos Creando
                            </h2>
                            <p>
                                Brindamos servicios de consultoría
                                empresarial integral a los actores económicos del
                                territorio, para garantizar su rentabilidad y
                                sostenibilidad en el tiempo. Contamos para ello con
                                especialistas altamente capacitados que destacan por
                                su integridad, compromiso, excelencia, profesionalidad
                                y humanismo.
                            </p>
                            <p>
                                Tenemos a <b>visión</b> de ser un Proyecto líder en la
                                consultoría empresarial integral, con presencia a nivel
                                nacional, en constante desarrollo de estrategias de negocios
                                y planes de mejoras, que apoyen a nuestros clientes y al
                                desarrollo.
                            </p>
                            <p>
                                Este Proyecto se crea con la composición de tres
                                direcciones y la administración de una plataforma:
                            </p>
                            <ul className='insideDeco'>
                                <li>
                                    Dirección de Negocios.
                                </li>
                                <li>
                                    Dirección de Administración Empresarial.
                                </li>
                                <li>
                                    Dirección de Comunicaciones y Diseño.
                                </li>
                                <li>
                                    Plataforma del Desarrollo Local.
                                </li>
                            </ul>
                            <p>
                                Nos enorgullece ser una empresa guiada por nobles
                                valores que son el corazón de nuestra filosofía:
                                Honestidad, Dignidad, Solidaridad y Justicia.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}