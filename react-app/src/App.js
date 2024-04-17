import {Route, Routes} from "react-router-dom";
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

const mainImgRoute = 'images/services/'

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
                element: <AdministracionDeEmpresas/>,
                imgRoute: mainImgRoute +'Administración de Empresas.png',
                subList: [
                    'Diseño de Modelo de Negocios.',
                    'Planeación Estratégica',
                    'Logística'
                ]
            },
            {
                path: '/desarrolloLocal',
                label: 'Desarrollo Local',
                subLabel: 'Elaboracion de estrategias y busqueda de oportunidades',
                element: <DesarrolloLocal/>,
                imgRoute: mainImgRoute+'Desarrollo Local.png',
                subList: [
                    'Identidad, Imagen y Marketing de ciudades o localidades.',
                    'Diseño y desarrollo de marcas.'
                ]
            },
            {
                path: '/Diseno',
                label: 'Diseño',
                subLabel: 'Logos, interiores, personajes y Stands',
                element: <Diseno/>,
                imgRoute: mainImgRoute +'Diseño.png',
                subList: [
                    'Diseño de Personaje o Mascota',
                    'Diseño de interiores',
                    'Diseño de infografías.'
                ]
            },
            {
                path: '/Informatica',
                label: 'Informatica',
                subLabel: 'Paginas Web y Automatizacion de procesos',
                element: <Informatica/>,
                imgRoute: mainImgRoute +'Informática.png',
                subList: [
                    'Creación y Gestión de páginas web.',
                    'Informatización de procesos.',
                    'Seguridad informática.'
                ]
            },
            {
                path: '/Turismo',
                label: 'Turismo',
                subLabel: 'Diseño de productos y destinos turisticos',
                element: <Turismo/>,
                imgRoute: mainImgRoute+'Turismo.png',
                subList: [
                    'Diseño de productos turísticos.',
                    'Diseño de puntos náuticos.',
                    'Diseño de souvenirs.'
                ]
            },
            {
                path: '/Audiovisuales',
                label: 'Audiovisuales',
                subLabel: 'Creacion de Fotografias y Videos profesionales',
                element: <AudioVisuales/>,
                imgRoute: mainImgRoute +'Fotografía.png',
                subList: [
                    'Fotos publicitarias de estudio.',
                    'Fotos publicitarias de exteriores.',
                    'Colchón fotográfico publicitario.'
                ]
            },
            {
                path: '/Marketing',
                label: 'Marketing',
                subLabel: 'Mejora tu imagen ante tus clientes',
                element: <Marketing/>,
                imgRoute: mainImgRoute +'Marketing y Comunicación.png',
                subList: [
                    'Investigación de mercados',
                    'Conceptualización de productos.',
                    'Diseño de productos.'
                ]
            },
            {
                path: '/Contabilidad',
                label: 'Contabilidad y Finanzas',
                subLabel: '',
                element: <Contabilidad/>,
                imgRoute: mainImgRoute +'Contabilidad y Finanzas.png',
                subList:[
                    'Teneduría de libros',
                    'Finanzas corporativas',
                    'Estudios de factibilidad'
                ]
            }
        ]
    },
    {
        path:'/PorQueNosotros',
        label: 'Elígenos',
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
