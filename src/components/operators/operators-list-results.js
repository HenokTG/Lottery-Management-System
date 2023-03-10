import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { format } from "date-fns";
import {
  Avatar,
  Box,
  Container,
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
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";

import { getInitials } from "../../utils/get-initials";
import { Search as SearchIcon } from "../../icons/search";
import { Download as DownloadIcon } from "../../icons/download";
import { Edit as Edit } from "../../icons/edit";

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

export const OperatorListResults = ({ operators, setModalKey, ...rest }) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Typography sx={{ ml: 4, mt: 1, mb: 3 }} variant="h4">
        Manage Operators
      </Typography>
      <Container maxWidth="lg" sx={{ m: 0 }}>
        <Card>
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
                      placeholder="Search operator"
                      variant="outlined"
                      color="success"
                    />
                  </Box>
                </Grid>
                <Grid item md={4}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Button
                        color="info"
                        variant="outlined"
                        startIcon={<DownloadIcon fontSize="small" />}
                      >
                        Export
                      </Button>
                    </Grid>

                    <Grid item xs={6}>
                      <Button
                        color="info"
                        variant="contained"
                        onClick={() => setModalKey(true)}
                        startIcon={<AddIcon />}
                      >
                        Add Operator
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Card sx={{ mx: 2 }}>
                <Table size="small">
                  <TableHead sx={{ py: 2 }}>
                    <TableRow>
                      <StyledTableCell>Operator Name</StyledTableCell>
                      <StyledTableCell>Company Name</StyledTableCell>
                      <StyledTableCell>Email</StyledTableCell>
                      <StyledTableCell>Phone Number</StyledTableCell>
                      <StyledTableCell>Location</StyledTableCell>
                      <StyledTableCell>No. of Game Catagories</StyledTableCell>
                      <StyledTableCell>Status</StyledTableCell>
                      <StyledTableCell>Created By / ON</StyledTableCell>
                      <StyledTableCell>Action</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {operators.slice(0, limit).map((operator) => (
                      <StyledTableRow hover key={operator.id}>
                        <TableCell>
                          <Box
                            sx={{
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            <Avatar src={operator.avatarUrl} sx={{ mr: 2 }}>
                              {getInitials(operator.name)}
                            </Avatar>
                            <Typography color="textPrimary" variant="body1">
                              {operator.name}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>{operator.comName}</TableCell>
                        <TableCell sx={{ fontSize: 12 }}>{operator.email}</TableCell>
                        <TableCell sx={{ fontSize: 12 }}>{operator.phone}</TableCell>
                        <TableCell sx={{ fontSize: 12 }}>
                          {operator.address.street}, {operator.address.city},{" "}
                          {operator.address.state}, {operator.address.country}
                        </TableCell>
                        <TableCell sx={{ fontSize: 12 }} align="center">
                          {operator.noGameCatagory}
                        </TableCell>
                        <TableCell sx={{ fontSize: 12 }}>{operator.status}</TableCell>
                        <TableCell sx={{ fontSize: 12 }}>
                          Admin / {format(operator.createdAt, "MMM dd, yyyy")}
                        </TableCell>
                        <TableCell align="center">
                          <Button onClick={() => setModalKey(true)}>
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
            count={operators.length}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </Card>
      </Container>
    </Box>
  );
};

OperatorListResults.propTypes = {
  operators: PropTypes.array.isRequired,
};
