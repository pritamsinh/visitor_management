// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import 'semantic-ui-css/semantic.min.css'
function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
    </div>
  );
}

export default App;
