import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Checkbox } from '@mui/material';
import React from 'react'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const CheckBoxExample = () => {
  return (
    <div>
    <Checkbox color='success' {...label} defaultChecked />
    <Checkbox {...label} size='small' />
    <Checkbox {...label} disabled />
    <Checkbox {...label} disabled checked />
    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
  </div>
  )
}

export default CheckBoxExample