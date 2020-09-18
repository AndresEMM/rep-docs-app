import React, {Component} from 'react'
import pg1 from './img/pleca-gob1.png'
import pg2 from './img/pleca-gob2.png'
import pt from './img/pleca_tecnm.jpg'
import cal from './img/flags/calendario-icono.png'
import chi from './img/flags/china-icono.png'
import cor from './img/flags/correo-icono.png'
import fra from './img/flags/francia-icono.png'
import mex from './img/flags/mexico-icono.png'
import ojo from './img/flags/ojo-icono.png'
import usa from './img/flags/usa-icono.png'

class Header extends Component {
    render() {
        return (
            <>
            <div className="u-noPaddingContainer contenedorGobierno">
                <div className="container-cabecera">
                    <div className="row no-gutters">
                        <div className="col-md-12">
                            <div className="d-inline-block ipnLogo-enlace">
                                <a href="https://www.gob.mx/" target="_blank" id="pleca_1">
                                    <img src={pg1} alt="Gobierno de México" className="plecaGob gob"/>
                                </a>
                                <a href="https://www.gob.mx/sep" target="_blank" id="pleca_2">
                                    <img src={pg2} alt="Educación" className="plecaGob gob"/>
                                </a>
                                <a href="inicio.aspx" id="pleca_3">
                                    <img src={pt} alt="TecNM" className="plecaTECNM"/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contenedorAccesibilidad">  
                        <div className="idiomas text-right">
                            <a href="https://login.microsoftonline.com/?whr=tecnm.mx" title="Correo Institucional" target="_blank">
                                <img src={cor} alt="Buzón"/>
                            </a>
                            <a href="pdf/Calendario_Academico_2019-2020.pdf" title="Calendario Académico" target="_blank">
                                <img src={cal} alt="Calendario Académico"/>
                            </a>
                            <a href="inicio.aspx">
                                <img src={chi} title="Mandarín" alt="Idioma Mandarín"/>
                            </a>
                            <a href="inicio.aspx">                            
                                <img src={usa} title="Inglés" alt="Idioma Inglés"/>
                            </a>
                            <a href="inicio.aspx">
                                <img src={fra} title="Francés" alt="Idioma Francés"/>
                            </a>
                            <a href="inicio.aspx" className="mr-3">
                                <img src={mex} title="Español" alt="Idioma Español"/>
                            </a>
                            
                            {/*<img style="height:6%;width:6%;" title="Accesibilidad" src="images/banderas/ojo-icono.png" alt="Débil Visual" />*/}
                            
                            <a className="btn--accesibilidad contraste">
                                <svg  className="svg-inline--fa fa-adjust fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="adjust" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path  fill="#1B396A" d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z" ><title>Contraste</title></path></svg>{/*</a><i className="fas fa-adjust"></i>*/}
                            </a>
                            <a className="btn--accesibilidad aumentaLetra " title="Aumentar letra">A+</a>
                            <a className="btn--accesibilidad reduceLetra" title="Disminuir letra">A-</a>
                            <a className="btn--accesibilidad resetLetra" title="Restablecer tamaño">A </a>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Header;