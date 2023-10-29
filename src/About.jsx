import Wrapper from './components/Wrapper'
import { restaurant, chefb } from './assets'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { eventItems } from './constants';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Little Lemon | About</title>
        <meta name="description" content="Little Lemon - A charming neighborhood bistro serving simple food and classic cocktails in a lively but casual environment. Locally-sourced menu with daily specials." />
        <meta property="og:title" content="About Little Lemon" />
        <meta property="og:description" content="Little Lemon - A charming neighborhood bistro serving simple food and classic cocktails in a lively but casual environment. Locally-sourced menu with daily specials." />
        <meta property="og:image" content={restaurant} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="About Little Lemon" />
        <meta name="twitter:description" content="Little Lemon - A charming neighborhood bistro serving simple food and classic cocktails in a lively but casual environment. Locally-sourced menu with daily specials." />
        <meta name="twitter:image" content={restaurant} />
      </Helmet>
      <section
        className="relative bg-cover bg-center sm:h-[20vw] h-[60vw] w-[100vw] sm:mb-40 mb-0"
        style={{ backgroundImage: `url(${restaurant})` }}
      >
        <Wrapper margin={true} classes="absolute inset-0 flex flex-col py-10 z-50">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-y-10">
              <div className="flex flex-row">
                <span className='text-white text-4xl font-semibold'>About&nbsp;</span>
                <span className="text-[#F4CE14] text-4xl font-bold font-serif">
                  Little Lemon
                </span>
              </div>
              <p className='text-white sm:text-lg text-sm font-serif'>
                Little Lemon is a charming neighborhood bistro <br/>
                that serves simple food and classic cocktails in a<br/>
                lively but casual environment. The restaurant<br/>
                features a locally-sourced menu with daily specials.
              </p>
            </div>
            <LazyLoadImage
              className='w-[20vw] h-[40vh] rounded-[16px] object-cover sm:block hidden'
              src={chefb}
              alt="Chef B"
              effect="blur"
            />
          </div>
        </Wrapper>
        <div className="absolute inset-0 bg-[#495E57] opacity-80"></div>
      </section>
      <section>
        <Wrapper margin={true}>
          <div className="flex flex-col py-10">
            <div className="flex flex-row justify-between items-center">
              <span className='text-4xl font-serif font-semibold'>Events</span>
              <span className='bg-[#EBCD2F] px-10 py-3 rounded-[16px] font-semibold sm:block hidden'>Join Today!</span>
            </div>
          </div>
        </Wrapper>
      </section>
      <section className='mt-10 mb-40'>
        <Wrapper margin={true} classes="flex sm:flex-row flex-col sm:gap-y-0 gap-y-10 justify-evenly">
          {
            eventItems?.map((item,index) =>
              <Card sx={{ maxWidth: 345, borderRadius: "16px" }} key={item+index}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={item.image}
                  title={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            )
          }
        </Wrapper>
      </section>
    </>
  );
}

export default About;