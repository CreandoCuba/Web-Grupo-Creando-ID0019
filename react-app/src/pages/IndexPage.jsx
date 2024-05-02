import Service from "../sections/Service";
import About from "../sections/About";
import Why from "../sections/Why";
import Client from "../sections/Client";
import Info from "../sections/Info";
import Footer from "../sections/Footer";
import CaptionCarousel from "../Chakra templates/Carousel";
import Team from "../sections/Team";


export default () => {
    return (
        <div>
{/*
            <div className="hero_area">

                <div className="hero_bg_box">
                    <div className="bg_img_box">
                        <img src="images/hero-bg.png" alt=""/>
                    </div>
                </div>
                <Hero/>
            </div>*/}
            <CaptionCarousel/>
            <Service/>
            <About/>
            <Why/>
{/*            <Client/>*/}
            <Team/>
            <Info/>
            <Footer/>

        </div>
    )
}