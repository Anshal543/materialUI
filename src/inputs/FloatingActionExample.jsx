import React from "react";
import { Box, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

const FloatingActionExample = () => {
  return (
    <>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab size="medium" color="primary" aria-label="add">
          <AddIcon /> 
        </Fab>
        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
        <Fab variant="extended">
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
        <Fab disabled aria-label="like">
          <FavoriteIcon />
        </Fab>
      </Box>
    </>
  );
};

export default FloatingActionExample;
