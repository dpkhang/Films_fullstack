import "./App.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter as Router} from "react-router-dom"
import MapRoute from "./components/MapRoute"

import routes from './routes/Route'
function App() {
  return (
    <Router>
      <div className="App">
        <MapRoute supRoute={''} routes={routes}/> 
      </div>
    </Router>
  )
}

export default App

