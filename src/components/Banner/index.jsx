import './banner.scss'

function Banner({ imageBanner, titleBanner, altBanner }) {
  return (
    <div className="banner">
      <img src={imageBanner} className="banner__img" alt={altBanner} />

      <div className="banner__title">
        <h1>{titleBanner}</h1>
      </div>
    </div>
  )
}

export default Banner
