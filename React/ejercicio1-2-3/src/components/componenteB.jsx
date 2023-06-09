import { useState } from "react";
import PropTypes from 'prop-types';

function ComponenteB(estado){
    const [conectado, setConectado] = useState(estado);

    return (
        <div>
            <h2>{conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</h2>
            <button onClick={()=>{setConectado(!conectado)}}>
                {conectado ? 'Conectado' : 'Desconectado'}
            </button>
        </div>
    );
    ComponenteB.propTypes = {
        estado: PropTypes.bool,
    }
}

export default ComponenteB;