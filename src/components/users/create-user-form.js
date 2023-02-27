import Head from "next/head";
import NextLink from "next/link";
import Router from "next/router";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Card, Divider, Grid, TextField, Typography, MenuItem } from "@mui/material";

import { theme } from "../../theme";

export const CreateUser = () => {
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
          Create User
        </Typography>
        <Card maxWidth="sm" sx={{ display: "flex", justifyContent: "center", mx: 3, p: 3 }}>
          <form onSubmit={formik.handleSubmit}>
            <Box
              sx={{
                py: 1,
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
                Basic Detail About the User
              </Typography>
            </Box>
            <Grid container spacing={3} sx={{ px: 15 }}>
              <Grid item md={6}>
                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="First Name"
                  name="firstName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  color="success"
                  value={formik.values.firstName}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Last Name"
                  name="lastName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  color="success"
                  value={formik.values.lastName}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email Address"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  color="success"
                  value={formik.values.email}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Phone Number"
                  name="phoneNumber"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="number"
                  color="success"
                  value={formik.values.phoneNumber}
                />
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
                color={theme.palette.info.main}
                variant="body1"
                sx={{
                  pb: 2,
                }}
              >
                Select the User Role
              </Typography>
            </Box>
            <Grid container spacing={2} sx={{ px: 15 }}>
              <Grid item md={6}>
                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Role"
                  name="userRole"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  color="success"
                  value={formik.values.userRole}
                  select
                >
                  <MenuItem value={"Admin"}>Admin</MenuItem>
                  <MenuItem value={"Superviser"}>Superviser</MenuItem>
                  <MenuItem value={"Report Manager"}>Report Manager</MenuItem>
                  <MenuItem value={"Operator Manager"}>Operator Manager</MenuItem>
                  <MenuItem value={"Deputy Manager"}>Deputy Manager</MenuItem>
                  <MenuItem value={"Test User"}>Test User</MenuItem>
                  <MenuItem value={"Handler"}>Handler</MenuItem>
                </TextField>
              </Grid>
            </Grid>

            <Box sx={{ py: 2, px: 15, mt: 2, display: "flex", justifyContent: "space-between" }}>
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
                Create User
              </Button>
            </Box>
          </form>
        </Card>
      </Box>
    </>
  );
};
