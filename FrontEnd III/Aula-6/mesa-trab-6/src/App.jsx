import { cities } from "./constants/world-locations";
import LocationList from "./components/LocationList";
import "./App.css";

function App() {

  return (
    <>
    <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
      {cities.map((item) => {
        return ["BRA"].includes(item.country) ? (
          <LocationList
            country={item.country}
            city={item.city}
            population={item.population}
            color={item.color}
          />
        ) : (
          <></>
        );
      })}
      </div>
    </>
  );
}

export default App;
