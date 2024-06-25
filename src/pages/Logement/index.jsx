import { useEffect, useState } from 'react'
import '../../style/logement.scss'
import { useParams } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Slideshow from '../../components/Slideshow'
import Rating from '../../components/Rating'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function Logement() {
  const { id: logementId } = useParams()
  const [logementData, setLogementData] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (logementId) {
      fetch('/data.json')
        .then((response) => response.json())
        .then((jsonResponse) => {
          const logement = jsonResponse.find((item) => item.id === logementId)
          if (!logement) {
            navigate('/error')
          }
          setLogementData(logement)
        })
    }
  }, [logementId])

  return (
    <div>
      {logementData ? (
        <div className="logement">
          <div className="logement__img">
            <Slideshow data={logementData} />
          </div>
          <div className="logement__contenu">
            <div className="logement__contenu__title">
              <h1>{logementData.title}</h1>
              <p>{logementData.location}</p>
              <div className="logement__contenu__title__tags">
                {logementData.tags.map((tag, index) => (
                  <div key={`${tag}-${index}`}>{tag}</div>
                ))}
              </div>
            </div>
            <div className="logement__contenu__supp">
              {logementData.host && (
                <div className="logement__contenu__supp__host">
                  <p>{logementData.host.name} </p>
                  <img
                    src={logementData.host.picture}
                    alt={logementData.host.name}
                  />
                </div>
              )}
              <div className="logement__contenu__supp__rating">
                <Rating rating={logementData.rating} />
              </div>
            </div>
          </div>
          <div className="logement__description">
            <div className="logement__description_collapse">
              <Collapse
                collapseTitle="Description"
                collapseContenu={logementData.description}
              />
            </div>
            <div className="logement__description__collapse">
              <Collapse
                collapseTitle="Équipements"
                collapseContenu={logementData.equipments.map(
                  (equipment, index) => (
                    <div key={`${equipment}-${index}`}>{equipment}</div>
                  )
                )}
              />
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
/*Logement.propTypes = {
  pictures: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  equipments: PropTypes.string.isRequired,
}
*/
export default Logement
