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
  tableCellClasses,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { theme } from "../../theme";

import { Search as SearchIcon } from "../../icons/search";
import { Download as DownloadIcon } from "../../icons/download";
import { Filter as Filter } from "../../icons/filter";
import RevenueSummary from "./revenue-summary";

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

export const RevenueReportResults = ({ revenues, ...rest }) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <Card sx={{ mb: 3, pt: 3, pb: 1, px: 5, backgroundColor: theme.palette.neutral[100] }}>
        <Grid container columnSpacing={10} rowSpacing={1} sx={{ mb: 2 }}>
          <Grid item xl={3} lg={6} sm={6} xs={12}>
            <RevenueSummary badge="Sales" title="Total Sales" amount="$ 9,423,424,476.25" />
          </Grid>
          <Grid item xl={3} lg={6} sm={6} xs={12}>
            <RevenueSummary badge="tax" title="Total Tax" amount="$ 535,353,645.89" />
          </Grid>
        </Grid>
      </Card>
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
                    placeholder="Search revenue"
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
                    <Button
                      color="info"
                      variant="contained"
                      startIcon={<Filter fontSize="small" />}
                    >
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
                    <StyledTableCell align="center">Game Name</StyledTableCell>
                    <StyledTableCell align="center">Licence Catagory</StyledTableCell>
                    <StyledTableCell align="center">Total Sales</StyledTableCell>
                    <StyledTableCell align="center">GCM/Tax</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {revenues.slice(0, limit).map((revenue) => (
                    <StyledTableRow hover key={revenue.id}>
                      <TableCell>{revenue.operatorName}</TableCell>
                      <TableCell>{revenue.comName}</TableCell>

                      <TableCell>{revenue.gameName}</TableCell>
                      <TableCell>{revenue.licenceCatagory}</TableCell>
                      <TableCell align="right">{revenue.sells}</TableCell>
                      <TableCell align="right">{revenue.tax}</TableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </Box>
        </PerfectScrollbar>
        <TablePagination
          component="div"
          count={revenues.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Card>
    </>
  );
};

RevenueReportResults.propTypes = {
  revenues: PropTypes.array.isRequired,
};
