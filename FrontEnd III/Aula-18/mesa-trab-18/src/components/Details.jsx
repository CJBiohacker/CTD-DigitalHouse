import { useParams, Link } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";
import hoteis from "../hoteis.json";

const Details = () => {
  const { id } = useParams();
  const hotels = [...hoteis];
  const hotel = hotels.find((h) => h.id === parseInt(id));

  if (!hotel) {
    return <div>Hotel not found.</div>;
  }

  return (
    <>
      {hotel ? (
        <>
          <Card variant="outlined" style={{ width: "960px" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {hotel.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {hotel.city}
              </Typography>
              <Typography variant="body1">{hotel.description}</Typography>
              <Typography variant="body2">
                Preço da diária: {hotel.daily_price}
              </Typography>
              <Typography variant="body2">Estrelas: {hotel.stars}</Typography>
              <Typography variant="body2">
                Tem Wifi ? {hotel.wifi ? "Yes" : "No"}
              </Typography>
              <Typography variant="body2">
                Tem Ar Condicionado ? : {hotel.air_conditioned ? "Yes" : "No"}
              </Typography>
              <Typography variant="body2">Tel/Cel: {hotel.phone}</Typography>
              <Typography variant="body2">Email: {hotel.email}</Typography>
            </CardContent>
            <Link to="/home">
              <Button variant="contained" color="primary" style={{ marginBottom: "10px" }}>
                Voltar
              </Button>
            </Link>
          </Card>
        </>
      ) : (
        <div>Hotel not found.</div>
      )}
    </>
  );
};

export default Details;
