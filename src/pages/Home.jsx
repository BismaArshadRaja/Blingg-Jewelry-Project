import React from "react";
import Banner from "../components/Banner";
import BrandsName from "../components/BrandsName";
import NewArrivals from "../components/NewArrivals";
import Trending from "../components/Trending";
import MidBanner from "../components/MidBanner";
import Content from "../components/content";
import OurServices from "../components/OurServices";

import Products from "../components/Products";  



const Home = () => {
    return(
        <div>
            
            <MidBanner/>
            <BrandsName/>
            <Trending/>
            <NewArrivals/>
            <Products/>
            <Banner/>
            <Content/>
            <OurServices/>
           
            
            
            
        </div>
    )
}
export default Home;