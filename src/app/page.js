"use client"
import React from 'react'
import { useTasks } from '@/context/TasksContext'
import { TaskCard } from '@/components/TaskCard'

const page = () => {

  const {tasks} = useTasks();
  console.log(tasks)

  return (
    <div>
      {tasks.map(task => (
          <TaskCard task={task}key={task.id} />
      ))}
    </div>
  )
}

export default page