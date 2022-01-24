import './App.css';
import Forecast from "./components/forecast/Forecast.js";
import Logo from './components/logo/Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <h1>React Weather App</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Page created by e-n-eliseev
      </footer>
    </div>
  );
}

export default App;
