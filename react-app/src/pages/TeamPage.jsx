import Header from "../sections/Header";
import Team from "../sections/Team";
import Info from "../sections/Info";
import Footer from "../sections/Footer";
import Hiring from "../sections/Hiring";

export default () => {
    return(
        <div class="sub_page">


            <Team/>
            <Hiring/>
            <Info/>
            <Footer/>

        </div>
    )
}