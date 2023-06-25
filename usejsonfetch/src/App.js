import "./App.css";
import ComponentData from "./components/ComponentData";
import ComponentError from "./components/ComponentError";
import ComponentLoading from "./components/ComponentLoading";

function App() {
  return (
    <div className="App">
      <p className="note">
        Чтобы все заработало, запусти сервачок из папки{" "}
        <strong>backend/</strong>
      </p>
      <ComponentLoading suffix="loading" />
      <ComponentError suffix="error" />
      <ComponentData suffix="data" />
    </div>
  );
}

export default App;