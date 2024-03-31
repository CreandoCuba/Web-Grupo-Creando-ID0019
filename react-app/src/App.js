import WithSubnavigation from "./NavBar";
import {Route, Routes} from "react-router-dom";
import MainPage from "./MainPage";
import QuienesSomos from "./QuienesSomos";
import Services from "./Services";

function App() {
      return (
          <div>
              <WithSubnavigation></WithSubnavigation>
              <Routes>
                  <Route path={'/main'} element={<MainPage/>}/>
                  <Route path={'/QuienesSomos'} element={<QuienesSomos/>}/>
                  <Route path={'/Servicios'} element={<Services/>}/>
              </Routes>
          </div>
      )
}

export default App;
