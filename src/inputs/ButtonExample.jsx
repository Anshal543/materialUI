import { Button } from "@mui/material";
import React from "react";

const ButtonExample = () => {
  return (
    <div>
      <Button href="https://www.github.com" target="_blank" variant="text">Text</Button>
      <Button color="warning"  variant="contained">Contained</Button>
      <Button size="small" variant="outlined">Outlined</Button>
    </div>
  );
};

export default ButtonExample;
