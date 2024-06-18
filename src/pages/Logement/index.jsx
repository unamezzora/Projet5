import { useEffect, useState } from "react";
import '../../style/logement.scss';
import { useParams } from "react-router-dom";
import Collapse from "../../components/Collapse";
import Slideshow from "../../components/Slideshow";


function Logement() {
    const { id: logementId } = useParams()
    const [logementData, setLogementData] = useState(null)
    
    useEffect(() => {
        fetch('/data.json')
            .then((response) => response.json())
            .then((jsonResponse) => {
                
                

                const logement = jsonResponse.find((item) => item.id === logementId)
                setLogementData(logement)
                console.log(jsonResponse[0])
            })

        }, [logementId])

        

        return (
            <div>
                {logementData ? (
                        <div className='logement'>
                            <div className='logement__img'>
                                <Slideshow
                                data={logementData}
                                />
                           
                            </div>
                            <div className="logement__title">
                                <h1>{logementData.title}</h1>
                                <p>{logementData.location}</p>
                            </div>
                            {logementData.host && (
                                <div className="logement__host">
                                    <p>{logementData.host.name} </p>
                                    <img src={logementData.host.picture} alt={logementData.host.name} />
                                </div>
                                )}
                            <div className="logement__tags">
                                {logementData.tags}
                            </div>
                            <div className="logement__rating">
                             {logementData.rating}
                            </div>
                            <div className="logement__collapse">
                                <Collapse 
                                collapseTitle="Description"
                                collapseContenu={logementData.description}
                                />
                            </div>
                            <div className="logement__collapse">
                                <Collapse
                                collapseTitle="Équipements"
                                collapseContenu={logementData.equipments}
                                />
                            </div>
                        </div>

                ) : (
                    <p>Loading...</p>
                )}
            </div>
            
            

        )
}

export default Logement