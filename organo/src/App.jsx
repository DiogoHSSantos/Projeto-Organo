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
      corSecundaria: '#D9F7E9'
    },
    {
      id: 2, 
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      id: 3, 
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      id: 4, 
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      id: 5, 
      nome: 'UX e UI Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      id: 6, 
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      id: 7, 
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
];
  
  const [colaboradores, setColaboradores] = useState([])


  const aoNovoColaboradorAdicionado = (c)=>{
    setColaboradores([...colaboradores, c])
  }

  const deletarColaborador = ()=>(
    console.log('Deletando...')
  );
    
  

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
