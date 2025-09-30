import React, {useEffect , useState} from 'react'

function Employee() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost/employee_pm/src/api/Employee.php")
    .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
    .then((d) => setData(Array.isArray(d) ? d : []))
    .catch(() => setData([]));
  },[]);

  if (data === null) return ;

  return (
    
    <table>
      <thead>
        <tr>
          <th>empID</th>
          <th>empname</th>
          <th>DepartID</th>
          <th>PosID</th>
        </tr>
      </thead>
      <tbody>
      {data.length > 0 ? (
          data.map((emp) => (
            <tr key={emp.empID}>
              <td>{emp.empID}</td>
              <td>{emp.empname}</td>
              <td>{emp.DepartID}</td>
              <td>{emp.PosID}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={2}>ไม่มี</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Employee