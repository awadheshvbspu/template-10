
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Offers from './component/Offers';
import Plan from './component/Plan';
import Rooms from './component/Rooms';
import ImageSlider from './component/ImageSlider';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Offers/>
      <Plan/>
      <Rooms/>
      <ImageSlider/>
      <Footer/>
    </>
  );
}

export default App;
