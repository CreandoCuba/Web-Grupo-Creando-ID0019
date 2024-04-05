import {Route, RouterProvider, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import WhyPage from "./pages/WhyPage";
import TeamPage from "./pages/TeamPage";

const pages = [
    {
        path:'/',
        button:'Inicio',
        element:<IndexPage/>
    },
    {
      path: '/SobreNosotros',
      button: 'Nosotros',
      element: <AboutPage/>
    },
    {
        path: '/servicios',
        button: ' Servicios',
        element: <ServicesPage/>
    },
    {
        path:'/PorQueNosotros',
        button: 'Clientes',
        element: <WhyPage/>
    },
    {
        path:'/Equipo',
        button: 'Equipo',
        element: <TeamPage/>
    }
]

function App() {
      return (
          <Routes>
              {pages.map((value, index)=>{
                  return (
                      <Route
                          key={index}
                          path={value.path}
                          element={value.element}
                      />
                  )
              })}

          </Routes>
      )
}

export default App;

export { pages };
