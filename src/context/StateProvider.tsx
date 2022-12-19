import { useContext, useState, createContext, FC } from 'react'
import { Task } from '../types/types'
interface StateContextType {
  tasks: Task[] | null
  dark: boolean
  setTasks: React.Dispatch<React.SetStateAction<Task[] | null>>
  setDark: React.Dispatch<React.SetStateAction<boolean>>
}

const SteteContext = createContext({} as StateContextType)
export const StateProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[] | null>(null)
  const [dark, setDark] = useState(false)
  return (
    <SteteContext.Provider value={{ tasks, setTasks, dark, setDark }}>
      {children}
    </SteteContext.Provider>
  )
}
export const useStateContext = (): StateContextType => useContext(SteteContext)
