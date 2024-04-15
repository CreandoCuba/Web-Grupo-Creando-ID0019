import {Route, RouterProvider, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import WhyPage from "./pages/WhyPage";
import TeamPage from "./pages/TeamPage";
import AdministracionDeEmpresas from "./pages/Services/AdministracionDeEmpresas";
import NavBar from './Chakra templates/NavBar'
import DesarrolloLocal from "./pages/Services/DesarrolloLocal";
import Informatica from "./pages/Services/Informatica";
import Marketing from "./pages/Services/Marketing";
import Diseno from "./pages/Services/Diseno";
import Turismo from "./pages/Services/Turismo";
import Contabilidad from "./pages/Services/Contabilidad";
import AudioVisuales from "./pages/Services/AudioVisuales";
const pages = [
    {
        path:'/',
        label:'Inicio',
        element:<IndexPage/>
    },
    {
      path: '/SobreNosotros',
      label: 'Nosotros',
      element: <AboutPage/>
    },
    {
        path: '/servicios',
        label: ' Servicios',
        element: <ServicesPage/>,
        children:[
            {
                path:'/administraciondeempresas',
                label: 'Administracion de Empresas',
                subLabel: 'Estrategia, Logistica y Planificacion',
                element: <AdministracionDeEmpresas/>
            },
            {
                path: '/desarrolloLocal',
                label: 'Desarrollo Local',
                subLabel: 'Elaboracion de estrategias y busqueda de oportunidades',
                element: <DesarrolloLocal/>
            },
            {
                path: '/Diseno',
                label: 'Diseño',
                subLabel: 'Logos, interiores, personajes y Stands',
                element: <Diseno/>
            },
            {
                path: '/Informatica',
                label: 'Informatica',
                subLabel: 'Paginas Web y Automatizacion de procesos',
                element: <Informatica/>
            },
            {
                path: '/Turismo',
                label: 'Turismo',
                subLabel: 'Diseño de productos y destinos turisticos',
                element: <Turismo/>
            },
            {
                path: '/Audiovisuales',
                label: 'Audiovisuales',
                subLabel: 'Creacion de Fotografias y Videos profesionales',
                element: <AudioVisuales/>
            },
            {
                path: '/Marketing',
                label: 'Marketing',
                subLabel: 'Mejora tu imagen ante tus clientes',
                element: <Marketing/>
            },
            {
                path: '/Contabilidad',
                label: 'Contabilidad y Finanzas',
                subLabel: '',
                element: <Contabilidad/>
            }
        ]
    },
    {
        path:'/PorQueNosotros',
        label: 'Clientes',
        element: <WhyPage/>
    },
    {
        path:'/Equipo',
        label: 'Equipo',
        element: <TeamPage/>
    },


]

function App() {
      return (
          <div>
              <NavBar NavItems={pages}/>
              <Routes>
                  {[pages.map((value, index)=>{
                      const mainRoute = (<Route
                          key={value.path}
                          path={value.path}
                          element={value.element}
                      />)
                      if (value.children) return (
                          [mainRoute, ...value.children?.map((value,index) =>
                                  <Route key={value.path} path={value.path} element={value.element}/>
                          )])
                      else return mainRoute
                  })]

                  }
              </Routes>
          </div>
      )
}

export default App;

export { pages };
