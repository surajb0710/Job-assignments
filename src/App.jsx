import { useState } from 'react';
import ShippingBanner from './components/ShippingBanner';
import ShippingDeliveryInfoDrawer from './components/ShippingDeliveryInfoDrawer';

function App() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <ShippingBanner setShowDrawer={setShowDrawer} showDrawer={showDrawer} />
      {showDrawer && <ShippingDeliveryInfoDrawer />}
    </>
  );
}

export default App;
