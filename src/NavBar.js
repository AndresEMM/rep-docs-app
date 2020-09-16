import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Statistics from "./Statistics";
import Form from "./Form";
import Sesion from "./Sesion";
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {

    //const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    constructor() {
      super();
      this.state = { width: 0, height: 0 };
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    
    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
  
    render(){
      return (
      
        <HashRouter>
          <header className="App-header">
            <img src={"https://via.placeholder.com/"+this.state.width+"x135"} className="imgBanner" />
        <Nav justify variant="pills">
          <Nav.Item>
            <NavLink to="/">
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
            <NavLink to="/estadisticas" >
              <Nav.Link eventKey="2" href="/estadisticas">
                Estadísticas
              </Nav.Link>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/contacto" >
              <Nav.Link eventKey="3" href="/constacto">
                Contacto
              </Nav.Link>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/sesion" >
              <Nav.Link eventKey="5" href="/sesion">
                Iniciar Sesión
              </Nav.Link>
            </NavLink>
          </Nav.Item>
        </Nav>
        </header>
        <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/estadisticas" component={Statistics}/>
              <Route path="/contacto" component={Form}/>
              <Route path="/sesion" component={Sesion}/>
            </div>
        </HashRouter>
      );
    }
}

export default NavBar;