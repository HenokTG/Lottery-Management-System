import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { format } from "date-fns";
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
  TablePagination, tableCellClasses,
  TableRow,
  Typography,
} from "@mui/material"; import { styled } from "@mui/material/styles";

import { Search as SearchIcon } from "../../icons/search";
import { Download as DownloadIcon } from "../../icons/download";
import { Filter as Filter } from "../../icons/filter";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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

export const TicketInfoResults = ({ tickets, ...rest }) => {
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
            <Grid item xs={5}>
              <Typography sx={{ m: 1 }} variant="h6">
                List of Ticket Info Reports
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Grid
                container
                spacing={1}
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Grid item xs={2.5}>
                  <Button startIcon={<DownloadIcon fontSize="small" />}>Export</Button>
                </Grid>

                <Grid item xs={7}>
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
                      placeholder="Search ticket info"
                      variant="outlined"
                    />
                  </Box>
                </Grid>
                <Grid item xs={2.5}>
                  <Button variant="outlined" startIcon={<Filter fontSize="small" />}>
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
                  <StyledTableCell align="center">Game Name</StyledTableCell>
                  <StyledTableCell align="center">Licence Catagory</StyledTableCell>
                  <StyledTableCell align="center">Operator Name</StyledTableCell>
                  <StyledTableCell align="center">TIcket Reference</StyledTableCell>
                  <StyledTableCell align="center">Transaction Amount</StyledTableCell>
                  <StyledTableCell align="center">Transaction Type</StyledTableCell>
                  <StyledTableCell align="center">Winning Amount</StyledTableCell>
                  <StyledTableCell align="center">Refund Amount</StyledTableCell>
                  <StyledTableCell align="center">Date & Time</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tickets.slice(0, limit).map((ticket) => (
                  <StyledTableRow
                    hover
                    key={ticket.id}
                  >
                    <TableCell>{ticket.gameName}</TableCell>
                    <TableCell>{ticket.licenceCatagory}</TableCell>
                    <TableCell>{ticket.operatorName}</TableCell>
                    <TableCell>{ticket.ticketRef}</TableCell>
                    <TableCell align="right">{ticket.amount}</TableCell>
                    <TableCell>{ticket.transType}</TableCell>
                    <TableCell align="right">{ticket.winAmount}</TableCell>
                    <TableCell align="right">{ticket.refundAmount}</TableCell>
                    <TableCell align="right">
                      {format(ticket.createdAt, "yyyy-MM-dd HH:MM:SS z")}
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={tickets.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

TicketInfoResults.propTypes = {
  tickets: PropTypes.array.isRequired,
};
