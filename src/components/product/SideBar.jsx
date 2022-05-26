import { Grid, InputAdornment, Paper, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useProducts } from '../../contexts/ProductContexProvider';

const SideBar = () => {

  
const { fetchByParams, searchFilter } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('q') || '');

  // useEffect(() => {
  //   setSearchParams({
  //     q: search,
  //   });
  // }, [search]);

  return (
    <Grid item md={2}>
      <Paper elevation={5} sx={{ p: 2 }}>
        <TextField
          fullWidth
          id="input-with-icon-textfield"
          label="Search..."
          // value={search}
          onChange={(e) => searchFilter(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />

        <Grid>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Made In</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams(e.target.value)}
          >
            <FormControlLabel value="all" control={<Radio />} label="all" />
            <FormControlLabel
              value="USA"
              control={<Radio />}
              label="USA"
            />

            <FormControlLabel
              value="Russia"
              control={<Radio />}
              label="Russia"
            />

            <FormControlLabel
              value="China"
              control={<Radio />}
              label="China"
            />
          </RadioGroup>
        </FormControl>
        </Grid>

     
      </Paper>
    </Grid>
  );
};

export default SideBar;
