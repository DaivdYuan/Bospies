import * as React from 'react';
import { Box, InputLabel, Menu, MenuItem, FormControl, Select, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from "@mui/system";

const ExpandMoreStyled = styled(ExpandMoreIcon)({
  color: "green",
  paddingRight: "8px",
  "&.MuiSelect-iconOpen": {
    paddingRight: 0,
    paddingLeft: "8px"
  }
});

const style = {
  width: 168,
  borderRadius: "30px",
  border: "2px solid #33363F 0.5",
  padding: "0px 8px 0px 8px",
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "#33363F 0.5",
    borderWidth: "3px",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#33363F",
    opacity: 0.5,
    borderWidth: "3px",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#33363F",
    opacity: 0.5,
    borderWidth: "3px",
  },
};

const FilterButton = (props) => {
  const { filterName, filterSelected, handleFilterSelected, filterOptions } = props;
  return (
    <FormControl>
      <Select
        value={filterSelected}
        onChange={handleFilterSelected}
        renderValue={() => (
          <Typography
            align="left"
            sx={{
              fontWeight: 600,
              color: "#33363F",
              opacity: 0.5
            }}
          >
            {filterSelected && filterSelected !== 'View All' ? filterSelected : filterName}
          </Typography>
        )}
        displayEmpty
        sx={style}
        IconComponent={ExpandMoreStyled}
      >
        {filterOptions.map((filter, index) => {
          return (
            <MenuItem key={index} value={filter}>{filter}</MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export default FilterButton