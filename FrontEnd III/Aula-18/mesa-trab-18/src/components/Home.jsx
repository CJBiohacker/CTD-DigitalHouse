import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";
import hoteis from "../hoteis.json";

const Home = () => {
  const hotels = [...hoteis];

  return (
    <>
      {hotels.map((hotel) => (
        <>
          <Card
            key={hotel.id}
            variant="outlined"
            style={{ marginBottom: "20px", width: "960px" }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                {hotel.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {hotel.city}
              </Typography>
              <Typography variant="body2">{hotel.description}</Typography>
              {/* Display more hotel details */}
              <Link to={`/details/${hotel.id}`}>
                <Button variant="contained" color="primary">
                  Mais Detalhes
                </Button>
              </Link>
            </CardContent>
          </Card>
        </>
      ))}
    </>
  );
};

export default Home;
