
import { useState } from 'react';
import Colaborador from '../Colaborador'
import './time.css'

export const Time = (props)=>{


    const p = props;

    const fontes = [
        'https://img.freepik.com/vetores-premium/coelho-bonito-e-cenoura-icon-ilustracao-personagem-de-desenho-animado-do-coelho-logotipo-mascote-conceito-logotipo-animal-branco-isolado_138676-820.jpg?w=2000',
        'https://img.freepik.com/vetores-premium/astronauta-cat-icon-illustration-personagem-de-desenho-animado-do-gato-no-espaco-mascote-conceito-de-icone-animal-isolado_138676-800.jpg?w=2000',
        'https://pbs.twimg.com/media/FmGLuZ5XwAEENmm.jpg',
        'https://64.media.tumblr.com/a074e7bb96c487a73b392c6fbe21a42d/4f264d823f497a92-34/s500x750/d4b53770befeaa79e29cf32df1a72b0c8697ba40.jpg',
        'https://img.freepik.com/vetores-premium/lhama-bonito-negocios-icon-ilustracao-personagem-de-desenho-animado-de-mascote-de-alpaca-conceito-de-icone-animal-isolado_138676-989.jpg?w=2000',
        'https://img.freepik.com/vetores-premium/astronauta-riding-on-rocket-icon-ilustracao-personagem-de-desenho-animado-do-mascote-do-astronauta-conceito-de-icone-de-ciencia-isolado_138676-970.jpg',
        'https://i.pinimg.com/736x/b1/8d/ef/b18defd3415ac7478737054b68660df7.jpg',
        'https://img.freepik.com/vetores-premium/teddy-bear-fitness-gym-icon-ilustracao-personagem-de-desenho-animado-do-esporte-urso-mascote-conceito-de-icone-animal-isolado_138676-996.jpg?w=2000',
        'https://img.freepik.com/vetores-premium/girafa-bonito-lendo-livro-icon-ilustracao-personagem-de-desenho-animado-de-mascote-de-girafa-conceito-de-icone-animal-isolado_138676-982.jpg'
    ];

    const imagemAleatoria = Math.floor(Math.random()* fontes.length)

    const images = fontes[imagemAleatoria];

    
    const [cor, setCor] = useState(p.corPrimaria);

    const mudarCor = (corDoInput)=>{
        setCor(corDoInput);
    };
    
   

    return(
        p.colaboradores.length > 0 ? 
            <section className='time' id={p.id} style={{background: cor+'99', borderColor: cor,}}>

                <input 
                    type="color" 
                    name="colorTime" 
                    id="colorTime" 
                    value={cor} 
                    onChange={(corDoInput) => mudarCor(corDoInput.target.value)}
                />

                <h3 className='nomeDoTime' style={{borderColor: cor}}>
                    {p.nomeDoTime}
                </h3>

                <div className='colaboradores'>
                    {p.colaboradores.map(i =>   
                        <Colaborador 
                            key={Math.floor(Math.random()*1000)} 
                            nome={i.nome} cargo={i.cargo} 
                            imagem={i.imagem === ''? i.imagem = images :i.imagem} 
                            corDeFundo={cor}  
                            aoDeletar={p.aoDeletar}
                        />)
                    }
                </div>
            </section>
        :''
    );
};