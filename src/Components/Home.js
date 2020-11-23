import React from 'react';
import './Home.css';
import { Parallax, Background } from 'react-parallax';
import ReactTypingEffect from 'react-typing-effect';
import img1 from '../Images/img1.png';

import img3 from '../Images/img3.png';
import img4 from '../Images/img4.png';


import img5 from '../Images/img5.jpg';
const Home = () => {
    return (
        <div className="paraContainer" id="Home">
            <div className="logo">
                <h1 className="glitch" data-text="FADI HAMID">FADI HAMID</h1>
                <ReactTypingEffect className="typing" typingDelay="500" speed="80"
                    text="VFX ARTIST" //text=["Hello.", "World!"]
                />
            </div>
            <div className="container">

                <Parallax
                    strength={1200}
                    className="imageContainer">
                    <Background >
                        <div className="img5">
                            <img src={img5} alt="img5" />
                        </div>
                    </Background>
                </Parallax>

            </div>

            <div className="container add">

                <Parallax
                    strength={900}
                    className="imageContainer">
                    <Background >
                        <div className="img4">
                            <img src={img4} alt="img4" />
                        </div>
                    </Background>
                </Parallax>

            </div>

            <div className="container add">

                <Parallax
                    strength={500}
                    className="imageContainer">
                    <Background >
                        <div className="img3">
                            <img src={img3} alt="img3" />
                        </div>
                    </Background>
                </Parallax>

            </div>


            <div className="container">

                <Parallax
                    strength={0}
                    className="imageContainer">
                    <Background >
                        <div className="img1">
                            <img src={img1} alt="img1" />
                        </div>
                    </Background>
                </Parallax>

            </div>



        </div>
    );
}
export default Home;