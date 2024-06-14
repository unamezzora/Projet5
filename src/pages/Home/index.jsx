import { useEffect, useState } from "react";
import Card from "../../components/Card";
import '../../style/home.scss';
import Banner from "../../components/Banner"

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
          <Card
          key={`${logement.id}`}
          title={logement.title}
          picture={logement.cover}
          />
        ))}
      </div>
    </div>
    
      

  ); 
}


export default Home;
/*
function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data.json')
    .then(response => response.json())
    .then(data => setData(data));
  }, []);

  return (
      <div>
        {data.map(logement => (
          <Card
          key={`${logement.id}`}
          title={logement.title}
          picture={logement.cover}
          />
        ))}
      </div>

  ); 
}


export default Home;
*/