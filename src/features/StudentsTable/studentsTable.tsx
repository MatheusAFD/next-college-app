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
