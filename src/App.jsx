import { useState } from 'react';
import ShippingBanner from './components/ShippingBanner';
import ShippingDeliveryInfoDrawer from './components/ShippingDeliveryInfoDrawer';
import Navbar from './components/Navbar';
import HeroCarousal from './components/HeroCarousal';

function App() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <ShippingBanner setShowDrawer={setShowDrawer} showDrawer={showDrawer} />
      {showDrawer && (
        <ShippingDeliveryInfoDrawer
          setShowDrawer={setShowDrawer}
          showDrawer={showDrawer}
        />
      )}
      <div className="px-[35px]">
        <Navbar />
      </div>
      <div>
        <HeroCarousal />
      </div>
      <div className="h-[800px] w-full bg-green-400"></div>
    </>
  );
}

export default App;

//    https://www.aesop.com/hk/en/
