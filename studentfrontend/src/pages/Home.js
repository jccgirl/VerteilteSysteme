import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


export default function Home() {
    const [student, setStudents] = useState([]);
    
    useEffect(()=> {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const result = await axios.get("http://localhost:8080/student/getAll");
        setStudents(result.data);
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
                        </tr>
                    ))}
                
                </tbody>
        </table>

        </div>
      
    </div>
  )
}
