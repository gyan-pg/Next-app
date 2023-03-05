import React from 'react'
import { Spinner } from './Spinner'
import { TaskItem } from './TaskItem'
import { useQueryTasks } from '../hooks/useQueryTasks'

export const TaskList: React.FC = () => {
    const { data: tasks, status } = useQueryTasks()
    if (status === 'loading') return <Spinner />
    if (status === 'error') return <p>{'Error'}</p>
    console.log('task List', tasks)
    return (
        <ul className="my-2">
            {tasks?.map((task) => (
                <TaskItem key={task.id} id={task.id} title={task.title} />
            ))}
        </ul>
    )
}
