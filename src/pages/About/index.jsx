import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import '../../style/about.scss'
import imageBanner from '../../assets/imageBanner2.svg'
import { useId } from 'react'

const aPropos = [
  {
    collapseTitle: 'Fiabilité',
    collapseContenu:
      'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
  },
  {
    collapseTitle: 'Respect',
    collapseContenu:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    collapseTitle: 'Service',
    collapseContenu:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    collapseTitle: 'SerSécurité',
    collapseContenu:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
]

function About() {
  const id = useId()
  return (
    <div className="apropos">
      <Banner
        imageBanner={imageBanner}
        titleBanner={''}
        altBanner={'Des montagnes'}
      />
      <div className="apropos__collapse">
        {aPropos.map((valeur, index) => (
          <Collapse
            key={`${id}-${index}`}
            collapseTitle={valeur.collapseTitle}
            collapseContenu={valeur.collapseContenu}
          />
        ))}
      </div>
    </div>
  )
}

export default About
