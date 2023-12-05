
type Props = {
  student: any,
  deleteStudent: (student: any)=>void
}


const Student = ({student, deleteStudent}: Props) => {
  return (
    <>
        <tr>
            <td> {student.name} </td>
            <td> {student.id} </td>
            <td> {student.cgpa} </td>
            <td> <button onClick={()=>deleteStudent(student.id)}>Delete</button> </td>
            <td> <button onClick={()=>{alert("update working")}}>Update</button> </td>

        </tr>
    </>
  )
}
export default Student