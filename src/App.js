import Navigation from './Component/Navigation/Navigation';
import SearchBox from './Component/SearchBox/SearchBox';
import Slider from './Component/Slider/Slider';
import TopBanner from './Component/TopBanner/TopBanner';
import Banner from './Component/Banner/Banner';
import Title from './Component/Title/Title';
import ProductsContainer from './Component/ProductsContainer/ProductsContainer';
import Catagories from './Component/Catagories/Catagories'
import TrendyProduct from './Component/TopBanner/TrendyProduct/TrendyProduct';


function App() {
  return (
    <>
        <TopBanner/>
        <SearchBox/>
        <Navigation/>
        <Slider/>

        <Title text="Shop By Catagories" />
        <Catagories/>

                    {/* Smartphones */}
        <Banner img="bannerSmartphone.jpg" />
        <Title text="mobile" />
        <ProductsContainer Data="Smartphone"/>



                    {/* Mobile Accessories */}

        <Banner img="banner-mobile-accessories.jpg" />
        <Title text="Mobile Accessories" />
        <ProductsContainer Data="MobileAccessories"/>


                    {/* Laptop Accessories */}

        <Banner img="banner-laptop.jpg" />
        <Title text="Laptop Accessories" />
        <ProductsContainer Data="LaptopAccessories"/>



                    {/* Computer Accessories */}

        <Banner img="banner-computer.jpg" />
        <Title text="Computer Accessories" />
        <ProductsContainer Data="ComputerAccessories"/>



                    {/* Lifestyle */}

        <Banner img="banner-lifestyle.jpg" />
        <Title text="Lifestyle" />
        <ProductsContainer Data="Lifestyle"/>



                    {/* Electronics */}

        <Banner img="banner-appliance.jpg" />
        <Title text="Electronics & Appliance" />
        <ProductsContainer Data="Electronics"/>


        {/* <br/><br/><br/><br/> */}

        {/* <TrendyProduct/> */}


        <br/><br/><br/><br/>
        <br/><br/><br/><br/>
        <br/><br/><br/><br/>

    </>
  );
}

export default App;
