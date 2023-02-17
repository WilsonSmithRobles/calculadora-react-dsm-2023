import './NumField.css'
import { useState } from 'react'
//DUDAS: Si creo todos estos elementos con una id  establecida; al generarlos en el html del cliente no debería haber conflictos?

const NumField = () => {

    const [valorA, setValorA] = useState('');
    const [valorB, setValorB] = useState('');
    const [result, setResult] = useState('');

    const valorA_handler = (event) => {
        setValorA(event.target.value);
    }

    const valorB_handler = (event) => {
        setValorB(event.target.value);
    }

    const multiplyResult = (event, data) => {
        setResult(valorA * valorB);
    }

    const addResult = (event, data) => {
        setResult(parseInt(valorA) + parseInt(valorB));
    }

    const subsResult = (event, data) => {
        setResult(valorA - valorB);
    }
    
    const divResult = (event, data) => {
        setResult(valorA / valorB);
    }

    return (
        <div>
            <div>
                <label>Número A:</label>
                <input type='number' onChange={valorA_handler}></input>
            </div>
            <div >
                <button onClick={addResult}>+</button>
                <button onClick={subsResult}>-</button>
                <button onClick={multiplyResult}>·</button>
                <button onClick={divResult}>/</button>
            </div>
            <div>
                <label>Número B:</label>
                <input type='number' onChange={valorB_handler}></input>
            </div>
            <div>
                <p>Resultado: {result}</p>
            </div>
        </div>
    );
}

export default NumField;