import React from "react";
import style from './botao.module.scss';


interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    texto?: string,
    onClick?: () => void,
    children?: React.ReactNode
}

function Botao({onClick, type, texto, children}: Props){
    return(
        <button onClick={onClick}
            type={type }
            className={style.botao}
        >
            {children}
        </button>
    )
}

export default Botao;