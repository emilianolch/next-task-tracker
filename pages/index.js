import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";
import Head from "next/head";

export default function Home({ tasks }) {
  return (
    <>
      <Head>
        <title>Task Tracker</title>
      </Head>
      <AddTask />
      <Tasks />
    </>
  );
}
