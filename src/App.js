import { useState } from "react";

function App() {

  const [id,setId] = useState("");
  const [name,setName] = useState("");
  const [role,setRole] = useState("");
  const [employee,setEmployee] = useState([{id:1,name:"DHINAKAR",role:"DEVELOPER"}])


  //ADD EMPLOYEE

  const addEmployee = ()=>{
    setEmployee([...employee,{id:id,name:name,role:role}])
    setId('')
    setName('')
    setRole('')
  }


  //DELETE ALL

  const DeleteAll  =()=>{
    setEmployee([]);
  }


  //DELETE INDIVIAL ITEM

  const del = (id)=>{

   const newEmp = employee.filter(e=>e.id!==id);
   setEmployee(newEmp)
  }
  return (
    <div className="App">
      <h1>EMPLOYEE MANAGEMENT</h1>
      <div className="form">
        <input required type="number" placeholder="ENTER ID..." value={id} onChange={e=>setId(e.target.value)}/>
        <input required type="text" placeholder="ENTER NAME" value={name} onChange={e=>setName(e.target.value)}/>
        <input required type="text" placeholder="ENTER ROLE" value={role} onChange={e=>setRole(e.target.value)}/>
        <button onClick={addEmployee}>ADD</button>
        <button onClick={DeleteAll}>DELETE ALL</button>

      </div>
      {employee.map((emp,i)=>{
        return(
          <div key={i}>
             {emp.id} {emp.name} {emp.role}  <button onClick={()=>del(emp.id)}>DELETE</button>
          </div>
        )
    
    })}
    </div>

    

   
  );
}

export default App;
