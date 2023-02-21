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

export const CreateOperator = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      about: "",
      companyName: "",
      operatorName: "",
      address: "",
      country: "",
      region: "",
      email: "",
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
                Contact Person Detail
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
              <Grid item md={12}>
                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="About Operator"
                  name="about"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.about}
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
                Enter Company Details
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Company Name"
                  name="companyName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.companyName}
                  size="small"
                />
              </Grid>
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
                  size="small"
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Address"
                  name="address"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.address}
                  size="small"
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Country"
                  name="country"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.country}
                  size="small"
                  select
                >
                  <MenuItem value={"Ethiopia"}>Ethiopia</MenuItem>
                  <MenuItem value={"Kenya"}>Kenya</MenuItem>
                  <MenuItem value={"Sudan"}>Sudan</MenuItem>
                </TextField>
              </Grid>
              <Grid item md={6}>
                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Region"
                  name="region"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.region}
                  size="small"
                  select
                >
                  <MenuItem value={"Oromia"}>Oromia</MenuItem>
                  <MenuItem value={"Amhara"}>Amhara</MenuItem>
                  <MenuItem value={"Afar"}>Afar</MenuItem>
                  <MenuItem value={"Tigrai"}>Tigrai</MenuItem>
                  <MenuItem value={"Somali"}>Somali</MenuItem>
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
                Create Operator
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};
