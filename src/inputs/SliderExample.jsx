import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

const SliderExample = () => {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function valuetext(value) {
    return `${value}`;
  }
  return (
    <div>
      <Box sx={{ width: 200 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1,mt:10 }} alignItems="center">
          <VolumeDown />
          <Slider
            aria-label="Volume"
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
          />
          <VolumeUp />
        </Stack>
        <Slider disabled defaultValue={30} aria-label="Disabled slider" />
      </Box>
    </div>
  );
};

export default SliderExample;
