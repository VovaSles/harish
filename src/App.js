
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './components/NaviBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Hugim from './pages/Hugim';
import Ligot from './pages/Ligot';

function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hugim" element={<Hugim />} />
          <Route path="/ligot" element={<Ligot />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
