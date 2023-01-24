import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#432e89">
      <Stack alignItems="center" px="40px" pt="24px">
        <Typography color="#fff" fontWeight="600">
          Made by
        </Typography>
        <Typography pb="24px" color="#6F5EC9"
                    fontWeight="600"
                    fontSize="26px">
            GymBunny
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer