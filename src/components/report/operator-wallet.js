import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  Grid,
  TextField,
  InputAdornment,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  tableCellClasses,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { Search as SearchIcon } from "../../icons/search";
import { Download as DownloadIcon } from "../../icons/download";
import { Filter as Filter } from "../../icons/filter";

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

export const OperatorWalletResults = ({ wallets, ...rest }) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ padding: 2 }}
          >
            <Grid item md={8}>
              <Box sx={{ maxWidth: 400 }}>
                <TextField
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SvgIcon color="action" fontSize="small">
                          <SearchIcon />
                        </SvgIcon>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Search operator wallet"
                  variant="outlined"
                  color="success"
                />
              </Box>
            </Grid>
            <Grid item md={4}>
              <Grid
                container
                spacing={1}
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Grid item md={6}>
                  <Button
                    color="info"
                    variant="outlined"
                    startIcon={<DownloadIcon fontSize="small" />}
                  >
                    Export
                  </Button>
                </Grid>

                <Grid item md={6}>
                  <Button color="info" variant="contained" startIcon={<Filter fontSize="small" />}>
                    Filter
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Card sx={{ mx: 2 }}>
            <Table size="small">
              <TableHead sx={{ py: 2 }}>
                <TableRow>
                  <StyledTableCell align="center">Operator Name</StyledTableCell>
                  <StyledTableCell align="center">Company Name</StyledTableCell>
                  <StyledTableCell align="center">Wallet Balance</StyledTableCell>
                  <StyledTableCell align="center">Credit Amount</StyledTableCell>
                  <StyledTableCell align="center">Debit Amount</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {wallets.slice(0, limit).map((wallet) => (
                  <StyledTableRow hover key={wallet.id}>
                    <TableCell>{wallet.operatorName}</TableCell>
                    <TableCell>{wallet.comName}</TableCell>
                    <TableCell align="right">{wallet.wallet}</TableCell>
                    <TableCell align="right">{wallet.credit}</TableCell>
                    <TableCell align="right">{wallet.debit}</TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={wallets.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

OperatorWalletResults.propTypes = {
  wallets: PropTypes.array.isRequired,
};
