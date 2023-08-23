import './areaTexto.css';


export const AreaTexto = (props) =>{

    let p = props;

    const label = p.label;

    return(
        <div className="campoText">
            <label htmlFor={label}>{label}</label>
            <input required={p.obrigatorio} type="text" name={label} id={label} placeholder={p.placeholder}/>
        </div>
    )
}
