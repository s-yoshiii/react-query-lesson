import { FC } from 'react'
import { useClassicalFetch } from '../hooks/useClassicalFetch'
import { useNavigate } from 'react-router-dom'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'
import { useHistory } from 'react-router-dom'
export const ClassicalFetchA: FC = () => {
  const history = useHistory()
  const { isLoading, isError, tasks } = useClassicalFetch()
  console.log('rendered ClassicalFetchA')
  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-center font-bold mb-3">ClassicalFetchA</p>
      {isError && <div>Error</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        tasks?.map((task) => <p key={task.id}>{task.title}</p>)
      )}
      <ChevronDoubleRightIcon
        onClick={() => history.push('/fetch-b')}
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">fetch B</p>
    </div>
  )
}
