import logo from './logo.svg';
import './App.css';
import ProductList from './pages/ProductList/ProductList';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductList />
    </div>
  );
}

export default App;
