import Student from "./Student";

type Props = {
    students: any,
    deleteStudent: (student: any)=>void
  }

const Students = ({ students, deleteStudent }: Props) => {
  return (
    <>
      <table border={1} cellPadding={5}>
        <tbody>
            <tr>
            <th>Name</th>
            <th>ID</th>
            <th>CGPA</th>
            <th>Delete</th>
            <th>Update</th>
            </tr>
            {students.map((student: any) => (<Student student={student} key={student.id} deleteStudent={deleteStudent} />))}
        </tbody>
      </table>
    </>
  );
};
export default Students;
