import { FC } from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { increment, selectCount } from '../slices/counterSlice'

const RTKitA: FC = () => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  console.log('rendered RTKit')
  return <div></div>
}

export default RTKitA
