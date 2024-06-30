import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import '../../style/home.scss'
import Banner from '../../components/Banner'
import { Link } from 'react-router-dom'
import imageBanner from '../../assets/imageBanner.svg'

const Home = ({ jsonPath = '/data.json' }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(jsonPath)
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [jsonPath])

  return (
    <div>
      <Banner
        imageBanner={imageBanner}
        titleBanner={
          <>
            Chez vous, <span>partout et ailleurs</span>
          </>
        }
        altBanner={'Un littoral rocheux'}
        className="banner__title-home"
      />
      <div className="annonces">
        {data.map((logement) => (
          <Link key={`${logement.id}`} to={`/logement/${logement.id}`}>
            <Card logement={logement} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
