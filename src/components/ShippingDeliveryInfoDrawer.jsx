import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import PropType from 'prop-types';
import { useState } from 'react';

const ShippingDeliveryInfoDrawer = ({ setShowDrawer }) => {
  const [showBorder, setShowBorder] = useState(false);

  const handleScroll = (event) => {
    setShowBorder(true);
    if (event.target.scrollTop === 0) {
      setShowBorder(false);
    }
  };

  return (
    <Drawer
      anchor="left"
      open={true}
      sx={{
        '& .MuiDrawer-paper': {
          width: {
            md: '100vw',
            lg: '50vw',
          },
        },
      }}
    >
      <div
        className={`header flex h-20 pl-[20px] sm:pl-[34px] lg:pl-[80px] pr-[17px] sm:pr-[31px] lg:pr-[77px] py-[23.5px] justify-between items-center top-0 border-[#33333333] ${
          showBorder && 'border-b'
        }`}
      >
        <h2 className="text-xl text-[#333333]">
          Shipping fees and delivery times{' '}
        </h2>
        <div>
          <CloseIcon
            onClick={() => setShowDrawer(false)}
            className="!text-[23px]"
          />
        </div>
      </div>
      <div
        onScroll={handleScroll}
        className="px-[20px] sm:px-[34px] lg:px-[80px] pt-[50px] sm:pt-[64px] lg:pt-[70px] pb-[80px] overflow-y-scroll"
      >
        <div className="py-[30px] border-t border-[##33333333]">
          <p className="mb-[17px] lg:mb-[15px] text-sm text-[#333333] max-sm:line-h-1-4 font-normal text-Suisse-Medium">
            SF Express (Hong Kong SAR, China)
          </p>
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-[40px]">
              <p className="text-sm max-sm:line-h-1-4">All orders</p>
              <p className="text-sm max-sm:line-h-1-4">Complimentary</p>
            </div>
            <div className="flex justify-between items-center mb-[20px]">
              <p className="text-sm max-sm:line-h-1-4">Urban areas</p>
              <p className="text-sm max-sm:line-h-1-4">2-3 business days</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm max-sm:line-h-1-4">Outlying Islands</p>
              <p className="text-sm max-sm:line-h-1-4">3-5 business days</p>
            </div>
          </div>
        </div>
        <div className="py-[30px] border-t border-[##33333333]">
          <p className="mb-[17px] lg:mb-[15px] text-sm max-sm:line-h-1-4 text-[#333333] font-normal text-Suisse-Medium">
            Morning Global (Macau SAR, China)
          </p>
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-[40px]">
              <p className="text-sm max-sm:line-h-1-4">All orders</p>
              <p className="text-sm max-sm:line-h-1-4">Complimentary</p>
            </div>
            <div className="flex justify-between items-center mb-[40px]">
              <p className="text-sm max-sm:line-h-1-4">All areas</p>
              <p className="text-sm max-sm:line-h-1-4">5-7 business days</p>
            </div>
            <div className="flex justify-between items-center mr-[40px]">
              <p className="text-sm max-sm:line-h-1-4">
                Regrettably we are unable to accept orders containing Dangerous
                Goods to Macau SAR, China.
              </p>
            </div>
          </div>
        </div>
        <div className="py-[30px] border-t border-[##33333333]">
          <p className="mb-[17px] lg:mb-[15px] text-sm max-sm:line-h-1-4 text-[#333333] font-normal text-Suisse-Medium">
            Complimentary samples
          </p>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <p className="text-sm max-sm:line-h-1-4">
                All online orders include complimentary samples. At checkout,
                select from the available bundles to add them to your order.
              </p>
            </div>
          </div>
        </div>
        <div className="py-[30px] border-t border-[##33333333]">
          <p className="mb-[17px] lg:mb-[15px] text-sm max-sm:line-h-1-4 text-[#333333] font-normal text-Suisse-Medium">
            Click and Collect
          </p>
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-[20px]">
              <p className="text-sm max-sm:line-h-1-4">
                Simply choose in-store collection at checkout, then pick up your
                order at your preferred location.
              </p>
            </div>
            <div className="flex justify-between items-center mr-[30px]">
              <p className="text-sm max-sm:line-h-1-4">
                For general enquiries regarding Click and Collect, we welcome
                you to phone us on +852 3001 6734 instead of contacting your
                local store.
              </p>
            </div>
          </div>
        </div>
        <div className="py-[30px] border-t border-[##33333333]">
          <p className="mb-[17px] lg:mb-[15px] text-sm max-sm:line-h-1-4 text-[#333333] font-normal text-Suisse-Medium">
            Returns
          </p>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <p className="text-sm max-sm:line-h-1-4">
                Online purchases may be returned to us or any Aesop Stores
                within 30 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

ShippingDeliveryInfoDrawer.propTypes = {
  showDrawer: PropType.bool.isRequired,
  setShowDrawer: PropType.func.isRequired,
};

export default ShippingDeliveryInfoDrawer;
