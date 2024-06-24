import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import './slideshow.scss'

function Slideshow({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const prevPicture = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? data.pictures.length - 1 : currentIndex - 1
    )
  }
  const nextPicture = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === data.pictures.length - 1 ? 0 : currentIndex + 1
    )
  }

  useEffect(() => {
    setCurrentIndex(0)
  }, [data])

  return (
    <div className="slideshow">
      <img
        src={data.pictures[currentIndex]}
        className="slideshow__img"
        alt={data.title}
      />
      {data.pictures.length > 1 ? (
        <div className="slideshow__nav">
          <button
            className="slideshow__nav__btn slideshow__nav__btn--prev"
            onClick={prevPicture}
          >
            <svg
              viewBox="0 0 96 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M70.04 15.7831L62.92 8.70312L23.36 48.3031L62.96 87.9031L70.04 80.8231L37.52 48.3031L70.04 15.7831Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            className="slideshow__nav__btn slideshow__nav__btn--next"
            onClick={nextPicture}
          >
            <svg
              viewBox="0 0 96 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.96 81.3458L33.04 88.4258L72.64 48.8258L33.04 9.22583L25.96 16.3058L58.48 48.8258L25.96 81.3458Z"
                fill="white"
              />
            </svg>
          </button>
          <div className="slideshow__num">
            {currentIndex + 1} / {data.pictures.length}
          </div>
        </div>
      ) : null}
    </div>
  )
}
/*
Slideshow.propTypes = {
  pictures: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}
  */

export default Slideshow
