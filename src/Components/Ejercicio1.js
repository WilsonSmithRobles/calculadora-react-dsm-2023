import './Ejercicio1.css'

//DUDAS: Si creo todos estos elementos con una id  establecida; al generarlos en el html del cliente no debería haber conflictos?

function Ejercicio1() {

    function computeResult(){
        alert("Time to compute");
    }

    return (
        <div className="Ejercicio1">
            <label>Operación con números:</label>
            <div>
                <input type="number" id="Input_A" onChange={computeResult}></input>
            </div>
            <div id="operations_buttons">
                <button id="+button">+</button>
                <button id="-button">-</button>
                <button id="xbutton">x</button>
                <button id="÷button">÷</button>
            </div>
            <div>
                <input type="number" id="Input_B" onChange={computeResult}></input>
            </div>
            <div>
                Result is: 
                <p id="Result"></p>
            </div>

        </div >
    );
}

export default Ejercicio1;