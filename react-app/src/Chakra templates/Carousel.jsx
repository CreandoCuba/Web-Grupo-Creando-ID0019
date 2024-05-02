
import React from 'react'
import {
    Box,
    IconButton,
    useBreakpointValue,
    Heading,
    Text,
    Container, Center, Button,
} from '@chakra-ui/react'

import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
// And react-slick as our Carousel Lib
import Slider from 'react-slick'
import {Link} from "react-router-dom";

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
}

export default function CaptionCarousel() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' })
    const side = useBreakpointValue({ base: '30%', md: '40px' })

    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
        {
            title: 'Te ayudamos a crecer',
            text: "Nuestra empresa brinda variados servicios para ayudarte a crecer entre los cuales se incluyen servicios informaticos, de contabilidad o de diseño.",
            image: 'images/carousel-1.png',
            buttonLabel: 'Saber Más',
            buttonRef: '/PorQueNosotros',
        },
        {
            title: 'Conocenos',
            text: "Somos un grupo que brinda servicios de consultoría empresarial integral a los actores económicos del territorio, para garantizar su rentabilidad y sostenibilidad en el tiempo.",
            image: 'images/carousel-2.jpg',
            buttonLabel:'Saber Más',
            buttonRef:'/SobreNosotros',
        },
        {
            title: 'Mantente al tanto',
            text: "Pronto estaremos publicando blogs e informaciones sobre la empresa, los servicios que ofrecemos y sobre nuestros clientes.",
            image: 'images/carousel-3.jpg',
            buttonLabel: 'Ver Informaciones',
            buttonRef: '#',
        },
    ]

    return (
        <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <ArrowLeftIcon/>
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <ArrowRightIcon/>
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((card, index) => (
                    <Box
                        key={index}
                        height={'6xl'}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={`url(${card.image})`}
                        m='0'
                        p='0'
                        >
                         {/*This is the block you need to change, to customize the caption*/}
                        <div id='BackdropFilter'>
                        <Container
                            size="container.lg"
                            height="600px"
                            position="relative"
                            p='0'
                        >
                            <Center
                                flexDirection='column'
                                spacing={6}
                                w={'full'}
                                maxW={'600px'}
                                position="absolute"
                                top="50%"
                                transform="translate(0, -50%)">
                                <img src="images/slider-img.png" alt="Creando" width='300px' className='HeroLogo'/>
                                <Heading fontSize={{base: '3xl', md: '4xl', lg: '5xl' }} color={'white'}>
                                    {card.title}
                                </Heading>
                                <Text fontSize={{ base: 'md', lg: 'lg' }} color="white" w='100%'>
                                    {card.text}
                                </Text>
                                <Link to={card.buttonRef}>
                                    <Button bg='orange' colorScheme='orange' color='white' m='10px'>
                                        {card.buttonLabel}
                                    </Button>
                                </Link>
                            </Center>
                        </Container>
                        </div>
                    </Box>
                ))}
            </Slider>
        </Box>
    )
}