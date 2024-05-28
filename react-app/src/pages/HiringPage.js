import Hiring from "../sections/Hiring";
import Info from "../sections/Info";
import Footer from "../sections/Footer";
import {Center, Stack} from "@chakra-ui/react";

const HiringPage = () => {
    return(
        <Stack marginTop='80px'>
            <Hiring/>
            <Info/>
            <Footer/>
        </Stack>
    )
}

export default HiringPage;