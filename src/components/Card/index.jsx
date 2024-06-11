import PropTypes from 'prop-types'
import '../../style/card.scss'

function Card({ title, picture }) {
    return (
        <div className='card'>
            <img src={picture} className='card__img' alt='Rocher'/>
            <span className='card__title' >{title}</span>
        </div>
    )
}

Card.propTypes = {
    picture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}
/*
Card.defaultProps = {
    picture: '',
    title: '',
}
*/
export default Card

