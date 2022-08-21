import './App.css';
import Car from './components/Car';
// import MyComponent from './components/MyComponent';

function App() {

  const myCars = [
    { id: 1, name: "Fusca", year: 1964},
    { id: 2, name: "Mustang", year: 1970},
    { id: 3, name: "Camaro", year: 1981},
  ]

  return (
    <div className="App">
      <h1>Showroom dos Carros</h1>
      <div className="car-container">
        {myCars.map((car) => (
          <Car car={car} key={car.id} />
          
        ))}
        
      </div>
      
    </div>
  );
}

export default App;
