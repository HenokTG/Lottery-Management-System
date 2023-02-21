import Head from "next/head";
import { Typography, Box, Container, Grid } from "@mui/material";

import { TotalSales } from "../components/dashboard/total-sales";
import { TotalTax } from "../components/dashboard/total-tax";
import { SalesByGames } from "../components/dashboard/game-sales";
import { OperatorSalesDetail } from "../components/dashboard/operator-sales-detail";
import { DashboardLayout } from "../components/dashboard-layout";

const Page = () => (
  <>
    <Head>
      <title>Dashboard | Lottery Management System</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Typography sx={{ ml: 4, mt: 1, mb: 3 }} variant="h4">
        Dashboard
      </Typography>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xl={9} lg={7} md={12} xs={12}>
            <Grid container columnSpacing={2} rowSpacing={1}>
              <Grid item xl={3} lg={6} sm={6} xs={12}>
                <TotalSales />
              </Grid>
              <Grid item xl={3} lg={6} sm={6} xs={12}>
                <TotalTax />
              </Grid>
              <Grid item xl={9} lg={12} md={12} xs={12}>
                <SalesByGames />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={9} lg={5} md={12} xs={12}>
            <OperatorSalesDetail />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
