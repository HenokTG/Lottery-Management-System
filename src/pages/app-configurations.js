import Head from "next/head";
import { Container, Box, Typography } from "@mui/material";

import { AppConfigResults } from "../components/app-config";
import { DashboardLayout } from "../components/dashboard-layout";
import { appConfig } from "../__mocks__/app-config";

const Page = () => {
  return (
    <>
      <Head>
        <title>App Configurations | Lottery Management System</title>
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
              App Configurations
            </Typography>
          </Box>

          <Box sx={{ mt: 1 }}>
            <AppConfigResults appConfig={appConfig} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
