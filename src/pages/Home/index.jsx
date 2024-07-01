import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import Banner from '../../components/Banner'
import imageBanner from '../../assets/imageBanner.svg'
import Loader from '../../utils/Loader'
import '../../style/home.scss'

const Home = ({ jsonPath = '/data.json' }) => {
  const [data, setData] = useState([])
  const [isDataLoading, setDataLoading] = useState(true)

  useEffect(() => {
    setDataLoading(true)
    fetch(jsonPath)
      .then((response) => response.json())
      .then((data) => setData(data), setDataLoading(false))
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
      {isDataLoading ? (
        <Loader />
      ) : (
        <div className="annonces">
          {data.map((logement) => (
            <Link key={`${logement.id}`} to={`/logement/${logement.id}`}>
              <Card logement={logement} />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
