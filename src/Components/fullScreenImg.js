import React from'react';
import 'aos/dist/aos.css';


class FullScreenImg extends React.Component{

    render(){
        let image = undefined;
        let state=this.props.location.state;
        if(state&&"fullImage" in state){
            image=state.fullImage;
        }
        if(!image){
            return null;
        }
        return(
            <div className="togglefullscreen" data-aos="fade-in" data-aos-duration="1000"> 
                        <img src={image} className="fullScreenImg"data-aos="zoom-in" data-aos-duration="500" 
                         onClick={()=>{window.history.back();}}
                         />
            </div>
        );
    }

}
export default FullScreenImg;