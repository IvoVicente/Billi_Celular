import { Routes, Route } from 'react-router-dom';
import Termo from '../components/views/Termo/Termo';
import CriarConta from '../components/views/CriarConta/CriarConta';
import NaoEncontrada from '../components/views/NaoEncontrada/NaoEncontrada';
import HomePage from '../components/views/HomePage/HomePage';
import IntroLogin from '../components/views/IntroLogin/IntroLogin';
import Login from '../components/views/Login/Login';
import Produto from '../components/views/Produto/Produto';
import Sacola from '../components/views/Sacola/Sacola';



export default function AppRoutes(){

  return(
    <Routes>
      <Route path='/CriarConta' element={<CriarConta />} />
      <Route path='/Termo' element={<Termo />} />
      <Route path='*' element={<NaoEncontrada />} />
      <Route path='/HomePage' element={<HomePage />} />
      <Route path='/IntroLogin' element={<IntroLogin />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Produto' element={<Produto />} />
      <Route path='/Sacola' element={<Sacola />}/>
    </Routes>
  )

}
