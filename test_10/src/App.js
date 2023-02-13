import './App.css';
import Stars from './components/Stars';

function App() {
  return (
    <div className="App">
      Default value(0):
      <Stars />
      <hr />
      One star: <br />
      <Stars count={1} />
      <hr />
      Two stars: <br />
      <Stars count={2} />
      <hr />
      Three stars: <br />
      <Stars count={3} />
      <hr />
      Four stars: <br />
      <Stars count={4} />
      <hr />
      Five stars: <br />
      <Stars count={5} />
      <hr />
      Wrong value(6): <br />
      <Stars count={6} />
      <hr />
    </div>
  );
}

export default App;