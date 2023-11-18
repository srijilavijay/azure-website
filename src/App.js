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
import CustomerStories from './Components/CustomerStories';
import TakeTheNextStep from './Components/TakeTheNextStep';
import FooterMenu from './Components/FooterMenu';
import Footer from './Components/Footer';
import GetMoreValue from './Components/GetMoreValue';



function App() {
  return (
    <div>
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
      <FooterMenu/>
      <Footer/>
    </div>
  );
}

export default App;
