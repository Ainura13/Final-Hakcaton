// import { Grid, InputAdornment, Paper, TextField } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import SearchIcon from '@mui/icons-material/Search';
// import { useSearchParams } from 'react-router-dom';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import { useProducts } from '../../contexts/ProductContexProvider';

// const SideBar = () => {
//   // const { fetchByParams } = useProducts();
//   // const [searchParams, setSearchParams] = useSearchParams();

//   // const [search, setSearch] = useState(searchParams.get('q') || '');

//   // useEffect(() => {
//   //   setSearchParams({
//   //     q: search,
//   //   });
//   // }, [search]);

//   return (
//     <Grid item md={3}>
//       <Paper elevation={5} sx={{ p: 2 }}>
//         <TextField
//           fullWidth
//           id="input-with-icon-textfield"
//           label="Search..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon />
//               </InputAdornment>
//             ),
//           }}
//           variant="standard"
//         />

//         <Grid>
//           <FormControl>
//             <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
//             <RadioGroup
//               aria-labelledby="demo-radio-buttons-group-label"
//               defaultValue="all"
//               name="radio-buttons-group"
//               onChange={(e) => fetchByParams('type', e.target.value)}
//             >
//               <FormControlLabel value="all" control={<Radio />} label="all" />

//               <FormControlLabel
//                 value="Home decoration"
//                 control={<Radio />}
//                 label="Home decoration"
//               />

//               <FormControlLabel
//                 value="Mirrors"
//                 control={<Radio />}
//                 label="Mirrors"
//               />

//               <FormControlLabel
//                 value="Picture"
//                 control={<Radio />}
//                 label="watch"
//               />
//             </RadioGroup>
//           </FormControl>
//         </Grid>

//         <FormControl>
//           <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
//           <RadioGroup
//             aria-labelledby="demo-radio-buttons-group-label"
//             defaultValue="all"
//             name="radio-buttons-group"
//             onChange={(e) => fetchByParams('price_lte', e.target.value)}
//           >
//             <FormControlLabel value="all" control={<Radio />} label="all" />
//             <FormControlLabel
//               value="250"
//               control={<Radio />}
//               label="less than 250$"
//             />

//             <FormControlLabel
//               value="500"
//               control={<Radio />}
//               label="less than 500$"
//             />

//             <FormControlLabel
//               value="1000"
//               control={<Radio />}
//               label="less than 1000$"
//             />
//           </RadioGroup>
//         </FormControl>
//       </Paper>
//     </Grid>
//   );
// };

// export default SideBar;
