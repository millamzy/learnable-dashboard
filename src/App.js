import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Frontend from './pages/Frontend';
import Backend from './pages/Backend'
import Home from './pages/Home';
import Products from './pages/Products';
import Web3 from './pages/Web3'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <BrowserRouter>
      <div className='grid-container'>
        <Header/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/frontend' element={<Frontend/>} />
          <Route path='/backend' element={<Backend/>} />
          <Route path='/web3' element={<Web3/>} />
          
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
