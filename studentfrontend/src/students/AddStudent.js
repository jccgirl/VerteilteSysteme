import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"


export default function AddStudent() {

    let navigate = useNavigate();

    const [student, setStudents] = useState({
      name: "",
      address: "",
    });
  
    const { name, studentname, address } = student;
  
    const onInputChange = (e) => {
      setStudents({ ...student, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8080/student/add", student);
      navigate("/");
    };
  


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Student</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label"> Name</label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label"> Address</label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary"> Submit </button>
            <Link className="btn btn-outline-danger mx-2" to="/"> Cancel </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
