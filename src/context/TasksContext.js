'use client'
import { createContext, useContext } from 'react'

export const TaskContext = createContext()

export const useTasks = () => {
	const context = useContext(TaskContext)
	if (!context) throw new Error('use Task must used within a provider')
	return context
}

export const TaskProvider = ({ children }) => {
	const tasks = [
        {
        id: 1,
        title: "my first task",
        description: "some description"
    },
        {
        id: 2,
        title: "my first task",
        description: "some description"
    },
        {
        id: 3,
        title: "my first task",
        description: "some description"
    }
]
	return <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
}
