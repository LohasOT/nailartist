import Appbar from './components/Navbar/Appbar';
import Nails from './components/Nails/Nails';
import Main from './components/Main/Main';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <Appbar></Appbar>
    <Main></Main>
    <Nails></Nails>
    </>
  );
}

export default App;
