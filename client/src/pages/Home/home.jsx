import React, { useEffect, useState } from 'react';
import './home.css'
import Header from '../../components/header/header';
import ExploreMenu from '../../components/exploreMenu/exploreMenu';
import FoodDisplay from '../../components/food_display/food_display';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {
  const [category, setcategory] = useState('All');

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setcategory={setcategory} />
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  );
}

export default Home;
