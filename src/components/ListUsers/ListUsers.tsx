import React from 'react';

import { Button } from 'antd';
import { Table } from 'antd';

import styles from './styles.module.scss';
import AddUser from '../AddUser';

const ListUser = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <Button type="primary">Сохранить изменения</Button>
        <Button type="primary">Обновить данные</Button>
        <AddUser name={'Добавить нового сотрудника'}/>
      </div>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
}

export default ListUser;
