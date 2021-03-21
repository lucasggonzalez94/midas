import React, {useState, Fragment} from 'react';

const useSelect = (stateInicial, opciones) => {

    // State del custom hook
    const [state, actualizarState] = useState(stateInicial)
    
    const SelectCategorias = () => (
        <Fragment>
            <select
                value={state}
                onChange={e => actualizarState(e.target.value)}
            >
                {opciones.map(opcion => (
                    <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                ))}
            </select>
            <label>Categorías</label>
        </Fragment>
    )

    return [state, SelectCategorias]
}

export default useSelect;