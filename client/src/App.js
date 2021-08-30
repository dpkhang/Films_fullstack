import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router} from "react-router-dom";
import MapRoute from "./components/MapRoute";
import Menu from "./components/Menu";
import routes from './routes/Route';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <MapRoute supRoute={''} routes={routes}/> 
      </div>
    </Router>
  );
}

export default App;
