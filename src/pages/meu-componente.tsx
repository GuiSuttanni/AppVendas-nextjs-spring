// Caso não esteja usando o NextJS é necessario importar o componente React
// import React from 'react'

interface MensagemProps {
    mensagem:string;
}

const Mensagem: React.FC<MensagemProps> = (props: MensagemProps) => {
    return (
        <div>
            {props.mensagem}
        </div>
    )
}

//arrow function
const MeuComponente = () => {
    return (
        <div>
            <Mensagem mensagem="Teste 2"/>
        </div>
    )
}

export default MeuComponente;