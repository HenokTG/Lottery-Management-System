import Head from "next/head";
import { Box, Container, Grid, Card, CardContent, Typography, Avatar } from "@mui/material";

import { DashboardLayout } from "../components/dashboard-layout";

const user = {
  avatar: "/static/images/avatars/avatar_1.png",
  city: "Addis Ababa",
  country: "Ethiopia",
  jobTitle: "System Admin",
  name: "John Dobodye",
  phone: "+251 93 434 43 74",
  email: "john.doe1496@gmail.com",
  timezone: "GTM+3",
};

const Page = () => (
  <>
    <Head>
      <title>User Profile | Lottery Management System</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography sx={{ mb: 3 }} variant="h4">
          User Profile
        </Typography>
        <Card>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              src={user.avatar}
              sx={{
                height: 200,
                width: 200,
                mb: 2,
              }}
            />
            <Typography color="textPrimary" gutterBottom variant="h5">
              {user.name}
            </Typography>
            <Typography color="textPrimary" gutterBottom variant="subtitle2">
              {user.jobTitle}
            </Typography>
            <Typography color="textPrimary" gutterBottom variant="caption">
              {user.timezone}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyItems: "center",
                mt: 4,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography color="textPrimary" gutterBottom variant="body">
                  Email:
                </Typography>
                <Typography color="textPrimary" gutterBottom variant="body">
                  {user.email}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", gap:15 }}>
                <Typography color="textPrimary" gutterBottom variant="body">
                  Phone Number:
                </Typography>
                <Typography color="textPrimary" gutterBottom variant="body">
                  {user.phone}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography color="textPrimary" gutterBottom variant="body">
                  Location:
                </Typography>
                <Typography color="textPrimary" gutterBottom variant="body">
                  {user.city}, {user.country}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
