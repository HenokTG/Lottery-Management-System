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

import { Search as SearchIcon } from "../icons/search";
import { Download as DownloadIcon } from "../icons/download";

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

export const ActivityLogResults = ({ activity, ...rest }) => {
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
            <Grid item xs={7}>
              <Typography sx={{ m: 1 }} variant="h6">
                List of Activities
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                <Grid item xs={3}>
                  <Button startIcon={<DownloadIcon fontSize="small" />}>Export</Button>
                </Grid>
                <Grid item xs={9}>
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
                      placeholder="Search game"
                      variant="outlined"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Card sx={{ mx: 2 }}>
            <Table size="small">
              <TableHead sx={{ py: 2 }}>
                <TableRow>
                  <StyledTableCell>Module</StyledTableCell>
                  <StyledTableCell>Activity Type</StyledTableCell>
                  <StyledTableCell>Activity Performed On</StyledTableCell>
                  <StyledTableCell>Description</StyledTableCell>
                  <StyledTableCell>Created By / ON</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {activity.slice(0, limit).map((activity) => (
                  <StyledTableRow
                    hover
                    key={activity.id}
                  >
                    <TableCell>{activity.module}</TableCell>
                    <TableCell>{activity.type}</TableCell>
                    <TableCell>{activity.performedOn}</TableCell>
                    <TableCell>{activity.description}</TableCell>
                    <TableCell>Admin / {format(activity.createdAt, "MMM dd, yyyy")}</TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={activity.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

ActivityLogResults.propTypes = {
  activity: PropTypes.array.isRequired,
};
