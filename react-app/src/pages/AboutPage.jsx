import Footer from "../sections/Footer";
import Info from "../sections/Info";
import About from "../sections/About";
import Header from "../sections/Header";

export default () => {
    return(
        <div class="sub_page">

            <div class="hero_area">

                <div class="hero_bg_box">
                    <div class="bg_img_box">
                        <img src="images/hero-bg.png" alt=""/>
                    </div>
                </div>

                <Header/>
            </div>

            <About/>
            <Info/>
            <Footer/>
        </div>
    )
}