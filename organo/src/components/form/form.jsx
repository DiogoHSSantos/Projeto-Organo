// import { useState } from 'react'

import './form.css'




const AreaTexto = (props) =>{

    console.log(props)
    const label = props.label;

    return(
        <div className="campoText">
            <label htmlFor={label}>{label}</label>
            <input type="text" name={label} id={label} placeholder={props.placeholder}/>
        </div>
    )
}

export const Formulario = ()=>{
    return(
        <section className='formContainer'>
            <form className='formulario'>      
                <h2>Preencha os dados para criar o card do colaborador.</h2> 
                <AreaTexto label='Nome:' placeholder='Digite o seu nome'/>
                <AreaTexto label='Cargo:' placeholder='Digite o cargo'/>
                <AreaTexto label='Imagem:' placeholder='Digite o endereço da imagem'/>
            </form>
        </section>
    )
}