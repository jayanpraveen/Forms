import React, { useState } from "react";
import axios from "axios";
import { Button, Modal, Form, Input, message, notification } from "antd";
const { TextArea } = Input;

const Details = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new form 📜:"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch(() => {
            message.warn("Enter the required fields!");
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          title: "Untitled Form",
          about: "",
        }}
      >
        <Form.Item
          name="title"
          label="Title:"
          rules={[
            {
              required: true,
              message: "Please enter the title!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="about" label="Description:">
          <TextArea autoSize />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default function CreateModal({ refresh }) {
  const [visible, setVisible] = useState(false);

  const onCreate = (data) => {
    const postData = async () => {
      await axios.post(`/form`, data).then(
        () => refresh({}),
        (err) => {
          notification.error({
            message: "Error",
            description: err.response.data.errors,
          });
        }
      );
    };
    postData();
    setVisible(false);
  };

  return (
    <>
      <span>
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          New Form
        </Button>
      </span>
      <>
        <Details
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
        />
      </>
    </>
  );
}
