'use client'

import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react'
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons'
import {Link as RouterLink} from 'react-router-dom';
import {Link, LinkProps} from '@chakra-ui/react';
export default function WithSubnavigation({NavItems}) {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <div>
        <Box
            pos='fixed'
            top='0'
            w='full'
            zIndex={30}
        >
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.400', 'gray.900')}
                align={'center'}
            >
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <div className="img-box">
                    <img src="images/slider-img.png" alt="Creando" id='navBarLogo'/>
                </div>
                <Flex flex={{base: 1}} justify={{base: 'center', md: 'start'}}>


                    <Flex display={{base: 'none', md: 'flex'}} ml={10}>
                        <DesktopNav NAV_ITEMS={NavItems} />
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
                        Registrarse
                    </Button>
                    <Button
                        as={'a'}
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'orange.400'}
                        href={'#'}
                        _hover={{
                            bg: 'orange.300',
                        }}>
                        Login
                    </Button>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav NAV_ITEMS={NavItems}/>
            </Collapse>
        </Box>
        <Box top='0'
             height='60px'
             w='full'
             zIndex={29}/>
        </div>
    )
}

const DesktopNav = ({NAV_ITEMS}) => {
    const linkColor = useColorModeValue('gray.600', 'gray.200')
    const linkHoverColor = useColorModeValue('gray.800', 'white')
    const popoverContentBgColor = useColorModeValue('white', 'gray.800')

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                as={RouterLink}
                                p={2}
                                to={navItem.path ?? '#'}
                                fontSize={'medium'}
                                fontWeight={500}
                                color={linkColor}
                                mt={"auto"}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {[
                                    navItem.label,
                                    navItem.children? (<ChevronDownIcon key={navItem.label}/>): null
                                ]}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    )
}

const DesktopSubNav = ({ label, path, subLabel }) => {
    return (
        <Link
            as={RouterLink}
            to={path}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('orange.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'orange.400' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'orange.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    )
}

const MobileNav = ({NAV_ITEMS}) => {
    return (
        <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    )
}

const MobileNavItem = ({ label, children, path }) => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Link to={path} as={RouterLink}>
                <Box
                    py={2}
                    as="a"
                    path={path ?? '#'}
                    justifyContent="space-between"
                    alignItems="center"
                    _hover={{
                        textDecoration: 'none',
                    }}>
                    <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
                        {label}
                    </Text>
                    {children && (
                        <Icon
                            as={ChevronDownIcon}
                            transition={'all .25s ease-in-out'}
                            transform={isOpen ? 'rotate(180deg)' : ''}
                            w={6}
                            h={6}
                        />
                    )}
                </Box>
            </Link>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <RouterLink  key={child.label} py={2} to={child.path}>
                                {child.label}
                            </RouterLink>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    )
}
interface NavItem {
    label: string,
    subLabel?: string,
    children?: Array<NavItem>,
    path?: string
}

/*
const NAV_ITEMS = [
    {
        label: 'Pagina Principal',
        href: '/main'
    },
    {
        label: 'Nuestros Servicios',
        href: '/Servicios',
        children: [
            {
                label: 'Desarrollo Local',
                subLabel: 'Elaboracion de estrategias y busqueda de oportunidades',
                href: '#',
            },
            {
                label: 'Diseño',
                subLabel: 'Logos, interiores, personajes y Stands',
                href: '#',
            },
            {
                label: 'Informatica',
                subLabel: 'Paginas Web y Automatizacion de procesos',
                href: '#',
            },
            {
                label: 'Turismo',
                subLabel: 'Diseño de productos y destinos turisticos',
                href: '#',
            },{
                label: 'Administracion',
                subLabel: 'Estrategia, Logistica y Planificacion',
                href: '#',
            },
            {
                label: 'Fotografia y Video',
                subLabel: 'Publicitarias de interiores y exteriores',
                href: '#',
            }
        ],
    },
    {
        label: 'Sobre nosotros',
        href: '/QuienesSomos'
    }
]
 */
