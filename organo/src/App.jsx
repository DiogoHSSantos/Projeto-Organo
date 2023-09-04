import './styles/index.css'
import Banner from './components/Banner/index.js' 
import Formulario from './components/form/index.js'
import { useState } from 'react'
import Time from './components/Time/index.js'
import Rodape from './components/Rodape'


function App() {

 
  const times = [
    {
      id: 1, 
      nome: 'Programação',
      corPrimaria: '#57C278',
    },
    {
      id: 2, 
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
    },
    {
      id: 3, 
      nome: 'Data Science',
      corPrimaria: '#A6D157',
    },
    {
      id: 4, 
      nome: 'Devops',
      corPrimaria: '#E06B69',
    },
    {
      id: 5, 
      nome: 'UX e UI Design',
      corPrimaria: '#DB6EBF',
    },
    {
      id: 6, 
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
    },
    {
      id: 7, 
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
    }
];
  
  const [colaboradores, setColaboradores] = useState([])


  const aoNovoColaboradorAdicionado = (c)=>{
    setColaboradores([...colaboradores, c])
  }

  const deletarColaborador = ()=>{
    setColaboradores(colaboradores.filter(item => item.remove)) 
  };
    
  

  return (
    <div>
      <Banner/>
      <Formulario aoColaboradorCadastrado={c => aoNovoColaboradorAdicionado(c)} times={times.map(i => i.nome)} />
      {times.map(i => <Time 
                        nomeDoTime={i.nome} 
                        key={i.id} 
                        corPrimaria={i.corPrimaria} 
                        corSecundaria={i.corSecundaria}
                        colaboradores={colaboradores.filter(col => col.time === i.nome)}
                        aoDeletar={deletarColaborador}
                      />)}
      <Rodape/>
    </div>
  )
}

export default App
