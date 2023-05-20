import styles from "./LocationList.module.css";

function LocationList(props) {
  const { country, city, population, color } = props;

  return (
    <div className={styles.outsideBorder}>
      <div className={styles.insideBorder}>
        <h1>País: {country}</h1>
        <h3 style={{ color: color }}>Cidade: {city}</h3>
        <p>População: {population}</p>
      </div>
    </div>
  );
}

export default LocationList;
