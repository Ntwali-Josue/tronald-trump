import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import NavBar from './NavBar';
import Coins from './Coins/Coins';

const App = () => (
  <div className="App">
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Coins />} />
      </Routes>
    </Router>
  </div>
);

export default App;
