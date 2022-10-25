import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  useDeleteOneStudentMutation,
  useGetStudentsQuery,
} from "../../src/graphql/generated";

const Home: NextPage = () => {
  const { data, refetch } = useGetStudentsQuery();

  const [deleteOneStudent] = useDeleteOneStudentMutation();

  async function deleteOne(id: string) {
    await deleteOneStudent({
      variables: {
        input: {
          id,
        },
      },
    });

    refetch();
  }

  const router = useRouter();
  return (
    <>
      <h1>Students</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h2 onClick={() => router.push("/")}>Home</h2>

      <ul>
        {data?.students.nodes.map((student) => {
          return (
            <li
              onClick={() => {
                deleteOne(student.id);
              }}
              key={student.id}
            >
              {student.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
