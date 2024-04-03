import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Service from "../sections/Service";
import About from "../sections/About";
import Why from "../sections/Why";
import Client from "../sections/Client";
import Info from "../sections/Info";
import Footer from "../sections/Footer";


export default () => {
    return (
        <div>

            <div className="hero_area">

                <div className="hero_bg_box">
                    <div className="bg_img_box">
                        <img src="images/hero-bg.png" alt=""/>
                    </div>
                </div>

                <Header/>
                <Hero/>
            </div>

            <Service/>
            <About/>
            <Why/>
            <Client/>
            <Info/>
            <Footer/>

        </div>
    )
}