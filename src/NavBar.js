import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter, 
  Switch,
  /*Route,*/
  NavLink,
  /*HashRouter*/
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Statistics from "./Statistics";
import Form from "./Form";
//import Sesion from "./Sesion";
import Login from './Login';
import Dashboard from './Dashboard';
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
//import axios from 'axios';
import { getToken/*, removeUserSession, setUserSession*/ } from './Utils/Common';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {

    //const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    const [authLoading/*, setAuthLoading*/] = useState(true);
 
    useEffect(() => {
      const token = getToken();
      if (!token) {
        return;
      }
   
      /*axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
        setUserSession(response.data.token, response.data.user);
        setAuthLoading(false);
      }).catch(error => {
        removeUserSession();
        setAuthLoading(false);
      });*/
    }, []);
   
    if (authLoading && getToken()) {
      return <div className="content">Checking Authentication...</div>
    }

      return (
      
        <BrowserRouter>
          <header className="App-header">
            <Header/>
            {/*<img src={"https://via.placeholder.com/"+this.state.width+"x135"} className="imgBanner" />*/}
        <Nav justify variant="pills">
          <Nav.Item>
            <NavLink to="/" activeClassName="active">
              <Nav.Link eventKey="1" href="/">
                Inicio
              </Nav.Link>
            </NavLink>
          </Nav.Item>
          <NavDropdown title="Documentos" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1" href="index.html" download>Articulos</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" href="index.html" download>Tesis</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3" href="index.html" download>Proyectos</NavDropdown.Item>
            {/*<NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>*/}
          </NavDropdown>
          <Nav.Item>
            <NavLink to="/estadisticas" activeClassName="active">
              <Nav.Link eventKey="2" href="/estadisticas">
                Estadísticas
              </Nav.Link>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/contacto" activeClassName="active" >
              <Nav.Link eventKey="3" href="/constacto">
                Contacto
              </Nav.Link>
            </NavLink>
          </Nav.Item>
          {/*<Nav.Item>
            <NavLink to="/sesion" >
              <Nav.Link eventKey="5" href="/sesion">
                Iniciar Sesión
              </Nav.Link>
            </NavLink>
          </Nav.Item>*/}
          <Nav.Item>
            <NavLink to="/login" activeClassName="active" >
              <Nav.Link eventKey="6" href="/login">
                Iniciar Sesión
              </Nav.Link>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/dashboard" activeClassName="active" >
              <Nav.Link eventKey="7" href="/dashboard">
                Tablero
              </Nav.Link>
            </NavLink>
          </Nav.Item>
        </Nav>
        </header>
        <div className="content">
          <Switch>
              <PublicRoute exact path="/" component={Home}/>
              <PublicRoute path="/estadisticas" component={Statistics}/>
              <PublicRoute path="/contacto" component={Form}/>
              {/*<PrivateRoute path="/sesion" component={Sesion}/>*/}
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
            </div>
        </BrowserRouter>
      );
}

export default NavBar;