import React, { useEffect, useState } from "react";
import Card from '../components/Card';
import Slider from '../components/Slider';
import SmallCard from '../components/SmallCard';
import Trending from '../components/Trending';
import Brands from '../components/Brands';
import Benefits from '../components/Benefits';
import FlashCards from '../components/FlashCards';
import { ClipLoader } from "react-spinners";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader color="#36d7b7" loading={loading} size={60} />
        </div>
      ) : (
        <>
          <Slider />
          <SmallCard />
          <Card />
          <Trending />
          <FlashCards />
          <Brands />
          <Benefits />
        </>
      )}
    </>
  );
}

export default Home;
