  const [page, setPage] = useState(0);
  const PAGE_SIZE = 8;
  const { data } = useGetStudentsQuery({
    variables: {
      limit: PAGE_SIZE,
      offset: page * PAGE_SIZE,
    },
  });
  const hasPreviusPage = data?.students.pageInfo.hasPreviousPage;
  const hasNextPage = data?.students.pageInfo.hasNextPage;
  function setNextPage() {
    if (hasNextPage) {
      setPage(page + 1);
    }
  }

  function setPreviusPage() {
    if (hasPreviusPage) {
      setPage(page - 1);
    }
  }

          {data?.students.nodes.map((student) => {
            return (
              <CardStudent
                key={student.id}
                name={student.name}
                id={student.id}
                keyStudent={student.key}
                createdAt={student.createdAt}
              />
            );
          })}
