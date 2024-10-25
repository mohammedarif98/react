import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


const fetchStudents = async()=>{
    const response = await axios.get('http://localhost:3000/students');
    return response.data;
}

const Student = () => {

    const { data,error,isError,isLoading } =  useQuery({
        queryKey:["students"],
        queryFunc:fetchStudents
    });

    if(isLoading) return ( <div>Loading ...</div> )
    if(error) return ( <div>Error : {error.message}</div> )

  return (
    <div>
        <h1>Student list : </h1>
        <ul>
            {data && data.map((student)=>{
                return(
                    <l1 key={student.id} >{student.name} ---- {student.email}</l1>
                )
            })}
        </ul>
    </div>
  )
}


export default Student