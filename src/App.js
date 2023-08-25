import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Contacto from "./Components/Contacto";
import Servicios from "./Components/Servicios";
import Services from "./Components/Services";

function App() {
  return (
    <Router>
      <div className="App">
        < Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/servicios" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
