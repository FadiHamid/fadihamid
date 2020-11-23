import React, { useEffect } from 'react'
import './Gallery.css'
import Fruitbowl from '../Images/fruitbowl.jpg';
import Spaceship from '../Images/spaceship.jpg';
import Register from '../Images/register.jpg';
import NightHouse from '../Images//nightHouse.jpg';
import 'aos/dist/aos.css';
import { Parallax, Background } from 'react-parallax';
import FullScreenImg from'./fullScreenImg';
import { Router } from "@reach/router";

class Gallery extends React.Component {
 onclickgallery=(image)=>{
    let state= {fullImage:image};
    this.props.navigate(this.props.location.pathname,{state});
}
    render() {

        return (
            <div className="gallery"onScroll={()=>this.setState({on:false})}>
                {
                    ( <Router><FullScreenImg  path={this.props.location.pathname}/></Router>)
                }
                <div className="box" onClick={()=>{this.onclickgallery(Fruitbowl)}} data-aos="fade-up">
                    <Parallax
                        strength={300}
                        className="imageContainer">
                        <Background >
                            <div className="galleryimg">
                                <img src={Fruitbowl} alt="galleryimg" />
                            </div>
                        </Background>
                    </Parallax>
                </div>
                <div className="box shiftdown"onClick={()=>{this.onclickgallery(Spaceship)}} data-aos="fade-down">
                    <Parallax
                        strength={200}
                        className="imageContainer">
                        <Background >
                            <div className="galleryimg">
                                <img src={Spaceship} alt="galleryimg" />
                            </div>
                        </Background>
                    </Parallax>
                </div>
                <div className="box" onClick={()=>{this.onclickgallery(Register)}} data-aos="fade-up">
                    <Parallax
                        strength={300}
                        className="imageContainer">
                        <Background >
                            <div className="galleryimg">
                                <img src={Register} alt="galleryimg" />
                            </div>
                        </Background>
                    </Parallax>
                </div>
                <div className="box shiftdown" onClick={()=>{this.onclickgallery(NightHouse)}} data-aos="fade-down">
                    <Parallax
                        strength={200}
                        className="imageContainer">
                        <Background >
                            <div className="galleryimg">
                                <img src={NightHouse} alt="galleryimg" />
                            </div>
                        </Background>
                    </Parallax>
                </div>
            </div>
        );
    }
}
export default Gallery;