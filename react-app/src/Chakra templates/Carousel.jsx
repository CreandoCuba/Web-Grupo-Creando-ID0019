
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
import {useMediaQuery} from "react-responsive";

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
    const isPortrait = useMediaQuery({orientation: "portrait"})
    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '85%', md: '50%' })
    const side = useBreakpointValue({ base: '25px', md: '40px' })

    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
        {
            title: 'Te ayudamos a crecer',
            text: "Nuestra empresa brinda variados servicios para ayudarte a crecer entre los cuales se incluyen servicios informáticos, contabilidad, gestion, o diseño.",
            image: 'images/carousel-1.png',
            buttonLabel: 'Ver Más',
            buttonRef: '/PorQueNosotros',
        },
        {
            title: 'Conocenos',
            text: "Brindamos servicios de consultoría empresarial integral a los actores económicos del territorio, para garantizar su rentabilidad y sostenibilidad.",
            image: 'images/carousel-2.jpg',
            buttonLabel:'Ver Más',
            buttonRef:'/SobreNosotros',
        },
        {
            title: 'Mantente al tanto',
            text: "Pronto estaremos publicando blogs, noticias e informaciones sobre la empresa, los servicios que ofrecemos y sobre nuestros clientes. No te los pierdas!",
            image: 'images/carousel-3.jpg',
            buttonLabel: 'Ver Más',
            buttonRef: '/noticias',
        },
    ]
    const left = (<IconButton
        aria-label="left-arrow"
        variant="solid"
        colorScheme='orange'
        backgroundColor='orange'
        position={isPortrait? "relative" : "absolute"}
        left={isPortrait?"0" : side}
        top={isPortrait? "0" : top}
        transform={isPortrait? "none":'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <ArrowLeftIcon color='white'/>
    </IconButton>)
    const right = (<IconButton
        aria-label="right-arrow"
        variant="solid"
        colorScheme='orange'
        backgroundColor='orange'
        position={isPortrait? "relative" : "absolute"}
        right={isPortrait?"0" : side}
        top={isPortrait? "0" : top}
        transform={isPortrait? "none":'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <ArrowRightIcon color='white'/>
    </IconButton>)

    return (
        <Box position={'relative'} height={'600px'} width={'100vw'} overflow={'hidden'}>
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
            {isPortrait? (<div></div>):left}

            {/* Right Icon */}
            {isPortrait? (<div></div>):right}
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
                                <img src="images/newLogo.png" alt="Creando" width='400px'  className='HeroLogo'  />
                                <Heading fontSize={{base: '3xl', md: '4xl', lg: '5xl' }} color={'white'}>
                                    {card.title}
                                </Heading>
                                <Text fontSize={{ base: 'md', lg: 'lg' }} color="white" w='100%' padding={'25px'}>
                                    {card.text}
                                </Text>
                                {isPortrait?(
                                    <Center>
                                        {left}
                                        <Link to={card.buttonRef}>
                                            <Button bg='orange' colorScheme='orange' color='white' m='15px'>
                                                {card.buttonLabel}
                                            </Button>
                                        </Link>
                                        {right}
                                    </Center>
                                ):(
                                <Link to={card.buttonRef}>
                                    <Button bg='orange' colorScheme='orange' color='white' m='10px'>
                                        {card.buttonLabel}
                                    </Button>
                                </Link>
                                )}
                            </Center>
                        </Container>
                        </div>
                    </Box>
                ))}
            </Slider>
        </Box>
    )
}