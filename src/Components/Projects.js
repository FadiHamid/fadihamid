import React, { Fragment } from 'react';
import './Projects.css';
import { Router } from "@reach/router";
import 'aos/dist/aos.css';
import ProjectDetail from './ProjectDetail';
import img01 from '../Images/Thumbnails/01.jpg';
import img02 from '../Images/Thumbnails/02.jpg';
import img03 from '../Images/Thumbnails/03.jpg';
import img04 from '../Images/Thumbnails/04.jpg';
import img05 from '../Images/Thumbnails/05.jpg';
import img06 from '../Images/Thumbnails/06.jpg';
import img07 from '../Images/Thumbnails/07.jpg';
import img08 from '../Images/Thumbnails/08.jpg';
import img09 from '../Images/Thumbnails/09.jpg';
import img10 from '../Images/Thumbnails/10.jpg';
import img11 from '../Images/Thumbnails/11.jpg';
import img12 from '../Images/Thumbnails/12.jpg';
import img13 from '../Images/Thumbnails/13.jpg';
import img14 from '../Images/Thumbnails/14.jpg';
import img15 from '../Images/Thumbnails/15.jpg';




class Projects extends React.Component {

    onCLickProjects(id) {
        console.log(id);
        let state = { id };
        this.props.navigate(this.props.location.pathname, { state });
    }
    render() {
        return (
            <div id="Projects">
                <h1 className="sectionTitle projectsTitle">Projects</h1>
                {
                    (<Router><ProjectDetail path={this.props.location.pathname} /></Router>)
                }
                <div className="projectsContainer">
                    <img alt="Thumbnail15" src={img15} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" onClick={(id) => { this.onCLickProjects(15) }} />
                    <img alt="Thumbnail14" src={img14} data-aos="fade-up" data-aos-duration="1000" onClick={(id) => { this.onCLickProjects(14) }} />
                    <img alt="Thumbnail13" src={img13} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" onClick={(id) => { this.onCLickProjects(13) }} />
                    <img alt="Thumbnail12" src={img12} data-aos="fade-up" data-aos-duration="1000" onClick={(id) => { this.onCLickProjects(12) }} />
                    <img alt="Thumbnail11" src={img11} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" onClick={(id) => { this.onCLickProjects(11) }} />
                    <img alt="Thumbnail10" src={img10} data-aos="fade-up" data-aos-duration="1000" onClick={(id) => { this.onCLickProjects(10) }} />
                    <img alt="Thumbnail09" src={img09} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" onClick={(id) => { this.onCLickProjects(9) }} />
                    <img alt="Thumbnail08" src={img08} data-aos="fade-up" data-aos-duration="1000" onClick={(id) => { this.onCLickProjects(8) }} />
                    <img alt="Thumbnail07" src={img07} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" onClick={(id) => { this.onCLickProjects(7) }} />
                    <img alt="Thumbnail06" src={img06} data-aos="fade-up" data-aos-duration="1000" onClick={(id) => { this.onCLickProjects(6) }} />
                    <img alt="Thumbnail05" src={img05} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" onClick={(id) => { this.onCLickProjects(5) }} />
                    <img alt="Thumbnail04" src={img04} data-aos="fade-up" data-aos-duration="1000" onClick={(id) => { this.onCLickProjects(4) }} />
                    <img alt="Thumbnail03" src={img03} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" onClick={(id) => { this.onCLickProjects(3) }} />
                    <img alt="Thumbnail02" src={img02} data-aos="fade-up" data-aos-duration="1000" onClick={(id) => { this.onCLickProjects(2) }} />
                    <img alt="Thumbnail01" src={img01} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" onClick={(id) => { this.onCLickProjects(1) }} />
                </div>
            </div>
        );
    }
}
export default Projects;