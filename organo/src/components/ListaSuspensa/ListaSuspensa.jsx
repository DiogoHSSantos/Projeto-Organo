import './listaSuspensa.css';

export const ListaSuspensa = (props)=>{

    const p = props;

    const items = p.itens;
    
    const aoEscolher = (e)=>{
       p.aoAlterado(e.target.value); 
    };

    return(
        <div className='areaListaSuspensa'>
            <label htmlFor={p.label}>{p.label}</label>
            <select  onChange={aoEscolher} value={p.value}>
                {items.map(item => <option key={Math.floor(Math.random()*1000)}>{item}</option>)}
            </select>
        </div>
    )
};