import AdminTemplate from "../../src/atomic/template/admin/adminTemplate";
import Background from "../../src/atomic/template/background/background";
import StudentsHome from "../../src/features/StudentsHome/studentsHome";

export default function Admin() {
  return (
    <Background>
      <AdminTemplate>
        <StudentsHome />
      </AdminTemplate>
    </Background>
  );
}
