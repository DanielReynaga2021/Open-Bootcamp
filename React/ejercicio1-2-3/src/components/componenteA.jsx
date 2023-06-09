import { Contacto } from '../models/contacto.class';
import PropTypes from 'prop-types';
import ComponenteB from './componenteB';

function ComponenteA({contacto}){
    return(
        <div>
            <h2>Nombre: {contacto.nombre}</h2>
            <h2>Apellido: {contacto.apellido}</h2>
            <h2>Email: {contacto.email}</h2>
            <ComponenteB estado={contacto.conectado}/>
        </div>
    );

    ComponenteA.propTypes = {
        contacto: PropTypes.instanceOf(Contacto),
    }

}

export default ComponenteA;