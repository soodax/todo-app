import './EmptyList.scss';
import React from 'react';

interface EmptyList {
    tasksCount: number
    currentLanguage: string
}

const EmptyList: React.FC<EmptyList> = ({
    tasksCount,
    currentLanguage
}) => {

    return (<div className='emptyList'>
        {tasksCount === 0
            ? currentLanguage === 'en' ? 'Nothing yet...' : 'Пока ничего...'
            : null}
    </div>)
}

export default EmptyList;