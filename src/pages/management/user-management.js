import { useState } from "react";

import Head from "next/head";

import { UserListResults } from "../../components/users/users-list-results";
import { CreateUser } from "../../components/users/create-user-form";
import { DashboardLayout } from "../../components/dashboard-layout";
import { users } from "../../__mocks__/management";

const Page = () => {
  const [modalKey, setModalKey] = useState(false);
  return (
    <>
      <Head>
        <title>User Managnment | Lottery Management System</title>
      </Head>

      {modalKey && <CreateUser setModalKey={setModalKey} />}
      {modalKey === false && <UserListResults users={users} setModalKey={setModalKey} />}
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
