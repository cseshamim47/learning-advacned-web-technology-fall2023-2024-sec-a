import { FC, useState } from "react"

type Props = {
  addStudent: (student: any)=>void
}

const AddStudent:FC<Props> = ({addStudent}) => {

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [cgpa, setCgpa] = useState(0.0);

  const onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    
    addStudent({name,id,cgpa})

    setName('')
    setId('')
    setCgpa(0.0)
  }

    return (
      <div style={{margin:20}}>
          <form onSubmit={onSubmit}>
              <input type="text" name="name" id="name" placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
              
              <br />
              <input type="text" name="id" placeholder="Enter your id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              />
              <br />
              <input type="number" name="cgpa" placeholder="Enter your cgpa"
              value={cgpa}
              onChange={(e) => setCgpa(parseFloat(e.target.value))}
              />
              <br />
              <input type="submit" value="Add" />
          </form>
      </div>
    )
  }
  export default AddStudent