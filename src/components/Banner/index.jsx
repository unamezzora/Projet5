import PropTypes from 'prop-types'
import './banner.scss'

function Banner({ imageBanner, titleBanner, altBanner, className }) {
  return (
    <div className="banner">
      <img src={imageBanner} className="banner__img" alt={altBanner} />

      <div className={`banner__title ${className}`}>
        <h1>{titleBanner}</h1>
      </div>
    </div>
  )
}

Banner.propTypes = {
  imageBanner: PropTypes.string.isRequired,
  titleBanner: PropTypes.node.isRequired,
  altBanner: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Banner
