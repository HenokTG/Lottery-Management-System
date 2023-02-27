import { useState } from "react";

import Head from "next/head";

import { RoleListResults } from "../../components/roles/roles-list-results";
import { CreateRole } from "../../components/roles/create-role-form";
import { DashboardLayout } from "../../components/dashboard-layout";
import { roles } from "../../__mocks__/management";

const Page = () => {
  const [modalKey, setModalKey] = useState(false);
  return (
    <>
      <Head>
        <title>Role Managnment | Lottery Management System</title>
      </Head>

      {modalKey && <CreateRole setModalKey={setModalKey} />}
      {modalKey === false && <RoleListResults roles={roles} setModalKey={setModalKey} />}
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
