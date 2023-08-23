import'./botao.css';

export const Botao = (props)=>{

    let p = props

    

    return(
        <div className="areaBotao">
            <button className='botaoForm' >{p.children}</button>
        </div>
    )
};