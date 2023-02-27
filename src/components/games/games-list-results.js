import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { format } from "date-fns";

import {
  Box,
  Button,
  Container,
  Card,
  Grid,
  TextField,
  InputAdornment,
  SvgIcon,
  Pagination,
  Avatar,
  Divider,
  TableCell,
  Stack,
  CardContent,
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

export const GameListResults = ({ games, setModalKey, ...rest }) => {
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
        Manage Games
      </Typography>
      <Container maxWidth="lg" sx={{ m: 0 }}>
        <PerfectScrollbar sx={{ minWidth: 1050 }}>
          <Card>
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
                    placeholder="Search game"
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
                      Add Game
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            {games.map((game) => (
              <Grid item xs={12} md={6} lg={4} key={game.id}>
                <Card>
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        pb: 3,
                      }}
                    >
                      <Avatar
                        src={game.logo}
                        variant="square"
                        sx={{
                          height: 60,
                          width: 60,
                        }}
                      />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                      <Typography
                        align="center"
                        gutterBottom
                        variant="h5"
                        color={game.status === "Active" ? "lightgreen" : "red"}
                      >
                        {game.gameName}
                      </Typography>
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
                    </Box>
                    <Typography align="center" variant="subtitle2">
                      {game.licenceCatagory}
                    </Typography>
                    <Typography align="center" variant="body2" sx={{ mt: 2, height: "3rem" }}>
                      {game.description}
                    </Typography>
                  </CardContent>
                  <Box sx={{ flexGrow: 1 }} />
                  <Divider />
                  <Stack
                    alignItems="center"
                    direction="row"
                    justifyContent="space-between"
                    spacing={2}
                    sx={{ p: 2 }}
                  >
                    <Stack alignItems="center" direction="row" spacing={1}>
                      <Typography color="text.secondary" display="inline" variant="body2">
                        {format(game.createdAt, "MMM dd, yyyy")}
                      </Typography>
                    </Stack>
                    <Stack alignItems="center" direction="row" spacing={1}>
                      <Typography color="text.secondary" display="inline" variant="body2">
                        23 Operators
                      </Typography>
                    </Stack>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 5,
            }}
          >
            <Pagination count={3} size="small" />
          </Box>
        </PerfectScrollbar>
      </Container>
    </Box>
  );
};

GameListResults.propTypes = {
  games: PropTypes.array.isRequired,
};
