import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const RatingExamples = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
        //   value={value}
          defaultValue={2.5} precision={.5}
        //   onChange={(event, newValue) => {
        //   setValue(newValue);
        //   }}
        />
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only"  value={value} readOnly />
        <Typography component="legend">Disabled</Typography>
        <Rating name="disabled" value={value} disabled />
        <Typography component="legend">No rating given</Typography>
        <Rating name="no-value" value={null} />
      </Box>
    </div>
  );
};

export default RatingExamples;
