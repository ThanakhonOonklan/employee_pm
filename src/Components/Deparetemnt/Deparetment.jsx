import React, { useEffect, useState } from "react";

function Deparetment() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost/employee_pm/src/api/Department.php")
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d) => setData(Array.isArray(d) ? d : []))
      .catch(() => setData([]));
  }, []);

  if (data === null) return ;

  return (
    <table>
      <thead>
        <tr>
          <th>DepartID</th>
          <th>DepartName</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((dept) => (
            <tr key={dept.DepartID}>
              <td>{dept.DepartID}</td>
              <td>{dept.DepartName}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={2}>ไม่มี</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Deparetment;
