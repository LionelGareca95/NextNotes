"use client";
import { useTasks } from "@/context/TasksContext";

const page = () => {

    const values = useTasks()
    console.log(values)

  return (
    <div>
        about page
    </div>
  )
}

export default page