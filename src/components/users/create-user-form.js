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
  Link,
  TextField,
  Typography,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

export const CreateUser = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

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
                Basic Detail About the User
              </Typography>
            </Box>
            <Grid container spacing={3}>
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
                  value={formik.values.firstName}
                  size="small"
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
                  value={formik.values.lastName}
                  size="small"
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
                  value={formik.values.email}
                  size="small"
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
                  value={formik.values.phoneNumber}
                  size="small"
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
                color="goldenrod"
                variant="body1"
                sx={{
                  pb: 2,
                }}
              >
                Select the User Role
              </Typography>
            </Box>
            <Grid container spacing={2}>
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
                  value={formik.values.userRole}
                  size="small"
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

            <Box sx={{ py: 2 }}>
              <Button
                color="secondary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Create User
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};
