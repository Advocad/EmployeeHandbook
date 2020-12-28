import React from 'react';
import {
  Form,
  Input,
  Radio,
  Select,
  DatePicker,
  Switch,
} from 'antd';


const FormAddUser = () => {
  
  return (
    <>
      <Form
        layout="horizontal"
      >
        <Form.Item label="ФИО">
          <Input />
        </Form.Item>
        <Form.Item label="Должность">
          <Select>
            <Select.Option value="demo">разработчик</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Дата рождения">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Пол">
          <Radio.Group>
            <Radio value={'M'}>М</Radio>
            <Radio value={'W'}>Ж</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Уволен">
          <Switch />
        </Form.Item>
      </Form>
    </>
  );
};

export default FormAddUser;