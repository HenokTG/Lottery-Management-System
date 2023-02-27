import { useState } from "react";

import Head from "next/head";

import { LicenceCatagoryList } from "../components/licence-catagory/licence-catagories-list-results";
import { CreateLicenceCatagory } from "../components/licence-catagory/create-licence-catagory-form";
import { DashboardLayout } from "../components/dashboard-layout";
import { licenceCatagories } from "../__mocks__/licence-catagory";

const Page = () => {
  const [modalKey, setModalKey] = useState(false);
  return (
    <>
      <Head>
        <title>Licence Catagory | Lottery Management System</title>
      </Head>

      {modalKey && <CreateLicenceCatagory setModalKey={setModalKey} />}
      {modalKey === false && <LicenceCatagoryList licenceCatagories={licenceCatagories} setModalKey={setModalKey} />}
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
