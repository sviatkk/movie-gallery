import React, { useEffect, useState } from "react"
import { observer, inject } from "mobx-react"
import { FormControl, Select, MenuItem, InputLabel, OutlinedInput } from "@mui/material"

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MovieFilter = (props) => {
    const {
        moviesModel: {
            allGenres,
            setActiveFilters
        }
    } = props
    const [activeGenres, setActiveGenres] = useState([])

    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setActiveGenres(
        typeof value === 'string' ? value.split(',') : value,
      );
    };

    useEffect(() => {
      setActiveFilters(activeGenres)
    },[activeGenres])

    return <div>
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-name-label">Genre</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple
        value={activeGenres}
        onChange={handleChange}
        input={<OutlinedInput label="Genre" />}
        MenuProps={MenuProps}
      >
        {Array.from(allGenres).map((name) => (
          <MenuItem
            key={name}
            value={name}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </div>
}

export default inject(
    "moviesModel",
  )(observer(MovieFilter))