import React, { useState } from 'react'
import './MediaEscolar.css'
import './Pneu.css'
function MediaEscolar() {

    const [nota1, setNota1] = useState('')
    const [nota2, setNota2] = useState('')
    const [nota3, setNota3] = useState('')
    const [resultadoMedia, setResultadoMedia] = useState('')
    
    const calcularMedia =  () => {
        const n1 = parseFloat(nota1) || 0
        const n2 = parseFloat(nota2) || 0
        const n3 = parseFloat(nota3) || 0
        const media = (n1 + n2 +n3) / 3
        setResultadoMedia(media.toFixed(2))
        if(media >= 7){
        alert(`Aprovado com média: ${media.toFixed(2)}`)
        }else{
        alert(`Reprovado com média: ${media.toFixed(2)}`)
        }
        

    }
    
    return (
        
            <div className='mediaEscolar'>
            

            <label htmlFor=''>Nota1: </label>
            <input
                type="number"
                value={nota1}
                onChange={(e) => setNota1(e.target.value)}
            />

            <br />

            <label htmlFor=''>Nota2: </label>
            <input
                type="number"
                value={nota2}
                onChange={(e) => setNota2(e.target.value)}
            />

            <br />

            <label htmlFor=''>Nota3: </label>
            <input
                type="number"
                value={nota3}
                onChange={(e) => setNota3(e.target.value)}
            />

            <br />

            <button onClick={calcularMedia}>ver média</button>

        </div>





    )
}

export default MediaEscolar