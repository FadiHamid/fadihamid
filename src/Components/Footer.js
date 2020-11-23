import React from 'react';
import './Footer.css';
import fb from '../Images/Logos/fb.png';
import tw from '../Images/Logos/tw.png';
import ig from '../Images/Logos/ig.png';
import as from '../Images/Logos/as.png';
import In from '../Images/Logos/in.png';
import ml from '../Images/Logos/ml.png';

const Footer=()=>{
    return(
        <div className="footer" id="Footer">
            <a href="https://www.artstation.com/fadihamid" target="_blank"> <img src={as}/></a>
            <a href="mailto:fih_studio@hotmail.com" target="_blank"> <img src={ml}/></a>
            <a href="https://www.facebook.com/fadi.hamid.dmxxv" target="_blank"> <img src={fb}/></a>
            <a href="https://twitter.com/FiHstudio" target="_blank"> <img src={tw}/></a>
            <a href="https://www.instagram.com/fadi__hamid/" target="_blank"> <img src={ig}/></a>
            <a href="https://www.linkedin.com/in/fadi-hamid-124289125/" target="_blank"> <img src={In}/></a>
            <p>© 2020 by Fadi Hamid. All rights reserved</p>
        </div>
    );

}
export default Footer;