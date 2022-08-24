import './Stats.scss';
import ChartComponent from '../ChartComponent/ChartComponent';
import React from 'react';
import { useAppSelector } from '../../hooks/hooks';

const Stats: React.FC = () => {

    const tasks = useAppSelector(state => state.main.tasks);
    const currentLanguage = useAppSelector(state => state.settings.currentLanguage);

    let tasksCount = 0;
    let completeTasksCount = 0;
    
    for (let i = 0; i < tasks.length; i++) {
        if (!tasks[i].check) {
            tasksCount++;
        } else {
            completeTasksCount++;
        }
    }

    return (
        <div className='stats'>
            <div>
                {currentLanguage === 'en' ? 'Current tasks' : 'Текущии задачи'} {tasksCount}
            </div>
            <div>
                {currentLanguage === 'en' ? 'Complete tasks' : 'Выполненные задачи'} {completeTasksCount}
            </div>
            <ChartComponent currentTasks={tasksCount} 
            completeTasks={completeTasksCount} 
            currentLanguage={currentLanguage}/>
        </div>
    )
}

export default Stats;