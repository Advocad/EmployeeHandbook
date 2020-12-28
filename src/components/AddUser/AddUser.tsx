import React, { useState } from 'react';

import { Modal, Button } from 'antd';
import Form from './Form';

// import styles from './styles.module.scss';

type AddUserType = {
  name: string
}

const AddUser: React.FC<AddUserType> = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  return (
    <>
      <Button type="primary" onClick={showModal}>
        {props.name}
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form />
      </Modal>
    </>
  );
}

export default AddUser;
