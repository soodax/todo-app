import './TasksList.scss';
import TaskItem from './../TaskItem/TaskItem';
import EmptyList from '../EmptyList/EmptyList';
import GreetingsBlock from '../GreetingsBlock/GreetingsBlock';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { ADD_TASK } from '../../redux/main-reducer';
import { SET_TASK } from '../../redux/main-reducer';

const Main: React.FC = () => {

    const currentNewTask = useAppSelector(state => state.main.currentNewTask);
    const tasks = useAppSelector(state => state.main.tasks);
    const currentLanguage = useAppSelector(state => state.settings.currentLanguage);
    const darkMode = useAppSelector(state => state.settings.darkMode);

    const dispatch = useAppDispatch();

    const onchangedCurrentTask = (e: React.FormEvent<HTMLInputElement>) => {
        let currentTask = e.currentTarget.value;
        
        dispatch(SET_TASK({currentTask}));
    }

    const onclickAddTask = () => {
        let date = new Date();
        let minutesBelowTen = `0${date.getMinutes()}`;
        let taskDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes() < 10 ? minutesBelowTen : date.getMinutes()}`;
        dispatch(ADD_TASK({taskDate}));
    }

    return (
        <div className='main'>
            <GreetingsBlock currentLanguage={currentLanguage}/>
            <div className={!darkMode 
                ? 'main__newTask' 
                : 'main__newTask main__newTask-dark'}>
                <input className={!darkMode 
                ? 'main__input' 
                : 'main__input main__input-dark'}
                    value={currentNewTask}
                    onChange={onchangedCurrentTask}
                    placeholder={currentLanguage === 'en' ? "Enter ToDo..." : 'Введите задачу'}
                    maxLength={32} />
                <div>
                    <IconButton className='main__button' onClick={onclickAddTask}>
                        <AddCircleIcon className='main__buttonIcon' color='primary' fontSize='large' />
                    </IconButton>
                </div>
            </div>
            <div className='main__row'>
                <div className='main__col'>
                    <h2>{currentLanguage === 'en' ? 'Tasks' : 'Задачи'}</h2>
                    {tasks.map((task, index) => {
                        if (!task.check) {
                            return <TaskItem key={index}
                                id={task.taskID}
                                task={task.taskText}
                                check={task.check}
                                taskDate={task.taskDate} 
                                darkMode={darkMode}/>
                        }
                    })}
                    <EmptyList tasksCount={tasks.length} currentLanguage={currentLanguage}/>
                </div>
                <div className='main__col'>
                    <h2>{currentLanguage === 'en' ? 'Complete tasks' : 'Выполненные задачи'}</h2>
                    {tasks.map((task, index) => {
                        if (task.check) {
                            return <TaskItem key={index}
                                id={task.taskID}
                                task={task.taskText}
                                check={task.check}
                                taskDate={task.taskDate} 
                                darkMode={darkMode}/>
                        }
                    })}
                    <EmptyList tasksCount={tasks.length} currentLanguage={currentLanguage}/>
                </div>
            </div>
        </div>
    )
}

export default Main;
