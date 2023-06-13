import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [beers, setBeers] = useState([]);
  const navigate = useNavigate();

  const getBeers = async () => {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const data = await res.json();
    console.log("data ==> ", data);
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  const clickFn = (beerId) => {
    return navigate(`/beer/${beerId}`);
  };

  return (
    <div className="grid">
      {beers.length
        ? beers.map((beer) => (
            <Card key={beer.id} data={beer} onClick={() => clickFn(beer.id)} />
          ))
        : null}
    </div>
  );
};

export default Home;
