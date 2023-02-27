import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { SettingsPersonalInfo } from '../components/settings/settings-personal-info';
import { SettingsPassword } from '../components/settings/settings-password';

const Page = () => (
  <>
    <Head>
      <title>Account Settings | Lottery Management System</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography sx={{ mb: 0 }} variant="h4">
          Account Settings
        </Typography>
        <Box sx={{ pt: 3 }}>
          <SettingsPersonalInfo />
        </Box>
        <Box sx={{ pt: 3 }}>
          <SettingsPassword />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
