import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Nav from "./Components/Nav";
import Contacto from "./Components/Contacto";

function App() {
  return (
    <Router>
      <div className="App">
        < Nav />
        <Routes>
        <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
