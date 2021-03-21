import React, {useState, Fragment} from 'react';

const useSelect = (stateInicial, opciones) => {

    // State del custom hook
    const [state, actualizarState] = useState(stateInicial)
    
    const SelectMedios = () => (
        <Fragment>
            <select
                value={state}
                onChange={e => actualizarState(e.target.value)}
            >
                {opciones.map(opcion => (
                    <option key={opcion._id} value={opcion._id}>{opcion.name}</option>
                ))}
            </select>
            <label>Medios</label>
        </Fragment>
    )

    return [state, SelectMedios]
}

export default useSelect;