import { createContext, useState, useEffect, Children } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TaskContext = createContext();

export const TaskProvider = () =>{
    const [task, setTasks] = useState([])

    useEffect(() =>{
        const loadTasks = async () => {
            const storedTasks = await AsyncStorage.getItem('@tasks')
            if(storedTasks) setTask(storedTasks)
        }
    loadTasks
    }, [])

    const AddTask = async(task) => {
        const newTask = [...tasks, task]
        setTasks(newTasks)
        await AsyncStorage.setItem('@taskas', JSON.stringify(newTasks))
    }

    const removeTask = async (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id)
        setTasks(updatedTasks)
        await AsyncStorage.getItem('@tasks', JSON.stringify(updatedTasks))
    }

    return(

        <TaskContext.Provider value={tasks, addTask, removeTask}>
        {children}
    </TaskContext.Provider>
    )
}