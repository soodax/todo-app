import './ChartComponent.scss';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import React from 'react';

interface ChartComponentProps {
    currentTasks: number
    completeTasks: number
    currentLanguage: string
}

const ChartComponent: React.FC<ChartComponentProps> = ({
    currentTasks, 
    completeTasks,
    currentLanguage
}) => {

    if (!currentTasks && !completeTasks) {
        return <div>{currentLanguage === 'en' 
        ? 'Nothing yet...' 
        : 'Пока ничего...'}</div>
    }

    let label1 = currentLanguage === 'en' ? 'Current tasks' : 'Текущии задачи';
    let label2 = currentLanguage === 'en' ? 'Complete tasks' : 'Выполненные задачи';

    const data = {
        labels: [
            label1, label2
        ],
        datasets: [{
            data: [currentTasks, completeTasks],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 2,
        }],
    }

    const options = {
        plugins: {
            legend: {
              labels: {
                color: 'white'
              }
            }
          }
          
        }
    return <div className='chart'><Chart type='pie' data={data} options={options}/></div>
    
     
}

export default ChartComponent;