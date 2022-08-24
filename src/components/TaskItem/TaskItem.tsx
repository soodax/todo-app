import React from 'react';
import './TaskItem.scss';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { DELETE_TASK, CHECK_TASK } from '../../redux/main-reducer';
import { useAppDispatch } from '../../hooks/hooks';

interface TaskItemProps {
    task: string
    id: number
    check: boolean
    taskDate: string
    darkMode: boolean
}

const TaskItem: React.FC<TaskItemProps> = ({
    task,
    id,
    check,
    taskDate,
    darkMode
}) => {

    const dispatch = useAppDispatch();

    const onclickDeleteTask = () => {
        dispatch(DELETE_TASK({id}));
    }

    const onclickCheckTask = () => {
        dispatch(CHECK_TASK({id}));
    }

    return (
        <div className={!darkMode ? 'taskItem' : 'taskItem taskItem-dark'}>
            <div className='taskItem__row'>
                <span className={!check ? '' : 'taskItem__checked'}>
                    {task}
                </span>
                {!check
                    ? <IconButton onClick={onclickCheckTask}>
                        <CheckCircleIcon color='success' fontSize='large' />
                    </IconButton>
                    : <IconButton onClick={onclickCheckTask}>
                        <ChangeCircleIcon color='action' fontSize='large' />
                    </IconButton>}

                <IconButton onClick={onclickDeleteTask}>
                    <RemoveCircleIcon color='error' fontSize='large' />
                </IconButton>
            </div>
            <div className='taskItem__date'>
                {taskDate}
            </div>
        </div>
    )
}

export default TaskItem;