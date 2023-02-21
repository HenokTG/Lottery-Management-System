
import Head from "next/head";
import { Container, Box, Typography } from "@mui/material";

import { WinTicketResults } from "../../components/report/winning-ticket";
import { DashboardLayout } from "../../components/dashboard-layout";
import { winTickets } from "../../__mocks__/report";

const Page = () => {
  return (
    <>
      <Head>
        <title>Winning Ticket Report | Lottery Management System</title>
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
              Winning Ticket Report
            </Typography>
          </Box>

          <Box sx={{ mt: 1 }}>
            <WinTicketResults winTickets={winTickets} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
