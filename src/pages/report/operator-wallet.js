
import Head from "next/head";
import { Container, Box, Typography } from "@mui/material";

import { OperatorWalletResults } from "../../components/report/operator-wallet";
import { DashboardLayout } from "../../components/dashboard-layout";
import { wallets } from "../../__mocks__/report";

const Page = () => {
  return (
    <>
      <Head>
        <title>Operator Wallet Report | Lottery Management System</title>
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
              Operator Wallet Report
            </Typography>
          </Box>

          <Box sx={{ mt: 1 }}>
            <OperatorWalletResults wallets={wallets} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
