import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <h1>Home</h1>
      <Link href="/admin/students">
        <a>Students</a>
      </Link>
      <h2 onClick={() => router.push("/admin/students")}>Students</h2>
    </>
  );
};

export default Home;
