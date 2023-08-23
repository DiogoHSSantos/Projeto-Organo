import './listaSuspensa.css';

export const ListaSuspensa = (props)=>{

    let p = props;

    const items = [
        'Vermelho',
        'Azul',
        'amarelo'
    ];
    

    return(
        <div className='areaListaSuspensa'>
            <label htmlFor={p.label}>{p.label}</label>
            <select defaultValue='Selecione o time'>
                <option disabled value='Selecione o time'>Selecione o time</option>
                {items.map(item => <option key={Math.floor(Math.random()*1000)}>{item}</option>)}
            </select>
        </div>
    )
};