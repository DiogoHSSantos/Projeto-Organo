import './form.css'
import { AreaTexto } from '../AreaTexto/areaTexto.jsx'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../botao'
import { useState } from 'react'






export const Formulario = (props)=>{

    const p = props;

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('Front-end');

    const aoSalvar = (e)=>{
        e.preventDefault();
        p.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('Front-end')
    }

    return(
        <section className='formContainer'>
            <form className='formulario' onSubmit={aoSalvar}>      
                <h2>Preencha os dados para criar o card do colaborador.</h2> 
                <AreaTexto obrigatorio={true} label='Nome:' placeholder='Digite o seu nome' value={nome} aoAlterado={valor => setNome(valor)}/>
                <AreaTexto obrigatorio={true} label='Cargo:' placeholder='Digite o cargo' value={cargo} aoAlterado={valor => setCargo(valor)}/>
                <AreaTexto obrigatorio={true} label='Imagem:' placeholder='Digite o endereço da imagem' value={imagem} aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa label='times' value={time} aoAlterado={valor => setTime(valor)}/>
                <Botao>
                    Criar card
                </Botao>
            </form>

            

        </section>
    )
}