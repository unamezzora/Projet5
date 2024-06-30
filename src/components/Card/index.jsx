import PropTypes from 'prop-types'
import './card.scss'

function Card({ logement }) {
  return (
    <div className="card">
      <img src={logement.cover} className="card__img" alt={logement.title} />
      <div className="card__title">
        <p>{logement.title}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  logement: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default Card
