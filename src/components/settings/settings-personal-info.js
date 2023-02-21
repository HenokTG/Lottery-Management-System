import { useState } from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from "@mui/material";

export const SettingsPersonalInfo = (props) => {
  const [values, setValues] = useState({
    password: "",
    confirm: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form {...props}>
      <Card>
        <CardHeader subheader="Update Personal Info" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container columnSpacing={3} md={8}>
            <Grid item md={6}>
              <TextField
                fullWidth
                label="First Name"
                margin="normal"
                name="firstName"
                onChange={handleChange}
                type="text"
                value={values.firstName}
                variant="outlined"
                color="warning"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                label="Last Name"
                margin="normal"
                name="lastName"
                onChange={handleChange}
                type="text"
                value={values.lastName}
                variant="outlined"
                color="warning"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                label="Email ID"
                margin="normal"
                name="email"
                onChange={handleChange}
                type="email"
                value={values.email}
                variant="outlined"
                color="warning"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                label="Phone Number"
                margin="normal"
                name="phoneNumber"
                onChange={handleChange}
                type="number"
                value={values.phoneNumber}
                variant="outlined"
                color="warning"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            p: 2,
            ml: 5,
          }}
        >
          <Button color="warning" variant="contained">
            Save
          </Button>
        </Box>
      </Card>
    </form>
  );
};
