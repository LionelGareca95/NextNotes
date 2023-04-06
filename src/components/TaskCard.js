import React from 'react'
import { useRouter } from 'next/navigation'

export const TaskCard = ({task}) => {

    const router = useRouter()
  return (
    <div 
    style={{ background: "#202020", color: "white"}}>
        <h1>{task.title} </h1>
        <button>Delete</button>
        <button onClick={() => router.push(`/edit/${task.id}`)}>Edit</button>
        <p> {task.description}</p>
    </div>
  )
}
