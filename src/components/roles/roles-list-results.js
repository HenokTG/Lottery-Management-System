import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Container,
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

export const RoleListResults = ({ roles, setModalKey, ...rest }) => {
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
        Manage Roles
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
                      placeholder="Search role"
                      variant="outlined"
                      color="success"
                    />
                  </Box>
                </Grid>
                <Grid item md={4}>
                  <Grid container>
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
                        onClick={() => setModalKey(true)}
                        startIcon={<AddIcon />}
                      >
                        Add Role
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Card sx={{ mx: 2 }}>
                <Table size="small">
                  <TableHead sx={{ py: 2 }}>
                    <TableRow>
                      <StyledTableCell>Role Name</StyledTableCell>
                      <StyledTableCell>Role Description</StyledTableCell>
                      <StyledTableCell align="center">No. of Users</StyledTableCell>
                      <StyledTableCell>Status</StyledTableCell>
                      <StyledTableCell>Action</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {roles.slice(0, limit).map((role) => (
                      <StyledTableRow hover key={role.id}>
                        <TableCell>{role.role}</TableCell>
                        <TableCell>{role.description}</TableCell>
                        <TableCell align="center">{role.noUsers}</TableCell>

                        <TableCell>{role.status}</TableCell>
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
            count={roles.length}
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

RoleListResults.propTypes = {
  roles: PropTypes.array.isRequired,
};
