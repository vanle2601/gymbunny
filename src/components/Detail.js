import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment} = exerciseDetail;
  const extraDetail = [
    {
        icon: BodyPartImage,
        name: bodyPart,
    },
    {
        icon: TargetImage,
        name: target,
    },
    {
        icon: EquipmentImage,
        name: equipment,
    }
    
  ]
  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: {lg: '35px', xs: '20px'}}}>
      <Typography sx={{ textTransform: "capitalize", fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#fff" mb="33px">
            {name}
        </Typography>
        <Typography>
            <span style={{ textTransform: "capitalize" }}>{``} {name} {``} </span>is one of the best exercises
            target your {target}. 
            Coporate with progressive overload principle to make the most out of this workout.
        </Typography>
        
        {extraDetail.map((item) => (
            <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                    <Button sx={{ background: '#D1B7E7', borderRadius: '50%', width: '100px', height: '100px'}}>
                        <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px'}} />
                    </Button>
                    <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
                        {item.name}
                    </Typography>
            </Stack>
        ))}
        
      </Stack>
    </Stack>
  )
}

export default Detail