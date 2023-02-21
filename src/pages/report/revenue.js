
import Head from "next/head";
import { Container, Box, Typography } from "@mui/material";

import { RevenueReportResults } from "../../components/report/revenue";
import { DashboardLayout } from "../../components/dashboard-layout";
import { revenues } from "../../__mocks__/report";

console.log("Revenue: ", revenues);
const Page = () => {
  return (
    <>
      <Head>
        <title>Revenue Report | Lottery Management System</title>
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
              Revenue Report
            </Typography>
          </Box>

          <Box sx={{ mt: 1 }}>
            <RevenueReportResults revenues={revenues} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
