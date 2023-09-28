import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  Navigate
} from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Contacto from "./Components/Contacto";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import Acerca from "./Components/Acerca";

function App() {
  return (
    <Router>
      <div className="App">
        < Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca-de" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        < Footer />
      </div>
    </Router>
  );
}

export default App;
