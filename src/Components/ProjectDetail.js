import React from 'react';
import 'aos/dist/aos.css';
import img09 from '../Images/HighRes/9.jpg';
import img10 from '../Images/HighRes/10.jpg';
import img11 from '../Images/HighRes/11.jpg';
import img12 from '../Images/HighRes/12.jpg';
import img13 from '../Images/HighRes/13.jpg';
class ProjectDetail extends React.Component {
    render() {

        let id = undefined;
        let state = this.props.location.state;
        if (state && "id" in state) {
            id = state.id;
        }
        if (!id) {
            return null;
        }
        switch (id) {
            case 1: {
                return (<div className="projectDetailModal" data-aos="fade-in" data-aos-duration="1000" onClick={() => { window.history.back(); }}>
                    <iframe className="youtubeProject" data-aos="fade-up" data-aos-duration="500" src="https://www.youtube.com/embed/WJJ_1nEGggU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>);
            }
            case 2: {
                return (<div className="projectDetailModal" data-aos="fade-in" data-aos-duration="1000" onClick={() => { window.history.back(); }}>
                    <iframe className="youtubeProject" data-aos="fade-up" data-aos-duration="500" src="https://www.youtube.com/embed/PBtGv01VtbU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>);
            }
            case 3: {
                return (<div className="projectDetailModal" data-aos="fade-in" data-aos-duration="1000" onClick={() => { window.history.back(); }}>
                    <iframe className="youtubeProject" data-aos="fade-up" data-aos-duration="500" src="https://www.youtube.com/embed/ZgRI9sf2Pvc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>);
            }
            case 4: {
                return (<div className="projectDetailModal" data-aos="fade-in" data-aos-duration="1000" onClick={() => { window.history.back(); }}>
                    <iframe className="youtubeProject" data-aos="fade-up" data-aos-duration="500" src="https://www.youtube.com/embed/jod5pXQjBcY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>);
            }
            case 5: {
                return (<div className="projectDetailModal" data-aos="fade-in" data-aos-duration="1000" onClick={() => { window.history.back(); }}>
                    <iframe className="youtubeProject" data-aos="fade-up" data-aos-duration="500" src="https://www.youtube.com/embed/BAqD75HuvO8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>);
            }
            case 6: {
                return (<div className="projectDetailModal" data-aos="fade-in" data-aos-duration="1000" onClick={() => { window.history.back(); }}>
                    <iframe className="youtubeProject" data-aos="fade-up" data-aos-duration="500" src="https://www.youtube.com/embed/G8xVdpnaMNA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>);
            }
            case 7: {
                return (<div className="projectDetailModal" data-aos="fade-in" data-aos-duration="1000" onClick={() => { window.history.back(); }}>
                    <iframe className="youtubeProject" data-aos="fade-up" data-aos-duration="500" src="https://www.youtube.com/embed/tFYMoqy12oI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe className="youtubeProject" data-aos="fade-up" data-aos-duration="500" src="https://www.youtube.com/embed/vQCYdk9wZZM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>);
            }
            case 8: {
                return (<div className="projectDetailModal" data-aos="fade-in" data-aos-duration="1000" onClick={() => { window.history.back(); }}>
                    <iframe className="youtubeProject" data-aos="fade-up" data-aos-duration="500" src="https://www.youtube.com/embed/rZzjw8tsuSE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>);
            }
            case 9: {
                return (<div className="projectDetailModal" data-aos="fade-in" data-aos-duration="1000" onClick={() => { window.history.back(); }}>
                    <img src={img09} className="fullProjectImage" data-aos="fade-up" data-aos-duration="500" />
                </div>);
            }
            case 10: {
                return (<div className="projectDetailModal" data-aos="fade-in" data-aos-duration="1000" onClick={() => { window.history.back(); }}>
                    <img src={img10} className="fullProjectImage" data-aos="fade-up" data-aos-duration="500" />
                </div>);
            }
            case 11: {
                return (<div className="projectDetailModal" data-aos="fade-in" data-aos-duration="1000" onClick={() => { window.history.back(); }}>
                    <img src={img11} className="fullProjectImage" data-aos="fade-up" data-aos-duration="500" />
                </div>);
            }
            case 12: {
                return (<div className="projectDetailModal" data-aos="fade-in" data-aos-duration="1000" onClick={() => { window.history.back(); }}>
                    <img src={img12} className="fullProjectImage" data-aos="fade-up" data-aos-duration="500" />
                </div>);
            }
            case 13: {
                return (<div className="projectDetailModal" data-aos="fade-in" data-aos-duration="1000" onClick={() => { window.history.back(); }}>
                    <img src={img13} className="fullProjectImage" data-aos="fade-up" data-aos-duration="500" />
                </div>);
            }
            case 14: {
                return (<div className="projectDetailModal" data-aos="fade-in" data-aos-duration="1000" onClick={() => { window.history.back(); }}>
                    <iframe className="youtubeProject" data-aos="fade-up" data-aos-duration="500" src="https://www.youtube.com/embed/MOEM7nS29iA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>);
            }
            case 15: {
                return (<div className="projectDetailModal" data-aos="fade-in" data-aos-duration="1000" onClick={() => { window.history.back(); }}>
                    <iframe className="youtubeProject" data-aos="fade-up" data-aos-duration="500" src="https://www.youtube.com/embed/m8jpEzJW0KM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>);
            }
        }

    }

}
export default ProjectDetail;