import { useState, useEffect } from 'react'
import { useStateContext } from '../context/StateProvider'
export const useClassicalFetch = () => {
  const { tasks, setTasks } = useStateContext()
  return <div>useClassicalFetch</div>
}
