import './App.css';
import Greet from './components/Greet'
import './index.css'
import VisitorForm from './components/VisitorForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
      <Route exact path="/" element={<Greet />} />
      <Route exact path="/visitor" element={<VisitorForm />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
