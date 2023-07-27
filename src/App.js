import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Nav from "./Components/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        < Nav />
        <Routes>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
