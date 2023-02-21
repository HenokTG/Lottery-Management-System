import { useState } from "react";

import Head from "next/head";
import {
  Container,
  Box,
  Button,
  Typography,
} from "@mui/material";

import { Up as Up } from "../icons/up";
import { Down as Down } from "../icons/down";
import { OperatorListResults } from "../components/operators/operators-list-results";
import { CreateOperator } from "../components/operators/create-operator-form";
import { DashboardLayout } from "../components/dashboard-layout";
import { operators } from "../__mocks__/operators";

const Page = () => {
  const [modalKey, setModalKey] = useState(false);
  return (
    <>
      <Head>
        <title>Operators | Lottery Management System</title>
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
            <Typography sx={{ m: 1 }} variant="h4">
              Operators
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Button
                onClick={() => setModalKey(!modalKey)}
                endIcon={modalKey ? <Up fontSize="small" /> : <Down fontSize="small" />}
                variant="contained"
                sx={{
                  p: 2,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: modalKey ? "lightslategrey" : "#aaa",
                  color: "black",
                  "&:hover": {
                    backgroundColor: modalKey === false ? "lightslategrey" : "#aaa",
                    color: "#fff",
                  },
                  mb: 1,
                }}
              >
                Create Operator
              </Button>
              {modalKey && (
                <Box sx={{ mt: 1 }}>
                  <CreateOperator />
                </Box>
              )}
              <Button
                onClick={() => setModalKey(false)}
                endIcon={modalKey === false ? <Up fontSize="small" /> : <Down fontSize="small" />}
                variant="contained"
                sx={{
                  p: 2,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: modalKey === false ? "lightslategrey" : "#aaa",
                  color: "black",
                  "&:hover": {
                    "&:hover": {
                      backgroundColor: "#aaa",
                      color: "#fff",
                    },
                  },
                }}
              >
                Manage Operators
              </Button>
            </Box>
          </Box>
          {modalKey === false && (
            <Box sx={{ mt: 1 }}>
              <OperatorListResults operators={operators} />
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
