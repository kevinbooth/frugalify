import React from 'react';
import './App.scss';

// Components
import Navigation from './components/Navigation';
import Calendar from './components/Calendar';
import Category from './components/Category';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <Calendar />
        <Category type={'Paycheck'} />
        <Category type={'Giving'} />
      </div>
    </div>
  );
}

export default App;
