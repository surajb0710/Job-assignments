import AddIcon from '@mui/icons-material/Add';
import PropType from 'prop-types';

const ShippingBanner = ({ setShowDrawer }) => {
  return (
    <div className="px-2.5 pt-3 pb-2 flex items-start justify-center bg-[#252525] max-h-[42.8px]">
      <button
        className="flex gap-5 items-center py-[0.9px]"
        onClick={() => setShowDrawer(true)}
      >
        <p className="text-[#fffef2] text-sm !leading-[1.5] mb-[1px]">
          Enjoy complimentary shipping and a pack of red envelopes with every
          deliver-to-door orders over HKD 900 by entering NY25 at checkout.
        </p>
        <div className="w-[22px] h-full flex items-center justify-center">
          <AddIcon className=" text-[#fffef2] !text-base" />
        </div>
      </button>
    </div>
  );
};

ShippingBanner.propTypes = {
  showDrawer: PropType.bool.isRequired,
  setShowDrawer: PropType.func.isRequired,
};

export default ShippingBanner;
