import { Outlet } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
