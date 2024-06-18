import PropTypes from 'prop-types'
import '../../style/card.scss'

function Card({ title, picture }) {

    return (
        <div className='card'>
            <img src={picture} className='card__img' alt='Rocher'/>
            <div className='card__title'>
                <p>{title}</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Card

