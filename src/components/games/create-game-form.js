import Head from "next/head";
import NextLink from "next/link";
import Router from "next/router";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";

export const CreateGame = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  const formik = useFormik({
    initialValues: {
      operatorName: "",
      gameName: "",
      licenceCatagory: "",
      description: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: () => {
      Router.push("/").catch(console.error);
    },
  });

  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
            <Box
              sx={{
                py: 1,
              }}
            >
              <Typography
                align="center"
                color="goldenrod"
                variant="body1"
                sx={{
                  pb: 2,
                }}
              >
                Select the Operator
              </Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item md={6}>
                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Operator Name"
                  name="operatorName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.operatorName}
                  size="medium"
                  select
                >
                  <MenuItem value={"OperaroX"}>OperaroX</MenuItem>
                  <MenuItem value={"OperatorY"}>OperatorY</MenuItem>
                  <MenuItem value={"OperatorZ"}>OperatorZ</MenuItem>
                  <MenuItem value={"OperatorA"}>OperatorA</MenuItem>
                </TextField>
              </Grid>
            </Grid>
            <Divider sx={{ backgroundColor: "black", my: 3 }} />
            <Box
              sx={{
                pb: 1,
              }}
            >
              <Typography
                align="center"
                color="goldenrod"
                variant="body1"
                sx={{
                  pb: 2,
                }}
              >
                Enter Game Details
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Game Name"
                  name="gameName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.gameName}
                  size="medium"
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Licence Catagory"
                  name="licenceCatagory"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.licenceCatagory}
                  size="medium"
                  select
                >
                  <MenuItem value={"Scratch Cards"}>Scratch Cards</MenuItem>
                  <MenuItem value={"Online Casino"}>Online Casino</MenuItem>
                  <MenuItem value={"Hotel Casino"}>Hotel Casino</MenuItem>
                  <MenuItem value={"Public Online Lottery(POL)"}>
                    Public Online Lottery(POL)
                  </MenuItem>
                  <MenuItem value={"Gaming Machine"}>Gaming Machine</MenuItem>
                  <MenuItem value={"Online Sport Bettings"}>Online Sport Bettings</MenuItem>
                  <MenuItem value={"Other Games"}>Other Games</MenuItem>
                </TextField>
              </Grid>

              <Grid item md={12}>
                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Description"
                  name="description"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.description}
                  size="medium"
                />
              </Grid>
            </Grid>

            <Box sx={{ py: 2 }}>
              <Button
                color="secondary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Create Game
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};
