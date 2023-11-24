import './App.css';
import Navbar1 from './Components/Navbar1';
import Banner from './Components/Banner';
import FeaturedNewsBar from './Components/FeaturedNewsBar';
import FeaturedNews from './Components/FeaturedNews';
import FeaturedNewsCard from './Components/FeaturedNewsCard';
import Solutions from './Components/Solutions';
import ProductsAndServices from './Components/ProductsAndServices';
import Resources from './Components/Resources';
import Globe from './Components/Globe';
import GetMoreValue from './Components/GetMoreValue';
import CustomerStories from './Components/CustomerStories';
import TakeTheNextStep from './Components/TakeTheNextStep';
import Footer from './Components/Footer';




function App() {
  return (
    <div className='App'>
      <Navbar1/>
      <Banner/>
      <FeaturedNewsBar/>
      <FeaturedNews/>
      <hr/>
      <Solutions/>
      <hr/>
      <ProductsAndServices/>
      <Resources/>
      <Globe/>
      <GetMoreValue/>
      <CustomerStories/>
      <TakeTheNextStep/>
      <Footer/>
    </div>
  );
}

export default App;
