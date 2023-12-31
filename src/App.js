import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home';
import Fotografia from './pages/Fotografia/Fotografia';
import Estudantil from './pages/Estudantil/Estudantil';
import Padrao from './pages/Padrao/Padrao';
import Ensaio from './pages/Ensaio/Ensaio';
import Contato from './pages/Contato/Contato';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.tsx';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/fotografia' element={<Fotografia />} />
          <Route path='/eventos' element={<Estudantil />} />
          <Route path='/padrao' element={<Padrao />} />
          <Route path='/ensaio' element={<Ensaio />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
