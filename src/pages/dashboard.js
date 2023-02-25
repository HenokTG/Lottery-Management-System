import Head from "next/head";
import { Typography, Box, Container, Grid } from "@mui/material";

import { OverviewTotals } from "../components/dashboard/overview-totals";
import { SalesByGames } from "../components/dashboard/game-sales";
import { OverviewPaymentDistributions } from "../components/dashboard/payment-distributions";
import { OperatorSalesDetail } from "../components/dashboard/operator-sales-detail";
import { HighestWinningTicketes } from "../components/dashboard/highest-winning-ticketes";
import { DashboardLayout } from "../components/dashboard-layout";

import { Sells as Sells } from "../icons/sells";
import { Tax as Tax } from "../icons/tax";
import { WonAmounts as WonAmounts } from "../icons/won-amount";
import { Deposit as Deposit } from "../icons/deposit";
import { Withdrawals as Withdrawals } from "../icons/withdrawal";

const Page = () => (
  <>
    <Head>
      <title>Overview | Lottery Management System</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Typography sx={{ ml: 4, mt: 1, mb: 3 }} variant="h4">
        Overview
      </Typography>
      <Container maxWidth={false}>
        <Grid container columnSpacing={1}>
          <Grid item lg={2.4} sm={6} xs={12}>
            <OverviewTotals
              value={"$ 643k"}
              title="Total Sales"
              icon={<Sells />}
              iconBg="primary"
            />
          </Grid>
          <Grid item lg={2.4} sm={6} xs={12}>
            <OverviewTotals
              value={"$ 64k"}
              title="Won Amount"
              icon={<WonAmounts />}
              iconBg="secondary"
            />
          </Grid>
          <Grid item lg={2.4} sm={6} xs={12}>
            <OverviewTotals value={"$ 180k"} title="Total Tax" icon={<Tax />} iconBg="warning" />
          </Grid>
          <Grid item lg={2.4} sm={6} xs={12}>
            <OverviewTotals
              value={"$ 400k"}
              title="Total Deposit"
              icon={<Deposit />}
              iconBg="info"
            />
          </Grid>
          <Grid item lg={2.4} sm={6} xs={12}>
            <OverviewTotals
              value={"$ 110k"}
              title="Total Withdraw"
              icon={<Withdrawals />}
              iconBg="error"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 0, mb: 3 }}>
          <Grid item lg={7} md={12} xs={12}>
            <SalesByGames />
          </Grid>
          <Grid item lg={5} md={12} xs={12}>
            <OverviewPaymentDistributions />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item lg={5} md={12} xs={12}>
            <OperatorSalesDetail />
          </Grid>
          <Grid item lg={7} md={12} xs={12}>
            <HighestWinningTicketes />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
