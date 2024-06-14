import { useState } from "react";
import imageBanner from '../../assets/imageBanner2.svg'
import Collapse from "../../components/Collapse";
import '../../style/about.scss'

function About() {
    const [collapse, updateCollapse] = useState(0)
    return (
        <div className="apropos">
            <img src={imageBanner} className='apropos__banner' alt="les montagnes" />
            <div className="apropos__banner--Sombre"></div>
            <div className="apropos__collapse">
                <Collapse>
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                </Collapse>
                
         
            </div>
        </div>
    );
};


 export default About