import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import Home from './topics/TopicsPage';
import Quotes from './quotes/Quotes';
import NavBar from './NavBar';
import SearchPage from './topics/SearchPage';

const App = () => (
  <div>
    <Routers>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Quotes />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Routers>
  </div>
);

export default App;
