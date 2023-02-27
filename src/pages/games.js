import { useState } from "react";

import Head from "next/head";

import { GameListResults } from "../components/games/games-list-results";
import { CreateGame } from "../components/games/create-game-form";
import { DashboardLayout } from "../components/dashboard-layout";
import { games } from "../__mocks__/games";

const Page = () => {
  const [modalKey, setModalKey] = useState(false);
  return (
    <>
      <Head>
        <title>Games | Lottery Management System</title>
      </Head>

      {modalKey && <CreateGame setModalKey={setModalKey} />}
      {modalKey === false && <GameListResults games={games} setModalKey={setModalKey} />}
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
