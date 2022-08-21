import styles from "./Car.module.css";

const Car = ({car}) => {
  return (
    <div className={styles.card}>

        <h2>{car.name}</h2>
        <p>{car.year}</p>
        
    </div>
  )
}

export default Car