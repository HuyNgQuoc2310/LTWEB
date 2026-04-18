import { Container } from 'react-bootstrap';
import Book from './components/Book';
import Vidu2 from './components/Vidu2';
import Vidu3 from './components/ViDu3';
import Header from './components/Header';
import Vidu1 from './components/Vidu1';
import Movie from './components/Movie';
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 
import Menu from './components/Menu';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <BrowserRouter>
    <Container>
        <Menu />
        <Routes>
          <Route path='/vidu1' element={<Vidu1/>}/>
          <Route path='/vidu2' element={<Vidu2/>}/>
          <Route path='/vidu3' element={<Vidu3/>}/>
          <Route path='/book' element={<Book/>}/>
          <Route path='/movies' element={<Movie/>}/>
        </Routes>
        <Footer />
      </Container>
      </BrowserRouter>
        
    </>
  );
}
export default App;