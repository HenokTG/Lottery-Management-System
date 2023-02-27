import { useState } from "react";

import Head from "next/head";

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

      {modalKey && <CreateOperator setModalKey={setModalKey} />}
      {modalKey === false && (
        <OperatorListResults operators={operators} setModalKey={setModalKey} />
      )}
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
