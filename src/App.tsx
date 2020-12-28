import React from 'react';

import CardUser from './components/CardUser';
import ListUsers from './components/ListUsers';

import style from './style.module.scss';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className={style.container}>
      
     <ListUsers />
     <CardUser />
    </div>
  );
}

export default App;
