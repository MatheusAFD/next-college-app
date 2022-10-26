import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <h1>Home</h1>
      <Link href="/dashboard/admin">Students</Link>
    </>
  );
};

export default Home;
