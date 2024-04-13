import { useState } from "react";
import "./App.css";
import { data } from "./EmployeeData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <div></div>
        <table className="table-auto">
          <thead>
            <tr>
              <td>Sr. No.</td>
              <td>ID</td>
              <td>FirstName</td>
              <td>LastName</td>
              <td>Age</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.age}</td>
                  <td>
                    <button className="btn btn-primary">Edit</button>&nbsp;
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
