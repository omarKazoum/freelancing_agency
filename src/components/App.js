import '../assets/css/App.css';
import {BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom';
import ProductsList from "./ProductsList";
import {createContext} from "react";
import ApplicationThemeProvider from "./ApplicationThemeProvider";

function App() {

  return (
      <ApplicationThemeProvider>
        <div className="App" >
          <Router>
            <Routes>
              <Route
                path={"/products"}
                element={<ProductsList/>}
              />

              <Route path={"*"} element={<span style={{color:"red"}}>page not found</span>}/>
            </Routes>
          </Router>
        </div>
      </ApplicationThemeProvider>
  );
}

export default App;
