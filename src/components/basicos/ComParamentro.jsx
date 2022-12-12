import React from "react"
export default function comParamentro(props){
    const status = props.nota >= 7 ? 'aprovado' : 'recuperacao'
    return(
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong { props.aluno }></strong>
                tem nota
                <strong { props.nota }></strong>
                e foi
                <strong { status }></strong>!
            </p>
            <h2>{props.subtitulo}</h2>
        </div>
    )
}