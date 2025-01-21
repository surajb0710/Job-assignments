import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';

const ShippingDeliveryInfoDrawer = () => {
  return (
    <Drawer
      anchor="left"
      open={true}
      sx={{
        '& .MuiDrawer-paper': {
          width: {
            xs: '100vw',
            sm: '50vw',
          },
          //   height: '80px',
        },
      }}
    >
      <div className="flex">
        <h2>Shipping fees and delivery times </h2>
        <CloseIcon />
      </div>
    </Drawer>
  );
};

export default ShippingDeliveryInfoDrawer;
