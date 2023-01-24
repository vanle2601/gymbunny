import React from 'react';
import { Box, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';
const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { sm: '50px' }
    }} position="relative" p="20px">
        <Typography color="#6F5EC9"
                    fontWeight="600"
                    fontSize="26px">
            GymBunny
        </Typography>
        <Typography color="#FFF" fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs:'40px'}}}
        mb="23px" mt="30px"
        >
            The Ultimate <br/> Leverage
        </Typography>
        
        <Button variant="contained" 
                color="error"
                href="#exercises"
                sx={{backgroundColor: '#6F5EC9', 
                    padding: '10px'}}>
            Explore Exercises
        </Button>
        <Typography 
                fontWeight={600}
                color="#FFF"
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', xs: 'none'}
                }}
                fontSize="200px">
            Exercises
        </Typography>
        <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner