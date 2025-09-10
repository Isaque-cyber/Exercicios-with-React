import React, {useState} from "react"

function Moedas() {
    const [real, setReal] = useState('')
    const [dolar, setDolar] = useState('')


    const cotacao = {
        dolar: 5.43,
        euro: 6.36
    }



    function converterReal(valor) {
        setReal(valor)
        setDolar(valor / 5.43)
    }

    function converterDolar() {
        setDolar(valor)
        setReal(valor * 5.43)
    }


  return (
        <div className='moedas-container'>
            <h2>Moedas</h2>
            <label htmlFor="">Real</label>
            <input type="number"
                value={real}
                onChange={(e) => converterReal(e.target.value)}
            />

            <label htmlFor="">Dolar</label>
            <input type="number"
                value={dolar}
                onChange={(e) => converterDolar(e.target.value)}

            />

            {/* <label htmlFor="">Euro</label>
            <input type="number"
                value={euro}
                onChange={(e) => converterEuro(e.target.value)}

            /> */}

        </div>
    )
}

export default Moedas