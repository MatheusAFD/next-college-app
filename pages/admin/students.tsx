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
