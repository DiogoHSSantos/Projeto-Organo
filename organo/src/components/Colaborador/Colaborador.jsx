import './colaborador.css';

export const Colaborador = (props)=>{

    const p = props;

    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{background: p.corDeFundo}}>
                <img src={p.imagem} alt={`imagem do ${p.nome}`} />
                <i className='bx bxs-trash-alt' onClick={p.aoDeletar}></i>
            </div>

            <div className='rodape'>
                <h4>{p.nome}</h4>
                <h5>{p.cargo}</h5>
            </div>
        </div>
    );
};
