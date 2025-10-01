import React, { useState } from 'react'

function Pneu() {
    const [pressaoLida, setPressaoLida] = useState('')
    const [pressaoDesejada, setPressaoDesejada] = useState('')
    const [diferenca, setDiferenca] = useState(null)


    const calcularDiferenca = () => {
        const N = parseInt(pressaoDesejada) || 0
        const M = parseInt(pressaoLida) || 0
        const resultado = N - M
        setDiferenca(resultado)
    }

    return (
        <div className='Pneu'>

            <h2>Bomba de Ar SBC</h2>

            <label>Pressão desejada (N): </label>
            <input
                type="number"
                min="1"
                max="40"
                value={pressaoDesejada}
                onChange={(e) => setPressaoDesejada(e.target.value)}
            />
            <br /><br />

            <label>Pressão lida (M): </label>
            <input
                type="number"
                min="1"
                max="40"
                value={pressaoLida}
                onChange={(e) => setPressaoLida(e.target.value)}
            />
            <br />

            <button onClick={calcularDiferenca}>Calcular diferença</button>

            {diferenca !== null && (

                <p>
                    Diferença de pressão: <strong>{diferenca}</strong>
                </p>
            )


            }
        </div>
    )
}

export default Pneu