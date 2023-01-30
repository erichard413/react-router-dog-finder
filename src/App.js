import logo from './logo.svg';
import './App.css';
import Dogs from './Dogs';
import Nav from './Nav';
import AppRoutes from './Routes';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <Nav />
        <AppRoutes />
        <Footer />
    </div>
  );
}

export default App;
