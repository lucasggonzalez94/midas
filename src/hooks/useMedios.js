import React, {useState, Fragment} from 'react';

const useSelect = (stateInicial, opciones) => {

    // State del custom hook
    const [state, actualizarState] = useState(stateInicial)
    
    const SelectMedios = () => (
        <Fragment>
            <label>Medios</label>
            <select
                value={state}
                onChange={e => actualizarState(e.target.value)}
                name='medio'
                required
            >
                {opciones.map(opcion => (
                    <option key={opcion._id} value={opcion._id}>{opcion.name}</option>
                ))}
            </select>
        </Fragment>
    )

    return [state, SelectMedios]
}

export default useSelect;