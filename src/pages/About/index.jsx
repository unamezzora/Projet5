import imageBanner from '../../assets/imageBanner2.svg'
import Collapse from "../../components/Collapse";
import '../../style/about.scss'

const aPropos = [
    {
        collapseTitle: 'Fiabilité',
        collapseContenu: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
        collapseTitle: 'Respect',
        collapseContenu: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
        collapseTitle: 'Service',
        collapseContenu: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
        collapseTitle: 'SerSécurité',
        collapseContenu: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
]

function About() {
    return (
        <div className="apropos">
            <img src={imageBanner} className='apropos__banner' alt="les montagnes" />
            <div className="apropos__banner--Sombre"></div>
            <div className="apropos__collapse">
                {aPropos.map((valeur, index) => (
                    <Collapse
                        key={`${aPropos.collapseTitle}-${index}`}
                        collapseTitle={valeur.collapseTitle}
                        collapseContenu={valeur.collapseContenu}
                    />
                ))}
            </div>
        </div>
    );
};


 export default About