'use client'

import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react'
import { BsLinkedin } from "react-icons/bs";
import { FaResearchgate } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import './ProfileCard.css'
export default function ProfileCard({name, image, job, studies, LinkedIn, ResearchGate,Email}) {
    return (
        <Center py={6}>
            <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                minH={'450px'}
                textAlign={'center'}>
                <Center>

                <img
                    src={image}
                    style={{
                        position:'relative',
                        width: '100px',
                        borderRadius:'50px'
                    }}
                     alt={'foto de perfil'}
                />
                </Center>
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                    {name}
                </Heading>
                <Text fontWeight={600} color={'gray.500'} mx='auto' textAlign={'center'} mb={4} w={'fit-content'}>
                    {job}
                </Text>
                {studies.map((value, index) => <Text
                    textAlign={'center'}
                    /*color={useColorModeValue('gray.700', 'gray.400')}*/
                    px={3}
                    key={index}>
                    {value}
                </Text>)}
                <Center>

                <Stack direction={'row'}>
                    {LinkedIn && <a href={LinkedIn}><BsLinkedin className={'SocialIcon'}/></a>}
                    {ResearchGate && <a href={ResearchGate}><FaResearchgate className={'SocialIcon'}/></a>}
                    {Email && <a href={Email}><FaEnvelope className={'SocialIcon'}/></a>}
                </Stack>
                </Center>
            </Box>
        </Center>
    )
}