import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import All_Category from './Components/All_Category';
import { IoIosArrowUp } from 'react-icons/io'
import Product from './Components/Product';
import Footer from './Components/Footer';
function App() {
  window.onscroll=()=>{
    if (window.scrollY >600) {
      document.getElementsByClassName("gotoTop")[0].style.display="flex";
    }
    else{
      document.getElementsByClassName("gotoTop")[0].style.display="none";
    }
  }

  return (
    <>
      {/* ----------------------------- Goto Top BTN ------------------ */}
      <button className='gotoTop' >
        <a href="#top">
        <IoIosArrowUp  className='UpIcon' />  Back to Top
        </a>
      </button>
      <Navbar />
      <Slider />
      <All_Category />
      <Product />
      <Footer />

    </>
  );
}

export default App;
