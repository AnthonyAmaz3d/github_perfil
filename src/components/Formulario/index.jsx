import { useState, useEffect } from "react";

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('');

    useEffect(() => {

    });

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            return evento.target.value;
        });
    }

    const renderizaResultado = () => {
        const soma = (materiaA + materiaB + materiaC)
        const media = soma/3;
        if (media >= 7) {
            return(
                <p>Olá { nome }, você foi aprovado</p>
            )
        } else {
            return(
                <p>Olá { nome }, você não foi aprovado</p>
            )
        }
    }

    return (
        <form >
            <input type="text" placeholder="Digite seu nome" onChange={alteraNome}/>
            <input onChange={({target}) => setMateriaA(parseInt(target.value))} type="number" placeholder="Nota matéria A" /> {/* exemplo de desestruturação */}
            <input onChange={evento => setMateriaB(parseInt(evento.target.value))} type="number" placeholder="Nota matéria B" />
            <input onChange={evento => setMateriaC(parseInt(evento.target.value))} type="number" placeholder="Nota matéria C" />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;