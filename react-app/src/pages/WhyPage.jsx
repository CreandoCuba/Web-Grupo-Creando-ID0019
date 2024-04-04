import Header from "../sections/Header";
import Why from "../sections/Why";
import Info from "../sections/Info";
import Footer from "../sections/Footer";


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

            <Why/>
            <Info/>
            <Footer/>

        </div>
    )
}