import './App.scss';
import TasksList from './components/TasksList/TasksList';
import './nullstyle.scss';
import Menu from './components/Menu/Menu';
import Stats from './components/Stats/Stats';
import Settings from './components/Settings/Settings';
import { Route, Routes, Navigate } from "react-router-dom";
import React from 'react';
import { useAppSelector } from './hooks/hooks';

const App: React.FC = () => {

  const currentBG =  useAppSelector(state => state.settings.currentBG);
  const currentLanguage =  useAppSelector(state => state.settings.currentLanguage);
  const darkMode =  useAppSelector(state => state.settings.darkMode);

  return (
    <div className="app">
      <div className={`wallpaper wallpaper${currentBG}`}></div>
      <div className='app__row'>
        <Menu currentLanguage={currentLanguage} darkMode={darkMode}/>
        <Routes>
          <Route path='/home' element={<TasksList />}></Route>
          <Route path='/stats' element={<Stats />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
          <Route path='*' element={<Navigate to="/home" replace />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
