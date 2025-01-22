import { useState } from 'react';
import ShippingBanner from './components/ShippingBanner';
import ShippingDeliveryInfoDrawer from './components/ShippingDeliveryInfoDrawer';

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
    </>
  );
}

export default App;

//https://www.aesop.com/hk/en/
