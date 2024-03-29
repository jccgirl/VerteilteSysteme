import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'



export default function Home() {
    const [student, setStudents] = useState([]);
    const { id } = useParams();
    
    useEffect(()=> {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const result = await axios.get("http://localhost:8080/student/getAll");
        setStudents(result.data);
    };

    const deleteStudent = async (id) => {
        await axios.delete("http://localhost:8080/student/${id}");
        loadStudents();
      };

  return (
    <div className='container'>
        <div className='py-4'>
            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((student, index) => (
                        <tr>
                            <th scope="row" key={index}> 
                                {index+1} 
                            </th>
                            <td>{student.name}</td>
                            <td>{student.address}</td>
                            <td>
                                <button className='btn btn-primary mx-2'>View</button>
                                <button className='btn btn-outline-primary mx-2'>Edit</button>
                                <button className="btn btn-danger mx-2" onClick={() => deleteStudent(student.id)} >Delete </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
        </table>

        </div>
      
    </div>
  )
}
