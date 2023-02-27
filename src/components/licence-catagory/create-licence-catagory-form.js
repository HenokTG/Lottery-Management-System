import Head from "next/head";
import NextLink from "next/link";
import Router from "next/router";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Container, Card, Grid, TextField, Typography, MenuItem } from "@mui/material";

import { theme } from "../../theme";

export const CreateLicenceCatagory = () => {
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  const formik = useFormik({
    initialValues: {
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
          Create Licence Catagory
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
                Enter Licence Catagory Details
              </Typography>
            </Box>
            <Grid container spacing={2} minWidth="600px">
              <Grid item md={12}>
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
                />
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
                  rows={4}
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
