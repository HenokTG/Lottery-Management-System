import { useState } from "react";

import Head from "next/head";
import { Container, Box, Typography } from "@mui/material";

import { PaymentDistributionResults } from "../../components/report/payments";
import { DashboardLayout } from "../../components/dashboard-layout";
import { payments } from "../../__mocks__/report";

const Page = () => {
  return (
    <>
      <Head>
        <title>Payment Distribution Report | Lottery Management System</title>
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
              Payment Distribution Report
            </Typography>
          </Box>

          <Box sx={{ mt: 1 }}>
            <PaymentDistributionResults payments={payments} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
