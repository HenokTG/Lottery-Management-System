import Head from "next/head";
import Router from "next/router";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Card,
  CardContent,
  Avatar,
  CardActions,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
  MenuItem,
  OutlinedInput,
  Chip,
} from "@mui/material";

import { theme } from "../../theme";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export const CreateOperator = ({ setModalKey }) => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const [personName, setPersonName] = useState([]);

  const handleMultiSelect = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
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
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Typography sx={{ ml: 4, mt: 1, mb: 3 }} variant="h4">
        Create Operator
      </Typography>
      <Container maxWidth="lg" sx={{ m: 0 }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={1}>
            <Grid item lg={12} md={6} xs={12}>
              <Card sx={{ py: 3, px: 16 }}>
                <Typography
                  align="center"
                  variant="body1"
                  color={theme.palette.info.main}
                  sx={{
                    pb: 3,
                  }}
                >
                  Enter Operator Details
                </Typography>
                <Grid container spacing={3}>
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
                      color="success"
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
                      color="success"
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
                      color="success"
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
                      color="success"
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
                      color="success"
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
                  <Grid item md={12}>
                    <TextField
                      error={Boolean(formik.touched.email && formik.errors.email)}
                      fullWidth
                      helperText={formik.touched.email && formik.errors.email}
                      label="Assign Game"
                      name="assignedGame"
                      value={personName}
                      onBlur={formik.handleBlur}
                      type="text"
                      color="success"
                      size="small"
                      select
                      SelectProps={{
                        multiple: true,
                        value: personName,
                        onChange: handleMultiSelect,
                        input: <OutlinedInput id="select-multiple-chip" label="Chip" />,
                        renderValue: (selected) => (
                          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                            {selected.map((value) => (
                              <Chip key={value} label={value} />
                            ))}
                          </Box>
                        ),
                        MenuProps: { MenuProps },
                      }}
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
                      label="About Operator"
                      name="about"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="text"
                      color="success"
                      value={formik.values.about}
                      multiline
                      rows={3}
                      size="small"
                    />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
              <Card>
                <CardContent sx={{ p: 1.75 }}>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Avatar
                      src="/static/images/avatars/avatar_1.png"
                      sx={{
                        height: 64,
                        mb: 1,
                        width: 64,
                      }}
                    />
                    <Typography color="textPrimary" gutterBottom variant="h5">
                      John Doe
                    </Typography>
                  </Box>
                </CardContent>
                <Divider />
                <CardActions>
                  <Button color="primary" fullWidth variant="text">
                    Upload Picture
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item lg={9} md={6} xs={12}>
              <Card sx={{ p: 3 }}>
                <Typography
                  align="center"
                  variant="body1"
                  color={theme.palette.info.main}
                  sx={{
                    pb: 3,
                  }}
                >
                  Contact Person Detail
                </Typography>
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
                      color="success"
                      size="small"
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
                      size="small"
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
                      size="small"
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
                      size="small"
                      value={formik.values.phoneNumber}
                    />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
          <Card sx={{ py: 2, px: 10, mt: 2, display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={() => window.location.reload()}
              color="error"
              disabled={formik.isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              sx={{ width: "45%" }}
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
              sx={{ width: "45%" }}
            >
              Create Operator
            </Button>
          </Card>
        </form>
      </Container>
    </Box>
  );
};
