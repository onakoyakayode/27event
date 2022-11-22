import React, {useState, useEffect} from 'react';
import 'animate.css';
// import Navbar from "./components/Navbar/Navbar";
import './App.css'
// import Customer from './components/Customer/Customer';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from "./components/Navbar/Navbar";
// import Header from "./components/Header/Header";
// // import Breakfast from './components/Meal/Breakfast/Breakfast';
// // import Menu from './components/Menu/Menu';
// import Order from './components/Order/Order';
import { Routes, Route} from 'react-router-dom'
import BreakfastFood from './components/Meal/Breakfast/BreakfastFood';
import LunchFood from './components/Meal/Lunch/LunchFood';
import DinnerFood from './components/Meal/Dinner/DinnerFood';
// import Blogs from './components/Blogs/Blogs';
// // import BlogSwipe from './components/Blogs/BlogSwipe';
// import FAQ from './components/FAQS/FAQ';
// import { StyledEngineProvider } from '@mui/material/styles';
// import Footer from './components/Footer/Footer';
import LoaderPage from './LoaderPage/LoaderPage';
import Home from './components/Home/Home';
import Event from './components/Event/Event';
import AboutUs from './components/About/AboutUs';
import NigeriaMenu from './components/Event/FunctionPackages/NigerianMenu/NigeriaMenu';
import IntercontinentalDish from './components/Event/FunctionPackages/IntercontinentalDish/IntercontinentalDish';
import LocalDish from './components/Event/FunctionPackages/LocalDish/LocalDish';
import SmallChops from './components/Event/FunctionPackages/SmallChops/SmallChops';
import Cakes from './components/Event/FunctionPackages/Cakes/Cakes';
import Modal from './components/Modal/Modal';
import Contact from './components/Contact/Contact';


function App() {

  const [openModal, setOpenModal] = useState(false)

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  return (
    
    
      <div className="App">
       <Routes>
        
      { loading ? 
        <Route path='/' element={<LoaderPage />} />
        
        :

        <>
          
          <Route path='/' element={<Home openModal={openModal} setOpenModal={setOpenModal}/>} /> 
          <Route path='event' element={<Event openModal={openModal} setOpenModal={setOpenModal}/> }>
            
            
          </Route>
          <Route path='nigerianMenu' element={<NigeriaMenu openModal={openModal} setOpenModal={setOpenModal}/>}/>
          <Route path='intercontinental' element={<IntercontinentalDish openModal={openModal} setOpenModal={setOpenModal}/>} />
          <Route path='localdish' element={<LocalDish openModal={openModal} setOpenModal={setOpenModal}/>} />
          <Route path='smallchops' element={<SmallChops openModal={openModal} setOpenModal={setOpenModal}/>} />
          <Route path='cakes' element={<Cakes openModal={openModal} setOpenModal={setOpenModal}/>} />
          <Route path='about' element={<AboutUs openModal={openModal} setOpenModal={setOpenModal}/>} />
          <Route path='dashboard' element={<Dashboard openModal={openModal} setOpenModal={setOpenModal}/>}>
            <Route path='breakfast' element={<BreakfastFood />} />
            <Route path='lunch' element={<LunchFood />} />
            <Route path='dinner' element={<DinnerFood /> } />
          </Route>
          {/* <Route  element={<Modal openModal={openModal} setOpenModal={setOpenModal}/> } /> */}
          <Route path='contact' element={<Contact openModal={openModal} setOpenModal={setOpenModal}/>} />
          
        </>
      }
      </Routes>
     
      
      <Modal openModal={openModal} setOpenModal={setOpenModal} onClose={() => setOpenModal(false)}/>
      
      {/* <BlogSwipe /> */}
    </div>
    
    
  );
}

export default App;
