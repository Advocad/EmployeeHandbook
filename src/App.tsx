import React from 'react';

import CardUser from './components/CardUser';
import ListUsers from './components/ListUsers';
import { Button } from 'antd';

import style from './style.module.scss';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className={style.container}>
      <Button type="primary">Button</Button>
     <ListUsers />
     <CardUser />
    </div>
  );
}

export default App;
