import {Route, RouterProvider, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import WhyPage from "./pages/WhyPage";
import TeamPage from "./pages/TeamPage";
import AdministracionDeEmpresas from "./pages/Services/AdministracionDeEmpresas";
import NavBar from './Chakra templates/NavBar'
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
            /*{
                label: 'Desarrollo Local',
                subLabel: 'Elaboracion de estrategias y busqueda de oportunidades',
                href: '#',
            },
            {
                label: 'Diseño',
                subLabel: 'Logos, interiores, personajes y Stands',
                href: '#',
            },
            {
                label: 'Informatica',
                subLabel: 'Paginas Web y Automatizacion de procesos',
                href: '#',
            },
            {
                label: 'Turismo',
                subLabel: 'Diseño de productos y destinos turisticos',
                href: '#',
            },
            {
                label: 'Fotografia y Video',
                subLabel: 'Publicitarias de interiores y exteriores',
                href: '#',
            }*/
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
