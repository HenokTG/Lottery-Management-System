import Head from "next/head";
import NextLink from "next/link";
import Router from "next/router";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Card, Grid, TextField, Typography, MenuItem } from "@mui/material";

import { theme } from "../../theme";

export const CreateGame = () => {
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  const formik = useFormik({
    initialValues: {
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
          flexGrow: 1,
          py: 8,
        }}
      >
        <Typography sx={{ ml: 4, mt: 1, mb: 3 }} variant="h4">
          Create Game
        </Typography>
        <Card maxWidth="sm" sx={{ display: "flex", justifyContent: "center", mx: 3, p: 3 }}>
          <form onSubmit={formik.handleSubmit}>
            <Box
              sx={{
                pb: 1,
              }}
            >
              <Typography
                align="center"
                color={theme.palette.info.main}
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
                  color="success"
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
                  color="success"
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
                  color="success"
                  value={formik.values.description}
                  multiline
                  rows={3}
                  size="medium"
                />
              </Grid>
            </Grid>

            <Box sx={{ py: 2, mt: 2, display: "flex", justifyContent: "space-between" }}>
              <Button
                onClick={() => window.location.reload()}
                color="error"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                sx={{ width: "48%" }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => window.location.reload()}
                color="secondary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                sx={{ width: "48%" }}
              >
                Create Game
              </Button>
            </Box>
          </form>
        </Card>
      </Box>
    </>
  );
};
