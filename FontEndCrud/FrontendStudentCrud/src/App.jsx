import { useEffect, useState } from "react"
import axios from "axios"


function App() {

  const[students,setStudents] = useState([])
  const [form,setForm] = useState({id:"",name:"",course:""})
  const [editId,setEditId] = useState(null)

  useEffect(()=>{
    loadStudents()
  },[]);

  const loadStudents = async() => {
    const res = await axios.get("http://localhost:8080/students");
    setStudents(res.data);
    console.log(res.data)
  }

  const handleChange = (e) => {
    setForm({...form , [e.target.name]:e.target.value })
    console.log("form updated")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(editId!=null){
      await axios.put(`http://localhost:8080/students/${editId}`,form)
    }else {
      await axios.post("http://localhost:8080/students",form) 
    }
    setForm({id:"",name:"",course:""})
    loadStudents()
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/students/${id}`)
    loadStudents()
  }

  const handleUpdate =  (stu) => {
    setForm(stu);
    setEditId(stu.id);
  }

  return (
    <div>
      <h2>Student Crud</h2>

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type='text'   name="name"   value={form.name}   placeholder="Enter Name"/>
        <input onChange={handleChange} type='number' name="id"     value={form.id}     placeholder="Enter Id"/>
        <input onChange={handleChange} type='text'   name="course" value={form.course} placeholder="Enter Course"/>  

        <button  type='submit'>Submit</button>   
      </form>

      <div>{students.map((stu) => (
            <div key={stu.id}>
              {stu.id}
              {stu.name}
              {stu.course}
              <button onClick={() => handleDelete(stu.id)}>Delete</button>
              <button onClick={() => handleUpdate(stu)}>Edit</button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default App
