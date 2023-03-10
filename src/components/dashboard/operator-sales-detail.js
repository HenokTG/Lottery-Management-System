import { v4 as uuid } from "uuid";
import { faker } from "@faker-js/faker";

import { useState } from "react";

import { styled } from "@mui/material/styles";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  CardActions,
  Button,
  SvgIcon,
  Divider,
  TableContainer,
  Paper,
  tableCellClasses,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const operatorSales = [...Array(10).keys()].map((elem, idx) => {
  return {
    id: uuid(),
    customer: {
      name: faker.name.fullName(),
    },
    sales: faker.finance.amount(50000, 1000000, 2, "$ ", true),
    tax: faker.finance.amount(8000, 130000, 2, "$ ", true),
  };
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
    padding: 14,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const OperatorSalesDetail = (props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Card sx={{ height: "100%", p: 1}} {...props}>
      <CardHeader title="Top Performing Operators" sx={{ py: 2, pl: 1 }} />
      <PerfectScrollbar>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <StyledTableCell>Operator Name</StyledTableCell>
                <StyledTableCell>Total Sales</StyledTableCell>

                <StyledTableCell>Total Tax</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {operatorSales.map((operatorSale) => (
                <StyledTableRow hover key={operatorSale.id}>
                  <TableCell>{operatorSale.customer.name}</TableCell>
                  <TableCell align="right">{operatorSale.sales}</TableCell>
                  <TableCell align="right">{operatorSale.tax}</TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </PerfectScrollbar>
      <Divider />
      <CardActions sx={{ justifyContent: "space-between", p: 2 }}>
        <Button
          endIcon={<ArrowDropDownIcon fontSize="small" />}
          size="small"
          variant="outlined"
          color="info"
        >
          Last 7 days
        </Button>
        <Button
          color="success"
          endIcon={
            <SvgIcon fontSize="small">
              <ArrowRightAltIcon />
            </SvgIcon>
          }
          size="small"
        >
          View All
        </Button>
      </CardActions>
    </Card>
  );
};
