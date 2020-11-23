import React, { useEffect } from 'react'
import DemoBG from '../Videos/demoBg.mp4';
import './Demoreel.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Demoreel = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div id="DemoReel" >
            <h1 class="sectionTitle demoTitle">Demo Reel</h1>
            <div className="demoReel">
                <iframe className="youtube" data-aos="zoom-out" data-aos-duration="1000" src="https://www.youtube.com/embed/359BM9suQzc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>

                <video loop autoPlay muted className="vidBg">
                    <source src={DemoBG} type="video/mp4" />
                </video>
            </div>
        </div>
    );

}
export default Demoreel;