import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useCart } from '../../contexts/CartContextProvider';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function Cart() {
  const { getCart, cart, changeProductCount, deleteCartProduct } = useCart();

  console.log(cart);

  const navigate = useNavigate();

  React.useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem('cart');
    getCart();
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Picture</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Count</StyledTableCell>
            <StyledTableCell align="right">SubPrice</StyledTableCell>
            <StyledTableCell align="right">-</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products.map((row) => (
            <StyledTableRow key={row.item.id}>
              <StyledTableCell component="th" scope="row">
                <img src={row.item.picture} alt="" width="70" height="70" />
              </StyledTableCell>
              <StyledTableCell align="right">{row.item.name}</StyledTableCell>
              <StyledTableCell align="right">{row.item.type}</StyledTableCell>
              <StyledTableCell align="right">
                {row.item.description}
              </StyledTableCell>
              <StyledTableCell align="right">{row.item.price}</StyledTableCell>

              <StyledTableCell align="right">
                <input
                  type="number"
                  min={1}
                  max={1000}
                  value={row.count}
                  onChange={(e) =>
                    changeProductCount(e.target.value, row.item.id)
                  }
                />
              </StyledTableCell>

              <StyledTableCell align="right">{row.subPrice}</StyledTableCell>

              <StyledTableCell align="right">
                <Button onClick={() => deleteCartProduct(row.item.id)}>
                  DELETE
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant='outlined' sx={{maxHeight: 35}} onClick={cartCleaner}> Clean cart</Button>
      <Button variant='contained' sx={{my: 3, alignSelf: 'center', border: '1px solid #2e7d32', borderRadius: '4%', color: 'white', bgcolor: '#a5d6a7'}} onClick={()=>navigate('/payment')}> BUY NOW FOR {cart?.totalPrice} $</Button>
    </TableContainer>
  );
}
