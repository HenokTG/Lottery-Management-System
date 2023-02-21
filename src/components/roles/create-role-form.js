import Head from "next/head";
import NextLink from "next/link";
import Router from "next/router";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, Container, Grid, TextField, Typography, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";

const ValidationTextField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "black",
    borderWidth: 1,
  },
  "& input:invalid + fieldset": {
    borderColor: "red",
    borderWidth: 1,
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 1,
    padding: "4px !important", // override inline-style
  },
});

export const CreateRole = () => {
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
                Role Deatail
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <ValidationTextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Role Name"
                  name="roleName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.roleName}
                  size="medium"
                  color="success"
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Role Description"
                  name="roleDescription"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.roleDescription}
                  size="medium"
                  color="success"
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Permissions"
                  name="permissions"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.permissions}
                  size="medium"
                  color="success"
                  select
                >
                  <MenuItem value={"Full Access"}>Full Access</MenuItem>
                  <MenuItem value={"Can Update/Post-to Database"}>
                    Can Update/Post-to Database
                  </MenuItem>
                  <MenuItem value={"Can Post-to Database"}>Can Post-to Database</MenuItem>
                  <MenuItem value={"View Only"}>View Only</MenuItem>
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
                Create Role
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};
