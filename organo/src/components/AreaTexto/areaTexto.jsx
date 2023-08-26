
import './areaTexto.css';


export const AreaTexto = (props) =>{

    const p = props;

    const aoDigitado = (e)=>{
        p.aoAlterado(e.target.value)
    }

    return(
        <div className="campoText">
            <label htmlFor={p.label}>{p.label}</label>
            <input value={p.value} onChange={aoDigitado} required={p.obrigatorio} type="text" name={p.label} id={p.label} placeholder={p.placeholder}/>
        </div>
    )
}
