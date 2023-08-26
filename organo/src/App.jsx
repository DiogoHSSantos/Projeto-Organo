import './styles/index.css'
import Banner from './components/Banner/index.js' 
import Formulario from './components/form/index.js'
import { useState } from 'react'

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (c)=>{
    let colaboreadoresAntigos = [...colaboradores];
    setColaboradores(colaboreadoresAntigos, c)
    console.log(colaboreadoresAntigos, c)
  }

  return (
    <div>
      <Banner/>
      <Formulario aoColaboradorCadastrado={c => aoNovoColaboradorAdicionado(c)}/>
    </div>
  )
}

export default App
