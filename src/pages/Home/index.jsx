import { useEffect, useState } from "react";
import Card from "../../components/Card";
import '../../style/home.scss';
import Banner from "../../components/Banner"
import { Link } from "react-router-dom";

const Home = ({ jsonPath = '/data.json' }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(jsonPath)
    .then(response => response.json())
    .then(data => setData(data));
  }, [jsonPath]);

  return (
    <div>
      <Banner />
      <div className="annonces">
        {data.map(logement => (
          <Link key={`${logement.id}`} to={`/logement/${logement.id}`}>
            <Card
            title={logement.title}
            picture={logement.cover}
          />
          </Link>
          
        ))}
      </div>
    </div>
  ); 
}


export default Home;
