import Header from "../sections/Header";
import Team from "../sections/Team";
import Info from "../sections/Info";
import Footer from "../sections/Footer";
import Hiring from "../sections/Hiring";
import {Stack} from "@chakra-ui/react";

export default () => {
    return(
        <Stack marginTop='80px'>
            <Team/>
            <Info/>
            <Footer/>

        </Stack>
    )
}