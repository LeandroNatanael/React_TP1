import './App.css';
import Box from './Components/box';

function App() {

  return (
    <div className="App">
      <header>
        <h1 className='titleApp'>"Un blog sobre Cafe"</h1>
      </header>
      <article>
        <Box
          title="Caffe World"
          imagen="coffee.png"
          parrafo="El cafe bla bla bla  bla bla bla  bla bla"
          href="https://www.cabrales.com/"
        />
        <Box
          title="Cafe en Grano"
          imagen="coffee.png"
          parrafo="Cafe Colombiano bla bla bla blabla bla bla bla bla"
          href="https://www.cabrales.com/productos/#cafe-en-granos"
        />
        <Box
          title="Cafe Soluble"
          imagen="coffee.png"
          parrafo="Cafe Brazuca bla bla bla blabla bla bla bla bla"
          href="https://www.cabrales.com/productos/#solubles-e-instantaneos"
        />
      </article>
    </div>
  );
}

export default App;