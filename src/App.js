import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './componentes/usuario1/Footer';
import Banner from './componentes/usuario1/Banner';
import Cards from './componentes/usuario1/Cards';
import Faq from './componentes/usuario1/Faq';
import  TableAxios  from './componentes/usuario2/TableAxios';
import Login from './componentes/users/Login';
import Notification from './componentes/Notificaciones';
import Loading from './componentes/Loading';
import MenuUsuario1 from './componentes/usuario1/StepperUsuario1/MenuUsuario1';
import SubirLegajo from './componentes/usuario1/StepperUsuario1/SubirLegajo';
import StepperIngresosDeclarados from './componentes/usuario1/ingresosDeclarados/StepperIngresosDeclarados';
import StepperDJ from './componentes/usuario1/declaracionesJuradas/StepperDJ';


import NavBar from './componentes/NavBar';

function App() {
  return (
    <div className="App">
    <MenuUsuario1>
      <StepperDJ />
    </MenuUsuario1>  

    </div>
  );
}


export default App;
