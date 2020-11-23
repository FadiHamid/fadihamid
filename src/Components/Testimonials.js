import React from 'react';
import './Testimonials.css';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import 'aos/dist/aos.css';
import Avatar01 from '../Images/Avatar/BomHong.jpg';
import Avatar02 from '../Images/Avatar/JennyBermas.jpg';
import Avatar03 from '../Images/Avatar/RitabanDass.jpg';
import Avatar04 from '../Images/Avatar/MireilleMakary.jpg';
import Avatar05 from '../Images/Avatar/HadiSaad.jpg';

function Item(props) {
    


    return (
        <Paper>

            <img src={props.item.pic} alt="avatar" className="avatar" data-aos="zoom-in" data-aos-duration="1000" />
            <div className="quote">
                <p className="date" data-aos="fade-up" data-aos-duration="800" >{props.item.date}</p>
                <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="150" >{props.item.name}</h2>
                <h3 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">{props.item.title}</h3>
                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="450"><q>{props.item.description}</q></div>
            </div>

        </Paper>
    )
}
class Testimonials extends React.Component {
constructor(props){
super(props);
this.state={auto:true,};
}
    render() {

        var items = [
            {
                date: "April 26, 2020",
                name: "Jenny Bermas",
                title: "3D Modeler at Jam Filled",
                pic: Avatar02,
                description: "I had the pleasure of teaching Fadi in our Digital Painting (texturing) course at Humber College. Fadi consistently produced work at the top of his class. I was particularly impressed with how eager he was to learn new techniques in 3D Art and observed as he applied them confidently. Fadi’s enthusiasm and artistic instinct drew his peers to seek out his perspective on all things 3D. He would be a great addition to your team!"
            },
            {
                date: "June 9, 2020",
                name: "Bom Hung Hong",
                title: "Designer at StoryBerry Inc.",
                pic: Avatar01,
                description: "Hamid is an excellent VFX designer with a good sense of art. He is also a reliable team member to have on deck."
            },
            // {
            //     date: "June 9, 2020",
            //     name: "Ritaban Dass",
            //     title: "Studying at Humber College, Toronto",
            //     pic: Avatar03,
            //     description: "Fadi is my batch mate from Humber college 3D VFX and modeling program. He's one of the brightest and hardworking guy from our batch and has a lot of tools and potentials in his arsenal. Whoever hires him will be a great asset to their team."
            // },
            {
                date: "June 12, 2020",
                name: "Mireille Makary",
                title: "PhD, Computer Science Instructor and Campus Coordinator",
                pic: Avatar04,
                description:"Fadi surely has an added value to offer the position he’s applying for. He is a very serious and committed student. He has very good programming skills, he’s dedicated to the courses he is enrolled in. He could always understand easily the information passed to him. He shows a positive attitude in class and towards his colleagues, he always takes his time to find the solution for a given problem and answers it calmly and accurately. His hard work and seriousness are good attributes which would serve him well in any position he seeks."                
            },
            {
                date: "June 17, 2020",
                name: "Hadi Saad",
                title: "Coordinator & Advisor, Computer Science Department",
                pic: Avatar05,
                description:"I work with many students who have substantial knowledge of Computer Science. Each year I notice that only a few outstanding students offer a unique perspective and really embrace their learning of the subject matter. Fadi has consistently shown such a strong desire to learn that I simply could not turn down his request for recommendation. His keenness for achieving excellence has helped him in picking up a challenging research project in Web programming courses. He displayed good leadership skills when involved in group projects. During several team case studies, he took charge of the team. He was aware of strengths and limitations of his team members and assigned task accordingly. He achieved highest grade for the case and were commended for his depth of analysis as a team. He is very well liked and respected by both peers and his professors."                
            }
        ]

        return (
            <div id="Testimonials">
                <h1 className="sectionTitle testimonialsTilte">Testimonials</h1>
                <div className="sliderContainer" onClick={()=>{this.setState({auto:false})}}>
                    <div data-aos="fade-up" data-aos-duration="800" >
                        <Carousel className="slider" autoPlay={this.state.auto} >
                            {
                                items.map(item => <Item item={item} />)
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
        )
    }

}

export default Testimonials;