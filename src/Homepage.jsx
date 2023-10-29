import { Button } from '@mui/material';
import Wrapper from './components/Wrapper';
import { menuItems } from './constants';
import { restaurantfood } from './assets';
import { Bike } from 'lucide-react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ReservationForm from './forms/ReservationForm';
import DeliveryForm from './forms/DeliveryForm';
import { Helmet } from 'react-helmet-async';

export const buttonStyle = {
  ':hover': {
    backgroundColor: "#EED54E",
    color: "black",
  },
  backgroundColor: "#F4CE14", color: "black", borderRadius: "16px", fontWeight: "semibold"
}

const Homepage = () => {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [deliveryOpen, setDeliveryOpen] = useState(false);
  const [item, setItem] = useState({})

  const handleClickOpenReservation = () => setReservationOpen(true);
  const handleCloseReservation = () => setReservationOpen(false);

  const handleClickOpenDelivery = (data) => {
    setDeliveryOpen(true)
    setItem(data)
  }
  const handleCloseDelivery = () => setDeliveryOpen(false);

  return (
    <>
    <Helmet>
      <title>Little Lemon | Home</title>
      <meta name="description" content="Little Lemon Chicago - We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist." />
      <meta property="og:title" content="Little Lemon" />
      <meta property="og:description" content="Little Lemon Chicago - We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist." />
      <meta property="og:image" content={restaurantfood} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content="Little Lemon" />
      <meta name="twitter:description" content="Little Lemon Chicago - We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist." />
      <meta name="twitter:image" content={restaurantfood} />
    </Helmet>
    {/* This is the HERO section */}
      <section className='bg-[#495E57]'>
        <Wrapper margin={true}>
          <div className='flex flex-row py-10 relative'>
            <section className='flex flex-col'>
              <span className='text-[#F4CE14] font-bold font-serif text-4xl'>
                Little Lemon
              </span>
              <span className='text-white text-2xl font-serif font-semibold'>
                Chicago
              </span>
              <p className='my-5 text-white font-semibold'>
                We are a family owned<br/>
                Mediterranean restaurant,<br/>
                focused on traditional<br/>
                recipes served with a modern<br/>
                twist.
              </p>
              <Button
                variant="contained"
                sx={{...buttonStyle}}
                onClick={handleClickOpenReservation}
              >
                Reserve a Table
              </Button>
              <Dialog open={reservationOpen} onClose={handleCloseReservation}>
                <DialogTitle>Reserve a Table</DialogTitle>
                <DialogContent className='flex flex-col gap-y-10'>
                  <DialogContentText>
                    We need to collect basic information in order for us to track your reservation.
                  </DialogContentText>
                  <ReservationForm handleCloseReservation={handleCloseReservation}/>
                </DialogContent>
              </Dialog>
            </section>
            <div className='absolute end-0'>
              <LazyLoadImage
                className='rounded-[16px] sm:block hidden w-[400px] h-[400px]'
                src={restaurantfood}
                alt="Restaurant Food"
                effect="blur"
              />
            </div>
          </div>
        </Wrapper>
      </section>
      {/* This is the Week's Specials section */}
      <section className='mt-[6%]'>
        <Wrapper margin={true}>
          <div className="flex flex-col py-10">
            <div className="flex flex-row justify-between items-center">
              <span className='text-4xl font-serif font-semibold'>This week's specials!</span>
              <span className='bg-[#EBCD2F] px-10 py-3 rounded-[16px] font-semibold sm:block hidden'>Online Menu</span>
            </div>
          </div>
        </Wrapper>
      </section>
      {/* This is the MENU ITEMS section */}
      <section className='mt-5 mb-40'>
        <Wrapper margin={true}>
          <div className="flex sm:flex-row flex-col sm:gap-x-5 gap-y-10 font-serif">
            {
              menuItems.map((item,index) => 
                <div className="flex flex-col bg-neutral-100 rounded-[16px] gap-y-10 font-light pb-10" key={item+index}>
                  <LazyLoadImage
                    className='rounded-t-[16px] w-[620px] h-[200px] object-cover'
                    src={item.image}
                    alt='Bruchetta'
                    effect='blur'
                  />
                  <div className='flex flex-row justify-between px-10'>
                    <span className='font-semibold'>{item.name}</span>
                    <span className='text-[#EE9972] font-semibold'>{item.price}</span>
                  </div>
                  <p className='px-10'>
                    {item.description}
                  </p>
                  <div className="px-10">
                    <Button
                      variant='contained'
                      sx={{ ...buttonStyle }}
                      onClick={() => handleClickOpenDelivery({...item})}
                    >
                      <span className='sm:text-xs text-sm'>Order a delivery</span>&emsp;
                      <Bike/>
                    </Button>
                  </div>
                </div>
              )
            }
            <Dialog open={deliveryOpen} onClose={handleCloseDelivery}>
              <DeliveryForm image={item.image} name={item.name} price={item.price} close={handleCloseDelivery}/>
            </Dialog>
          </div>
        </Wrapper>
      </section>
    </>
  )
}

export default Homepage;