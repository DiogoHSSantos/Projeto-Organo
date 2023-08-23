// import { useState } from 'react'

import './form.css'
import { AreaTexto } from '../AreaTexto/areaTexto.jsx'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../botao'




const aoSalvar = (e)=>{
    e.preventDefault();
    alert()
}

export const Formulario = ()=>{
    return(
        <section className='formContainer'>
            <form className='formulario' onSubmit={aoSalvar}>      
                <h2>Preencha os dados para criar o card do colaborador.</h2> 
                <AreaTexto obrigatorio={true} label='Nome:' placeholder='Digite o seu nome'/>
                <AreaTexto obrigatorio={true} label='Cargo:' placeholder='Digite o cargo'/>
                <AreaTexto obrigatorio={true} label='Imagem:' placeholder='Digite o endereço da imagem'/>
                <ListaSuspensa label='times'/>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}