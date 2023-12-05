'use client'
import InputForm from './components/AddStudent'
import { useEffect, useState } from 'react';
import Students from './components/Students';
import AddStudent from './components/AddStudent';

const HomePage = () => {
  // const [isClient, setIsClient] = useState(false)
 
  // useEffect(() => {
  //   setIsClient(true)
  // }, [])
  
  const [students, setStudent] = useState([
    {
      "name": "shamim",
      "id": "123123",
      "cgpa": 3.5
    },
    {
      "name": "shakil asdf",
      "id": "123",
      "cgpa": 1231
    },
  ]);

  let addStudent = (student: any) => {
    setStudent([...students, student]);
  };

  let deleteStudent = (id: any) => {
    setStudent(students.filter((student) => student.id !== id));
  };

  return (   
    <div>
        <AddStudent addStudent={addStudent} />
        <Students students={students} deleteStudent={deleteStudent} />
    </div>
  )
}
export default HomePage