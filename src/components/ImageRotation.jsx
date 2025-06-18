"use client";

import { Box, Typography } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '@/assets/airobo01.png';
import image2 from '@/assets/airobo2.png';
import image3 from '@/assets/airobo3.png';
import Image from 'next/image';
import TypingText from './TypingText'

const sliderImages = [
  { src: image1, alt: 'Slide 1' },
  { src: image2, alt: 'Slide 2' },
  { src: image3, alt: 'Slide 3' },
];

const ImageRotation = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { md: 600, xs: 300 },
        overflow: 'hidden',
        marginTop: {md:5,xs:7},
      }}
    >
     
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          filter: 'blur(3px)',
        }}
      >
        <Slider {...settings}>
          {sliderImages.map((image, index) => (
            <Box key={index} sx={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src={image.src}
                alt={image.alt}
                // fill
                style={{ height:600,width:"100%",objectFit: 'cover' }}
                priority
              />
            </Box>
          ))}
        </Slider>
      </Box>

 

      {/* Typing Header Text */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 3,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: 2,
        }}
      >
 <Typography
  variant="h3"
  sx={{
    fontWeight: 'bold',
    fontSize: { xs: 30, md: 50 },
    color: 'white', 
    textAlign: 'center',
  }}
>
  <TypingText text="Empowering the Future with AI & Robotics" speed={100} />
</Typography>

      </Box>
    </Box>
  );
};

export default ImageRotation;
