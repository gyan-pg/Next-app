import React from 'react'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
import { Task } from '../types/types'
import useStore from '../store'
import { useMutateTask } from '../hooks/useMutateTask'

export const TaskItem: React.FC<Omit<Task, 'created_at' | 'user_id'>> = ({
    id,
    title,
}) => {
    const update = useStore((state) => state.updateEditedTask)
    const { deleteTaskMutation } = useMutateTask()
    return (
        <li className="my-3 text-lg font-extrabold">
            <span>{title}</span>
            <div className="float-right ml-20 flex">
                <PencilIcon
                    className="mx-1 h-5 w-5 cursor-pointer text-blue-500"
                    onClick={() => {
                        update({
                            id,
                            title,
                        })
                    }}
                />
                <TrashIcon
                    className="h-5 w-5 cursor-pointer text-blue-500"
                    onClick={() => {
                        deleteTaskMutation.mutate(id)
                    }}
                />
            </div>
        </li>
    )
}
