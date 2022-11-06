import Tasks from "../components/Tasks";
import Head from "next/head";

export default function Home({ tasks }) {
  return (
    <>
      <Head>
        <title>Task Tracker</title>
      </Head>
      <Tasks />
    </>
  );
}
