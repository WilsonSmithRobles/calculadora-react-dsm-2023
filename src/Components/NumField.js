import './NumField.css'
import { useState } from 'react'

const NumField = () => {

    const [valorA, setValorA] = useState('');
    const [valorB, setValorB] = useState('');
    const [result, setResult] = useState('');

    const button_classes = ["inactive_button", "active_button"];
    const [button_types, setbutton_types] = useState([1, 0, 0, 0]);

    const valorA_handler = (event) => {
        setValorA(parseInt(event.target.value));
    }

    const valorB_handler = (event) => {
        setValorB(parseInt(event.target.value));
    }

    const multiplyResult = (event) => {
        setResult(valorA * valorB);
        setbutton_types([0, 0, 1, 0]);
    }

    const addResult = (event) => {
        setResult(parseInt(valorA) + parseInt(valorB));
        setbutton_types([1, 0, 0, 0]);
    }

    const subsResult = (event) => {
        setResult(valorA - valorB);
        setbutton_types([0, 1, 0, 0]);
    }
    
    const divResult = (event) => {
        setResult(valorA / valorB);
        setbutton_types([0, 0, 0, 1]);
    }

    return (
        <div class="Calculadora">
            <br></br>
            <div>Calculadora React DSM-2023</div>
            <br></br>
            <div>
                <label>Número A:</label>
                <input type='number' onChange={valorA_handler}></input>
            </div>
            <div >
                <button onClick={addResult} class={button_classes[button_types[0]]}>+</button>
                <button onClick={subsResult} class={button_classes[button_types[1]]}>-</button>
                <button onClick={multiplyResult} class={button_classes[button_types[2]]}>*</button>
                <button onClick={divResult} class={button_classes[button_types[3]]}>/</button>
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