import "./App.css";
import Store from "./componets/Store";
import Products from "./data/products";

function App() {
  return (
    <div className="App">
      <Store products={Products} />
    </div>
  );
}

export default App;
