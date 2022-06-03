import './App.css';
import ChartGenarator from'./components/ChartGenarator'


function App() {
  return (
    <div className="App">
      <h1>Chart </h1>
      <ChartGenarator 
        mode={"bars"}
        data={[1,9,3,5,8,1,7,12,43,67,54,13,68,90,87,65,43,22,45]}
        color={"#000000"}/>
    </div>
  );
}

export default App;



