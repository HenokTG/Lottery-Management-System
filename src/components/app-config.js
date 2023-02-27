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
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { Search as SearchIcon } from "../icons/search";
import { Download as DownloadIcon } from "../icons/download";
import { Edit as Edit } from "../icons/edit";

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

export const AppConfigResults = ({ appConfig, ...rest }) => {
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
            <Grid item md={10}>
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
                  placeholder="Search app setting"
                  variant="outlined"
                  color="success"
                />
              </Box>
            </Grid>
            <Grid item md={2}>
              <Button color="info" variant="outlined" startIcon={<DownloadIcon fontSize="small" />}>
                Export
              </Button>
            </Grid>
          </Grid>
          <Card sx={{ mx: 2 }}>
            <Table size="small">
              <TableHead sx={{ py: 2 }}>
                <TableRow>
                  <StyledTableCell>Key</StyledTableCell>
                  <StyledTableCell>Description</StyledTableCell>
                  <StyledTableCell>Value</StyledTableCell>
                  <StyledTableCell>Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appConfig.slice(0, limit).map((config) => (
                  <StyledTableRow hover key={config.id}>
                    <TableCell>{config.key}</TableCell>
                    <TableCell>{config.description}</TableCell>

                    <TableCell>{config.value}</TableCell>
                    <TableCell align="center">
                      <Button>
                        <Edit
                          fontSize="small"
                          sx={{
                            p: 0,
                            color: "black",
                            "&:hover": {
                              color: "lightseagreen",
                            },
                          }}
                        />
                      </Button>
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
        count={appConfig.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

AppConfigResults.propTypes = {
  appConfig: PropTypes.array.isRequired,
};
