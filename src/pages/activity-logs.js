import Head from "next/head";
import { Container, Box, Typography } from "@mui/material";

import { ActivityLogResults } from "../components/activity-log-results";
import { DashboardLayout } from "../components/dashboard-layout";
import { activity } from "../__mocks__/activity";

const Page = () => {
  return (
    <>
      <Head>
        <title>Activity Log | Lottery Management System</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Box>
            <Typography sx={{ m: 1, mb: 4 }} variant="h4">
              Activity Log
            </Typography>
          </Box>

          <Box sx={{ mt: 1 }}>
            <ActivityLogResults activity={activity} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
