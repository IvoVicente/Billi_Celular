import { Routes, Route } from 'react-router-dom';
import Termo from '../components/views/Termo/Termo';
import CriarConta from '../components/views/CriarConta/CriarConta';
import NaoEncontrada from '../components/views/NaoEncontrada/NaoEncontrada';



export default function AppRoutes(){

  return(
    <Routes>
      <Route path='/CriarConta' element={<CriarConta />} />
      <Route path='/Termo' element={<Termo />} />
      <Route path='*' element={<NaoEncontrada />} />
    </Routes>
  )

}
