
import Head from "next/head";
import { Container, Box, Typography } from "@mui/material";

import { TicketInfoResults } from "../../components/report/ticket-info";
import { DashboardLayout } from "../../components/dashboard-layout";
import { tickets } from "../../__mocks__/report";

const Page = () => {
  return (
    <>
      <Head>
        <title>Ticket Info Report | Lottery Management System</title>
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
              Ticket Info Report
            </Typography>
          </Box>

          <Box sx={{ mt: 1 }}>
            <TicketInfoResults tickets={tickets} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
